import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

interface CallToActionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  showPhone?: boolean
}

export function CallToAction({
  title = 'Persönliche Beratung gewünscht?',
  description = 'Vereinbaren Sie einen unverbindlichen Beratungstermin – telefonisch oder persönlich in unserem Büro in Gmunden.',
  primaryLabel = 'Jetzt Termin vereinbaren',
  primaryHref = '/kontakt/',
  showPhone = true,
}: CallToActionProps) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: 'var(--gradient-cta)' }}
    >
      {/* Pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-page relative text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
          {title}
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 text-balance">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="cta-primary-btn inline-flex items-center gap-2 bg-white text-accent hover:bg-blue-50 font-semibold px-6 py-3 rounded-[var(--radius-md)] transition-colors focus-ring"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {showPhone && (
            <a
              href="tel:+43076126764600"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-[var(--radius-md)] transition-colors focus-ring"
            >
              <Phone className="w-4 h-4" />
              +43 (0)761 267646-0
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
