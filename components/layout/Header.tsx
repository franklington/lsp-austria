'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const navLinks = [
  {
    label: 'Leistungen',
    href: '/leistungen/',
    children: [
      { label: 'KFZ & Fahrzeuge', href: '/leistungen/kfz-fahrzeuge/' },
      { label: 'KFZ-Zulassung', href: '/kfz-zulassung/' },
      { label: 'Wohnen & Recht', href: '/leistungen/wohnen-recht/' },
      { label: 'Sparen & Vorsorge', href: '/leistungen/sparen-vorsorge/' },
      { label: 'Gesundheit & Freizeit', href: '/leistungen/gesundheit-freizeit/' },
      { label: 'Unternehmen', href: '/leistungen/unternehmen/' },
    ],
  },
  { label: 'KFZ-Zulassung', href: '/kfz-zulassung/' },
  { label: 'Ratgeber', href: '/ratgeber/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-base-dark/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 focus-ring rounded-[var(--radius-md)]"
          >
            <Image
              src="/logo.svg"
              alt="LSP Austria"
              width={36}
              height={36}
              className="w-9 h-9"
              priority
            />
            <span className="text-foreground font-semibold text-base hidden sm:block">
              LSP Austria
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 text-foreground-muted hover:text-foreground transition-colors duration-150 text-sm font-medium px-3 py-2 rounded-[var(--radius-md)] hover:bg-elevated"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-surface border border-border rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-150 overflow-hidden"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground-muted hover:text-foreground hover:bg-elevated transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground-muted hover:text-foreground transition-colors duration-150 text-sm font-medium px-3 py-2 rounded-[var(--radius-md)] hover:bg-elevated focus-ring"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+43076126764600"
              className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+43 (0)761 267646-0</span>
            </a>
            <Link
              href="/kontakt/"
              className="bg-accent hover:bg-accent-light text-accent-fg text-sm font-medium px-4 py-2 rounded-[var(--radius-md)] transition-colors duration-150 focus-ring"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground-muted hover:text-foreground transition-colors p-2 rounded-[var(--radius-md)] hover:bg-elevated focus-ring"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-base-dark border-t border-border">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <p className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest px-3 py-2 mt-2">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-foreground-muted hover:text-foreground transition-colors py-2 px-3 text-sm rounded-[var(--radius-md)] hover:bg-elevated"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground-muted hover:text-foreground transition-colors py-2.5 px-3 text-base font-medium rounded-[var(--radius-md)] hover:bg-elevated"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border mt-2 flex flex-col gap-2">
              <a
                href="tel:+43076126764600"
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors py-2.5 px-3"
              >
                <Phone className="w-4 h-4 text-accent" />
                +43 (0)761 267646-0
              </a>
              <Link
                href="/kontakt/"
                onClick={() => setIsOpen(false)}
                className="bg-accent hover:bg-accent-light text-accent-fg text-center font-medium px-4 py-3 rounded-[var(--radius-md)] transition-colors"
              >
                Termin vereinbaren
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
