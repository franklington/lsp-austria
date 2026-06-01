export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'KFZ & Fahrzeuge',
    description:
      'Kfz-Haftpflicht, Kasko, Insassenunfallversicherung. Optimal geschützt auf allen Straßen.',
  },
  {
    title: 'KFZ-Zulassung',
    description:
      'Schnelle An- und Abmeldung, Kennzeichen, Umschreibungen. Für GM, KI, VB, WL.',
  },
  {
    title: 'Wohnen & Recht',
    description: 'Hausrat, Eigenheim, Rechtsschutz. Umfassender Schutz für Ihr Zuhause.',
  },
  {
    title: 'Sparen & Vorsorge',
    description:
      'Lebensversicherung, Pensionsvorsorge, Sparprodukte. Ihre finanzielle Zukunft.',
  },
  {
    title: 'Gesundheit & Freizeit',
    description:
      'Krankenversicherung, Unfallschutz, Reiseversicherung für sorglose Momente.',
  },
  {
    title: 'Unternehmen',
    description:
      'Gewerbeversicherungen, Betriebshaftpflicht. Maßgeschneidert für Ihr Business.',
  },
]
