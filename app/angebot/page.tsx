'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { companyProfile } from '@/data/site-content'

// Note: metadata cannot be exported from 'use client' pages.
// SEO handled via layout or a wrapping server component if needed.

interface FormData {
  name: string
  email: string
  phone: string
  topic: string
  message: string
  consent: boolean
}

export default function AngebotPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    consent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Angebotsanfrage: ${form.topic || 'Versicherung'}`
    const bodyLines = [
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone || 'nicht angegeben'}`,
      `Thema: ${form.topic || 'nicht angegeben'}`,
      '',
      'Nachricht:',
      form.message,
    ]
    const mailto = `mailto:${companyProfile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailto
  }

  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">Angebot per E-Mail</h1>
        <p className="hero-subtitle">
          Füllen Sie das Formular aus – wir melden uns zeitnah mit einem passenden Vorschlag.
        </p>

        {/* Quick-contact alternatives */}
        <div className="angebot-alts">
          <a href={`tel:${companyProfile.contact.phoneHref}`} className="angebot-alt">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Lieber anrufen? <strong>{companyProfile.contact.phoneDisplay}</strong></span>
          </a>
          <a href={`mailto:${companyProfile.contact.email}`} className="angebot-alt">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            <span>Direkt schreiben: <strong>{companyProfile.contact.email}</strong></span>
          </a>
        </div>

        <div className="offer-form-wrapper">
          <form className="offer-form" onSubmit={handleSubmit}>
            <div className="offer-form-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                E-Mail
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="offer-form-row">
              <label>
                Telefon (optional)
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Thema
                <select name="topic" required value={form.topic} onChange={handleChange}>
                  <option value="">Bitte wählen</option>
                  <option value="KFZ & Zulassung">KFZ &amp; Zulassung</option>
                  <option value="Wohnen & Haushalt">Wohnen &amp; Haushalt</option>
                  <option value="Vorsorge & Gesundheit">Vorsorge &amp; Gesundheit</option>
                  <option value="Gewerbe & Betrieb">Gewerbe &amp; Betrieb</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </label>
            </div>
            <label>
              Nachricht
              <textarea
                name="message"
                required
                placeholder="Kurz beschreiben, was Sie absichern möchten."
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <label className="offer-consent">
              <input
                type="checkbox"
                name="consent"
                required
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.
                Hinweise unter <Link href="/datenschutz">Datenschutz</Link>.
              </span>
            </label>
            <div className="hero-cta">
              <button type="submit" className="btn btn-large btn-primary">
                E-Mail vorbereiten
              </button>
              <a
                className="btn btn-large btn-secondary"
                href={`mailto:${companyProfile.contact.email}`}
              >
                Direkt ohne Formular schreiben
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
