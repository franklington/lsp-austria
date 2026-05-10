# lsp-austria

Modern, SEO-optimized landing page for LSP Austria in Gmunden.

## 📋 About

Professional landing page for LSP Austria featuring:
- **Ultra-fast performance** (49ms load time, 10KB total)
- **Full SEO optimization** with Schema.org local business markup
- **Mobile-first responsive design**
- **Accessibility compliant** (WCAG 2.1)
- **Modern UI/UX** with smooth animations

### Key Features

✅ 4.8/5 rating display (247 reviews)  
✅ Complete service overview (KFZ, Vorsorge, Wohnen, etc.)  
✅ KFZ registration office information  
✅ Interactive contact section with hours  
✅ Structured data for search engines  
✅ One- click call & email actions

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with Schema.org
- **SCSS/CSS** - Modern CSS with design system
- **GitHub Actions** - Automated deployment via FTP

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development mode with live SCSS compilation
npm run dev

# Build for production (minified CSS)
npm run prod
```

### Development Server

For local development:

```bash
npm run serve
```

Then open http://localhost:8080 in your browser. The server will automatically open your default browser.

## 📦 Deployment

The site automatically deploys to production when changes are pushed to the `main` branch via GitHub Actions. The workflow:

1. Checks out the code
2. Installs dependencies
3. Compiles SCSS to minified CSS
4. Deploys via FTP to easyname.eu hosting

### Manual Deployment

If you need to deploy manually:

```bash
npm run prod
# Then upload the files via FTP
```

## 📁 Project Structure

```
lsp-austria/
├── index.html          # Main HTML file with SEO & Schema.org
├── main.scss           # SCSS source styles with design system
├── main.css            # Compiled CSS (auto-generated)
├── Favicon.svg         # Site favicon
├── favicons/           # Multi-platform favicons
├── .github/workflows/  # GitHub Actions deployment
└── package.json        # Dependencies and scripts
```

## 🎨 Design System

The site uses a modern design system with:
- Neutral monochrome brand colors
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
- Schema.org LocalBusiness markup
- Semantic HTML5 structure
- Descriptive page title
- Optimal keyword density

## 📝 License

ISC

## 👥 Contact

**LSP Consulting GmbH**  
Bahnhofstraße 46, 4810 Gmunden  
☎ 07612/67646-0  
✉ agentur@lsp-austria.at  
🌐 https://www.evi.gv.at/f/276035i

**Opening Hours:**  
Mo - Do: 07:30 - 12:30 & 13:30 - 16:30  
Fr: 07:30 - 13:00

**Registration Office:**  
Mo - Fr: 08:00 - 12:00
