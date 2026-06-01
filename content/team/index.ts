export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
}

export const team: TeamMember[] = [
  {
    name: 'Franz Adolf Leitner',
    role: 'Geschäftsführer & Versicherungsmakler',
    bio: 'Seit der Gründung im Jahr 2006 ist Franz Adolf Leitner das Gesicht von LSP Austria. Mit jahrzehntelanger Erfahrung in der Versicherungsbranche berät er Privat- und Unternehmenskunden mit Leidenschaft und Weitblick.',
    initials: 'FL',
  },
  {
    name: 'Thomas Sonntagbauer',
    role: 'Geschäftsführer & Versicherungsberater',
    bio: 'Thomas Sonntagbauer ist Experte für KFZ-Versicherungen und Unternehmensberatung. Als Mitgründer bringt er tiefes Fachwissen und ein starkes regionales Netzwerk im Salzkammergut ein.',
    initials: 'TS',
  },
]
