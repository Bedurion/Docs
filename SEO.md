# GuildLumina.com SEO Operations

The public canonical domain is `https://guildlumina.com/`. GitHub Pages URLs redirect to that domain and must never be used as canonical URLs, Open Graph URLs or sitemap entries.

## Local workflow

1. Run `npm run seo` after adding, renaming or substantially editing a public page.
2. Run `npm test` before publishing.
3. Commit the generated HTML metadata, `sitemap.xml`, `feed.xml` and social preview images together with the page changes.

`npm run seo` preserves visible page content. It updates only metadata, structured data, social previews and crawler-facing files.

## Google Search Console

These external steps cannot be completed from the repository:

1. Add a Domain property for `guildlumina.com`.
2. Verify ownership with the DNS TXT record supplied by Google.
3. Submit `https://guildlumina.com/sitemap.xml` in the Sitemaps report.
4. Inspect and request indexing for the home, Guild, Bot, Documentation, Pricing and Blog landing pages.
5. Monitor Page Indexing, Core Web Vitals, HTTPS and Search Results reports.

DNS verification is preferred because it does not require storing a private verification token in the repository.

## Measurement

Search Console measures search visibility and indexing. A separate analytics product is optional for measuring visits and conversion clicks. Do not add an analytics identifier until the selected privacy policy and consent requirements are confirmed.

## Content rules

- Keep one descriptive `h1` per page.
- Keep every title and meta description unique.
- Use real, helpful copy instead of repeating keyword variants.
- Never add fabricated ratings, reviews or testimonials to structured data.
- Publish Blog articles only after their Discord review workflow is complete.
