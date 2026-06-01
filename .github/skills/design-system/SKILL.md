---
name: design-system
description: "Use when: creating a new UI component, adding a section, building a layout element, or asking how to apply brand colors/tokens for LSP Austria. Generates components that match the dark design system with deep-blue accent."
---

# LSP Austria Design System Skill

## Zweck

Generiert React/TypeScript-Komponenten für die LSP Austria Website, die dem Tailwind v4 Dark Design System entsprechen.

## Vorgehen bei neuen Komponenten

### 1. Dateipfad bestimmen

| Typ | Pfad |
|---|---|
| UI-Primitive (Button, Badge, etc.) | `components/ui/ComponentName.tsx` |
| Layout (Header, Footer, Nav) | `components/layout/ComponentName.tsx` |
| Seiten-Sektionen | `components/sections/SectionName.tsx` |

### 2. Client vs. Server Component

- **Server** (Standard): Keine State, kein Event-Handler, kein Browser-API
- **Client** (`'use client'`): useState, useEffect, onClick, Form-State, Map-Consent

### 3. Design-Tokens verwenden

Tailwind v4 generiert Utility-Klassen aus `@theme` in `globals.css`:

```tsx
// Hintergründe
className="bg-base"           // #1a1a1a – Seitenhintergrund
className="bg-base-dark"      // #0f0f0f – Footer, Hero
className="bg-surface"        // #202020 – Cards
className="bg-elevated"       // #242424 – Hover-State

// Text
className="text-foreground"         // #f5f5f5
className="text-foreground-muted"   // #b8b8b8
className="text-foreground-subtle"  // #8a8a8a

// Accent (Deep Blue)
className="bg-accent"         // #2563eb – CTAs, Buttons
className="bg-accent-light"   // #3b82f6 – Hover
className="text-accent"       // Links, Icons
className="bg-accent-subtle"  // #1e3a5f – Icon-Hintergründe
className="text-accent-fg"    // #ffffff – Text auf Accent-Bg

// Borders
className="border-border"         // #2a2a2a
className="border-border-strong"  // #333333
className="border-border-bright"  // #404040
```

### 4. Custom Utility-Klassen

```tsx
className="container-page"   // Zentrierter Container mit Padding
className="section-gap"      // py-20 lg:py-28
className="card-base"        // Dunkle Card (bg-surface + border + rounded-lg + p-6)
className="card-hover"       // Hover-Effekt (translateY + shadow)
className="focus-ring"       // Accessibility Focus-Ring
className="text-balance"     // text-wrap: balance für Headlines
```

### 5. Component-Vorlage

```tsx
// Server Component (default)
import { twMerge } from 'tailwind-merge'

interface MyComponentProps {
  title: string
  className?: string
}

export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={twMerge('card-base', className)}>
      <h3 className="text-foreground font-semibold text-base">{title}</h3>
    </div>
  )
}
```

```tsx
// Client Component (nur bei Bedarf)
'use client'
import { useState } from 'react'

export function InteractiveComponent() {
  const [active, setActive] = useState(false)
  return (
    <button
      onClick={() => setActive(!active)}
      className="bg-accent hover:bg-accent-light text-accent-fg px-4 py-2 rounded-[var(--radius-md)] transition-colors focus-ring cursor-pointer"
    >
      {active ? 'Aktiv' : 'Inaktiv'}
    </button>
  )
}
```

### 6. Sektion-Vorlage

```tsx
import { Section, SectionHeader } from '@/components/ui/Section'

export function MySection() {
  return (
    <Section id="mein-abschnitt" bg="dark">
      <SectionHeader
        eyebrow="Kategorie"
        title="Hauptüberschrift"
        description="Beschreibungstext in text-foreground-muted"
      />
      {/* Inhalt */}
    </Section>
  )
}
```

### 7. Icon-Verwendung

```tsx
import { Car, Home, Shield, Check, ArrowRight, Phone } from 'lucide-react'

// Icon mit Accent-Hintergrund (Standard für Features/Services)
<div className="w-11 h-11 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center">
  <Car className="w-5 h-5 text-accent-light" />
</div>
```

## Typografische Hierarchie

| Element | Tailwind-Klassen |
|---|---|
| Page H1 | `text-4xl lg:text-5xl font-bold text-foreground text-balance` |
| Section H2 | `text-3xl lg:text-4xl font-bold text-foreground text-balance` |
| Card H3 | `font-semibold text-foreground text-base` |
| Eyebrow | `text-accent text-sm font-semibold uppercase tracking-widest` |
| Body | `text-foreground-muted leading-relaxed` |
| Small / Meta | `text-foreground-subtle text-sm` |

## CTA-Button (Standard)

```tsx
<a
  href="/kontakt/"
  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-fg font-medium px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-150 focus-ring"
>
  Termin vereinbaren
  <ArrowRight className="w-4 h-4" />
</a>
```
