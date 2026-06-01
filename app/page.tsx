import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import ServiceCards from '@/components/sections/ServiceCards'
import MonthlyTopics from '@/components/sections/MonthlyTopics'
import ContactSection from '@/components/sections/ContactSection'
import { services } from '@/data/services'
import { monthlyTopics } from '@/data/monthly-topics'

export const metadata: Metadata = {
  title: 'LSP Gmunden - Versicherung & Vorsorge | KFZ, Hausrat & Zulassung',
  description:
    'LSP Gmunden: Ihr Versicherungspartner für KFZ, Hausrat, Lebensversicherung und KFZ-Zulassung. ☎ 07612/67646-0 | Bahnhofstraße 46',
  keywords: 'LSP Gmunden, Versicherung Gmunden, KFZ Versicherung, Zulassungsstelle, Hausratversicherung, Lebensversicherung',
  alternates: { canonical: 'https://lsp-gmunden.at/' },
  openGraph: {
    title: 'LSP Gmunden - Versicherung & Vorsorge',
    description: 'Ihr Versicherungspartner in Gmunden für KFZ, Vorsorge und Zulassung',
    type: 'website',
    url: 'https://lsp-gmunden.at/',
    locale: 'de_AT',
    siteName: 'LSP Gmunden',
    images: [{ url: 'https://lsp-gmunden.at/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSP Gmunden - Versicherung & Vorsorge',
    description: 'Ihr Versicherungspartner in Gmunden für KFZ, Vorsorge und Zulassung',
    images: ['https://lsp-gmunden.at/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="services">
        <div className="container">
          <h2 className="section-title">So starten wir</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18M12 3v18" />
                </svg>
              </div>
              <h3>1. Bedarf klären</h3>
              <p>Kurzes Erstgespräch, klare Prioritäten und ein strukturierter Überblick über Ihre Risiken.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </div>
              <h3>2. Optionen vergleichen</h3>
              <p>Sie erhalten nachvollziehbare Vorschläge mit verständlichen Deckungen und Kosten.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                </svg>
              </div>
              <h3>3. Sicher entscheiden</h3>
              <p>Wir finalisieren gemeinsam mit persönlicher Beratung vor Ort in Gmunden.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="services">
        <div className="container">
          <h2 className="section-title">Leistungen im Überblick</h2>
          <ServiceCards items={services} />
          <div className="hero-cta">
            <Link href="/angebot" className="btn btn-primary">Angebot anfragen</Link>
          </div>
        </div>
      </section>

      <MonthlyTopics topics={monthlyTopics} />

      <ContactSection />
    </>
  )
}
