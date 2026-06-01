---
name: ratgeber
description: "Use when: creating a new Ratgeber article for LSP Austria. Creates MDX files in content/blog/ with correct frontmatter, Austrian-German brand voice, SEO-optimised structure, and prose-lsp formatting. Sitemap updates automatically."
---

# LSP Austria – Ratgeber Skill

## Zweck

Erstellt neue Ratgeber-Artikel als MDX-Dateien in `content/blog/`. Die Sitemap wird automatisch aktualisiert (via `getPostSlugs`). Es sind keine Änderungen an Routen oder `sitemap.ts` notwendig.

## Schritt-für-Schritt

### 1. Dateiname und Slug

- Datei: `content/blog/{slug}.mdx`
- Slug: Kleinbuchstaben, Bindestriche, kein Umlaute (`kfz-haftpflicht`, nicht `kfz-haftpflicht-österreich`)
- URL ergibt sich automatisch: `/ratgeber/{slug}/`

### 2. Frontmatter (Pflichtfelder)

```yaml
---
title: "Haupttitel: Untertitel mit Keyword"
description: "Meta-Description, max. 160 Zeichen. Was, Wo (Gmunden/Österreich), Benefit."
date: "YYYY-MM-DD"
category: "KFZ & Fahrzeuge"
readingTime: "X Min."
image: "/images/blog-{slug}.jpg"
---
```

**Verfügbare Kategorien:**
| Kategorie | Typische Themen |
|---|---|
| `KFZ & Fahrzeuge` | KFZ-Versicherung, Haftpflicht, Kasko, Zulassung |
| `Wohnen & Recht` | Haushalts-, Eigenheim-, Rechtsschutzversicherung |
| `Sparen & Vorsorge` | Lebensversicherung, Pensionsvorsorge, Fonds |
| `Gesundheit & Freizeit` | Kranken-, Unfall-, Reiseversicherung |
| `Unternehmen` | Betriebshaftpflicht, D&O, Cyber, Berufsunfähigkeit |

**readingTime:** Grobe Schätzung: ~200 Wörter pro Minute. 800 Wörter → "4 Min."

**image:** Lokal in `public/images/` ablegen. Credits in `lib/image-credits.ts` eintragen. Keine US-Motive (US-Kennzeichen, Skylines). Bevorzugt: Alpine Landschaften, europäische Alltagsszenen.

### 3. Inhalt-Vorlage (MDX)

```mdx
## [Hook: Problem oder Frage]

[2–3 Sätze Einleitung: Warum ist das Thema relevant? Bezug zu Österreich/Alltag.]

---

## [Erster Hauptabschnitt]

[Erklärung, Fakten, österreichisches Recht/Zahlen wo relevant]

### [Unterabschnitt falls nötig]

[Konkrete Beispiele, Listen, Tabellen]

---

## [Zweiter Hauptabschnitt]

...

---

## Tipps [zur Prämienoptimierung / zum richtigen Schutz / …]

1. **Tipp 1:** Kurze Erklärung
2. **Tipp 2:** Kurze Erklärung
3. **Tipp 3:** Kurze Erklärung

---

## Unser Tipp

Als Versicherungsmakler sind wir an keinen Anbieter gebunden. [1–2 Sätze zur Unabhängigkeit und persönlichen Beratung.]

**Sprechen Sie uns an – persönlich in Gmunden.**
```

### 4. Formatierungs-Konventionen

- `---` als Abschnitts-Trenner (wird als `<hr>` gerendert via `prose-lsp`)
- `**Fettdruck**` für Schlüsselbegriffe und wichtige Zahlen
- GFM-Tabellen für Vergleiche (remark-gfm ist aktiv)
- Keine `#` H1-Überschrift im Body – der Titel kommt aus dem Frontmatter
- H2 (`##`) für Hauptabschnitte, H3 (`###`) für Unterabschnitte
- Österreichische Fachbegriffe: *Polizze* (nicht Police), *Prämie* (nicht Beitrag/Premium), *Selbstbehalt* (nicht Franchise)

### 5. Qualitätscheckliste

- [ ] Slug enthält kein Umlaut, keine Sonderzeichen
- [ ] `description` ≤ 160 Zeichen
- [ ] `date` im Format `YYYY-MM-DD`
- [ ] `image` existiert in `public/images/` (oder bewusst weggelassen)
- [ ] Credits in `lib/image-credits.ts` eingetragen
- [ ] Inhalt in Sie-Form, kein Englisch in Fließtexten
- [ ] Österreich-Bezug (Recht, Zahlen, Institutionen wo relevant)
- [ ] Endet mit "Unser Tipp" und Gmunden-CTA
- [ ] readingTime entspricht ungefähr der tatsächlichen Länge

## Beispiel-Artikel Struktur

Aus `content/blog/kfz-versicherung-guide.mdx`:

```
Frontmatter → Frontmatter mit allen Pflichtfeldern
H2 → Überblick/Einführung ("Was ist X?")
H2 → Kern-Inhalt mit H3-Unterabschnitten
H2 → Vergleich oder Tabelle
H2 → Tipps (nummerierte Liste)
H2 → Unser Tipp (mit Gmunden-Referenz)
```

## Hinweise zur Infrastruktur

- **Route:** `app/ratgeber/[slug]/page.tsx` — kein Anfassen nötig
- **Sitemap:** `app/sitemap.ts` liest `content/blog/` automatisch via `getPostSlugs`
- **Rendering:** MDX via `next-mdx-remote/rsc` mit `remarkGfm`
- **Styling:** `prose-lsp` Klasse in `globals.css` (H2, H3, p, ul, ol, table, blockquote, code)
- **Bild im Hero:** Wenn `image` gesetzt, wird es als gedimmtes Hintergrundbild im Hero gezeigt (`opacity-15`, grayscale-Filter)
