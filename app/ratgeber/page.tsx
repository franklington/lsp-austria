import type { Metadata } from 'next'
import Link from 'next/link'
import path from 'path'
import { ArrowRight, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { Section, SectionHeader } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Ratgeber – Versicherungswissen für Österreich',
  description:
    'Kostenlose Ratgeber zu KFZ-Versicherung, Haushaltsversicherung, Pensionsvorsorge und mehr. LSP Austria – Ihr Versicherungsexperte aus Gmunden.',
  alternates: { canonical: 'https://lsp-austria.at/ratgeber/' },
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export default async function RatgeberPage() {
  const posts = await getAllPosts(BLOG_DIR)

  return (
    <>
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Ratgeber
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Versicherungswissen, das hilft.
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl text-balance">
            Verständliche Erklärungen zu KFZ, Eigenheim, Vorsorge und mehr –
            geschrieben von echten Versicherungsexperten aus Gmunden.
          </p>
        </div>
      </div>

      <Section>
        {posts.length === 0 ? (
          <p className="text-foreground-subtle text-center py-12">
            Beiträge werden demnächst veröffentlicht.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/ratgeber/${post.slug}/`}
                className="card-base card-hover group flex flex-col gap-4"
              >
                {post.category && (
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                    {post.category}
                  </span>
                )}
                <h2 className="font-semibold text-foreground text-base leading-snug text-balance group-hover:text-accent-light transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground-subtle text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground-subtle mt-auto pt-2 border-t border-border">
                  {post.readingTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
                    Lesen <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
