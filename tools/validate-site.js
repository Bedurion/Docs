const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html')).sort();
const publicHost = fs.readFileSync(path.join(root, 'CNAME'), 'utf8').trim();
const publicBaseUrl = `https://${publicHost}/`;
const errors = [];
const warnings = [];
const pageTitles = new Map();
const docsGuidePath = path.join(root, 'docs-guide.js');
const docsGuideSource = fs.existsSync(docsGuidePath) ? fs.readFileSync(docsGuidePath, 'utf8') : '';

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'site.webmanifest'), 'utf8'));
if (manifest.background_color !== '#090d19') report('site.webmanifest', 'background color must match the shared canvas edge');
if (manifest.theme_color !== '#090d19') report('site.webmanifest', 'theme color must match the shared canvas edge');
const requiredManifestIcons = new Map([
  ['assets/brand/favicon-dark.svg', 'any'],
  ['assets/brand/pwa-icon-192x192.png', '192x192'],
  ['assets/brand/pwa-icon-512x512.png', '512x512']
]);
for (const [src, sizes] of requiredManifestIcons) {
  const icon = manifest.icons?.find((entry) => entry.src === src && entry.sizes === sizes);
  if (!icon) report('site.webmanifest', `missing application icon ${src} (${sizes})`);
}

function stripFragment(value) {
  return value.split('#')[0].split('?')[0];
}

