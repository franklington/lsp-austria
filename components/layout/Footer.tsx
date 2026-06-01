import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const serviceLinks = [
  { label: 'KFZ & Fahrzeuge', href: '/leistungen/kfz-fahrzeuge/' },
  { label: 'KFZ-Zulassung', href: '/kfz-zulassung/' },
  { label: 'Wohnen & Recht', href: '/leistungen/wohnen-recht/' },
  { label: 'Sparen & Vorsorge', href: '/leistungen/sparen-vorsorge/' },
  { label: 'Gesundheit & Freizeit', href: '/leistungen/gesundheit-freizeit/' },
  { label: 'Unternehmen', href: '/leistungen/unternehmen/' },
]

const infoLinks = [
  { label: 'Ratgeber', href: '/ratgeber/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' },
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-dark border-t border-border">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="LSP Austria" width={80} height={80} className="w-20 h-20" />
              <span className="sr-only">LSP Austria</span>
            </Link>
            <p className="text-foreground-subtle text-sm leading-relaxed">
              LSP Consulting GmbH – Ihr persönlicher Versicherungspartner in Gmunden seit 2006.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-warning fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-foreground-subtle text-xs ml-1.5">4,8 · 247 Bewertungen</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground text-sm font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-subtle text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-foreground text-sm font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-subtle text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground text-sm font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+43076126764600"
                  className="flex items-start gap-2.5 text-foreground-subtle text-sm hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  +43 (0)761 267646-0
                </a>
              </li>
              <li>
                <a
                  href="mailto:agentur@lsp-austria.at"
                  className="flex items-start gap-2.5 text-foreground-subtle text-sm hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  agentur@lsp-austria.at
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-foreground-subtle text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  Bahnhofstraße 46<br />
                  4810 Gmunden
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground-subtle text-sm">
                <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  Mo–Do: 7:30–12:30 & 13:30–16:30<br />
                  Fr: 7:30–13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-foreground-subtle">
          <p>© {currentYear} LSP Consulting GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <Link href="/impressum/" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
