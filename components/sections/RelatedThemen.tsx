import Link from 'next/link'
import path from 'path'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { Section, SectionHeader } from '@/components/ui/Section'

const THEMEN_DIR = path.join(process.cwd(), 'content/themen')

interface RelatedThemenProps {
  category: string
}

export async function RelatedThemen({ category }: RelatedThemenProps) {
  const posts = (await getAllPosts(THEMEN_DIR)).filter((post) => post.category === category)

  if (posts.length === 0) return null

  return (
    <Section bg="surface">
      <SectionHeader eyebrow="Regional" title="Mehr zu diesem Thema in Gmunden" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/themen/${post.slug}/`}
            className="card-base card-hover group flex flex-col gap-3"
          >
            <h3 className="font-semibold text-foreground text-base leading-snug text-balance group-hover:text-accent-light transition-colors">
              {post.title}
            </h3>
            <p className="text-foreground-subtle text-sm leading-relaxed line-clamp-3">
              {post.description}
            </p>
            <span className="flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all mt-auto pt-2">
              Mehr erfahren <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