function isPlainObject(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function hasExactKeys(value, keys) {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const title = source.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() || '';
  const description = source.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1]?.trim() || '';

  if (!title) report(file, 'missing title');
  if (!/<meta\s+name="viewport"/i.test(source)) report(file, 'missing viewport');
  if (!/<meta\s+name="viewport"\s+content="[^"]*viewport-fit=cover[^"]*"/i.test(source)) report(file, 'viewport must cover mobile safe areas');
  if (!/<meta\s+name="theme-color"\s+content="#090d19"/i.test(source)) report(file, 'missing shared mobile browser color');
  if (!/<link\b[^>]*rel="icon"[^>]*type="image\/svg\+xml"[^>]*href="assets\/brand\/favicon-dark\.svg"/i.test(source)) report(file, 'missing SVG favicon');
  if (!/<link\b[^>]*rel="icon"[^>]*sizes="32x32"[^>]*href="assets\/brand\/favicon-32x32\.png"/i.test(source)) report(file, 'missing 32px favicon fallback');
  if (!/<link\b[^>]*rel="icon"[^>]*sizes="16x16"[^>]*href="assets\/brand\/favicon-16x16\.png"/i.test(source)) report(file, 'missing 16px favicon fallback');
  if (!/<link\b[^>]*rel="apple-touch-icon"[^>]*sizes="180x180"[^>]*href="assets\/brand\/apple-touch-icon\.png"/i.test(source)) report(file, 'missing Apple touch icon');
  if (!description) report(file, 'missing meta description');
  if (!/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/i.test(source)) report(file, 'missing h1');
  if (!/data-nav-links/.test(source)) report(file, 'missing shared navigation mount');

  if (file === 'commands.html' || file === 'docs.html' || file.startsWith('docs-')) {
    const guideIndex = source.indexOf('docs-guide.js');
    const sharedScriptIndex = source.indexOf('script.js');
    if (guideIndex === -1) report(file, 'missing shared documentation guide');
    if (guideIndex > sharedScriptIndex && sharedScriptIndex !== -1) report(file, 'documentation guide must load before the shared script');
    if (file.startsWith('docs') && !docsGuideSource.includes(`'${file}': {`)) report('docs-guide.js', `missing page introduction for ${file}`);
  }

  if (file !== '404.html') {
    const expectedUrl = file === 'index.html' ? publicBaseUrl : `${publicBaseUrl}${file}`;
    if (title.length < 25 || title.length > 65) report(file, `SEO title length ${title.length} is outside 25-65 characters`);
    if (description.length < 110 || description.length > 165) report(file, `meta description length ${description.length} is outside 110-165 characters`);
    if (!source.includes(`<link rel="canonical" href="${expectedUrl}">`)) report(file, `missing canonical URL ${expectedUrl}`);
    if (!/<meta\s+name="robots"\s+content="index,follow,[^"]+"/i.test(source)) report(file, 'missing indexable robots policy');
    if (!source.includes(`<meta property="og:url" content="${expectedUrl}">`)) report(file, 'missing matching Open Graph URL');
    if (!/<meta\s+property="og:title"\s+content="[^"]+"/i.test(source)) report(file, 'missing Open Graph title');
    if (!/<meta\s+property="og:description"\s+content="[^"]+"/i.test(source)) report(file, 'missing Open Graph description');
    if (!/<meta\s+property="og:image"\s+content="https:\/\/[^\"]+"/i.test(source)) report(file, 'missing absolute Open Graph image');
    if (!/<meta\s+name="twitter:card"\s+content="[^"]+"/i.test(source)) report(file, 'missing Twitter card metadata');

    const structuredData = source.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
    if (!structuredData) {
      report(file, 'missing JSON-LD structured data');
    } else {
      try {
        const parsedStructuredData = JSON.parse(structuredData);
        if (file === 'index.html') {
          const graph = Array.isArray(parsedStructuredData['@graph']) ? parsedStructuredData['@graph'] : [];
          const softwareApplication = graph.find((entry) => entry['@type'] === 'SoftwareApplication');
          if (!softwareApplication) report(file, 'missing SoftwareApplication structured data');
          if (softwareApplication && softwareApplication.offers?.price !== '0') report(file, 'SoftwareApplication must expose its free offer');
          if (softwareApplication && softwareApplication.offers?.priceCurrency !== 'USD') report(file, 'SoftwareApplication offer must declare USD');
          if (softwareApplication && !softwareApplication.installUrl) report(file, 'SoftwareApplication must expose its install URL');
          if (softwareApplication && softwareApplication.runtimePlatform !== 'Discord') report(file, 'SoftwareApplication must declare Discord as its runtime platform');
        }
      } catch {
        report(file, 'invalid JSON-LD structured data');
      }
    }

    pageTitles.set(title, [...(pageTitles.get(title) || []), file]);
  } else if (!/<meta\s+name="robots"\s+content="noindex"/i.test(source)) {
    report(file, '404 page must remain noindex');
  }

  const htmlWithoutStructuredData = source.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  const rawEntity = htmlWithoutStructuredData.match(/&(?![A-Za-z][A-Za-z0-9]+;|#[0-9]+;|#x[0-9A-Fa-f]+;)/);
  if (rawEntity) report(file, 'contains an unescaped ampersand');

  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  duplicateIds.forEach((id) => report(file, `duplicate id #${id}`));

  const standardConversionCount = [...source.matchAll(/class="[^"]*\bconversion-cta\b[^"]*"/g)].length;
  const customConversionCount = [...source.matchAll(/\sdata-page-conversion(?:\s|>)/g)].length;
  if (standardConversionCount + customConversionCount > 1) {
    report(file, 'contains multiple final conversion sections');
  }

  const headingLevels = [...source.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  headingLevels.forEach((level, index) => {
    const previousLevel = headingLevels[index - 1];
    if (previousLevel && level > previousLevel + 1) report(file, `heading hierarchy skips from h${previousLevel} to h${level}`);
  });

  for (const match of source.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\salt="[^"]*"/i.test(match[1])) report(file, 'image without alt attribute');
  }

  for (const match of source.matchAll(/<button\b([^>]*)>/gi)) {
    if (!/\stype="(?:button|submit|reset)"/i.test(match[1])) report(file, 'button without explicit type');
  }

  for (const match of source.matchAll(/\s(?:href|src)="([^"]+)"/gi)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(reference)) continue;
    const localPath = stripFragment(reference);
    if (!localPath) continue;
    if (!fs.existsSync(path.resolve(root, localPath))) report(file, `broken local reference ${reference}`);
  }

  for (const match of source.matchAll(/href="#([^"]+)"/gi)) {
    if (!ids.includes(match[1])) report(file, `missing local anchor #${match[1]}`);
  }
}

