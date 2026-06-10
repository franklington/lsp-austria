---
name: page-builder
description: "Use when: scaffolding a new page for LSP Austria, adding a route, creating a new landing page, or building a new service detail page. Creates complete Next.js App Router pages with metadata, JSON-LD, hero section, and CTA."
---

# LSP Austria Page Builder Skill

## Zweck

Erstellt vollständige Next.js App Router Pages für LSP Austria inkl. Metadata, JSON-LD Schema, Hero und CTA.

## Schritt-für-Schritt

### 1. Datei anlegen

```
app/
  [route]/
    page.tsx          # Standard-Seite
  [route]/[slug]/
    page.tsx          # Dynamische Seite (braucht generateStaticParams)
```

### 2. Statische Seiten-Vorlage

```tsx
import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Seitenname',   // wird zu "Seitenname | LSP Austria"
  description: 'Meta-Description (max. 160 Zeichen).',
  alternates: { canonical: 'https://lsp-austria.at/route/' },
}

export default function MeinePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Eyebrow Text
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Hauptüberschrift
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl text-balance">
              Einleitungstext
            </p>
          </div>
        </div>
      </div>

      {/* Inhalt */}
      <Section>
        {/* Seiteninhalt */}
      </Section>

      {/* CTA (immer am Ende) */}
      <CallToAction />
    </>
  )
}
```

### 3. Dynamische Seiten-Vorlage

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

interface Props {
  params: Promise<{ slug: string }>  // In Next.js 16: params ist ein Promise!
}

export async function generateStaticParams() {
  // Pflicht für static export!
  return [
    { slug: 'beispiel-1' },
    { slug: 'beispiel-2' },
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Daten laden...
  return {
    title: 'Seitenname',
    description: 'Beschreibung',
    alternates: { canonical: `https://lsp-austria.at/route/${slug}/` },
  }
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params
  // Daten laden, ggf. notFound() aufrufen
  
  return (
    <>
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Titel</h1>
        </div>
      </div>
      <Section>
        {/* Inhalt */}
      </Section>
      <CallToAction />
    </>
  )
}
```

### 4. JSON-LD für neue Service-Seiten

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicename',
  description: 'Beschreibung',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'LSP Consulting GmbH',
    url: 'https://lsp-austria.at',
  },
  areaServed: { '@type': 'City', name: 'Gmunden' },
}

// Im JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 5. Sitemap aktualisieren

Nach dem Erstellen einer neuen Seite: `app/sitemap.ts` öffnen und die neue URL eintragen.

### 6. MDX-Seiten (Blog/Themen)

Für neue Ratgeber-Artikel: `.mdx`-Datei in `content/blog/` anlegen:

```
content/blog/mein-artikel.mdx
```

Frontmatter:
```yaml
---
title: "Titel des Artikels"
description: "Kurzbeschreibung (max 160 Zeichen)"
date: "2024-MM-DD"
category: "Kategorie"
readingTime: "X Min."
image: "/images/blog-mein-foto.jpg"
---
```

> **Bilder:** Lokal in `public/images/` ablegen (kein Unsplash-Hotlink – DSGVO). Credits in `lib/image-credits.ts` eintragen. Dateinamen-Konvention: `blog-{slug}.jpg`.

> **Tabellen in MDX:** `remark-gfm` ist in beiden MDX-Seiten (`ratgeber/[slug]` und `themen/[slug]`) eingebunden – GFM-Pipe-Tabellen funktionieren automatisch.

Für SEO-Themen-Seiten: `.mdx`-Datei in `content/themen/` anlegen. Diese Seiten haben keinen Navlink – nur Sitemap und Google.

## Checkliste für neue Seiten

- [ ] `generateMetadata()` mit title, description, canonical
- [ ] Hero-Sektion mit bg-base-dark und pt-32/pt-40 für Header-Abstand
- [ ] Bei Hero-Sektion: optionales Hintergrundbild mit `<Image fill unoptimized aria-hidden className="object-cover opacity-15" style={{ filter: 'grayscale(0.6) brightness(0.5)' }} />`
- [ ] `<Section>` für Hauptinhalt
- [ ] `<CallToAction />` am Ende
- [ ] JSON-LD Schema (bei Service- und Blog-Seiten)
- [ ] Sitemap in `app/sitemap.ts` ergänzen
- [ ] Bei dynamischen Routen: `generateStaticParams()` implementieren
- [ ] `params` mit `await` entpacken
