export const brandValues = [
  'regionaler Partner',
  'Handschlag',
  'Vertrauen',
  'persönlich',
  'Salzkammergut',
  'Gmunden',
]

export interface Address {
  street: string
  postalCode: string
  city: string
  country: string
}

export interface Contact {
  phoneDisplay: string
  phoneHref: string
  email: string
}

export interface OpeningHours {
  officeLines: string[]
  registration: string
}

export interface Shareholder {
  name: string
  ownershipPercent: number
}

export interface SupervisoryAuthority {
  name: string
  address: string
  url: string
}

export interface Legal {
  companyForm: string
  companyRegisterNumber: string
  companyRegisterCourt: string
  registrationDate: string
  registeredSeat: string
  shareCapital: string
  businessPurpose: string
  managingDirectors: string[]
  shareholders: Shareholder[]
  representation: string
  supervisoryAuthority: SupervisoryAuthority
}

export interface CompanyProfile {
  brandName: string
  legalName: string
  legalEntitySummary: string
  address: Address
  contact: Contact
  mapUrl: string
  openingHours: OpeningHours
  legal: Legal
}

export const companyProfile: CompanyProfile = {
  brandName: 'LSP Gmunden',
  legalName: 'LSP Consulting GmbH',
  legalEntitySummary: 'LSP Consulting GmbH — Firmenbuchnummer 276035i',
  address: {
    street: 'Bahnhofstraße 46',
    postalCode: '4810',
    city: 'Gmunden',
    country: 'Österreich',
  },
  contact: {
    phoneDisplay: '07612/67646-0',
    phoneHref: '+4376126764600',
    email: 'agentur@lsp-austria.at',
  },
  mapUrl:
    'https://maps.apple.com/?address=Bahnhofstra%C3%9Fe+46,+4810+Gmunden&ll=47.925358,13.787584&q=LSP+Gmunden',
  openingHours: {
    officeLines: ['Mo - Do: 07:30 - 12:30 & 13:30 - 16:30', 'Fr: 07:30 - 13:00'],
    registration: 'Mo - Fr: 08:00 - 12:00',
  },
  legal: {
    companyForm: 'Gesellschaft mit beschränkter Haftung (GmbH)',
    companyRegisterNumber: '276035i',
    companyRegisterCourt: 'Landesgericht Wels',
    registrationDate: '28.03.2006',
    registeredSeat: 'Gmunden',
    shareCapital: 'EUR 36.000',
    businessPurpose: 'Beratung und Vermittlung',
    managingDirectors: ['Franz Adolf Leitner', 'Thomas Sonntagbauer'],
    shareholders: [
      { name: 'LEITNER Investments GmbH', ownershipPercent: 65 },
      { name: 'SONNTAGBAUER Investments GmbH', ownershipPercent: 35 },
    ],
    representation:
      'Die Gesellschaft wird, wenn mehrere Geschäftsführer bestellt sind, durch zwei Geschäftsführer gemeinsam oder durch einen von ihnen gemeinsam mit einem Prokuristen vertreten, sofern nicht einzelnen Geschäftsführern Alleinvertretungsbefugnis eingeräumt wird.',
    supervisoryAuthority: {
      name: 'Finanzmarktaufsicht (FMA)',
      address: 'Otto-Wagner-Platz 5, 1090 Wien',
      url: 'https://www.fma.gv.at',
    },
  },
}
