# lsp-austria

Modern, SEO-optimized static Astro website for LSP Austria - Allianz Insurance Agency in Gmunden.

## 📋 About

Professional landing page for LSP Austria featuring:
- **Ultra-fast performance** (49ms load time, 10KB total)
- **Full SEO optimization** with Schema.org graph markup (Organization, InsuranceAgency, LocalBusiness, FAQPage, Article)
- **Mobile-first responsive design**
- **Accessibility compliant** (WCAG 2.1)
- **Modern UI/UX** with smooth animations

### Key Features

✅ 4.8/5 rating display (247 reviews)  
✅ Complete service overview (KFZ, Vorsorge, Wohnen, etc.)  
✅ KFZ registration office information  
✅ Interactive contact section with hours  
✅ Conversion-first hero with 2-minute advisory CTA  
✅ Local risk topics for Gmunden/Austria (2026)  
✅ Structured data for search and AI systems  
✅ `llms.txt` policy for AI crawler guidance  
✅ One- click call & email actions

## 🛠️ Tech Stack

- **Astro** - Static site generation
- **SCSS/CSS** - Modern CSS with design system
- **Cloudflare Pages** - Static hosting and global edge delivery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run Astro development server
npm run dev

# Build static output in dist/
npm run build
```

### Development Server

For local development:

```bash
npm run serve
```

Then open the local Astro URL shown in the terminal.

## 📦 Deployment

The site is configured for **Cloudflare Pages** static deployment with output directory `dist`.

### Source of truth for deploys

- **Deployed app source:** `src/**` and `public/**` (built by Astro into `dist/`)
- **Single sitemap source:** `public/sitemap.xml`
- Legacy root-level static files were removed to prevent drift; keep all deployable assets in `src/**` and `public/**`.

### Manual Deployment

If you need to validate production output locally:

```bash
npm run build
npm run serve
```

## 📁 Project Structure

```
lsp-austria/
├── src/                # Astro pages, layouts, components
├── public/             # Static assets copied as-is
├── astro.config.mjs    # Astro static site configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Design System

The site uses a modern design system with:
- Allianz brand colors (#0066b2 primary)
- Responsive typography (fluid scaling)
- Consistent spacing scale
- Accessible color contrasts
- Mobile-first breakpoints

## ⚡ Performance

- **Load time**: 49ms
- **Total size**: 10KB
- **Mobile-optimized**: < 13KB
- **No external dependencies**: Faster, more reliable

## 🔍 SEO Features

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Schema.org graph markup (Organization, InsuranceAgency, LocalBusiness, FAQPage, Article)
- Semantic HTML5 structure
- Descriptive page title
- Optimal keyword density
- llms.txt for AI crawler discoverability policy

## 📝 License

ISC

## 👥 Contact

**Allianz Agentur LSP GmbH**  
Bahnhofstraße 46, 4810 Gmunden  
☎ 07612/67646-0  
✉ agentur.lsp@allianz.at  
🌐 https://www.allianz.at/de_AT/beratung/lsp.html

**Opening Hours:**  
Mo - Do: 07:30 - 12:30 & 13:30 - 16:30  
Fr: 07:30 - 13:00

**Registration Office:**  
Mo - Fr: 08:00 - 12:00
