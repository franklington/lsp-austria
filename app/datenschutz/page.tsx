import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der LSP Consulting GmbH gemäß DSGVO.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://lsp-gmunden.at/datenschutz/' },
}

export default function DatenschutzPage() {
  return (
    <>
      <div className="bg-base-dark pt-32 pb-10 lg:pt-40">
        <div className="container-page">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Datenschutzerklärung</h1>
          <p className="text-foreground-muted text-sm mt-2">Stand: Mai 2026</p>
        </div>
      </div>
      <Section>
        <div className="max-w-2xl space-y-8 text-foreground-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">1. Verantwortlicher</h2>
            <p>
              LSP Consulting GmbH<br />
              Bahnhofstraße 46, 4810 Gmunden<br />
              E-Mail: <a href="mailto:agentur@lsp-austria.at" className="text-accent hover:text-accent-light">agentur@lsp-austria.at</a><br />
              Telefon: <a href="tel:+43076126764600" className="text-accent hover:text-accent-light">+43 (0)761 267646-0</a>
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese aktiv mitteilen (z.B. durch
              eine E-Mail-Anfrage oder einen Telefonanruf). Diese Daten werden ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben, sofern dies
              nicht zur Vertragserfüllung erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">3. Hosting & Server-Logs</h2>
            <p>
              Diese Website wird über Cloudflare Pages gehostet. Beim Abrufen der Website werden
              automatisch technische Informationen (z.B. IP-Adresse, Browser-Typ, Uhrzeit des
              Abrufs) in Server-Logs gespeichert. Diese Daten werden zur Sicherstellung des
              Betriebs der Website verwendet und nach spätestens 7 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">4. Kartenintegration (OpenStreetMap)</h2>
            <p>
              Diese Website bindet auf Anforderung Kartenmaterial von OpenStreetMap (Betreiber:
              OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge,
              CB4 0WS, Großbritannien) ein. Die Karte wird nur nach Ihrer ausdrücklichen
              Zustimmung geladen. Bei der Nutzung werden Daten an die Server von OpenStreetMap
              übertragen. Datenschutzerklärung: openstreetmap.org/copyright
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">5. Ihre Rechte (DSGVO)</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung dieser Rechte wenden Sie sich bitte per E-Mail an{' '}
              <a href="mailto:agentur@lsp-austria.at" className="text-accent hover:text-accent-light">agentur@lsp-austria.at</a>.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-base mb-3">6. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, bei der österreichischen Datenschutzbehörde (DSB) Beschwerde
              einzulegen: Barichgasse 40-42, 1030 Wien, dsb.gv.at
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
