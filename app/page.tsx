import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactMap } from '@/components/sections/ContactMap'
import { CallToAction } from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'LSP Austria – Versicherung & Vorsorge Gmunden',
  description:
    'Ihr persönlicher Versicherungspartner in Gmunden seit 2006. KFZ, Eigenheim, Pensionsvorsorge, Gesundheit – persönliche Beratung ohne Call-Center. 4,8 Sterne auf Google.',
  alternates: {
    canonical: 'https://lsp-austria.at/',
  },
  openGraph: {
    title: 'LSP Austria – Versicherung & Vorsorge Gmunden',
    description:
      'Ihr persönlicher Versicherungspartner in Gmunden seit 2006. Persönliche Beratung – 4,8 Sterne Google-Bewertung.',
    url: 'https://lsp-austria.at/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'LSP Consulting GmbH',
  alternateName: 'LSP Austria',
  url: 'https://lsp-austria.at',
  telephone: '+43076126764600',
  email: 'agentur@lsp-austria.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 46',
    addressLocality: 'Gmunden',
    postalCode: '4810',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.925358,
    longitude: 13.787584,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:30',
      closes: '12:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '13:30',
      closes: '16:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '07:30',
      closes: '13:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '247',
    bestRating: '5',
  },
  priceRange: '€€',
  foundingDate: '2006',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSignals />
      <ServiceGrid />
      <ContactMap />
      <CallToAction />
    </>
  )
}
