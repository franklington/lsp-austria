import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { services, getServiceBySlug } from '@/content/services'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services
    .filter((s) => s.slug !== 'kfz-zulassung-service')
    .map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://lsp-gmunden.at/leistungen/${slug}/` },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = service.icon

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'InsuranceAgency',
      name: 'LSP Consulting GmbH',
      url: 'https://lsp-gmunden.at',
    },
    areaServed: {
      '@type': 'City',
      name: 'Gmunden',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          unoptimized
          priority
          aria-hidden
          className="object-cover opacity-15"
          style={{ filter: 'grayscale(0.7) brightness(0.5)' }}
        />
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-accent-subtle flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-accent-light" />
            </div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Unsere Leistungen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              {service.heroHeadline}
            </h1>
            <p className="text-foreground-muted text-lg text-balance leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Was ist inbegriffen?
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-light" />
                  </div>
                  <span className="text-foreground-muted text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base">
            <h3 className="font-semibold text-foreground text-lg mb-3">
              Persönliche Beratung in Gmunden
            </h3>
            <p className="text-foreground-subtle text-sm leading-relaxed mb-6">
              Sie haben Fragen zu {service.title}? Wir sind für Sie da – telefonisch oder
              persönlich in unserem Büro in der Bahnhofstraße 46, Gmunden.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+43076126764600"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-fg font-medium px-4 py-2.5 rounded-[var(--radius-md)] transition-colors text-sm focus-ring"
              >
                Jetzt anrufen
              </a>
              <a
                href="mailto:agentur@lsp-austria.at"
                className="inline-flex items-center justify-center gap-2 border border-border-strong text-foreground-muted hover:text-foreground hover:border-border-bright font-medium px-4 py-2.5 rounded-[var(--radius-md)] transition-colors text-sm focus-ring"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CallToAction
        title={`Fragen zu ${service.title}?`}
        description="Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch."
      />
    </>
  )
}
