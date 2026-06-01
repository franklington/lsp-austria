import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = localFont({
  src: [
    {
      path: '../public/fonts/inter-latin-wght-normal.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-latin-ext-wght-normal.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lsp-gmunden.at'),
  title: {
    default: 'LSP Austria – Versicherung & Vorsorge Gmunden',
    template: '%s | LSP Austria',
  },
  description:
    'Persönliche Versicherungsberatung in Gmunden seit 2006. KFZ, Eigenheim, Vorsorge, Gesundheit und mehr. 4,8 Sterne – 247 Google-Bewertungen.',
  keywords: [
    'Versicherung',
    'Gmunden',
    'KFZ-Versicherung',
    'Vorsorge',
    'LSP Austria',
    'Versicherungsmakler',
    'Österreich',
    'Salzkammergut',
  ],
  authors: [{ name: 'LSP Consulting GmbH' }],
  creator: 'LSP Consulting GmbH',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://lsp-gmunden.at',
    siteName: 'LSP Austria – Versicherung & Vorsorge Gmunden',
    images: [
      {
        url: '/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'LSP Austria – Versicherung & Vorsorge Gmunden',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicons/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
