import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const toolsDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolsDirectory, '..');
const domain = fs.readFileSync(path.join(root, 'CNAME'), 'utf8').trim();
const siteUrl = `https://${domain}`;
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html')).sort();
const publicFiles = htmlFiles.filter((file) => file !== '404.html');
const errors = [];
const titles = new Map();
const descriptions = new Map();

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

function plain(value) {
  return String(value || '').replace(/<[^>]*>/g, ' ').replace(/&amp;/gi, '&').replace(/\s+/g, ' ').trim();
}

function attribute(tag, name) {
  return new RegExp(`\\b${name}=["']([^"']*)["']`, 'i').exec(tag || '')?.[1] || '';
}

function meta(source, key, value) {
  const tag = (source.match(/<meta\b[^>]*>/gi) || []).find((entry) => attribute(entry, key).toLowerCase() === value.toLowerCase());
  return tag ? attribute(tag, 'content') : '';
}

function expectedCanonical(file) {
  return file === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${file}`;
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const title = plain(/<title>([\s\S]*?)<\/title>/i.exec(source)?.[1]);
  const description = meta(source, 'name', 'description');
  const h1Count = (source.match(/<h1\b/gi) || []).length;
  if (!title) report(file, 'missing title');
  if (!description) report(file, 'missing description');
  if (h1Count !== 1) report(file, `expected one h1, found ${h1Count}`);
  if (!/<link\b[^>]*rel=["']manifest["']/i.test(source)) report(file, 'missing web manifest');

  for (const script of source.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch {
      report(file, 'contains invalid JSON-LD');
    }
  }

  if (file === '404.html') {
    if (!/name=["']robots["'][^>]*content=["']noindex/i.test(source)) report(file, 'must remain noindex');
    continue;
  }

  const canonical = attribute(source.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0], 'href');
  if (canonical !== expectedCanonical(file)) report(file, `canonical mismatch: ${canonical}`);
  if (meta(source, 'property', 'og:url') !== canonical) report(file, 'Open Graph URL does not match canonical');
  if (meta(source, 'name', 'twitter:card') !== 'summary_large_image') report(file, 'Twitter card is not summary_large_image');
  if (meta(source, 'property', 'og:image:width') !== '1200' || meta(source, 'property', 'og:image:height') !== '630') report(file, 'social image dimensions are not declared as 1200x630');
  if (!source.includes('data-seo-enhanced')) report(file, 'missing generated SEO schema');
  if (file !== 'index.html' && !source.includes('BreadcrumbList')) report(file, 'missing BreadcrumbList schema');

  const socialUrl = meta(source, 'property', 'og:image');
  const socialPath = socialUrl.startsWith(`${siteUrl}/`) ? socialUrl.slice(siteUrl.length + 1) : '';
  if (!socialPath || !fs.existsSync(path.join(root, socialPath))) {
    report(file, `missing social image ${socialUrl}`);
  } else {
    const metadata = await sharp(path.join(root, socialPath)).metadata();
    if (metadata.width !== 1200 || metadata.height !== 630) report(file, `social image is ${metadata.width}x${metadata.height}`);
  }

  titles.set(title, [...(titles.get(title) || []), file]);
  descriptions.set(description, [...(descriptions.get(description) || []), file]);
}

for (const [title, files] of titles) if (files.length > 1) report(files.join(', '), `duplicate title: ${title}`);
for (const [description, files] of descriptions) if (files.length > 1) report(files.join(', '), `duplicate description: ${description}`);

const sitemapPath = path.join(root, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  report('sitemap.xml', 'missing sitemap');
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const pageUrls = urls.filter((url) => !url.includes('/assets/'));
  const expected = new Set(publicFiles.map(expectedCanonical));
  const actual = new Set(pageUrls);
  for (const url of expected) if (!actual.has(url)) report('sitemap.xml', `missing ${url}`);
  for (const url of actual) if (!expected.has(url)) report('sitemap.xml', `unexpected ${url}`);
  if (!sitemap.includes('xmlns:image=')) report('sitemap.xml', 'missing image sitemap namespace');
}

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) report('robots.txt', 'missing canonical sitemap declaration');
if (!fs.existsSync(path.join(root, 'feed.xml'))) report('feed.xml', 'missing RSS feed');

if (errors.length > 0) {
  process.stderr.write(`${errors.join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`SEO audit passed for ${publicFiles.length} public pages on ${siteUrl}.\n`);
}
