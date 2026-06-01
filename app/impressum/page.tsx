import type { Metadata } from 'next'
import { companyProfile } from '@/data/site-content'

export const metadata: Metadata = {
  title: 'Impressum – LSP Gmunden',
  description: 'Impressum der LSP Consulting GmbH, Bahnhofstraße 46, 4810 Gmunden.',
  alternates: {
    canonical: 'https://lsp-gmunden.at/impressum',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  const { legalName, address, contact, legal, openingHours, legalEntitySummary } = companyProfile
  const officeHourLines = openingHours.officeLines
  const shareholders = legal.shareholders

  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Impressum</h1>
          <p className="legal-meta">{legalEntitySummary}</p>

          <section>
            <h2>Unternehmen</h2>
            <p>
              {legalName}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon:{' '}
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
              <br />
              E-Mail:{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>

          <section>
            <h2>Rechtsform</h2>
            <p>{legal.companyForm}</p>
          </section>

          <section>
            <h2>Firmenbuch</h2>
            <p>
              Firmenbuchnummer: {legal.companyRegisterNumber}
              <br />
              Firmenbuchgericht: {legal.companyRegisterCourt}
              <br />
              Eintragungsdatum: {legal.registrationDate}
              <br />
              Sitz: {legal.registeredSeat}
              <br />
              Stammkapital: {legal.shareCapital}
            </p>
          </section>

          <section>
            <h2>Geschäftszweig</h2>
            <p>{legal.businessPurpose}</p>
          </section>

          <section>
            <h2>Geschäftsführung</h2>
            <p>
              {legal.managingDirectors[0]}
              <br />
              {legal.managingDirectors[1]}
            </p>
          </section>

          <section>
            <h2>Gesellschafter</h2>
            <p>
              {shareholders.map((shareholder, i) => (
                <span key={shareholder.name}>
                  {shareholder.name} ({shareholder.ownershipPercent}%)
                  {i < shareholders.length - 1 && <br />}
                </span>
              ))}
            </p>
          </section>

          <section>
            <h2>Vertretung</h2>
            <p>{legal.representation}</p>
          </section>

          <section>
            <h2>Aufsichtsbehörde</h2>
            <p>
              {legal.supervisoryAuthority.name}
              <br />
              {legal.supervisoryAuthority.address}
              <br />
              <a
                href={legal.supervisoryAuthority.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.fma.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2>Öffnungszeiten</h2>
            <p>
              {officeHourLines[0]}
              <br />
              {officeHourLines[1]}
              <br />
              Zulassungsstelle: {openingHours.registration}
            </p>
          </section>

          <section>
            <h2>Anwendbares Recht</h2>
            <p>Es gilt österreichisches Recht. Gerichtsstand ist Gmunden.</p>
          </section>

          <section>
            <h2>Haftung</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Als
              Diensteanbieter sind wir für eigene Inhalte nach § 18 ECG verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