for (const [title, files] of pageTitles.entries()) {
  if (files.length > 1) report(files.join(', '), `duplicate SEO title ${title}`);
}

const publicPages = htmlFiles.filter((file) => file !== '404.html');
const sitemapPath = path.join(root, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  report('sitemap.xml', 'missing sitemap');
} else {
  const sitemapSource = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  sitemapUrls.forEach((url) => {
    if (!url.startsWith(publicBaseUrl)) report('sitemap.xml', `URL uses the wrong public base ${url}`);
  });
  if (new Set(sitemapUrls).size !== sitemapUrls.length) report('sitemap.xml', 'contains duplicate URLs');
  const sitemapPages = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const pathname = new URL(match[1]).pathname;
    return pathname.endsWith('/') ? 'index.html' : path.basename(pathname);
  });

  publicPages.forEach((page) => {
    if (!sitemapPages.includes(page)) report('sitemap.xml', `missing public page ${page}`);
  });

  sitemapPages.forEach((page) => {
    if (!publicPages.includes(page)) report('sitemap.xml', `unknown public page ${page}`);
  });
}

const robotsPath = path.join(root, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  report('robots.txt', 'missing robots file');
} else {
  const robotsSource = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsSource.includes(`Sitemap: ${publicBaseUrl}sitemap.xml`)) report('robots.txt', 'sitemap URL does not match the public site');
}

