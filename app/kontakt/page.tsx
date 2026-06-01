import type { Metadata } from 'next'
import { ContactMap } from '@/components/sections/ContactMap'

export const metadata: Metadata = {
  title: 'Kontakt – LSP Austria Gmunden',
  description:
    'Kontaktieren Sie LSP Consulting GmbH in Gmunden. Telefon, E-Mail oder persönlich vor Ort. Öffnungszeiten Mo–Do 7:30–16:30, Fr 7:30–13:00.',
  alternates: { canonical: 'https://lsp-gmunden.at/kontakt/' },
}

export default function KontaktPage() {
  return (
    <>
      <div className="bg-base-dark pt-32 pb-4 lg:pt-40">
        <div className="container-page">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Wir sind für Sie da.
          </h1>
          <p className="text-foreground-muted text-lg max-w-xl text-balance">
            Rufen Sie uns an, schreiben Sie eine E-Mail oder besuchen Sie uns persönlich in Gmunden.
          </p>
        </div>
      </div>
      <ContactMap />
    </>
  )
}
