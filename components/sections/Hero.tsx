import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base-dark">
      {/* Background photo */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        unoptimized
        priority
        fetchPriority="high"
        aria-hidden
        className="object-cover opacity-20"
        style={{ filter: 'grayscale(0.6) brightness(0.5)' }}
      />
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 10% 50%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 90% 20%, rgba(29,78,216,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-page relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          <p
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ animation: 'fade-up 0.5s ease both' }}
          >
            Versicherung & Vorsorge · Gmunden seit 2006
          </p>

          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance hyphens-auto"
            style={{ animation: 'fade-up 0.55s 0.08s ease both' }}
          >
            Ihr Versicherungspartner
            <br />
            <span className="text-accent">in Gmunden.</span>
          </h1>

          <p
            className="mt-6 text-lg lg:text-xl text-foreground-muted leading-relaxed max-w-2xl text-balance"
            style={{ animation: 'fade-up 0.55s 0.16s ease both' }}
          >
            Persönliche Beratung für KFZ, Eigenheim, Vorsorge und alle Versicherungsthemen –
            ohne Call-Center, ohne Warteband. Einfach ehrlich gut beraten.
          </p>

          {/* Social proof */}
          <div
            className="mt-6 flex items-center gap-3"
            style={{ animation: 'fade-up 0.4s 0.28s ease both' }}
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-warning fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-foreground-muted text-sm">
              <strong className="text-foreground">4,8 / 5</strong> · 247 Google-Bewertungen
            </span>
          </div>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{ animation: 'fade-up 0.45s 0.35s ease both' }}
          >
            <Link
              href="/leistungen/"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-fg font-medium px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-150 focus-ring"
            >
              Leistungen entdecken
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+43076126764600"
              className="inline-flex items-center gap-2 border border-border-strong text-foreground-muted hover:text-foreground hover:border-border-bright hover:bg-elevated font-medium px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-150 focus-ring"
            >
              <Phone className="w-4 h-4" />
              +43 (0)761 267646-0
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