const blogDataPath = path.join(root, 'data', 'blog-posts.json');
if (!fs.existsSync(blogDataPath)) {
  report('data/blog-posts.json', 'missing Blog data source');
} else {
  try {
    const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));
    if (!isPlainObject(blogData) || !hasExactKeys(blogData, ['version', 'posts']) || blogData.version !== 1 || !Array.isArray(blogData.posts)) {
      report('data/blog-posts.json', 'invalid root schema');
    } else {
      const seenIds = new Set();
      const postKeys = [
        'id', 'title', 'excerpt', 'body', 'category', 'author', 'submittedAt',
        'publishedAt', 'updatedAt', 'visible', 'readingMinutes', 'views',
        'leadersSelection', 'media'
      ];
      blogData.posts.forEach((post, index) => {
        const label = `post ${index + 1}`;
        const hasLegacySchema = isPlainObject(post) && hasExactKeys(post, postKeys);
        const hasOrderedSchema = isPlainObject(post) && hasExactKeys(post, [...postKeys, 'content']);
        if (!hasLegacySchema && !hasOrderedSchema) {
          report('data/blog-posts.json', `${label} has an invalid schema`);
          return;
        }
        if (!/^WS-[A-Z2-9]{8}$/.test(post.id) || seenIds.has(post.id)) report('data/blog-posts.json', `${label} has an invalid or duplicate ID`);
        seenIds.add(post.id);
        if (typeof post.title !== 'string' || post.title.length < 3 || post.title.length > 100) report('data/blog-posts.json', `${label} has an invalid title`);
        if (typeof post.excerpt !== 'string' || post.excerpt.length < 20 || post.excerpt.length > 300) report('data/blog-posts.json', `${label} has an invalid excerpt`);
        if (typeof post.body !== 'string' || post.body.length < 100 || post.body.length > 12_000) report('data/blog-posts.json', `${label} has an invalid body`);
        if (typeof post.category !== 'string' || post.category.length < 2 || post.category.length > 50) report('data/blog-posts.json', `${label} has an invalid category`);
        if (typeof post.author !== 'string' || post.author.length < 1 || post.author.length > 100) report('data/blog-posts.json', `${label} has an invalid author`);
        if (Number.isNaN(Date.parse(post.submittedAt)) || Number.isNaN(Date.parse(post.publishedAt)) || Number.isNaN(Date.parse(post.updatedAt))) report('data/blog-posts.json', `${label} has an invalid date`);
        if (typeof post.visible !== 'boolean') report('data/blog-posts.json', `${label} has an invalid visibility value`);
        if (!Number.isSafeInteger(post.readingMinutes) || post.readingMinutes < 1 || post.readingMinutes > 60) report('data/blog-posts.json', `${label} has an invalid reading time`);
        if (!Number.isSafeInteger(post.views) || post.views < 0) report('data/blog-posts.json', `${label} has an invalid view total`);
        if (typeof post.leadersSelection !== 'boolean') report('data/blog-posts.json', `${label} has an invalid leadership selection`);
        if (!Array.isArray(post.media) || post.media.length > 4) {
          report('data/blog-posts.json', `${label} has invalid media`);
        } else {
          post.media.forEach((media, mediaIndex) => {
            const expectedSource = `assets/community/${post.id.toLowerCase()}-blog-${mediaIndex + 1}.webp`;
            if (
              !isPlainObject(media) ||
              !hasExactKeys(media, ['type', 'src', 'alt', 'width', 'height']) ||
              media.type !== 'image' ||
              media.src !== expectedSource ||
              typeof media.alt !== 'string' ||
              media.alt.length < 3 ||
              media.alt.length > 300 ||
              !Number.isSafeInteger(media.width) ||
              !Number.isSafeInteger(media.height) ||
              media.width < 1 ||
              media.height < 1 ||
              media.width > 2400 ||
              media.height > 2400
            ) {
              report('data/blog-posts.json', `${label} contains invalid media ${mediaIndex + 1}`);
            }
          });
        }
        if (hasOrderedSchema) {
          if (!Array.isArray(post.content) || post.content.length < 1 || post.content.length > 100) {
            report('data/blog-posts.json', `${label} has invalid ordered content`);
          } else {
            const textBlocks = [];
            const imageIndexes = [];
            post.content.forEach((block, blockIndex) => {
              if (!isPlainObject(block)) {
                report('data/blog-posts.json', `${label} contains invalid content block ${blockIndex + 1}`);
                return;
              }
              if (block.type === 'text') {
                if (
                  !hasExactKeys(block, ['type', 'text']) ||
                  typeof block.text !== 'string' ||
                  block.text.length < 1 ||
                  block.text.length > 12_000
                ) {
                  report('data/blog-posts.json', `${label} contains invalid text block ${blockIndex + 1}`);
                  return;
                }
                textBlocks.push(block.text);
                return;
              }
              if (
                block.type !== 'image' ||
                !hasExactKeys(block, ['type', 'mediaIndex']) ||
                !Number.isSafeInteger(block.mediaIndex) ||
                block.mediaIndex < 0 ||
                block.mediaIndex >= post.media.length
              ) {
                report('data/blog-posts.json', `${label} contains invalid image block ${blockIndex + 1}`);
                return;
              }
              imageIndexes.push(block.mediaIndex);
            });
            if (textBlocks.join('\n\n') !== post.body) report('data/blog-posts.json', `${label} ordered text does not match its body`);
            if (imageIndexes.length !== post.media.length || new Set(imageIndexes).size !== post.media.length) {
              report('data/blog-posts.json', `${label} ordered content does not reference each image exactly once`);
            }
          }
        }
      });
    }
  } catch {
    report('data/blog-posts.json', 'contains invalid JSON');
  }
}

