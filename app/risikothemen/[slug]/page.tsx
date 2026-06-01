import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getAllSlugs, getRisikothema } from '@/lib/risikothemen'
import FaqAccordion from '@/components/sections/FaqAccordion'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getRisikothema(slug)
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://lsp-gmunden.at/risikothemen/${slug}`,
    },
  }
}

export default async function RisikothemaPage({ params }: Props) {
  const { slug } = await params
  const article = getRisikothema(slug)

  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">{article.title}</h1>
        <div
          className="hero-subtitle"
          dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
        />
        <FaqAccordion items={article.faqs} />
        <div className="hero-cta topics-cta">
          <Link href="/angebot" className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-8 text-base')}>
            Angebot per E-Mail
          </Link>
          <Link href="/#contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 px-8 text-base')}>
            {article.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
