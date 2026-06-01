'use client'

import { useState } from 'react'
import Link from 'next/link'
import { companyProfile } from '@/data/site-content'

interface FormData {
  name: string
  email: string
  phone: string
  topic: string
  message: string
  consent: boolean
}

const TOPICS = [
  { value: 'KFZ & Zulassung', label: 'KFZ & Zulassung', icon: '🚗' },
  { value: 'Wohnen & Haushalt', label: 'Wohnen & Haushalt', icon: '🏠' },
  { value: 'Vorsorge & Gesundheit', label: 'Vorsorge & Gesundheit', icon: '❤️' },
  { value: 'Gewerbe & Betrieb', label: 'Gewerbe & Betrieb', icon: '🏢' },
  { value: 'Sonstiges', label: 'Sonstiges', icon: '💬' },
]

export default function OfferForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    consent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleTopicSelect = (topic: string) => {
    setForm((prev) => ({ ...prev, topic }))
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
    <form className="offer-form" onSubmit={handleSubmit} noValidate>

      {/* ── Section 1: Contact info ── */}
      <fieldset className="offer-fieldset">
        <legend className="offer-legend">Ihre Kontaktdaten</legend>
        <div className="offer-fields">
          <div className="offer-field">
            <label htmlFor="of-name" className="offer-label">
              Name <span aria-hidden="true">*</span>
            </label>
            <div className="offer-input-wrap">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <input
                id="of-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Vor- und Nachname"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="offer-field">
            <label htmlFor="of-email" className="offer-label">
              E-Mail <span aria-hidden="true">*</span>
            </label>
            <div className="offer-input-wrap">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
              </svg>
              <input
                id="of-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="ihre@email.at"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="offer-field offer-field--phone">
            <label htmlFor="of-phone" className="offer-label">
              Telefon <span className="offer-label-opt">(optional)</span>
            </label>
            <div className="offer-input-wrap">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <input
                id="of-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+43 …"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* ── Section 2: Topic ── */}
      <fieldset className="offer-fieldset">
        <legend className="offer-legend">
          Worum geht es? <span aria-hidden="true">*</span>
        </legend>
        <div className="offer-topic-grid" role="group" aria-label="Thema wählen">
          {TOPICS.map((t) => (
            <button
              key={t.value}
              type="button"
              className={`offer-topic-btn${form.topic === t.value ? ' is-active' : ''}`}
              onClick={() => handleTopicSelect(t.value)}
              aria-pressed={form.topic === t.value}
            >
              <span className="offer-topic-icon" aria-hidden="true">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
        {/* hidden input for browser required-validation */}
        <input
          type="text"
          name="topic"
          required
          readOnly
          value={form.topic}
          aria-hidden="true"
          tabIndex={-1}
          className="offer-topic-hidden"
        />
      </fieldset>

      {/* ── Section 3: Message ── */}
      <fieldset className="offer-fieldset">
        <legend className="offer-legend">
          Ihre Nachricht <span aria-hidden="true">*</span>
        </legend>
        <textarea
          name="message"
          required
          placeholder="Kurz beschreiben, was Sie absichern möchten – je mehr Details, desto besser unser Angebot."
          value={form.message}
          onChange={handleChange}
          className="offer-textarea"
        />
      </fieldset>

      {/* ── Consent ── */}
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

      {/* ── CTA ── */}
      <div className="offer-actions">
        <button type="submit" className="btn btn-large btn-primary offer-submit-btn">
          <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
          Anfrage per E-Mail senden
        </button>
      </div>

    </form>
  )
}
