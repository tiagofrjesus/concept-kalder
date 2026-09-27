# Kalder Precision — design concept

Self-initiated concept website for a **fictional** industrial sensor manufacturer. All company names, figures and products are illustrative.

**Stack:** Next.js 16 (App Router), JavaScript, React Server Components, plain CSS. No UI framework, no client-side data fetching.

## What it demonstrates

- Every page is pre-rendered on the server (static + SSG via `generateStaticParams`); content is fully crawlable without JavaScript.
- Technical SEO: per-page metadata and canonical URLs, `sitemap.xml`, `robots.txt`, generated Open Graph image, JSON-LD (Organization, WebSite, Product, BreadcrumbList).
- Performance: `next/font` self-hosted fonts, no images on the critical path (hero visual is SVG + CSS transforms), one small client component (mobile menu).
- Accessibility: semantic landmarks, skip link, keyboard-operable menu (Esc to close), visible focus, `prefers-reduced-motion` respected. Lighthouse accessibility 100.
- Responsive from 360 px to wide desktop.

## Structure

```
app/          routes, metadata, sitemap, robots, OG image
components/   header, footer, mobile nav, hero visual, JSON-LD
data/         content.json (all copy, so a CMS can replace it later)
lib/site.js   site constants, content helpers, structured-data builders
```

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL so canonical URLs, the sitemap and structured data point to the right domain.
