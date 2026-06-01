import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/content/services'
import { Section, SectionHeader } from '@/components/ui/Section'

export function ServiceGrid() {
  return (
    <Section id="leistungen" bg="dark">
      <SectionHeader
        eyebrow="Unsere Leistungen"
        title="Was können wir für Sie tun?"
        description="Von der KFZ-Versicherung bis zur Altersvorsorge – wir begleiten Sie in allen Versicherungsfragen. Persönlich, klar und zuverlässig."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.slug}
              href={
                service.slug === 'kfz-zulassung-service'
                  ? '/kfz-zulassung/'
                  : `/leistungen/${service.slug}/`
              }
              className="card-base card-hover group flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-light" />
                </div>
                <ArrowRight className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors duration-150 mt-1" />
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-base mb-1.5">{service.title}</h3>
                <p className="text-foreground-subtle text-sm leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/leistungen/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium text-sm"
        >
          Alle Leistungen im Überblick
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
