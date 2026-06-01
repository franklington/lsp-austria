import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SchemaOrg from '@/components/sections/SchemaOrg'
import '../styles/globals.css'
import '../styles/theme.css'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: 'LSP Gmunden - Versicherung & Vorsorge',
    template: '%s | LSP Gmunden',
  },
  description:
    'LSP Gmunden: Ihr Versicherungspartner für KFZ, Hausrat, Lebensversicherung und KFZ-Zulassung. ☎ 07612/67646-0 | Bahnhofstraße 46',
  metadataBase: new URL('https://lsp-gmunden.at'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={cn("bg-bgDark2", "font-sans", geist.variable)}>
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="theme-color" content="#1e1f23" />
        <SchemaOrg />
      </head>
      <body className="bg-bgDark2 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
