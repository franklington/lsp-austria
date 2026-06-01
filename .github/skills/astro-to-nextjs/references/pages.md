# Pages Reference — Content & Metadata Mapping

## Page Inventory

| Route | Source File | Metadata |
|-------|-------------|----------|
| `/` | `src/pages/index.astro` | title: "LSP Gmunden – Ihr Versicherungsmakler", robots: index |
| `/leistungen` | `src/pages/leistungen.astro` | title: "Leistungen", robots: index |
| `/angebot` | `src/pages/angebot.astro` | title: "Angebot anfordern", robots: index |
| `/themen` | `src/pages/themen.astro` | title: "Themen", robots: index |
| `/risikothemen` | `src/pages/risikothemen.astro` | title: "Risikothemen", robots: index |
| `/risikothemen/januar-2026-hochwasser-sturm` | `src/pages/risikothemen/januar-2026-hochwasser-sturm.astro` | See below |
| `/risikothemen/februar-2026-cyberrisiken-kmu` | `src/pages/risikothemen/februar-2026-cyberrisiken-kmu.astro` | See below |
| `/risikothemen/maerz-2026-e-bike-e-mobilitaet` | `src/pages/risikothemen/maerz-2026-e-bike-e-mobilitaet.astro` | See below |
| `/datenschutz` | `src/pages/datenschutz.astro` | robots: noindex, nofollow |
| `/impressum` | `src/pages/impressum.astro` | robots: noindex, nofollow |

---

## `generateMetadata()` Pattern

```tsx
// app/leistungen/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Unsere Versicherungsleistungen …',
  alternates: { canonical: 'https://lsp-gmunden.at/leistungen' },
}
```

For noindex pages:
```tsx
export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: false },
}
```

---

## Page: `/` — Homepage (`app/page.tsx`)

**Sections** (in order):
1. `<Hero />` — headline from site-content, CTA buttons: "Jetzt Angebot" → `/angebot`, "Alle Leistungen" → `/leistungen`
2. `<ServiceCards services={services} />` — all 6 services
3. `<MonthlyTopics topics={monthlyTopics} />` — 3 cards with links to detail pages
4. `<ContactSection />` — map consent + contact info

**Schema.org** in `<head>` via `<SchemaOrg />` (Organization, InsuranceAgency, AggregateRating 4.8/5, 247 reviews)

**Intro animation**: wrap page with `<div className="page-intro">` to trigger CSS animation

---

## Page: `/leistungen` — Services

**Sections**:
1. Page header with title "Unsere Leistungen"
2. `<ServiceCards services={services} />` — full grid
3. CTA section: "Angebot anfordern" → `/angebot`, phone link

---

## Page: `/angebot` — Quote Request

**Form fields** (all `<input>`/`<textarea>`):
- Name (text)
- Email (email)
- Phone (tel, optional)
- Topic (select — options from services array titles + "Sonstiges")
- Message (textarea)

**Submission**: `handleSubmit` builds `mailto:agentur@lsp-austria.at?subject=...&body=...` and triggers `window.location.href`.

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const subject = encodeURIComponent(`Anfrage: ${form.topic}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`)
  window.location.href = `mailto:agentur@lsp-austria.at?subject=${subject}&body=${body}`
}
```

Mark as `'use client'` for form state.

---

## Page: `/themen` — Topics Index

Renders a list of monthly topic cards from `data/monthly-topics.ts`. Each card links to `/risikothemen/[slug]`.

---

## Page: `/risikothemen` — Risk Topics Overview

**Sections**:
1. Page hero with title "Risikothemen"
2. 6 fixed topic cards (hardcoded content from the original page)
3. 3 monthly topic cards from `data/monthly-topics.ts`
4. FAQ section (3 general FAQ items, `<FaqAccordion />`)

---

## Monthly Topic Pages

All three follow the same structure. Mark as Server Component (no client state needed).

### `/risikothemen/januar-2026-hochwasser-sturm`
- Title: "Hochwasser & Sturm – Was Ihre Versicherung abdeckt"
- Intro paragraph about flood/storm coverage
- FAQ accordion: 3 items about Haushaltsversicherung, Elementarschäden, Schadensfall

### `/risikothemen/februar-2026-cyberrisiken-kmu`
- Title: "Cyberrisiken für KMU – So schützen Sie Ihr Unternehmen"
- FAQ accordion: 3 items about Ransomware, Betriebsunterbrechung, Incident Response

### `/risikothemen/maerz-2026-e-bike-e-mobilitaet`
- Title: "E-Bike & E-Mobilität – Versicherungsschutz für neue Mobilitätsformen"
- FAQ accordion: 3 items about E-Bike coverage, Wallbox, E-Auto

---

## Page: `/datenschutz` — Privacy Policy

Robots: `noindex, nofollow`. Long-form legal content from the original page.

Sections:
- Hosting (Cloudflare Pages)
- Karten (OpenStreetMap, only loaded after consent)
- Cookies (keine automatischen Cookies)
- Kontaktformular (mailto, no data stored)
- Controller contact details from `data/site-content.ts`

---

## Page: `/impressum` — Legal Notice

Robots: `noindex, nofollow`. Company details from `data/site-content.ts`:
- Legal name, address, FN, Landesgericht, Gründungsdatum, Stammkapital
- Managing directors (GF): Franz Adolf Leitner, Thomas Sonntagbauer
- Shareholders: LEITNER Investments (65%), SONNTAGBAUER Investments (35%)
- Supervisory authority: FMA (Finanzmarktaufsicht)
- Professional association, liability insurance info
