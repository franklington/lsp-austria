# Cloudflare Pages Deployment Reference

## Why Static Export (not Workers)?

Cloudflare now recommends `@cloudflare/next-on-pages` (Workers) for full-stack Next.js apps. However, for **lsp-austria**:

- No API routes, no SSR, no dynamic data
- All content is static JS/TS data files
- Contact form uses mailto (no server handler)
- Same pattern as current Astro static build

**Verdict**: `output: 'export'` → `out/` → Cloudflare Pages is the right choice.
Same simplicity as current Astro setup.

---

## next.config.ts (Required)

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,       // generates /page/index.html instead of /page.html
  images: { unoptimized: true }, // required: Next.js Image Optimization needs a server
}

export default nextConfig
```

## wrangler.toml (Updated)

```toml
name = "lsp-austria"
pages_build_output_dir = "out"
```

---

## Cloudflare Pages Setup (Dashboard)

1. Workers & Pages → **Create application** → **Pages** tab
2. **Import an existing Git repository** → select lsp-austria repo
3. **Framework preset**: `Next.js (Static HTML Export)`
4. Build settings auto-filled:
   - Build command: `npx next build`
   - Build output directory: `out`
5. Deploy

---

## Local Deployment via Wrangler

```bash
# Build
npx next build

# Preview locally (Cloudflare Pages simulation)
npx wrangler pages dev out

# Deploy
npx wrangler pages deploy out --project-name=lsp-austria
```

---

## _redirects File

Copy `public/_redirects` as-is. Cloudflare Pages reads it from the build output root:

```
/impressum.html /impressum 301
/datenschutz.html /datenschutz 301
/leistungen.html /leistungen 301
/risikothemen.html /risikothemen 301
```

With `trailingSlash: true`, Next.js generates `/impressum/index.html`. Cloudflare serves `/impressum` → `/impressum/index.html` automatically, so redirects still work.

---

## Headers & Caching

Optional: add `public/_headers` for cache control:

```
/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## Constraints of Static Export

The following Next.js features do NOT work with `output: 'export'`:
- `getServerSideProps`
- API Routes (`app/api/`)
- Dynamic routes without `generateStaticParams()`
- Middleware
- `next/image` with optimization (use `unoptimized: true`)
- Internationalized routing (i18n built-in)

All pages in lsp-austria are static and none of these are needed.
