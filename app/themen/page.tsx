import type { Metadata } from 'next'
import Link from 'next/link'
import { monthlyTopics } from '@/data/monthly-topics'

export const metadata: Metadata = {
  title: 'Themen',
  description:
    'Themen-Blog von LSP Gmunden mit monatlichen Beiträgen zu Risiken, Vorsorge und Versicherung.',
  alternates: { canonical: 'https://lsp-gmunden.at/themen' },
}

export default function ThemenPage() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">Themen</h1>
        <p className="hero-subtitle">
          Monatlich aktualisierte Beiträge zu aktuellen Versicherungsthemen – als kompakte FAQ mit klaren Antworten.
        </p>
        <div className="services-grid">
          {monthlyTopics.map((topic) => (
            <Link key={topic.slug} href={`/risikothemen/${topic.slug}`} className="topic-img-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topic.image} alt={topic.imageAlt} className="topic-img" />
              <div className="topic-img-body">
                <p className="topic-img-tag">{topic.month}</p>
                <h3 className="topic-img-title">{topic.title}</h3>
                <p className="topic-img-desc">{topic.description}</p>
                <span className="topic-img-cta">Artikel lesen →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="hero-cta topics-cta">
          <Link href="/angebot" className="btn btn-primary">
            Angebot per E-Mail
          </Link>
        </div>
      </div>
    </section>
  )
}

