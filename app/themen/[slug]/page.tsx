import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPost, getPostSlugs } from '@/lib/mdx'
import { Section } from '@/components/ui/Section'
import { CallToAction } from '@/components/sections/CallToAction'

const THEMEN_DIR = path.join(process.cwd(), 'content/themen')

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs(THEMEN_DIR)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(THEMEN_DIR, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://lsp-gmunden.at/themen/${slug}/` },
  }
}

export default async function ThemenPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(THEMEN_DIR, slug)
  if (!post) notFound()

  return (
    <>
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
            <p className="text-foreground-muted text-lg text-balance">{post.description}</p>
          </div>
        </div>
      </div>
      <Section>
        <div className="max-w-2xl prose-lsp">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </Section>
      <CallToAction />
    </>
  )
}
