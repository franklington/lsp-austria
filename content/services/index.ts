import { Car, FileText, Home, TrendingUp, Heart, Building2, type LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  features: string[]
  icon: LucideIcon
  heroHeadline: string
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'kfz-fahrzeuge',
    title: 'KFZ & Fahrzeuge',
    shortDescription:
      'Kfz-Haftpflicht, Kasko und Insassenunfallversicherung – wir finden den richtigen Schutz für Ihr Fahrzeug.',
    longDescription:
      'Ob Haftpflicht, Teil- oder Vollkasko: Wir analysieren Ihren Bedarf und finden die passende KFZ-Versicherung. Mit persönlicher Beratung vor Ort in Gmunden – ohne Call-Center, ohne Warteband.',
    features: [
      'Kfz-Haftpflichtversicherung (Pflichtversicherung)',
      'Teilkaskoversicherung (Diebstahl, Brand, Elementarschäden)',
      'Vollkaskoversicherung (inkl. selbstverschuldete Schäden)',
      'Insassenunfallversicherung',
      'Pannenschutz & Schutzbriefversicherung',
      'Günstige Prämien durch Vergleich führender Anbieter',
    ],
    icon: Car,
    heroHeadline: 'KFZ-Versicherung, die zu Ihnen passt.',
    metaTitle: 'KFZ-Versicherung Gmunden – LSP Austria',
    metaDescription:
      'Kfz-Haftpflicht, Kasko und Insassenunfall in Gmunden. Persönliche Beratung seit 2006. Jetzt Termin vereinbaren – LSP Consulting GmbH.',
  },
  {
    slug: 'kfz-zulassung-service',
    title: 'KFZ-Zulassung',
    shortDescription:
      'An- und Abmeldung, Kennzeichen, Umschreibungen für die Bezirke Gmunden, Kirchdorf, Vöcklabruck und Wels-Land.',
    longDescription:
      'Als autorisierte Zulassungsstelle erledigen wir alle Fahrzeuganmeldungen schnell und unkompliziert. Wir führen Kennzeichen der Bezirke GM, KI, VB und WL und helfen bei Umschreibungen und Ummeldungen.',
    features: [
      'Fahrzeuganmeldungen (Neuzulassung)',
      'Abmeldungen & Kennzeichenrückgabe',
      'Umschreibungen & Ummeldungen',
      'Kennzeichen der Bezirke GM, KI, VB, WL',
      'Zulassung von E-Fahrzeugen',
      'Schnelle Abwicklung – meist am selben Tag',
    ],
    icon: FileText,
    heroHeadline: 'KFZ-Zulassung direkt in Gmunden.',
    metaTitle: 'KFZ-Zulassung Gmunden (GM, KI, VB, WL) – LSP Austria',
    metaDescription:
      'KFZ-Anmeldung, Abmeldung und Umschreibung in Gmunden. Bezirke GM, KI, VB und WL. Mo–Fr 8–12 Uhr. LSP Consulting GmbH.',
  },
  {
    slug: 'wohnen-recht',
    title: 'Wohnen & Recht',
    shortDescription:
      'Hausrat, Eigenheim und Rechtsschutz – umfassender Schutz für Ihr Zuhause und Ihre Rechte.',
    longDescription:
      'Ein Wasserschaden, ein Einbruch, ein Nachbarschaftsstreit – das Leben hält Überraschungen bereit. Wir sorgen dafür, dass Sie bei Haushalts-, Eigenheim- und Rechtsschutzversicherung optimal abgesichert sind.',
    features: [
      'Haushaltsversicherung (Einbruch, Feuer, Wasser, Sturm)',
      'Eigenheimversicherung',
      'Gebäudeversicherung für Eigentümer',
      'Rechtsschutzversicherung',
      'Elementarschadenversicherung',
      'Glasbruchversicherung',
    ],
    icon: Home,
    heroHeadline: 'Ihr Zuhause – rundum abgesichert.',
    metaTitle: 'Haushalts- & Eigenheimversicherung Gmunden – LSP Austria',
    metaDescription:
      'Haushalts-, Eigenheim- und Rechtsschutzversicherung in Gmunden. Persönliche Beratung seit 2006. LSP Consulting GmbH.',
  },
  {
    slug: 'sparen-vorsorge',
    title: 'Sparen & Vorsorge',
    shortDescription:
      'Lebensversicherung, Pensionsvorsorge und Sparprodukte – für eine gesicherte Zukunft.',
    longDescription:
      'Die staatliche Pension allein wird nicht reichen. Mit den richtigen Vorsorgeprodukten schaffen Sie sich ein finanzielles Polster für den Ruhestand. Wir zeigen Ihnen die besten Optionen – von der klassischen Lebensversicherung bis zur fondsgebundenen Vorsorge.',
    features: [
      'Klassische Lebensversicherung',
      'Fondsgebundene Lebensversicherung',
      'Private Pensionsvorsorge',
      'Betriebliche Altersvorsorge (bAV)',
      'Sparprodukte & Rentenversicherung',
      'Prämiengeförderte Zukunftsvorsorge',
    ],
    icon: TrendingUp,
    heroHeadline: 'Vorsorgen – mit Plan und Weitblick.',
    metaTitle: 'Pensionsvorsorge & Lebensversicherung Gmunden – LSP Austria',
    metaDescription:
      'Private Pensionsvorsorge und Lebensversicherung in Gmunden. Persönliche Finanzberatung seit 2006. LSP Consulting GmbH.',
  },
  {
    slug: 'gesundheit-freizeit',
    title: 'Gesundheit & Freizeit',
    shortDescription:
      'Krankenversicherung, Unfallschutz und Reiseversicherung – für jeden Lebensbereich.',
    longDescription:
      'Ihre Gesundheit ist Ihr wertvollstes Gut. Mit einer privaten Kranken- oder Unfallversicherung sichern Sie schnellen Zugang zu Ärzten und beste medizinische Versorgung. Und beim nächsten Urlaub reisen Sie mit einer guten Reiseversicherung entspannt ab.',
    features: [
      'Private Krankenversicherung',
      'Krankenzusatzversicherung (Wahlarzttarif)',
      'Unfallversicherung (Beruf & Freizeit)',
      'Reiseversicherung (Storno, Kranken, Gepäck)',
      'Pflegeversicherung',
      'Sport- & Freizeitversicherung',
    ],
    icon: Heart,
    heroHeadline: 'Gesund & sicher – in jedem Moment.',
    metaTitle: 'Kranken- & Unfallversicherung Gmunden – LSP Austria',
    metaDescription:
      'Krankenversicherung, Unfallschutz und Reiseversicherung in Gmunden. Persönliche Beratung seit 2006. LSP Consulting GmbH.',
  },
  {
    slug: 'unternehmen',
    title: 'Unternehmen & Gewerbe',
    shortDescription:
      'Gewerbliche Versicherungen, Betriebshaftpflicht und maßgeschneiderter Unternehmensschutz.',
    longDescription:
      'Als Unternehmer tragen Sie Verantwortung – für Ihre Mitarbeiter, Kunden und Ihr Eigentum. Wir entwickeln individuelle Versicherungslösungen für Gewerbetreibende, KMU und Freiberufler in der Region Gmunden.',
    features: [
      'Betriebshaftpflichtversicherung',
      'Gewerbliche Sachversicherung',
      'Betriebsunterbrechungsversicherung',
      'Cyberversicherung',
      'D&O-Versicherung (Manager-Haftpflicht)',
      'Mitarbeiter-Unfallversicherung',
    ],
    icon: Building2,
    heroHeadline: 'Ihr Unternehmen – professionell versichert.',
    metaTitle: 'Gewerbeversicherung Gmunden – LSP Austria',
    metaDescription:
      'Gewerbliche Versicherungen und Betriebshaftpflicht in Gmunden. Persönliche Unternehmensberatung seit 2006. LSP Consulting GmbH.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
