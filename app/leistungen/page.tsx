import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/content/services'
import { Section, SectionHeader } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Unsere Leistungen',
  description:
    'KFZ-Versicherung, Eigenheim, Vorsorge, Gesundheit und Unternehmensversicherung in Gmunden. Persönliche Beratung seit 2006 – LSP Austria.',
  alternates: { canonical: 'https://lsp-austria.at/leistungen/' },
}

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            LSP Austria
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl text-balance">
            Von KFZ bis Altersvorsorge – wir begleiten Sie in allen Versicherungsfragen.
            Persönlich, klar und zuverlässig seit 2006 in Gmunden.
          </p>
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const href =
              service.slug === 'kfz-zulassung-service'
                ? '/kfz-zulassung/'
                : `/leistungen/${service.slug}/`

            return (
              <Link
                key={service.slug}
                href={href}
                className="card-base card-hover group flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-accent-subtle flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-foreground text-lg flex items-center justify-between gap-2">
                      {service.title}
                      <ArrowRight className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors flex-shrink-0" />
                    </h2>
                    <p className="text-foreground-subtle text-sm mt-1.5 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                {/* Features preview */}
                <ul className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="text-xs text-foreground-subtle bg-elevated px-2.5 py-1 rounded-full border border-border"
                    >
                      {f}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-accent px-2.5 py-1">
                      +{service.features.length - 3} weitere
                    </li>
                  )}
                </ul>
              </Link>
            )
          })}
        </div>
      </Section>

      <CallToAction />
    </>
  )
}
