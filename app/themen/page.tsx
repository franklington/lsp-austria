import type { Metadata } from 'next'
import Link from 'next/link'
import path from 'path'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { Section, SectionHeader } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Regionale Themen – Versicherung in Gmunden & im Salzkammergut',
  description:
    'Versicherungsthemen mit lokalem Bezug: KFZ, Wohnen, Vorsorge und mehr – speziell für Gmunden und das Salzkammergut. LSP Austria berät Sie persönlich vor Ort.',
  alternates: { canonical: 'https://lsp-austria.at/themen/' },
}

const THEMEN_DIR = path.join(process.cwd(), 'content/themen')

export default async function ThemenIndexPage() {
  const posts = await getAllPosts(THEMEN_DIR)

  return (
    <>
      <div className="bg-base-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Regionale Themen
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Versicherung in Gmunden und im Salzkammergut.
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl text-balance">
            Alle wichtigen Versicherungsthemen mit direktem Bezug zu Gmunden und der Region –
            von KFZ bis Vorsorge.
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
                href={`/themen/${post.slug}/`}
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
                <span className="flex items-center gap-1 text-accent text-xs group-hover:gap-2 transition-all mt-auto pt-2 border-t border-border">
                  Mehr erfahren <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
