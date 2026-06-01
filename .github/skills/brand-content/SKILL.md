---
name: brand-content
description: "Use when: writing German copy for LSP Austria (insurance topics, landing pages, service descriptions, hero headlines, CTAs, SEO descriptions). Generates Austrian-German content in brand voice – Sie-Form, warm, regional, no anglicisms."
---

# LSP Austria Brand Content Skill

## Zweck

Generiert deutschen Inhalt für alle Seiten und Komponenten der LSP Austria Website – in der definierten Markenstimme.

## Markenstimme

### Kernprinzipien

1. **Direkt** – Keine Floskeln, keine unnötigen Füllwörter
2. **Warm** – Menschlich, nicht kühl-korporativ
3. **Regional** – Bezug zu Gmunden, Salzkammergut, Oberösterreich
4. **Professionell** – Kompetenz zeigen, ohne zu dozieren

### Sie-Form immer

```
✓ "Wir beraten Sie persönlich."
✗ "Wir beraten dich persönlich."
```

### Keine Anglizismen in Fließtexten

```
✓ Leistung (nicht: Service)
✓ Beratung (nicht: Consulting)
✓ Fahrzeug (nicht: Vehicle)
✓ Versicherungsschutz (nicht: Coverage)
✓ Persönlich (nicht: Personal)
```

### Zahlenformat (de-AT)

```
✓ 4,8 Sterne (Dezimalkomma)
✓ 247 Bewertungen (kein Tausenderpunkt unter 9.999)
✓ 4.810 Gmunden (Tausenderpunkt ab 10.000)
✓ 13:30 Uhr (kein 1:30 PM)
```

## Headline-Formeln

### Hero-Headlines (H1)
- Format: "[Thema] – [emotionaler Zusatz]"
- Beispiele:
  - "Ihr Versicherungspartner in Gmunden seit 2006."
  - "KFZ-Versicherung, die zu Ihnen passt."
  - "Vorsorgen – mit Plan und Weitblick."

### Eyebrow-Texte (Über H2)
- Kurz, präzise, in Großbuchstaben
- Beispiele: "Unsere Leistungen", "KFZ-Zulassung · Gmunden", "Über LSP Austria"

### CTAs
- Primär: "Termin vereinbaren", "Jetzt anrufen", "Beratung anfragen"
- Sekundär: "Leistungen entdecken", "Mehr erfahren", "Alle Leistungen ansehen"

## Schlüsselbotschaften (immer wiederholen)

| Botschaft | Formulierung |
|---|---|
| Persönlich | "Kein Call-Center. Kein Chatbot. Ein echter Ansprechpartner." |
| Lokal | "Seit 2006 in Gmunden – Ihr Partner vor Ort." |
| Unabhängig | "Als Makler vertreten wir Ihre Interessen – nicht die der Versicherer." |
| Vertrauenswürdig | "4,8 von 5 Sternen – 247 Google-Bewertungen." |
| Einfach | "Versicherung, die man versteht." |

## Tonalitäts-Beispiele

### Zu formal (vermeiden)

> "LSP Consulting GmbH bietet umfangreiche Versicherungsdienstleistungen an, die auf die individuellen Bedürfnisse unserer Kunden ausgerichtet sind."

### Richtig (direkt, warm)

> "Was wir tun? Wir hören zu, erklären verständlich und finden die Versicherung, die wirklich zu Ihnen passt – nicht die teuerste, sondern die richtige."

## Inhaltsstruktur für Service-Seiten

```markdown
## [Headline mit emotionalem Hook]
[2-3 Sätze: Problem → Lösung → Vertrauen]

## Was ist inbegriffen?
[Features-Liste mit Bullet Points]

## Warum LSP Austria?
[3-4 Vorteile]

## [Spezifische Frage]
[FAQ oder Erklärung]

## Persönliche Beratung in Gmunden
[Kontakt-CTA]
```

## MDX-Frontmatter Vorlage

```yaml
---
title: "Leistungsname Gmunden – kurze Beschreibung"
description: "Meta-Description (160 Zeichen): Was, Wo (Gmunden), Wer (LSP Austria), Benefit."
date: "2024-MM-DD"
category: "KFZ & Fahrzeuge | Wohnen & Recht | Sparen & Vorsorge | Gesundheit & Freizeit | Unternehmen | KFZ-Zulassung"
readingTime: "X Min."
image: "/images/blog-{slug}.jpg"
---
```

> **Bildauswahl:** Nur lokal gespeicherte Bilder verwenden (`public/images/`). Keine US-amerikanischen Motive (Skylines, US-Kennzeichen). Bevorzugt: Alpine Landschaften, europäische Straßen, neutrale Büro-/Alltagsszenen. Credits immer in `lib/image-credits.ts` eintragen.

## Häufige Versicherungsbegriffe (Deutsch)

| Englisch | Deutsch (de-AT) |
|---|---|
| Premium | Prämie / Versicherungsbeitrag |
| Coverage | Versicherungsschutz / Deckung |
| Claim | Schadenfall / Schadenmeldung |
| Policy | Polizze (AT) / Vertrag |
| Deductible | Selbstbehalt / Selbstbeteiligung |
| Liability | Haftpflicht |
| Comprehensive | Vollkasko / Allgefahrenversicherung |
