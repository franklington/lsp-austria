# Design System Reference

## Design Tokens (CSS Custom Properties)

Port from `src/styles/main.scss` into `styles/globals.css` under `:root {}`.

### Colors

```css
:root {
  /* Backgrounds */
  --bg-dark-1: #171b1b;
  --bg-dark-2: #1e1f23;
  --bg-dark-3: #282d2e;
  --bg-dark-3-hover: #313638;

  /* Text */
  --text-primary: rgb(255, 255, 255);
  --text-secondary: rgb(174, 178, 183);
  --text-muted: rgb(156, 163, 175);

  /* Borders */
  --border-main: rgba(255, 255, 255, 0.08);
  --border-main-darker: rgba(255, 255, 255, 0.14);

  /* Accent (from Tailwind theme primary) */
  --color-primary: rgb(243, 244, 246);
  --color-secondary: rgb(209, 213, 219);
}
```

### Tailwind Theme Overrides

Port from `src/styles/Theme.css` into `styles/theme.css`:

```css
@import 'tailwindcss';

@theme {
  --color-primary: rgb(243, 244, 246);
  --color-secondary: rgb(209, 213, 219);
  --color-text: rgb(255, 255, 255);
  --color-text-secondary: rgb(174, 178, 183);
  --color-bgDark1: #171b1b;
  --color-bgDark2: #1e1f23;
  --color-bgDark3: #282d2e;
  --color-bgDark3Hover: #313638;
  --color-mainBorder: rgba(255,255,255,0.08);
  --color-mainBorderDarker: rgba(255,255,255,0.14);
}
```

### Typography

```css
:root {
  --font-sans: 'Inter Variable', system-ui, -apple-system, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
}
```

### Spacing

```css
:root {
  --spacing-section: 5rem;    /* section padding top/bottom */
  --spacing-container: 1.5rem; /* horizontal container padding */
  --container-max: 1200px;
}
```

### Shadows & Effects

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.5);
  --shadow-card: 0 4px 24px rgba(0,0,0,0.6);
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
}
```

---

## Component Specifications

### `Button.tsx`

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 'default' | 'large'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}
```

CSS classes to apply (from `main.scss`):
- `.btn` — base: `padding: 0.625rem 1.25rem; border-radius: var(--radius-sm); font-weight: 500; transition: var(--transition-base)`
- `.btn-primary` — `background: var(--color-primary); color: var(--bg-dark-1)`
- `.btn-secondary` — `background: transparent; border: 1px solid var(--border-main-darker); color: var(--text-primary)`
- `.btn-large` — larger padding + font size
- `.outlined-button` — bordered style from Theme.css
- `.contained-button` — filled style from Theme.css

### `Card.tsx`

The `.card` class from `Theme.css`:
```css
.card {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-main);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
}
.card:hover {
  background: rgba(255,255,255,0.07);
  border-color: var(--border-main-darker);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}
```

### `Header.tsx`

State:
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false)
const menuRef = useRef<HTMLDivElement>(null)
```

Behavior (port from `src/components/Header.astro` + `public/main.js`):
- `isMenuOpen = true` → add `overflow-hidden` to `document.body`, show overlay
- focus first focusable element in menu on open
- Trap Tab and Shift+Tab within menu while open
- Escape key closes menu
- `useEffect` cleanup removes event listeners on unmount
- Window resize above 1024px → auto-close mobile menu

Nav links:
```tsx
const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/themen', label: 'Themen' },
  { href: '#contact', label: 'Kontakt' },
]
```

Mobile menu phone display: from `companyProfile.phone` in `data/site-content.ts`

### `ServiceCards.tsx`

```tsx
interface ServiceCardsProps {
  services: Service[]
}
```

Renders a CSS grid of cards. Each card has:
- SVG icon (cycle through 6 hardcoded icon paths by index % 6)
- `service.title` as heading
- `service.description` as paragraph

### `FaqAccordion.tsx`

```tsx
interface FaqItem {
  q: string
  a: string
}
interface FaqAccordionProps {
  items: FaqItem[]
  title?: string
}
```

Use `<details>`/`<summary>` (browser-native, no JS needed):
```tsx
<details className="faq-item">
  <summary className="faq-question">{item.q}</summary>
  <div className="faq-answer">{item.a}</div>
</details>
```

### `SchemaOrg.tsx`

```tsx
// Renders <script type="application/ld+json"> for SEO
// Schemas: Organization, InsuranceAgency, AggregateRating (4.8★, 247 reviews)
// Data sourced from data/site-content.ts
```

### `ContactSection.tsx`

Map consent flow:
1. Show consent panel with text + "Karte laden" button
2. On consent: render `<iframe>` with OpenStreetMap embed
3. Persist consent in `localStorage` key `'mapConsent'`
4. Initialize from `localStorage` in `useEffect` to avoid SSR mismatch

---

## Font Setup

In `styles/globals.css`:
```css
@font-face {
  font-family: 'Inter Variable';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/inter-latin-wght-normal.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
    U+2212, U+2215, U+FEFF, U+FFFD;
}
```

Preload in `app/layout.tsx`:
```tsx
<link
  rel="preload"
  href="/fonts/inter-latin-wght-normal.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```
