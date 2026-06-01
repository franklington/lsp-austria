/**
 * Unsplash Photo Credits
 *
 * Unsplash License: https://unsplash.com/license
 * All photos are free to use for commercial and non-commercial purposes.
 * Attribution is not required but appreciated.
 *
 * All images are stored locally in /public/images/ — no runtime external requests.
 */

export interface ImageCredit {
  file: string
  photographer: string
  photographerUrl: string
  photoUrl: string
  unsplashId: string
}

export const imageCredits: ImageCredit[] = [
  {
    file: '/images/hero-bg.jpg',
    photographer: 'Pascal Debrunner',
    photographerUrl: 'https://unsplash.com/@pascal_debrunner',
    photoUrl: 'https://unsplash.com/photos/1476514525535-07fb3b4ae5f1',
    unsplashId: '1476514525535-07fb3b4ae5f1',
  },
  {
    file: '/images/service-kfz-fahrzeuge.jpg',
    photographer: 'Laura Dewilde',
    photographerUrl: 'https://unsplash.com/@lauradewilde97',
    photoUrl: 'https://unsplash.com/photos/1549317661-bd32c8ce0db2',
    unsplashId: '1549317661-bd32c8ce0db2',
  },
  {
    file: '/images/service-kfz-zulassung.jpg',
    photographer: 'Scott Graham',
    photographerUrl: 'https://unsplash.com/@homajob',
    photoUrl: 'https://unsplash.com/photos/1450101499163-c8848c66ca85',
    unsplashId: '1450101499163-c8848c66ca85',
  },
  {
    file: '/images/service-wohnen-recht.jpg',
    photographer: 'Scott Webb',
    photographerUrl: 'https://unsplash.com/@scottwebb',
    photoUrl: 'https://unsplash.com/photos/1570129477492-45c003edd2be',
    unsplashId: '1570129477492-45c003edd2be',
  },
  {
    file: '/images/service-sparen-vorsorge.jpg',
    photographer: 'Precondo CA',
    photographerUrl: 'https://unsplash.com/@precondo',
    photoUrl: 'https://unsplash.com/photos/1579621970563-ebec7560ff3e',
    unsplashId: '1579621970563-ebec7560ff3e',
  },
  {
    file: '/images/service-gesundheit-freizeit.jpg',
    photographer: 'Gabin Vallet',
    photographerUrl: 'https://unsplash.com/@gabinvallet',
    photoUrl: 'https://unsplash.com/photos/1571019613454-1cb2f99b2d8b',
    unsplashId: '1571019613454-1cb2f99b2d8b',
  },
  {
    file: '/images/service-unternehmen.jpg',
    photographer: 'Sebastian Herrmann',
    photographerUrl: 'https://unsplash.com/@officestock',
    photoUrl: 'https://unsplash.com/photos/1521791136064-7986c2920216',
    unsplashId: '1521791136064-7986c2920216',
  },
  {
    file: '/images/blog-kfz-versicherung.jpg',
    photographer: 'Laura Dewilde',
    photographerUrl: 'https://unsplash.com/@lauradewilde97',
    photoUrl: 'https://unsplash.com/photos/1549317661-bd32c8ce0db2',
    unsplashId: '1549317661-bd32c8ce0db2',
  },
  {
    file: '/images/blog-haushaltsversicherung.jpg',
    photographer: 'Sidekix Media',
    photographerUrl: 'https://unsplash.com/@sidekix',
    photoUrl: 'https://unsplash.com/photos/1558618666-fcd25c85cd64',
    unsplashId: '1558618666-fcd25c85cd64',
  },
  {
    file: '/images/blog-pensionsvorsorge.jpg',
    photographer: 'Precondo CA',
    photographerUrl: 'https://unsplash.com/@precondo',
    photoUrl: 'https://unsplash.com/photos/1554224155-6726b3ff858f',
    unsplashId: '1554224155-6726b3ff858f',
  },
  {
    file: '/images/blog-cyberversicherung-kmu.jpg',
    photographer: 'Philipp Katzenberger',
    photographerUrl: 'https://unsplash.com/@fantasyflip',
    photoUrl: 'https://unsplash.com/photos/iIJrUoeRoCQ',
    unsplashId: '1548092372-0d1bd40894a3',
  },
  {
    file: '/images/blog-naturkatastrophen-hochwasser-versicherung.jpg',
    photographer: 'Chris Gallagher',
    photographerUrl: 'https://unsplash.com/@chriswebdog',
    photoUrl: 'https://unsplash.com/photos/1604275689235-fdc521556c16',
    unsplashId: '1604275689235-fdc521556c16',
  },
  {
    file: '/images/blog-e-auto-versicherung-oesterreich.jpg',
    photographer: 'Eren Goldman',
    photographerUrl: 'https://unsplash.com/@erengoldman',
    photoUrl: 'https://unsplash.com/photos/mfqj3ZSs_h0',
    unsplashId: '1639302610362-4c86747e8680',
  },
  {
    file: '/images/blog-berufsunfaehigkeitsversicherung-oesterreich.jpg',
    photographer: 'Vasilis Caravitis',
    photographerUrl: 'https://unsplash.com/@vasiliscaravitis',
    photoUrl: 'https://unsplash.com/photos/WGOpvIKwq3Y',
    unsplashId: '1647964366344-bc680baf64e2',
  },
]

/** Look up credit info by file path */
export function getCredit(file: string): ImageCredit | undefined {
  return imageCredits.find((c) => c.file === file)
}
