import type { Metadata } from 'next'
import { Check, Clock, MapPin, Phone } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'KFZ-Zulassung Gmunden – An- & Abmeldung',
  description:
    'KFZ-Zulassung in Gmunden: Anmeldung, Abmeldung und Umschreibung für die Bezirke GM, KI, VB und WL. Mo–Fr 8–12 Uhr. LSP Consulting GmbH.',
  alternates: { canonical: 'https://lsp-austria.at/kfz-zulassung/' },
}

const steps = [
  { step: '1', title: 'Unterlagen vorbereiten', desc: 'Zulassungsschein, Fahrzeugdaten, Personalausweis, Versicherungsbestätigung (e-card-Daten).' },
  { step: '2', title: 'Zu uns kommen', desc: 'Mo–Fr von 8:00 bis 12:00 Uhr in unserem Büro in der Bahnhofstraße 46, 4810 Gmunden.' },
  { step: '3', title: 'Schnelle Abwicklung', desc: 'Wir erledigen die Zulassung meist noch am selben Tag. Sie erhalten Kennzeichen und Papiere direkt bei uns.' },
]

const services = [
  'Neuzulassung (Erstanmeldung)',
  'An- und Abmeldung',
  'Umschreibung & Ummeldung',
  'Kennzeichen der Bezirke GM, KI, VB und WL',
  'Zulassung von Elektro- und Hybridfahrzeugen',
  'Saisonkennzeichen',
  'Überstellungskennzeichen',
  'Kurzkennzeichen',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentService',
  name: 'KFZ-Zulassung Gmunden',
  description: 'KFZ-Anmeldung, Abmeldung und Umschreibung in Gmunden. Bezirke GM, KI, VB und WL.',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'LSP Consulting GmbH',
    url: 'https://lsp-austria.at',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bezirk Gmunden' },
    { '@type': 'AdministrativeArea', name: 'Bezirk Kirchdorf' },
    { '@type': 'AdministrativeArea', name: 'Bezirk Vöcklabruck' },
    { '@type': 'AdministrativeArea', name: 'Bezirk Wels-Land' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '12:00',
  },
}

export default function KfzZulassungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              KFZ-Zulassung · Gmunden
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Fahrzeug anmelden in Gmunden – schnell und unkompliziert.
            </h1>
            <p className="text-foreground-muted text-lg text-balance leading-relaxed mb-6">
              Als autorisierte Zulassungsstelle erledigen wir alle Fahrzeuganmeldungen für
              die Bezirke <strong className="text-foreground">GM, KI, VB und WL</strong>.
              Kommen Sie einfach in unser Büro – ohne lange Wartezeiten.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                Mo–Fr: 8:00 – 12:00 Uhr
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                Bahnhofstraße 46, 4810 Gmunden
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <Section>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10">
          So funktioniert die Zulassung bei uns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="card-base">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{s.step}</span>
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1.5">{s.title}</h3>
              <p className="text-foreground-subtle text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Services list + contact side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-5">Unsere Zulassungsleistungen</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base">
            <h3 className="font-semibold text-foreground text-lg mb-1">Direkt zum Büro</h3>
            <p className="text-foreground-subtle text-sm mb-5">
              Keine Voranmeldung nötig. Kommen Sie einfach während der Öffnungszeiten vorbei.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-foreground-muted">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                Mo–Fr: 8:00 – 12:00 Uhr
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground-muted">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Bahnhofstraße 46, 4810 Gmunden
              </li>
              <li>
                <a
                  href="tel:+43076126764600"
                  className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  +43 (0)761 267646-0
                </a>
              </li>
            </ul>
            <a
              href="tel:+43076126764600"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-fg font-medium px-4 py-2.5 rounded-[var(--radius-md)] transition-colors text-sm w-full focus-ring"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </Section>

      <CallToAction
        title="Fragen zur KFZ-Zulassung?"
        description="Rufen Sie uns an oder kommen Sie direkt in unser Büro in Gmunden."
      />
    </>
  )
}
