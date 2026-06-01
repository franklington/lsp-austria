import Link from 'next/link'
import { companyProfile } from '@/data/site-content'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Versicherung &amp; Vorsorge in Gmunden</h1>
          <p className="hero-subtitle">
            Persönliche Beratung für KFZ, Vorsorge und alle Versicherungsthemen. Ihr verlässlicher
            Partner in der Region.
          </p>
          <div className="hero-cta">
            <Link href="/angebot" className="btn btn-large btn-primary">
              Angebot per E-Mail
            </Link>
            <a
              href={`tel:${companyProfile.contact.phoneHref}`}
              className="btn btn-large btn-secondary"
            >
              Jetzt anrufen
            </a>
          </div>
          <div className="hero-rating">
            <div className="rating-stars" aria-label="4.8 von 5 Sternen">
              ★★★★★
            </div>
            <span className="rating-text">4.8/5 - 247 Bewertungen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
