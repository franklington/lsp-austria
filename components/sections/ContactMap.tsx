import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'

const hours = [
  { days: 'Montag – Donnerstag', time: '7:30 – 12:30 & 13:30 – 16:30' },
  { days: 'Freitag', time: '7:30 – 13:00' },
  { days: 'KFZ-Zulassung Mo–Fr', time: '8:00 – 12:00' },
]

export function ContactMap() {
  return (
    <section id="kontakt" className="bg-base-dark py-20 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Map */}
          <div className="order-2 lg:order-2">
            <a
              href="https://maps.google.com/?q=Bahnhofstra%C3%9Fe+46,+4810+Gmunden"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-border aspect-[4/3] bg-surface">
                <Image
                  src="/map.jpg"
                  alt="Standort LSP Austria – Bahnhofstraße 46, 4810 Gmunden"
                  fill
                  unoptimized
                  className="object-cover"
                  style={{ filter: 'grayscale(1) brightness(0.7) sepia(0.4) hue-rotate(190deg) saturate(1.5)' }}
                />
                {/* Accent pin — exact coords: lat 47.9254 / lng 13.7876 → 65.9%, 59.0% in 768×768 image */}
                <div className="absolute pointer-events-none" style={{ left: '65.9%', top: '59.0%', transform: 'translate(-50%, -100%)' }}>
                  <svg viewBox="0 0 24 32" className="w-8 h-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 7.5 12 20 12 20S24 19.5 24 12C24 5.373 18.627 0 12 0z" fill="#2563eb"/>
                    <circle cx="12" cy="12" r="5" fill="white"/>
                  </svg>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-200" />
              </div>
            </a>
            <a
              href="https://maps.google.com/?q=Bahnhofstra%C3%9Fe+46,+4810+Gmunden"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent text-sm mt-3 hover:text-accent-light transition-colors"
            >
              In Google Maps öffnen
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Contact info */}
          <div className="order-1 lg:order-1">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              So erreichen Sie uns
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Persönlich vor Ort in Gmunden.
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Sie haben Fragen zu Ihrer Versicherung oder möchten ein unverbindliches Beratungsgespräch?
              Wir sind gerne für Sie da – telefonisch, per E-Mail oder persönlich in unserem Büro.
            </p>

            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="tel:+43076126764600"
                  className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-subtle mb-0.5">Telefon</p>
                    <p className="font-medium text-sm group-hover:text-foreground">+43 (0)761 267646-0</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:agentur@lsp-austria.at"
                  className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-subtle mb-0.5">E-Mail</p>
                    <p className="font-medium text-sm group-hover:text-foreground">agentur@lsp-austria.at</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-foreground-subtle mb-0.5">Adresse</p>
                  <p className="font-medium text-sm text-foreground-muted">Bahnhofstraße 46, 4810 Gmunden</p>
                </div>
              </li>
            </ul>

            {/* Opening hours */}
            <div className="rounded-[var(--radius-lg)] bg-surface border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-accent" />
                <h3 className="text-foreground font-semibold text-sm">Öffnungszeiten</h3>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 text-sm">
                    <span className="text-foreground-subtle">{h.days}</span>
                    <span className="text-foreground-muted text-right">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
