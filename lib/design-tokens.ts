/** Typed design token constants — single source of truth.
 *  These mirror the @theme values in globals.css.
 *  Use in non-Tailwind contexts (e.g. inline styles, canvas, charts).
 */

export const colors = {
  base: '#1a1a1a',
  baseDark: '#0f0f0f',
  surface: '#202020',
  elevated: '#242424',

  foreground: '#f5f5f5',
  foregroundMuted: '#b8b8b8',
  foregroundSubtle: '#8a8a8a',

  accent: '#2563eb',
  accentLight: '#3b82f6',
  accentDark: '#1d4ed8',
  accentSubtle: '#1e3a5f',
  accentFg: '#ffffff',

  border: '#2a2a2a',
  borderStrong: '#333333',
  borderBright: '#404040',

  success: '#22c55e',
  warning: '#f59e0b',
} as const

export const fontSizes = {
  xs: '0.875rem',   // 14px
  sm: '0.9375rem',  // 15px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
} as const

export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2.5rem',   // 40px
  xl: '4rem',     // 64px
  '2xl': '6rem',  // 96px
} as const

export const radii = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
} as const

export const shadows = {
  card: '0 2px 8px rgba(0,0,0,0.4)',
  cardHover: '0 8px 24px rgba(0,0,0,0.5)',
  glow: '0 0 24px rgba(37,99,235,0.15)',
} as const

export type Color = keyof typeof colors
