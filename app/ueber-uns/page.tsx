import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/Section'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CallToAction } from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Über uns – LSP Consulting GmbH',
  description:
    'Seit 2006 Ihr verlässlicher Versicherungspartner in Gmunden. Lernen Sie Franz Leitner und Thomas Sonntagbauer kennen – persönliche Beratung statt Call-Center.',
  alternates: { canonical: 'https://lsp-austria.at/ueber-uns/' },
}

const milestones = [
  { year: '2006', title: 'Gründung', desc: 'LSP Consulting GmbH wird in Gmunden gegründet.' },
  { year: '2010', title: 'Wachstum', desc: 'Ausbau des Leistungsportfolios auf alle Versicherungsbereiche.' },
  { year: '2015', title: 'KFZ-Zulassung', desc: 'Eröffnung der offiziellen KFZ-Zulassungsstelle für die Bezirke GM, KI, VB und WL.' },
  { year: '2024', title: '247 Bewertungen', desc: '4,8 Sterne auf Google – Vertrauen durch persönliche Beratung.' },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Über LSP Austria
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Persönliche Beratung seit 2006.
            </h1>
            <p className="text-foreground-muted text-lg text-balance leading-relaxed">
              Wir sind LSP Consulting GmbH – eine Mehrfachagentur aus Gmunden im
              Herzen des Salzkammerguts. Was uns von anderen unterscheidet: Bei uns beraten echte
              Menschen, keine Call-Center.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-balance">
              Versicherung, die man versteht.
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                Versicherungen sind komplex. Policen sind lang. Und manchmal versteht man erst im
                Schadensfall, was wirklich versichert war – oder was nicht. Genau das wollen wir
                ändern.
              </p>
              <p>
                Seit der Gründung im Jahr 2006 beraten wir Privat- und Unternehmenskunden in
                Gmunden und dem gesamten Salzkammergut. Unser Ansatz: ehrliche Beratung, klare
                Sprache, keine versteckten Provisionen zulasten Ihrer Interessen.
              </p>
              <p>
                Als Mehrfachagentur arbeiten wir mit den führenden Versicherungsgesellschaften
                zusammen und vergleichen deren Angebote für Sie. Das bedeutet: Wir erklären
                Unterschiede und finden die Lösung, die wirklich zu Ihnen passt.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {[
              { title: 'Mehrfachagentur', desc: 'Wir arbeiten mit den führenden Versicherungsgesellschaften zusammen und vergleichen deren Angebote für Sie.' },
              { title: 'Regional', desc: 'Wir kennen die Region, die Menschen und die besonderen Bedürfnisse im Salzkammergut.' },
              { title: 'Persönlich', desc: 'Kein Call-Center, kein Chatbot. Bei uns haben Sie immer einen festen Ansprechpartner.' },
              { title: 'Transparent', desc: 'Keine versteckten Kosten, keine Überraschungen. Klare Kommunikation auf Augenhöhe.' },
            ].map((v) => (
              <div key={v.title} className="card-base flex gap-4">
                <div className="w-2 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                  <p className="text-foreground-subtle text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="dark">
        <SectionHeader
          eyebrow="Unsere Geschichte"
          title="Gmunden. Seit 2006."
          centered
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {milestones.map((m) => (
            <div key={m.year} className="card-base text-center">
              <p className="text-accent text-2xl font-bold mb-1">{m.year}</p>
              <p className="text-foreground font-semibold text-sm mb-1.5">{m.title}</p>
              <p className="text-foreground-subtle text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <TeamGrid />
      <CallToAction />
    </>
  )
}
