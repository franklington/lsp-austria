import { Shield, Users, MapPin, Award } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '4,8 / 5',
    label: '247 Google-Bewertungen',
    sub: 'Exzellent bewertet',
  },
  {
    icon: Shield,
    value: 'Seit 2006',
    label: 'Erfahrung & Vertrauen',
    sub: 'Fast 20 Jahre in Gmunden',
  },
  {
    icon: Users,
    value: 'Persönlich',
    label: 'Keine Call-Center',
    sub: 'Direkt Ihr Berater',
  },
  {
    icon: MapPin,
    value: 'Regional',
    label: 'Gmunden & Umgebung',
    sub: 'Ihr Partner vor Ort',
  },
]

export function TrustSignals() {
  return (
    <section className="bg-base border-y border-border py-12 lg:py-16">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.value} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-accent-subtle flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-xl leading-tight">{stat.value}</p>
                  <p className="text-foreground-muted text-sm mt-0.5">{stat.label}</p>
                  <p className="text-foreground-subtle text-xs mt-0.5">{stat.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
