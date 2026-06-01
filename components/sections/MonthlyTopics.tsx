import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { MonthlyTopic } from '@/data/monthly-topics'

interface MonthlyTopicsProps {
  topics: MonthlyTopic[]
}

export default function MonthlyTopics({ topics }: MonthlyTopicsProps) {
  return (
    <section className="services" id="themen-teaser">
      <div className="container">
        <h2 className="section-title">Aktuelle Themen</h2>
        <p className="hero-subtitle">Monatlich aktualisierte Beiträge zu relevanten Versicherungsthemen.</p>
        <div className="topic-teaser-grid">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/risikothemen/${topic.slug}`}
              className="block"
            >
              <Card className="h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={topic.image} alt={topic.imageAlt} className="h-44 w-full object-cover" />
                <CardContent className="flex flex-col gap-2 p-5">
                  <Badge variant="outline" className="w-fit text-[0.7rem] uppercase tracking-widest text-muted-foreground border-white/20">
                    {topic.month}
                  </Badge>
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">{topic.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                  <span className="mt-1 text-sm font-medium text-foreground">Artikel lesen →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="hero-cta">
          <Link href="/themen" className={cn(buttonVariants(), 'h-10 px-6')}>
            Alle Themen öffnen
          </Link>
        </div>
      </div>
    </section>
  )
}

