---
name: astro-to-nextjs
description: 'Rewrite the lsp-austria Astro site to a static-exported Next.js/React site with a component-based design system, deployable to Cloudflare Pages. Use when: migrating from Astro to Next.js, creating React component library, setting up Cloudflare Pages for Next.js, rewriting pages as TSX, porting the design system to React components.'
argument-hint: 'Specify scope: "all" (full migration), "design-system" (components only), "pages" (pages only), or a specific page name'
---

# Astro → Next.js Migration: LSP Austria

## Hosting Decision: Cloudflare Pages + Static Export

**Chosen approach**: Next.js `output: 'export'` + Cloudflare Pages

Cloudflare itself recommends Workers for full-stack Next.js, but since this site has **zero server-side logic** (all content is static JS data, form uses mailto), the simpler and faster approach is pure static export.

| Setting | Value |
|---------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Build output dir | `out` |
| Deploy target | Cloudflare Pages |

**`next.config.ts`** (required):
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }, // required for static export
}

export default nextConfig
```

**`wrangler.toml`** (update existing):
```toml
name = "lsp-austria"
pages_build_output_dir = "out"
```

---

## Target Project Architecture

```
app/
├── layout.tsx                          # Root layout (replaces BaseLayout.astro)
├── page.tsx                            # / — Homepage
├── leistungen/page.tsx                 # /leistungen
├── angebot/page.tsx                    # /angebot
├── themen/page.tsx                     # /themen
├── risikothemen/
│   ├── page.tsx                        # /risikothemen
│   ├── januar-2026-hochwasser-sturm/page.tsx
│   ├── februar-2026-cyberrisiken-kmu/page.tsx
│   └── maerz-2026-e-bike-e-mobilitaet/page.tsx
├── datenschutz/page.tsx                # noindex
└── impressum/page.tsx                  # noindex
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Badge.tsx
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
└── sections/
    ├── Hero.tsx
    ├── ServiceCards.tsx
    ├── MonthlyTopics.tsx
    ├── ContactSection.tsx
    ├── FaqAccordion.tsx
    └── SchemaOrg.tsx
data/
├── site-content.ts
├── services.ts
└── monthly-topics.ts
styles/
├── globals.css                         # CSS reset, custom properties, base styles
└── theme.css                           # Tailwind theme overrides (from Theme.css)
public/
├── _redirects
├── robots.txt
├── sitemap.xml
└── fonts/
```

---

## Migration Phases

### Phase 1: Project Scaffold

```bash
# Option A: scaffold in a sibling directory
npx create-next-app@latest lsp-austria-nextjs \
  --typescript --tailwind --app \
  --no-src-dir --import-alias "@/*" \
  --no-eslint

# Option B: scaffold in nextjs/ subfolder of current repo
mkdir nextjs && cd nextjs
npx create-next-app@latest . \
  --typescript --tailwind --app \
  --no-src-dir --import-alias "@/*"
