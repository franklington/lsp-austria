export interface MonthlyTopic {
  slug: string
  month: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const monthlyTopics: MonthlyTopic[] = [
  {
    slug: 'januar-2026-hochwasser-sturm',
    month: 'Januar 2026',
    title: 'Hochwasser & Sturm',
    description:
      'Regionale Risikobewertung, Prävention und passende Deckungsbausteine für Starkregen, Hochwasser und Sturm.',
    image:
      'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?auto=format&fit=crop&w=800&q=75',
    imageAlt: 'Überschwemmte Straße bei Starkregen',
  },
  {
    slug: 'februar-2026-cyberrisiken-kmu',
    month: 'Februar 2026',
    title: 'Cyberrisiken für KMU',
    description:
      'Aktuelle Bedrohungen, Notfallprozesse und Absicherungsoptionen für kleine und mittlere Unternehmen.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=75',
    imageAlt: 'Laptop mit Sicherheitsschloss',
  },
  {
    slug: 'maerz-2026-e-bike-e-mobilitaet',
    month: 'März 2026',
    title: 'E-Bike & E-Mobilität',
    description:
      'Deckung für E-Bikes, Ladetechnik und Haftungsfragen bei moderner, elektrischer Mobilität.',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=75',
    imageAlt: 'Person auf einem E-Bike in der Stadt',
  },
]
