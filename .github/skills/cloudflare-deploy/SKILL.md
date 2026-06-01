---
name: cloudflare-deploy
description: "Use when: deploying LSP Austria to Cloudflare Pages, debugging build issues, configuring wrangler.toml, setting up environment variables, or running a production build."
---

# LSP Austria Cloudflare Deploy Skill

## Zweck

Anleitungen für Build, Export und Deployment der LSP Austria Website auf Cloudflare Pages.

## Lokale Entwicklung

```bash
# Dev-Server starten (Port 3001)
npm run dev

# Produktions-Build (statischer Export nach out/)
npm run build

# Build-Output prüfen
ls -la out/
```

## Build-Konfiguration

### next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',        // Statischer HTML-Export
  trailingSlash: true,     // /route/ statt /route (Cloudflare-konform)
  images: {
    unoptimized: true,     // Kein Image-Optimization-Server bei Static Export
  },
}

export default nextConfig
```

### wrangler.toml

```toml
name = "lsp-austria"
pages_build_output_dir = "out"

[build]
command = "npm run build"
```

## Deployment-Workflow

### 1. Lokaler Build-Test

```bash
# Clean Build
rm -rf out/ .next/

# Build ausführen
npm run build

# Output prüfen
ls out/          # Sollte index.html, leistungen/, etc. enthalten
cat out/sitemap.xml  # Sitemap prüfen
```

### 2. Cloudflare Pages (Git-Integration)

Cloudflare Pages ist mit dem GitHub-Repository verbunden.
Bei jedem Push auf `main` wird automatisch gebaut.

**Build-Einstellungen in Cloudflare Pages Dashboard:**
- Build command: `npm run build`
- Build output directory: `out`
- Node.js Version: 20 (oder 22)

### 3. Manuelles Deployment

```bash
# Mit wrangler CLI
npx wrangler pages deploy out --project-name lsp-austria

# Vorschau-Deployment
npx wrangler pages deploy out --project-name lsp-austria --branch preview
```

## Häufige Build-Fehler

### "params is not awaited"

```tsx
// ✗ Falsch
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
}

// ✓ Richtig (Next.js 16)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

### "generateStaticParams() fehlt"

Jede dynamische Route MUSS `generateStaticParams()` haben:

```tsx
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
```

### "next/image ohne unoptimized"

```tsx
// ✓ Immer unoptimized bei static export
<Image src="/logo.svg" alt="Logo" width={36} height={36} unoptimized />
// oder global in next.config.ts: images: { unoptimized: true }
```

### "Server Component verwendet fs.readFile"

Bei static export ist `fs` in Server Components erlaubt – wird zur Build-Zeit ausgeführt.
Client Components (`'use client'`) dürfen kein `fs` verwenden.

## Umgebungsvariablen

Cloudflare Pages Umgebungsvariablen werden im Dashboard unter `Settings > Environment variables` gesetzt.

Im Code:
```typescript
const apiKey = process.env.MY_SECRET  // Server-side only
```

**Wichtig:** Für Static Export gibt es keine Runtime-Variablen. Alle Variablen werden zur Build-Zeit eingebettet (falls mit `NEXT_PUBLIC_` Prefix).

## Redirects

Die Datei `public/_redirects` wird nach `out/_redirects` kopiert und von Cloudflare Pages gelesen:

```
/old-path  /new-path  301
/api/*     https://external-api.example.com/:splat  200
```

## Sitemap & Robots

- `app/sitemap.ts` → `out/sitemap.xml` (automatisch)
- `app/robots.ts` → `out/robots.txt` (automatisch)
- Prüfen: `cat out/sitemap.xml`

## Performance-Checkliste

- [ ] `npm run build` läuft ohne Fehler durch
- [ ] `out/` enthält alle erwarteten Routen
- [ ] `out/sitemap.xml` enthält alle Seiten
- [ ] `out/robots.txt` ist korrekt
- [ ] Bilder in `public/` sind optimiert (WebP/AVIF wo möglich)
- [ ] Inter-Schriften sind in `public/fonts/` vorhanden
- [ ] `public/_redirects` ist korrekt
