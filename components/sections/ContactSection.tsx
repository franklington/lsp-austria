'use client'

import Link from 'next/link'
import { companyProfile } from '@/data/site-content'

export default function ContactSection() {
  const officeHourLines = companyProfile.openingHours.officeLines

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info">
            <h2>Besuchen Sie uns</h2>
            <div className="contact-item">
              <strong>Adresse</strong>
              <p>
                {companyProfile.address.street}
                <br />
                {companyProfile.address.postalCode} {companyProfile.address.city}
              </p>
              <p className="contact-route-link">
                <a
                  href={companyProfile.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Route starten
                </a>
              </p>
            </div>
            <div className="contact-item">
              <strong>Telefon</strong>
              <p>
                <a href={`tel:${companyProfile.contact.phoneHref}`}>
                  {companyProfile.contact.phoneDisplay}
                </a>
              </p>
              <p className="contact-route-link">
                <a
                  href={`tel:${companyProfile.contact.phoneHref}`}
                  className="btn btn-primary btn-sm"
                >
                  Jetzt anrufen
                </a>
              </p>
            </div>
            <div className="contact-item">
              <strong>E-Mail</strong>
              <p>
                <a href={`mailto:${companyProfile.contact.email}`}>
                  {companyProfile.contact.email}
                </a>
              </p>
              <p className="contact-route-link">
                <Link href="/angebot" className="btn btn-secondary btn-sm">
                  Angebot per E-Mail
                </Link>
              </p>
            </div>
            <div className="contact-item">
              <strong>Öffnungszeiten</strong>
              <p>
                {officeHourLines[0]}
                <br />
                {officeHourLines[1]}
              </p>
            </div>
            <div className="contact-item">
              <strong>Zulassungsstelle</strong>
              <p>{companyProfile.openingHours.registration}</p>
            </div>
          </div>

          {/* Static map image */}
          <div className="contact-map">
            <a
              href={companyProfile.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-link"
              aria-label="Standort auf Karte öffnen"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/location-map.jpg"
                alt="Karte: LSP Gmunden, Bahnhofstraße 46"
                className="contact-map-img"
                width={1200}
                height={480}
                loading="lazy"
              />
              <span className="contact-map-overlay">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19l-5 2V5l5-2m0 16l6-2m-6 2V3m6 14l5 2V3l-5-2m0 16V1" />
                </svg>
                In Karte öffnen
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