const roleplayDataPath = path.join(root, 'data', 'roleplay-stories.json');
if (!fs.existsSync(roleplayDataPath)) {
  report('data/roleplay-stories.json', 'missing Roleplay archive data source');
} else {
  try {
    const roleplayData = JSON.parse(fs.readFileSync(roleplayDataPath, 'utf8'));
    if (!isPlainObject(roleplayData) || !hasExactKeys(roleplayData, ['version', 'stories']) || roleplayData.version !== 1 || !Array.isArray(roleplayData.stories)) {
      report('data/roleplay-stories.json', 'invalid root schema');
    } else {
      const storyIds = new Set();
      const storySlugs = new Set();
      const storyKeys = [
        'id', 'slug', 'title', 'subtitle', 'summary', 'category', 'status',
        'featured', 'visible', 'author', 'publishedAt', 'updatedAt',
        'readingMinutes', 'cover', 'chapters'
      ];
      const chapterKeys = ['id', 'title', 'summary', 'publishedAt', 'visible', 'content'];
      const categories = new Set(['campaign', 'one-shot', 'character', 'lore']);
      const statuses = new Set(['ongoing', 'complete']);

      roleplayData.stories.forEach((story, storyIndex) => {
        const storyLabel = `story ${storyIndex + 1}`;
        if (!isPlainObject(story) || !hasExactKeys(story, storyKeys)) {
          report('data/roleplay-stories.json', `${storyLabel} has an invalid schema`);
          return;
        }
        if (!/^RP-[A-Z2-9]{8}$/.test(story.id) || storyIds.has(story.id)) report('data/roleplay-stories.json', `${storyLabel} has an invalid or duplicate ID`);
        storyIds.add(story.id);
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(story.slug) || storySlugs.has(story.slug)) report('data/roleplay-stories.json', `${storyLabel} has an invalid or duplicate slug`);
        storySlugs.add(story.slug);
        if (typeof story.title !== 'string' || story.title.length < 3 || story.title.length > 120) report('data/roleplay-stories.json', `${storyLabel} has an invalid title`);
        if (typeof story.subtitle !== 'string' || story.subtitle.length > 180) report('data/roleplay-stories.json', `${storyLabel} has an invalid subtitle`);
        if (typeof story.summary !== 'string' || story.summary.length < 20 || story.summary.length > 600) report('data/roleplay-stories.json', `${storyLabel} has an invalid summary`);
        if (!categories.has(story.category)) report('data/roleplay-stories.json', `${storyLabel} has an invalid category`);
        if (!statuses.has(story.status)) report('data/roleplay-stories.json', `${storyLabel} has an invalid status`);
        if (typeof story.featured !== 'boolean' || typeof story.visible !== 'boolean') report('data/roleplay-stories.json', `${storyLabel} has invalid publication flags`);
        if (typeof story.author !== 'string' || story.author.length < 1 || story.author.length > 100) report('data/roleplay-stories.json', `${storyLabel} has an invalid author`);
        if (Number.isNaN(Date.parse(story.publishedAt)) || Number.isNaN(Date.parse(story.updatedAt))) report('data/roleplay-stories.json', `${storyLabel} has an invalid date`);
        if (!Number.isSafeInteger(story.readingMinutes) || story.readingMinutes < 1 || story.readingMinutes > 600) report('data/roleplay-stories.json', `${storyLabel} has an invalid reading time`);

        if (story.cover !== null) {
          if (
            !isPlainObject(story.cover) ||
            !hasExactKeys(story.cover, ['src', 'alt', 'width', 'height']) ||
            typeof story.cover.src !== 'string' ||
            !story.cover.src.startsWith('assets/') ||
            !fs.existsSync(path.resolve(root, story.cover.src)) ||
            typeof story.cover.alt !== 'string' ||
            story.cover.alt.length < 3 ||
            story.cover.alt.length > 300 ||
            !Number.isSafeInteger(story.cover.width) ||
            !Number.isSafeInteger(story.cover.height) ||
            story.cover.width < 1 ||
            story.cover.height < 1 ||
            story.cover.width > 3200 ||
            story.cover.height > 3200
          ) {
            report('data/roleplay-stories.json', `${storyLabel} has an invalid cover`);
          }
        }

        if (!Array.isArray(story.chapters) || story.chapters.length > 250) {
          report('data/roleplay-stories.json', `${storyLabel} has invalid chapters`);
          return;
        }

        const chapterIds = new Set();
        story.chapters.forEach((chapter, chapterIndex) => {
          const chapterLabel = `${storyLabel}, chapter ${chapterIndex + 1}`;
          if (!isPlainObject(chapter) || !hasExactKeys(chapter, chapterKeys)) {
            report('data/roleplay-stories.json', `${chapterLabel} has an invalid schema`);
            return;
          }
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(chapter.id) || chapterIds.has(chapter.id)) report('data/roleplay-stories.json', `${chapterLabel} has an invalid or duplicate ID`);
          chapterIds.add(chapter.id);
          if (typeof chapter.title !== 'string' || chapter.title.length < 3 || chapter.title.length > 140) report('data/roleplay-stories.json', `${chapterLabel} has an invalid title`);
          if (typeof chapter.summary !== 'string' || chapter.summary.length > 400) report('data/roleplay-stories.json', `${chapterLabel} has an invalid summary`);
          if (Number.isNaN(Date.parse(chapter.publishedAt))) report('data/roleplay-stories.json', `${chapterLabel} has an invalid date`);
          if (typeof chapter.visible !== 'boolean') report('data/roleplay-stories.json', `${chapterLabel} has an invalid visibility value`);
          if (!Array.isArray(chapter.content) || chapter.content.length > 250) {
            report('data/roleplay-stories.json', `${chapterLabel} has invalid content`);
            return;
          }

          chapter.content.forEach((block, blockIndex) => {
            const blockLabel = `${chapterLabel}, block ${blockIndex + 1}`;
            if (!isPlainObject(block)) {
              report('data/roleplay-stories.json', `${blockLabel} is invalid`);
              return;
            }
            if (block.type === 'paragraph' || block.type === 'heading') {
              const maxLength = block.type === 'heading' ? 200 : 12_000;
              if (!hasExactKeys(block, ['type', 'text']) || typeof block.text !== 'string' || block.text.length < 1 || block.text.length > maxLength) {
                report('data/roleplay-stories.json', `${blockLabel} contains invalid text`);
              }
              return;
            }
            if (block.type === 'quote') {
              if (!hasExactKeys(block, ['type', 'text', 'attribution']) || typeof block.text !== 'string' || block.text.length < 1 || block.text.length > 2_000 || typeof block.attribution !== 'string' || block.attribution.length > 160) {
                report('data/roleplay-stories.json', `${blockLabel} contains an invalid quote`);
              }
              return;
            }
            if (block.type === 'image') {
              if (
                !hasExactKeys(block, ['type', 'src', 'alt', 'caption', 'width', 'height']) ||
                typeof block.src !== 'string' ||
                !block.src.startsWith('assets/') ||
                !fs.existsSync(path.resolve(root, block.src)) ||
                typeof block.alt !== 'string' ||
                block.alt.length < 3 ||
                block.alt.length > 300 ||
                typeof block.caption !== 'string' ||
                block.caption.length > 300 ||
                !Number.isSafeInteger(block.width) ||
                !Number.isSafeInteger(block.height) ||
                block.width < 1 ||
                block.height < 1 ||
                block.width > 3200 ||
                block.height > 3200
              ) {
                report('data/roleplay-stories.json', `${blockLabel} contains an invalid image`);
              }
              return;
            }
            report('data/roleplay-stories.json', `${blockLabel} has an unsupported type`);
          });
        });
      });

      const featuredStories = roleplayData.stories.filter((story) => story?.visible !== false && story?.featured === true);
      if (featuredStories.length > 1) report('data/roleplay-stories.json', 'contains more than one visible featured story');
    }
  } catch {
    report('data/roleplay-stories.json', 'contains invalid JSON');
  }
}

