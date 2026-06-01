import { companyProfile } from '@/data/site-content'

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://lsp-gmunden.at/#organization',
      name: 'LSP Gmunden | Leitner • Sonntagbauer • Partner',
      url: 'https://lsp-gmunden.at/',
      email: companyProfile.contact.email,
      telephone: companyProfile.contact.phoneHref,
      sameAs: ['https://www.evi.gv.at/f/276035i'],
    },
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://lsp-gmunden.at/#insuranceagency',
      name: 'LSP Gmunden',
      description:
        'Versicherungsagentur in Gmunden für KFZ, Hausrat, Lebensversicherung, Gewerbeversicherung und KFZ-Zulassung',
      url: 'https://lsp-gmunden.at/',
      telephone: companyProfile.contact.phoneHref,
      email: companyProfile.contact.email,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 4.8,
        reviewCount: 247,
      },
    },
  ],
}

export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
