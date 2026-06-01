---
name: seo
description: "Use when: adding SEO metadata, creating JSON-LD structured data, updating the sitemap, writing meta descriptions, or optimizing a page for search engines at LSP Austria."
---

# LSP Austria SEO Skill

## Zweck

Generiert SEO-optimierte Metadata, JSON-LD Schemas und Sitemap-Einträge für alle LSP Austria Seiten.

## generateMetadata() Vorlage

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seitenname',               // → "Seitenname | LSP Austria"
  description: 'Kurzbeschreibung (max. 160 Zeichen). Lokale Keywords + Benefit + CTA.',
  keywords: ['Versicherung', 'Gmunden', 'Österreich'],  // optional
  alternates: {
    canonical: 'https://lsp-gmunden.at/route/',
  },
  openGraph: {
    title: 'OG-Titel (kann von title abweichen)',
    description: 'OG-Beschreibung',
    url: 'https://lsp-gmunden.at/route/',
    images: [{ url: '/og/og-seite.png', width: 1200, height: 630 }],  // optional
  },
}
```

## Meta-Description Formel

Format: `[Hauptkeyword] in [Ort]. [Vorteil 1]. [Vorteil 2]. [Marke].`

Beispiele:
- "KFZ-Versicherung in Gmunden abschließen. Persönliche Beratung seit 2006. Haftpflicht, Kasko und mehr. LSP Austria."
- "KFZ-Zulassung in Gmunden: Anmeldung, Abmeldung, Bezirke GM/KI/VB/WL. Mo–Fr 8–12 Uhr. LSP Consulting GmbH."

## JSON-LD Schemas nach Seitentyp

### Home → InsuranceAgency

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'LSP Consulting GmbH',
  alternateName: 'LSP Austria',
  url: 'https://lsp-gmunden.at',
  telephone: '+43076126764600',
  email: 'agentur@lsp-austria.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 46',
    addressLocality: 'Gmunden',
    postalCode: '4810',
    addressCountry: 'AT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 47.925358, longitude: 13.787584 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '247', bestRating: '5' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '07:30', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '13:30', closes: '16:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '07:30', closes: '13:00' },
  ],
  priceRange: '€€',
  foundingDate: '2006',
}
```

### Service-Seite → Service

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.shortDescription,
  provider: {
    '@type': 'InsuranceAgency',
    name: 'LSP Consulting GmbH',
    url: 'https://lsp-gmunden.at',
  },
  areaServed: { '@type': 'City', name: 'Gmunden' },
}
```

### Blog-Artikel → Article

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  author: { '@type': 'Organization', name: 'LSP Consulting GmbH', url: 'https://lsp-gmunden.at' },
  publisher: { '@type': 'Organization', name: 'LSP Consulting GmbH', url: 'https://lsp-gmunden.at' },
}
```

### BreadcrumbList (für innere Seiten)

```tsx
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://lsp-gmunden.at/' },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://lsp-gmunden.at/leistungen/' },
    { '@type': 'ListItem', position: 3, name: service.title, item: `https://lsp-gmunden.at/leistungen/${service.slug}/` },
  ],
}
```

## JSON-LD einbinden

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

## Sitemap (app/sitemap.ts)

Neuen Eintrag hinzufügen:

```tsx
{ url: `${BASE}/neue-route/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }
```

Prioritäten-Skala:
- 1.0: Startseite
- 0.9: KFZ-Zulassung (Unique Service)
- 0.8: Service-Seiten, Leistungsübersicht
- 0.7: Kontakt, Blog-Index
- 0.6: Blog-Artikel
- 0.5: SEO-Themen-Seiten
- Nicht in Sitemap: Impressum, Datenschutz

## Lokale SEO Keywords

| Thema | Keywords |
|---|---|
| KFZ | "KFZ-Versicherung Gmunden", "Auto versichern Gmunden", "Kasko Salzkammergut" |
| Zulassung | "KFZ-Zulassung Gmunden", "Kennzeichen GM", "Auto anmelden Gmunden" |
| Wohnen | "Haushaltsversicherung Gmunden", "Eigenheimversicherung Salzkammergut" |
| Vorsorge | "Pensionsvorsorge Gmunden", "Lebensversicherung Gmunden" |
| Gesundheit | "Krankenversicherung Gmunden", "Unfallversicherung Gmunden" |
| Unternehmen | "Betriebshaftpflicht Gmunden", "Gewerbeversicherung Salzkammergut" |

## robots: index: false

Nur für: `/impressum/` und `/datenschutz/`

```tsx
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
```