const roleplayScriptPath = path.join(root, 'roleplay.js');
if (!fs.existsSync(roleplayScriptPath)) {
  report('roleplay.js', 'missing Roleplay archive script');
} else {
  try {
    execFileSync(process.execPath, ['--check', roleplayScriptPath], { stdio: 'pipe' });
  } catch {
    report('roleplay.js', 'contains invalid JavaScript');
  }
}

const scriptSource = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
if (!docsGuideSource) {
  report('docs-guide.js', 'missing shared documentation guide');
} else {
  try {
    execFileSync(process.execPath, ['--check', docsGuidePath], { stdio: 'pipe' });
  } catch {
    report('docs-guide.js', 'contains invalid JavaScript');
  }
}
const presentationPages = [...scriptSource.matchAll(/^  '([^']+\.html)': \{ family:/gm)].map((match) => match[1]);
const interiorPages = htmlFiles.filter((file) => file !== 'index.html');
interiorPages.forEach((page) => {
  if (!presentationPages.includes(page)) report('script.js', `missing unique page presentation for ${page}`);
});
presentationPages.forEach((page) => {
  if (!interiorPages.includes(page)) report('script.js', `unknown page presentation ${page}`);
});

for (const page of publicPages) {
  if (page === 'index.html') continue;
  const source = fs.readFileSync(path.join(root, page), 'utf8');
  const linkedFromHtml = htmlFiles.some((otherFile) => {
    if (otherFile === page) return false;
    return fs.readFileSync(path.join(root, otherFile), 'utf8').includes(`href="${page}"`);
  });
  if (!linkedFromHtml && !scriptSource.includes(`'${page}'`)) warnings.push(`${page}: no incoming navigation or catalog link`);
}

