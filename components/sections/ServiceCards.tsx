import Link from 'next/link'
import type { Service } from '@/data/services'

const serviceIcons: Record<string, React.ReactNode> = {
  'KFZ & Fahrzeuge': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3v-4l2.5-5h13l2.5 5v4h-2" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
      <path d="M5 13h14" />
    </svg>
  ),
  'KFZ-Zulassung': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M7 15h2m8 0h1" />
    </svg>
  ),
  'Wohnen & Recht': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  'Sparen & Vorsorge': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-4-4-3 3" />
    </svg>
  ),
  'Gesundheit & Freizeit': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  'Unternehmen': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v3m0 0h3m-3 0H9" />
    </svg>
  ),
}

interface ServiceCardsProps {
  items: Service[]
  cardHref?: string
}

export default function ServiceCards({ items, cardHref = '/angebot' }: ServiceCardsProps) {
  return (
    <div className="services-grid">
      {items.map((service) => (
        <Link key={service.title} href={cardHref} className="service-card">
          <div className="service-icon" aria-hidden="true">
            {serviceIcons[service.title] ?? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            )}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </Link>
      ))}
    </div>
  )
}
