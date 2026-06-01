---
name: lsp-austria
description: "LSP Austria — Versicherungsagentur-Website. Immer aktiv: Regeln für deutschsprachige Inhalte, dark Design System (Tailwind v4), Next.js 16 App Router static export, Cloudflare Pages Deployment."
applyTo: "**"
---

# LSP Austria – Workspace-Kontext

## Unternehmen

| | |
|---|---|
| **Name** | LSP Consulting GmbH |
| **Marke** | LSP Austria |
| **Adresse** | Bahnhofstraße 46, 4810 Gmunden, Österreich |
| **Telefon** | +43 (0)761 267646-0 |
| **E-Mail** | agentur@lsp-austria.at |
| **Domain** | lsp-gmunden.at |
| **Gegründet** | 2006 |
| **Tätigkeitsbereich** | Versicherungsmakler & KFZ-Zulassungsstelle |
| **Bezirke (KFZ-Zulassung)** | GM, KI, VB, WL |
| **Geschäftsführer** | Franz Adolf Leitner (65%), Thomas Sonntagbauer (35%) |

## Sprache & Ton

- **Sprache**: Immer Deutsch (de-AT), Sie-Form
- **Ton**: Direkt, warm, regional, professionell – kein Marketing-Sprech
- **Keine Anglizismen** in Fließtexten (statt "Service" → "Leistung")
- **Zahlen**: Deutsches Format (4.810 statt 4,810; 4,8 statt 4.8)
- **Währung**: Euro (€), österreichische Schreibweise
- **Beispiel-Tagline**: "Persönliche Beratung – ohne Call-Center, ohne Warteband."

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router, `output: 'export'`) |
| **React** | 19 |
| **CSS** | Tailwind v4 (`@theme` in CSS, kein tailwind.config.ts) |
| **Fonts** | Inter Variable (self-hosted WOFF2 in `public/fonts/`) |
| **Icons** | lucide-react |
| **Animationen** | framer-motion (sparsam!) |
| **Blog/MDX** | next-mdx-remote/rsc + gray-matter |
| **Hosting** | Cloudflare Pages (`pages_build_output_dir = "out"`) |
| **Build** | `npm run build` → `out/` (statische HTML-Dateien) |

## Projektstruktur

```
app/                  # Next.js App Router Pages
  layout.tsx          # Root Layout (Header + Footer)
  page.tsx            # Home
  leistungen/
    page.tsx
    [slug]/page.tsx   # Service-Detailseiten
  kfz-zulassung/page.tsx
  ueber-uns/page.tsx
  kontakt/page.tsx
  ratgeber/page.tsx + [slug]/page.tsx
  themen/[slug]/page.tsx   # SEO-only, kein Navlink
  impressum/page.tsx
  datenschutz/page.tsx
  sitemap.ts          # Automatische Sitemap
  robots.ts

components/
  layout/             # Header.tsx, Footer.tsx
  sections/           # Hero, ServiceGrid, TrustSignals, ContactMap, CallToAction, TeamGrid
  ui/                 # Button, Badge, Section, SectionHeader

content/
  services/index.ts   # Typed service data (alle 6 Leistungen)
  team/index.ts       # Teamdaten
  blog/*.mdx          # Ratgeber-Artikel
  themen/*.mdx        # SEO-Themen (kein Navlink, nur Sitemap)

lib/
  design-tokens.ts    # Token-Konstanten (spiegelt @theme aus globals.css)
  mdx.ts              # MDX-Hilfsfunktionen

public/
  logo.svg
  fonts/              # Inter Variable WOFF2
  favicons/
  og/                 # OG-Images

.github/
  copilot-instructions.md
  skills/             # Alle Skill-Dateien
```

## Design System (Tailwind v4)

Alle Tokens sind in `app/globals.css` unter `@theme` definiert.

### Farben (Utility-Klassen)

| Token | Hex | Klasse |
|---|---|---|
| base | #1a1a1a | `bg-base` |
| base-dark | #0f0f0f | `bg-base-dark` |
| surface | #202020 | `bg-surface` |
| elevated | #242424 | `bg-elevated` |
| foreground | #f5f5f5 | `text-foreground` |
| foreground-muted | #b8b8b8 | `text-foreground-muted` |
| foreground-subtle | #8a8a8a | `text-foreground-subtle` |
| accent | #2563eb | `bg-accent`, `text-accent` |
| accent-light | #3b82f6 | `bg-accent-light` |
| accent-dark | #1d4ed8 | `bg-accent-dark` |
| accent-subtle | #1e3a5f | `bg-accent-subtle` |
| accent-fg | #ffffff | `text-accent-fg` |
| border | #2a2a2a | `border-border` |
| border-strong | #333333 | `border-border-strong` |
| border-bright | #404040 | `border-border-bright` |
| warning | #f59e0b | `text-warning` |

### Utility-Klassen (custom)

| Klasse | Bedeutung |
|---|---|
| `container-page` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `section-gap` | `py-20 lg:py-28` |
| `card-base` | Dunkle Card (surface + border + radius-lg + padding) |
| `card-hover` | Hover-Effekt für Cards (translateY + shadow) |
| `focus-ring` | Accessibility Focus-Ring mit accent Farbe |
| `text-balance` | `text-wrap: balance` |
| `prose-lsp` | MDX Prose-Styles (für Blog/Themen-Seiten) |

### Radius

| Token | Wert |
|---|---|
| `rounded-[var(--radius-sm)]` | 4px |
| `rounded-[var(--radius-md)]` | 8px |
| `rounded-[var(--radius-lg)]` | 12px |
| `rounded-[var(--radius-xl)]` | 16px |

## Services (Slugs)

- `kfz-fahrzeuge` → `/leistungen/kfz-fahrzeuge/`
- `kfz-zulassung-service` → `/kfz-zulassung/` (standalone Seite)
- `wohnen-recht` → `/leistungen/wohnen-recht/`
- `sparen-vorsorge` → `/leistungen/sparen-vorsorge/`
- `gesundheit-freizeit` → `/leistungen/gesundheit-freizeit/`
- `unternehmen` → `/leistungen/unternehmen/`

## SEO-Regeln

- `generateMetadata()` auf jeder Seite mit `title`, `description`, `alternates.canonical`
- JSON-LD Schema auf: Home (InsuranceAgency), Service-Seiten (Service), Blog (Article)
- `metadataBase: new URL('https://lsp-gmunden.at')` im Root-Layout
- Keine `index: false` außer auf `/impressum/` und `/datenschutz/`
- Sitemap in `app/sitemap.ts` (automatisch generiert)
- Robots in `app/robots.ts`

## Wichtige Regeln

1. **Kein Server-Code** — `output: 'export'` bedeutet nur statische HTML-Ausgabe
2. **`next/image` immer mit `unoptimized`** — kein Image-Optimization-Server verfügbar
3. **`params` immer `await`en** — in Next.js 16 ist `params` ein Promise
4. **Client Components** nur wenn nötig (useState, useEffect, Event-Handler)
5. **`generateStaticParams()`** in allen dynamischen Routen zwingend erforderlich
6. **MDX-Inhalte** immer mit gray-matter Frontmatter (title, description, date, category)
7. **Framer Motion sparsam** — nur für Hero und erste Screen-Elemente
8. **Keine externen Scripts** ohne Consent (Maps, Analytics)
