import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der LSP Consulting GmbH, Bahnhofstraße 46, 4810 Gmunden.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://lsp-gmunden.at/impressum/' },
}

export default function ImpressumPage() {
  return (
    <>
      <div className="bg-base-dark pt-32 pb-10 lg:pt-40">
        <div className="container-page">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Impressum</h1>
        </div>
      </div>
      <Section>
        <div className="max-w-2xl space-y-8 text-foreground-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Angaben gemäß § 5 ECG</h2>
            <p>
              <strong className="text-foreground">LSP Consulting GmbH</strong><br />
              Bahnhofstraße 46<br />
              4810 Gmunden<br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+43076126764600" className="text-accent hover:text-accent-light">+43 (0)761 267646-0</a><br />
              E-Mail: <a href="mailto:agentur@lsp-austria.at" className="text-accent hover:text-accent-light">agentur@lsp-austria.at</a>
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Unternehmensgegenstand</h2>
            <p>Mehrfachagent und Berater in Versicherungsangelegenheiten</p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Firmenbuchdaten</h2>
            <p>
              Firmenbuchnummer: 276035i<br />
              Firmenbuchgericht: Landesgericht Wels<br />
              Gründungsdatum: 28.03.2006
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Geschäftsführer</h2>
            <p>
              Franz Adolf Leitner (65%)<br />
              Thomas Sonntagbauer (35%)
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Behörde</h2>
            <p>
              Zuständige Aufsichtsbehörde: Finanzmarktaufsicht (FMA)<br />
              Registrierung: <a href="https://evi.gv.at/f/276035i" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light">evi.gv.at/f/276035i</a>
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Hosting</h2>
            <p>Diese Website wird gehostet von Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">Urheberrecht</h2>
            <p>
              Die Inhalte dieser Website sind urheberrechtlich geschützt. Eine Verwendung ohne
              ausdrückliche Genehmigung der LSP Consulting GmbH ist nicht gestattet.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
