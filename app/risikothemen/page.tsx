import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { monthlyTopics } from '@/data/monthly-topics'
import FaqAccordion from '@/components/sections/FaqAccordion'

export const metadata: Metadata = {
  title: 'Risikothemen 2026',
  description:
    'Risikothemen 2026 in Gmunden: Hochwasser, Cyberrisiken, E-Mobilität, Vorsorge und Präventionsmaßnahmen.',
  alternates: { canonical: 'https://lsp-gmunden.at/risikothemen' },
}

const faqItems = [
  {
    q: 'Wie schnell erhalten wir ein erstes Angebot?',
    a: 'Meist innerhalb eines kurzen Erstgesprächs. Für komplexere Fälle erhalten Sie eine strukturierte Nachreichung.',
  },
  {
    q: 'Ist die Beratung rein digital oder auch persönlich?',
    a: 'Beides: digital für schnelle Orientierung und persönlich vor Ort in Gmunden für die finale Entscheidung.',
  },
  {
    q: 'Welche Risiken werden lokal zuerst geprüft?',
    a: 'Wir priorisieren regionale Wetterrisiken, Mobilität, Haushaltsrisiken sowie Cyber- und Haftungsfragen bei Unternehmen.',
  },
]

export default function RisikothemenPage() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">Risikothemen 2026 in Gmunden &amp; Österreich</h1>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3>Hochwasser &amp; Sturm</h3>
            <p>Absicherung gegen Extremwetter, Präventionsmaßnahmen und sinnvolle Selbstbehalt-Strategien.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <path d="M9 6h6M9 10h6M9 14h6M9 18h6" />
              </svg>
            </div>
            <h3>Cyberrisiken für KMU</h3>
            <p>Schutz vor Ransomware, Phishing und Betriebsunterbrechung inklusive Notfallunterstützung.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3>Prämienentwicklung im Haushalt</h3>
            <p>Wie Inflation und Schadenslagen Prämien beeinflussen – und wo Optimierung möglich ist.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17h2m6 0h6M7 17a2 2 0 1 0 4 0m6 0a2 2 0 1 0 4 0M5 9l1.44-2.88A2 2 0 0 1 8.22 5h7.56a2 2 0 0 1 1.78 1.12L19 9m0 0h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1M5 9H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1" />
              </svg>
            </div>
            <h3>E-Bike &amp; E-Mobilität</h3>
            <p>Deckung für E-Bikes, Wallboxen und Haftungsfragen rund um neue Mobilität.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>Vorsorge für Selbstständige</h3>
            <p>Berufsunfähigkeit, Gesundheit und finanzielle Stabilität bei Krankheit oder Ausfall.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 7h.01" />
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                <path d="M6 10h4m-4 4h12" />
              </svg>
            </div>
            <h3>Klimaanpassung &amp; Prävention</h3>
            <p>Praktische Checklisten zur Risikoreduktion für Haushalt und Unternehmen in der Region.</p>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>Monatliche Themen</h2>
        <div className="services-grid">
          {monthlyTopics.map((topic) => (
            <Card key={topic.slug}>
              <CardHeader>
                <CardTitle className="text-base">
                  {topic.month}: {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
                <Link className="text-sm font-medium underline underline-offset-4 hover:text-foreground text-muted-foreground" href={`/risikothemen/${topic.slug}`}>
                  Thema öffnen
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <FaqAccordion items={faqItems} />

        <div className="hero-cta topics-cta">
          <Link href="/angebot" className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-8 text-base')}>
            Angebot per E-Mail
          </Link>
          <Link href="/#contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 px-8 text-base')}>
            Kontakt ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
