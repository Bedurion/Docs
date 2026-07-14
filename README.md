# Luminox Website

Static GitHub Pages product website and documentation for Lumina and Luminox.

## Structure

- `index.html` — main landing page.
- `features*.html` — product pages.
- `docs-*.html` — documentation pages.
- `assets/brand/` — brand marks.
- `assets/icons/` — reusable SVG icons.
- `assets/illustrations/` — decorative SVG illustrations.
- `styles.css` — shared design system.
- `script.js` — menus and search.
- `gallery.html`, `gallery.js`, `data/community-media.json` — approved community-media gallery.
- `tools/validate-site.js` — link, metadata, navigation and optional live command-reference validation.
- `tools/publish-community-media.mjs` — isolated attachment validation, metadata stripping and WebP conversion.
- `sitemap.xml`, `robots.txt`, `404.html` — GitHub Pages discovery and fallback files.

Changelog updates are manual. Avoid generated status files that change during normal bot runtime.

## Validate locally

Run:

```bash
npm test
```

When the sibling Luminox bot repository is available at `../Bot`, validation also compares `commands.html` with the commands actually registered by the bot. Set `LUMINOX_BOT_DIR` to use another local path.

## Publish with GitHub Pages

In the GitHub repository settings, open **Pages** and select **GitHub Actions** as the source. The secure media workflow commits the approved gallery entry and then performs an explicit Pages deployment, because commits made with `GITHUB_TOKEN` do not trigger another workflow automatically.

## Publish approved Discord media

The `publish-community-media.yml` workflow is intentionally manual-only through `workflow_dispatch`. Luminox sends one AES-256-GCM encrypted payload after moderator approval and final administrator confirmation. A read-only runner accepts only signed Discord CDN attachments that resolve to matching JPG, PNG or WebP bytes, applies hard size and pixel limits, and re-encodes every image. A separate write-enabled job verifies the isolated artifact before committing only generated files under `assets/community/` plus the gallery index.

Add a GitHub Actions repository secret named `WEBSITE_PUBLISH_PAYLOAD_SECRET`. It must match the 32-byte Base64 secret stored only in the Luminox `.env`. The bot credential used to dispatch the workflow should be fine-grained, repository-scoped and limited to **Actions: write**. Image decoding runs with read-only repository access; only the final artifact-verification job receives `contents: write`.
