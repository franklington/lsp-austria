import { companyProfile } from '@/data/site-content'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import OfferForm from '@/components/sections/OfferForm'

export default function AngebotPage() {
  const hours = companyProfile.openingHours

  return (
    <section className="services">
      <div className="container">

        <header className="angebot-header">
          <h1 className="section-title">Angebot anfragen</h1>
          <p className="hero-subtitle">
            Wählen Sie Ihr Thema, füllen Sie das Formular aus – wir melden uns zeitnah.
          </p>
        </header>

        <div className="angebot-layout">

          {/* ── Left: contact sidebar ── */}
          <aside className="angebot-sidebar">

            <div className="angebot-sidebar-section">
              <p className="angebot-sidebar-label">Lieber anrufen?</p>
              <a
                href={`tel:${companyProfile.contact.phoneHref}`}
                className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-8 text-base w-full gap-2 angebot-call-btn')}
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {companyProfile.contact.phoneDisplay}
              </a>
            </div>

            <div className="my-4">
              <Separator className="bg-white/10" />
            </div>

            <dl className="angebot-sidebar-details">
              <div className="angebot-sidebar-row">
                <dt>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
                  </svg>
                  E-Mail
                </dt>
                <dd>
                  <a href={`mailto:${companyProfile.contact.email}`}>
                    {companyProfile.contact.email}
                  </a>
                </dd>
              </div>
              <div className="angebot-sidebar-row">
                <dt>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Büro
                </dt>
                <dd>
                  {hours.officeLines[0]}<br />
                  {hours.officeLines[1]}
                </dd>
              </div>
              <div className="angebot-sidebar-row">
                <dt>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Adresse
                </dt>
                <dd>
                  {companyProfile.address.street}<br />
                  {companyProfile.address.postalCode} {companyProfile.address.city}
                </dd>
              </div>
            </dl>

            <div className="my-4">
              <Separator className="bg-white/10" />
            </div>

            <ul className="angebot-trust-list" aria-label="Unsere Versprechen">
              <li>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Persönliche Beratung vor Ort
              </li>
              <li>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Regionaler Partner – Salzkammergut
              </li>
              <li>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Antwort innerhalb von 1 Werktag
              </li>
            </ul>

          </aside>

          {/* ── Right: offer form ── */}
          <div className="offer-form-wrapper">
            <OfferForm />
          </div>

        </div>
      </div>
    </section>
  )
}

