import type { Metadata } from 'next'
import { companyProfile } from '@/data/site-content'

export const metadata: Metadata = {
  title: 'Datenschutz – LSP Gmunden',
  description: 'Datenschutzerklärung der LSP Consulting GmbH gemäß DSGVO.',
  alternates: {
    canonical: 'https://lsp-gmunden.at/datenschutz',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  const { legalName, address, contact } = companyProfile
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Datenschutzerklärung</h1>
          <p className="legal-meta">Gemäß DSGVO &mdash; Stand Mai 2026</p>

          <section>
            <h2>Verantwortlicher</h2>
            <p>
              {legalName}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
              <br />
              <br />
              Telefon:{' '}
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
              <br />
              E-Mail:{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>

          <section>
            <h2>Grundsätze der Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur im Rahmen der geltenden
              datenschutzrechtlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung
              (DSGVO) und des österreichischen Datenschutzgesetzes (DSG).
            </p>
          </section>

          <section>
            <h2>Hosting &amp; Server-Protokolle</h2>
            <p>
              Diese Website wird über Cloudflare Pages (Cloudflare, Inc., 101 Townsend St, San
              Francisco, CA 94107, USA) bereitgestellt. Beim Aufruf unserer Website werden vom
              Hosting-Anbieter automatisch folgende Daten in sogenannten Server-Log-Dateien
              gespeichert:
            </p>
            <p>
              IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, verwendeter Browser und
              Betriebssystem, Referrer-URL. Diese Daten werden ausschließlich zur Sicherstellung des
              Betriebs und zur Fehleranalyse verwendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2>Karten (OpenStreetMap)</h2>
            <p>
              Auf unserer Website verwenden wir Kartenmaterial von OpenStreetMap (Betreiber:
              OpenStreetMap Foundation, St John&apos;s Innovation Centre, Cowley Road, Cambridge,
              CB4 0WS, Großbritannien). Die Karte wird nur nach Ihrer ausdrücklichen Zustimmung
              geladen. Dabei wird Ihre IP-Adresse an Server der OpenStreetMap Foundation übertragen.
              OpenStreetMap verwendet keine Cookies für diesen Dienst. Rechtsgrundlage: Art. 6 Abs.
              1 lit. a DSGVO (Einwilligung).
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung
              Ihrer Karten-Einwilligung (lsp_map_consent). Dieses Cookie enthält keine
              personenbezogenen Daten und wird nach 365 Tagen gelöscht. Rechtsgrundlage: Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2>Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die von Ihnen übermittelten
              Daten (Name, Kontaktdaten, Anliegen) zur Bearbeitung Ihrer Anfrage und für den Fall
              von Anschlussfragen gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2>Ihre Rechte</h2>
            <p>
              Gemäß DSGVO haben Sie das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
              (Art. 20) sowie Widerspruch (Art. 21). Zur Ausübung Ihrer Rechte wenden Sie sich
              bitte an: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>

          <section>
            <h2>Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:
              <br />
              Österreichische Datenschutzbehörde
              <br />
              Barichgasse 40–42, 1030 Wien
              <br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                www.dsb.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2>Aktualität</h2>
            <p>
              Stand: Mai 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
              anzupassen.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
