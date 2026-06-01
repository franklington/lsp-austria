import Link from 'next/link'
import type { MonthlyTopic } from '@/data/monthly-topics'

interface MonthlyTopicsProps {
  topics: MonthlyTopic[]
}

export default function MonthlyTopics({ topics }: MonthlyTopicsProps) {
  return (
    <section className="services" id="themen-teaser">
      <div className="container">
        <h2 className="section-title">Aktuelle Themen</h2>
        <p className="hero-subtitle">Monatlich aktualisierte Beiträge zu relevanten Versicherungsthemen.</p>
        <div className="topic-teaser-grid">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/risikothemen/${topic.slug}`}
              className="topic-teaser-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topic.image} alt={topic.imageAlt} className="topic-teaser-img" />
              <div className="topic-teaser-body">
                <p className="topic-teaser-tag">{topic.month}</p>
                <h3 className="topic-teaser-title">{topic.title}</h3>
                <p className="topic-teaser-desc">{topic.description}</p>
                <span className="topic-teaser-cta">Artikel lesen →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="hero-cta">
          <Link href="/themen" className="btn btn-primary">
            Alle Themen öffnen
          </Link>
        </div>
      </div>
    </section>
  )
}