```

Install additional dependencies:
```bash
npm install sass @fontsource-variable/inter
```

### Phase 2: Config Files

1. Replace generated `next.config.ts` with the static export config above
2. Copy `wrangler.toml` and update `pages_build_output_dir = "out"`
3. Copy `public/` folder entirely (fonts, favicons, _redirects, robots.txt, sitemap.xml, llms.txt, main.js)

### Phase 3: Styles

Port in this order:
1. CSS custom properties from `src/styles/main.scss` → `styles/globals.css`
2. Tailwind `@theme` block from `src/styles/Theme.css` → `styles/theme.css`  
3. All utility classes (`.outlined-button`, `.contained-button`, `.card`)
4. Section-specific styles (hero, header, footer, nav, accordion, contact, map)
5. Import both in `app/layout.tsx` instead of BaseLayout

See [design system reference](./references/design-system.md) for design token mapping.

### Phase 4: Data Layer

Copy and add TypeScript types:

| Source | Target | Types to add |
|--------|--------|-------------|
| `src/data/site-content.js` | `data/site-content.ts` | `CompanyProfile` interface |
| `src/data/services.js` | `data/services.ts` | `Service[]` type |
| `src/data/monthly-topics.js` | `data/monthly-topics.ts` | `MonthlyTopic[]` type |

### Phase 5: Design System Components

Build in dependency order (primitives first):

**1. UI Primitives** (`components/ui/`)
- `Button.tsx` — props: `variant: 'primary'|'secondary'|'outlined'`, `size: 'default'|'large'`, `href?: string`
- `Card.tsx` — frosted glass card (`.card` class), props: `children`, `className?`
- `Badge.tsx` — small label pill

**2. Layout** (`components/layout/`)
- `Header.tsx` — port from `src/components/Header.astro`
  - Fixed nav, logo, desktop nav links, email CTA
  - Mobile hamburger with overlay, keyboard trap (Escape, Tab)
  - Use React `useState` for `isMenuOpen`, `useEffect` for body scroll lock
  - `useEffect` cleanup on unmount (replaces AbortController)
- `Footer.tsx` — copyright + datenschutz/impressum links

**3. Sections** (`components/sections/`)
- `Hero.tsx` — headline, subline, CTA buttons (port content from `src/pages/index.astro`)
- `ServiceCards.tsx` — port from `src/components/ServiceCards.astro`; accepts `services: Service[]`
- `MonthlyTopics.tsx` — card list from monthly-topics data
- `ContactSection.tsx` — map consent panel (use `useState` + `localStorage`), hours, address
- `FaqAccordion.tsx` — `<details>`/`<summary>` or `useState` toggle; accepts `items: {q,a}[]`
- `SchemaOrg.tsx` — renders JSON-LD `<script>` for Organization, InsuranceAgency, AggregateRating

### Phase 6: Pages

Each page exports `generateMetadata()` for SEO. See [pages reference](./references/pages.md).

**Root Layout** (`app/layout.tsx`):
```tsx
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'
import '../styles/theme.css'

export const metadata: Metadata = {
  title: { default: 'LSP Gmunden', template: '%s | LSP Gmunden' },
  // ...
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <head>
        <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### Phase 7: Validation

```bash
npm run build          # must produce out/ with no errors
npx serve out -p 3001  # visual check all 10 routes
```

Checklist:
- [ ] All pages render without JS errors
- [ ] Mobile menu opens/closes with keyboard support
- [ ] Map consent panel shows before iframe
- [ ] Contact form mailto triggers correctly
- [ ] Schema.org JSON-LD present on homepage
- [ ] datenschutz/impressum have noindex meta
- [ ] `_redirects` file present in `out/`
- [ ] `sitemap.xml` and `robots.txt` in `out/`
- [ ] Inter font loads from `/fonts/`

---

## Key Migration Notes

| Astro pattern | Next.js equivalent |
|---------------|-------------------|
| `.astro` frontmatter props | TypeScript component props interface |
| `<slot />` | `{children}` |
| `Astro.props` | Function parameters / props |
| `<BaseLayout title={...}>` | `generateMetadata()` + `layout.tsx` |
| `define:vars={{ ... }}` | CSS modules or inline styles |
| `<script>` in .astro | `useEffect` hook or `'use client'` |
| Inline `<style>` | CSS modules or globals |
| `import { data } from '@/data'` | Same pattern works in Next.js |
| `public/main.js` nav script | `Header.tsx` with `useState`/`useEffect` |

**Map consent (localStorage)**:
```tsx
const [mapConsent, setMapConsent] = useState(false)
useEffect(() => {
  setMapConsent(localStorage.getItem('mapConsent') === 'true')
}, [])
const grantConsent = () => {
  localStorage.setItem('mapConsent', 'true')
  setMapConsent(true)
}
```

**Intro animation**: Keep CSS keyframes from `main.scss` in `globals.css`. The animation targets the page wrapper on initial load.

**No `<Image>` component**: Use `<img>` tags with `unoptimized` config for static export compatibility, or set `images: { unoptimized: true }` and use `next/image` without optimization.
