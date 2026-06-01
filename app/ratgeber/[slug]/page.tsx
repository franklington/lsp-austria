import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPost, getPostSlugs } from '@/lib/mdx'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs(BLOG_DIR)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(BLOG_DIR, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://lsp-gmunden.at/ratgeber/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(BLOG_DIR, slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'LSP Consulting GmbH',
      url: 'https://lsp-gmunden.at',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LSP Consulting GmbH',
      url: 'https://lsp-gmunden.at',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-base-dark pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container-page">
          <div className="max-w-2xl">
            {post.category && (
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                {post.category}
              </p>
            )}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-4">
              {post.title}
            </h1>
            <p className="text-foreground-muted text-lg text-balance leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="max-w-2xl prose-lsp">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </Section>

      <CallToAction
        title="Fragen? Wir beraten Sie persönlich."
        description="Lassen Sie sich unverbindlich beraten – telefonisch oder in unserem Büro in Gmunden."
      />
    </>
  )
}
