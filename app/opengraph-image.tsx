import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'LSP Austria – Versicherung & Vorsorge Gmunden'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: '#0f0f0f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px 64px 96px',
          position: 'relative',
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: 630,
            backgroundColor: '#2563eb',
          }}
        />

        {/* Rating badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: '#1e3a5f',
            borderRadius: 10,
            padding: '10px 20px',
            alignSelf: 'flex-start',
          }}
        >
          <span style={{ color: '#f59e0b', fontSize: 20 }}>★</span>
          <span style={{ color: '#b8b8b8', fontSize: 18, fontWeight: 500 }}>
            4,8 · 247 Google-Bewertungen
          </span>
        </div>

        {/* Main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ color: '#3b82f6', fontSize: 20, fontWeight: 700, letterSpacing: 3 }}>
            VERSICHERUNGSMAKLER · GMUNDEN, ÖSTERREICH
          </span>
          <span
            style={{ color: '#f5f5f5', fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}
          >
            LSP Austria
          </span>
          <span style={{ color: '#b8b8b8', fontSize: 32, fontWeight: 400 }}>
            Versicherung & Vorsorge in Gmunden
          </span>
        </div>

        {/* URL */}
        <div
          style={{ position: 'absolute', bottom: 56, right: 72, color: '#8a8a8a', fontSize: 18 }}
        >
          lsp-austria.at
        </div>
      </div>
    ),
    { ...size },
  )
}
