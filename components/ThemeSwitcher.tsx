'use client'

import { useEffect, useState } from 'react'

const themes = [
  {
    id: 'blue',
    label: 'Blue',
    swatch: '#2563eb',
  },
  {
    id: 'emerald',
    label: 'Emerald',
    swatch: '#059669',
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: '#e11d48',
  },
  {
    id: 'gold',
    label: 'Gold',
    swatch: '#d97706',
  },
  {
    id: 'mono',
    label: 'Mono',
    swatch: '#e5e5e5',
  },
] as const

type ThemeId = (typeof themes)[number]['id']

export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>('blue')

  useEffect(() => {
    const stored = localStorage.getItem('accent-theme') as ThemeId | null
    if (stored) apply(stored)
  }, [])

  function apply(id: ThemeId) {
    document.documentElement.setAttribute('data-accent', id)
    localStorage.setItem('accent-theme', id)
    setActive(id)
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        display: 'flex',
        gap: '0.5rem',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '9999px',
        padding: '0.375rem 0.625rem',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '0.625rem', color: '#888', marginRight: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Accent
      </span>
      {themes.map((t) => (
        <button
          key={t.id}
          title={t.label}
          onClick={() => apply(t.id)}
          style={{
            width: '1.125rem',
            height: '1.125rem',
            borderRadius: '9999px',
            background: t.swatch,
            border: active === t.id ? '2px solid white' : t.id === 'mono' ? '2px solid rgba(255,255,255,0.25)' : '2px solid transparent',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            boxShadow: active === t.id ? `0 0 0 1px ${t.swatch}` : 'none',
            transition: 'border-color 150ms, box-shadow 150ms',
          }}
        />
      ))}
    </div>
  )
}
