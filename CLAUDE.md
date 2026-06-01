# LSP Austria – Claude Code Instructions

## Project Overview

Next.js 15 (App Router, static export) website for LSP Austria, an insurance broker in Gmunden, Austria. Deployed to Cloudflare Pages. Tailwind CSS v4, TypeScript, MDX content.

## Key Commands

- `npm run dev` — dev server on port 3001
- `npm run build` — static export to `out/`

## Project Skills

Detailed skill instructions live in `.github/skills/`. Read the relevant skill file before starting any task in that area:

| Task | Skill file |
|---|---|
| Build a UI component, apply design tokens | `.github/skills/design-system/SKILL.md` |
| Write German copy, headlines, CTAs | `.github/skills/brand-content/SKILL.md` |
| Scaffold a new page (route, metadata, JSON-LD) | `.github/skills/page-builder/SKILL.md` |
| Create a Ratgeber article (MDX in content/blog/) | `.github/skills/ratgeber/SKILL.md` |
| SEO — metadata, schema, canonical URLs | `.github/skills/seo/SKILL.md` |
| Deploy to Cloudflare Pages | `.github/skills/cloudflare-deploy/SKILL.md` |

## Quick Reference

- **Accent color** is a CSS variable (`--color-accent`), not hardcoded — never use hex blue values like `#2563eb` directly in components
- **Map image filter** uses `.map-img` CSS class (not inline style) so theme overrides work
- **CTA banner** gradient uses `var(--gradient-cta)` — do not hardcode gradient colors
- **Ratgeber articles**: drop `.mdx` into `content/blog/` — sitemap and routes update automatically
- **Cloudflare Pages**: build command is set in the dashboard, not in `wrangler.toml`
- **Images**: always local in `public/images/`, no external hotlinks (DSGVO), credits in `lib/image-credits.ts`
- **Copy language**: Austrian German, Sie-form, no anglicisms in body text — see brand-content skill
