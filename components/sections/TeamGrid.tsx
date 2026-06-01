import { team } from '@/content/team'
import { Section, SectionHeader } from '@/components/ui/Section'

export function TeamGrid() {
  return (
    <Section bg="dark">
      <SectionHeader
        eyebrow="Ihr Team"
        title="Persönliche Beratung – von Mensch zu Mensch."
        description="Kein Call-Center, kein Chatbot. Bei uns beraten Sie direkt die Experten."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {team.map((member) => (
          <div key={member.name} className="card-base flex flex-col gap-4">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <span className="text-accent-light font-bold text-lg">{member.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-base">{member.name}</p>
                <p className="text-accent text-xs font-medium mt-0.5">{member.role}</p>
              </div>
            </div>
            <p className="text-foreground-subtle text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