const legacyPatterns = [
  '/set setup', '/set guildbank', '/set leaderboards', '/set guildlist',
  '/set blacklist', '/set banlist', '/set tracker', '/sync all', '/loot-panel'
];
for (const pattern of legacyPatterns) {
  const matches = htmlFiles.filter((file) => fs.readFileSync(path.join(root, file), 'utf8').includes(pattern));
  if (matches.length > 0) report(matches.join(', '), `legacy command name ${pattern}`);
}

const botDirectory = process.env.LUMINOX_BOT_DIR || path.resolve(root, '..', 'Bot');
if (fs.existsSync(path.join(botDirectory, 'utils', 'commandLoader.js'))) {
  const loaderScript = `
    const { loadCommands } = require('./utils/commandLoader');
    (async () => {
      const commands = await loadCommands({ info() {}, warn() {}, error() {} });
      const registered = [...commands].filter(([, command]) => command.register !== false);
      const commandNames = registered.map(([name]) => name);
      const commandPaths = [];

      const collectPaths = (name, options = [], prefix = []) => {
        const structuralOptions = options.filter((option) => option.type === 1 || option.type === 2);
        if (structuralOptions.length === 0) {
          commandPaths.push([name, ...prefix].join(' '));
          return;
        }

        structuralOptions.forEach((option) => {
          if (option.type === 2) collectPaths(name, option.options || [], [...prefix, option.name]);
          if (option.type === 1) commandPaths.push([name, ...prefix, option.name].join(' '));
        });
      };

      registered.forEach(([name, command]) => {
        if (name === 'Convert time') {
          commandPaths.push(name);
          return;
        }
        collectPaths(name, command.data?.toJSON?.().options || []);
      });

      console.log(JSON.stringify({ commandNames, commandPaths }));
    })();
  `;
  const { commandNames, commandPaths } = JSON.parse(execFileSync(process.execPath, ['-e', loaderScript], {
    cwd: botDirectory,
    encoding: 'utf8'
  }).trim());
  const commandPage = fs.readFileSync(path.join(root, 'commands.html'), 'utf8');
  for (const commandPath of commandPaths) {
    if (commandPath === 'Convert time') {
      if (!commandPage.includes('Convert time')) report('commands.html', 'missing Convert time context command');
      continue;
    }
    if (!commandPage.includes(`/${commandPath}`)) report('commands.html', `missing registered /${commandPath} command path`);
    const documentedByGuide = [...docsGuideSource.matchAll(/^    '([^']+)':/gm)]
      .map((match) => match[1])
      .some((candidate) => `/${commandPath}` === candidate || `/${commandPath}`.startsWith(`${candidate} `));
    if (!documentedByGuide) report('docs-guide.js', `missing explanation for registered /${commandPath} command path`);
  }
  console.log(`Verified ${commandNames.length} registered commands and ${commandPaths.length} executable paths against commands.html.`);
} else {
  warnings.push('Bot repository not found; skipped live command-registration comparison');
}

if (warnings.length > 0) {
  console.warn(`Warnings (${warnings.length}):`);
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML pages with no blocking errors.`);
}
