'use client'

import { useState, useEffect, useRef, useCallback, Fragment } from 'react'
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
      <nav
        id="main-nav"
        className={`fixed z-50 flex h-20 w-full flex-col items-center justify-center transition-all duration-300 ${
          scrolled
            ? 'bg-bgDark1/80 backdrop-blur-[15px] border-b border-mainBorderDarker'
            : ''
        }`}
        aria-label="Main navigation"
      >
        <div className="relative z-20 flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[87.5rem]">
          {/* Logo */}
          <div className="flex grow basis-0 items-center">
            <Link href="/" aria-label="Startseite">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="LSP Gmunden" width={110} height={30} />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden h-full pl-12 lg:flex items-center">
            {navLinks.map(({ href, label }, i) => (
              <Fragment key={href}>
                {i > 0 && (
                  <span aria-hidden="true" className="pointer-events-none select-none px-1 text-sm text-white/25">·</span>
                )}
                <Link
                  href={href}
                  className={`relative flex h-20 cursor-pointer items-center px-4 text-[0.9375rem] font-medium transition duration-200 focus-visible:outline-offset-[-4px] 2xl:px-5 ${
                    isActive(href) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                  {isActive(href) && !href.startsWith('/#') && (
                    <span className="bg-secondaryColor absolute right-0 bottom-0 left-0 h-[3px] rounded-full" />
                  )}
                </Link>
              </Fragment>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden grow basis-0 justify-end lg:flex">
            <Link
              href="/angebot"
              className="outlined-button flex items-center gap-2 pt-2 pr-6 pb-2 pl-6"
              aria-label="Angebot per E-Mail"
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

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            id="mobile-menu-toggle"
            className="border-mainBorder hover:bg-bgDark2 relative z-[60] flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-solid lg:hidden"
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            {isMenuOpen ? (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="pointer-events-none">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="pointer-events-none">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay — outside <nav> so fixed positioning is relative to viewport, not the nav */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => closeMenu({ returnFocus: true })}
        />
      )}

      {/* Mobile menu — outside <nav> for the same reason */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`bg-bgDark1 fixed inset-0 z-[55] w-full flex-col items-center justify-start gap-8 overflow-y-auto px-6 pt-24 pb-16 lg:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
          <Link href="/" className="mb-1" onClick={() => closeMenu()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="LSP Logo" width={140} height={36} />
          </Link>
          <div className="mobile-menu-links flex w-full max-w-xs flex-col items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`mobile-nav-link w-full rounded-xl px-4 py-3 text-center text-2xl font-medium transition duration-200 ${
                  isActive(href)
                    ? 'bg-white/8 text-white'
                    : 'text-white/75 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => closeMenu()}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex w-full max-w-xs flex-col items-stretch gap-3 border-t border-white/10 pt-6">
            <Link
              href="/angebot"
              className="outlined-button flex items-center justify-center gap-2 py-3 px-6"
              onClick={() => closeMenu()}
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
            <a
              href={`tel:${companyProfile.contact.phoneHref}`}
              className="outlined-button flex items-center justify-center gap-2 py-3 px-6"
              onClick={() => closeMenu()}
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.59a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.49-1.28a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0 1 22 16.92z" />
              </svg>
              {companyProfile.contact.phoneDisplay}
            </a>
          </div>
        </div>
    </>
  )
}
