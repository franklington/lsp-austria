'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { companyProfile } from '@/data/site-content'

const navLinks = [
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Themen', href: '/themen' },
  { label: 'Kontakt', href: '/#contact' },
]

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/'
    return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
  }

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
    document.body.classList.add('overflow-hidden')
  }, [])

  const closeMenu = useCallback(({ returnFocus = false } = {}) => {
    setIsMenuOpen(false)
    document.body.classList.remove('overflow-hidden')
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  // Focus first link when menu opens
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLElement>('a[href]')
      firstLink?.focus()
      // inert all other body children
      Array.from(document.body.children).forEach((el) => {
        if (!(el instanceof HTMLElement)) return
        const nav = document.getElementById('main-nav')
        if (el === nav) return
        if ('inert' in el) (el as HTMLElement & { inert: boolean }).inert = true
        el.setAttribute('aria-hidden', 'true')
      })
    } else {
      Array.from(document.body.children).forEach((el) => {
        if (!(el instanceof HTMLElement)) return
        if ('inert' in el) (el as HTMLElement & { inert: boolean }).inert = false
        el.removeAttribute('aria-hidden')
      })
    }
  }, [isMenuOpen])

  // Keyboard trap + Escape
  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu({ returnFocus: true })
        return
      }
      if (e.key !== 'Tab') return
      const menu = menuRef.current
      if (!menu) return
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isMenuOpen, closeMenu])

  // Close on resize ≥ 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu({ returnFocus: true })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMenu])

  // Scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/*
        z-index layers:
          nav bar      z-[60]  – always on top; hamburger / close button always clickable
          mobile menu  z-[50]  – full-screen panel, below nav bar so the X button works
      */}
      <nav
        id="main-nav"
        className={`fixed z-[60] flex h-16 w-full items-center transition-all duration-300 md:h-20 ${
          scrolled
            ? 'bg-bgDark1/85 backdrop-blur-[16px] border-b border-mainBorderDarker shadow-lg shadow-black/20'
            : ''
        }`}
        aria-label="Main navigation"
      >
        <div className="flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[87.5rem] mx-auto">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" aria-label="Startseite" onClick={() => closeMenu()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="LSP Gmunden" width={110} height={30} />
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden h-16 items-center gap-1 lg:flex md:h-20">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative flex h-full cursor-pointer items-center px-5 text-base font-medium tracking-wide transition duration-150 focus-visible:outline-offset-[-4px] 2xl:px-6 ${
                  isActive(href)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/90'
                }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
                {/* Active underline — shown for every active link */}
                <span
                  className={`absolute right-3 bottom-0 left-3 h-[2px] rounded-full bg-primaryColor transition-opacity duration-200 ${
                    isActive(href) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA group */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {/* Phone — icon only button */}
            <a
              href={`tel:${companyProfile.contact.phoneHref}`}
              title={companyProfile.contact.phoneDisplay}
              aria-label={`Anrufen: ${companyProfile.contact.phoneDisplay}`}
              className="border-mainBorder flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-solid text-white/70 transition hover:bg-white/8 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.19 15a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.59a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.49-1.28a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            {/* Email CTA */}
            <Link
              href="/angebot"
              className="border-mainBorder flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-solid bg-white/5 px-5 text-base font-medium text-white transition hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Angebot per E-Mail
            </Link>
          </div>

          {/* Mobile hamburger — inside nav (z-[60]) so it is always above the mobile menu */}
          <button
            ref={toggleRef}
            id="mobile-menu-toggle"
            className="border-mainBorder flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-solid text-white transition hover:bg-white/8 lg:hidden"
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            {isMenuOpen ? (
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="pointer-events-none">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="pointer-events-none">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu — z-[50], below the nav bar (z-[60]) so the hamburger/close X is always tappable */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Hauptmenü"
        className={`bg-bgDark1 fixed inset-0 z-[50] flex w-full flex-col items-center overflow-y-auto px-6 pb-12 pt-20 lg:hidden ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex w-full max-w-sm flex-col items-stretch gap-1 py-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-semibold tracking-wide transition duration-150 ${
                isActive(href)
                  ? 'bg-white/10 text-white'
                  : 'text-white/65 hover:bg-white/6 hover:text-white active:bg-white/12'
              }`}
              onClick={() => closeMenu()}
            >
              {label}
              {isActive(href) && (
                <span className="h-2 w-2 shrink-0 rounded-full bg-primaryColor" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="flex w-full max-w-sm flex-col items-stretch gap-3 border-t border-white/10 pt-6">
          <Link
            href="/angebot"
            className="border-mainBorder flex items-center justify-center gap-3 rounded-2xl border bg-white/6 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            onClick={() => closeMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Angebot per E-Mail
          </Link>
          <a
            href={`tel:${companyProfile.contact.phoneHref}`}
            className="border-mainBorder flex items-center justify-center gap-3 rounded-2xl border bg-white/6 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            onClick={() => closeMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.19 15a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.59a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.49-1.28a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0 1 22 16.92z" />
            </svg>
            {companyProfile.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  )
}
