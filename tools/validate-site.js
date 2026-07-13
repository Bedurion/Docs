const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html')).sort();
const errors = [];
const warnings = [];

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

function stripFragment(value) {
  return value.split('#')[0].split('?')[0];
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');

  if (!/<title>[^<]+<\/title>/i.test(source)) report(file, 'missing title');
  if (!/<meta\s+name="viewport"/i.test(source)) report(file, 'missing viewport');
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(source)) report(file, 'missing meta description');
  if (!/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/i.test(source)) report(file, 'missing h1');
  if (!/data-nav-links/.test(source)) report(file, 'missing shared navigation mount');

  const rawEntity = source.match(/&(?![A-Za-z][A-Za-z0-9]+;|#[0-9]+;|#x[0-9A-Fa-f]+;)/);
  if (rawEntity) report(file, 'contains an unescaped ampersand');

  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  duplicateIds.forEach((id) => report(file, `duplicate id #${id}`));

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

const publicPages = htmlFiles.filter((file) => file !== '404.html');
const sitemapPath = path.join(root, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  report('sitemap.xml', 'missing sitemap');
} else {
  const sitemapSource = fs.readFileSync(sitemapPath, 'utf8');
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

const scriptSource = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
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
