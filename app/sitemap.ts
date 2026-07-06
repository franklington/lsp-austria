import type { MetadataRoute } from 'next'
import path from 'path'

export const dynamic = 'force-static'
import { getPostSlugs } from '@/lib/mdx'
import { services } from '@/content/services'

const BASE = 'https://lsp-austria.at'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getPostSlugs(path.join(process.cwd(), 'content/blog'))
  const themenSlugs = await getPostSlugs(path.join(process.cwd(), 'content/themen'))
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/leistungen/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/kfz-zulassung/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ueber-uns/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE}/ratgeber/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/themen/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ]

  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => s.slug !== 'kfz-zulassung-service')
    .map((s) => ({
      url: `${BASE}/leistungen/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/ratgeber/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const themenPages: MetadataRoute.Sitemap = themenSlugs.map((slug) => ({
    url: `${BASE}/themen/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...servicePages, ...blogPages, ...themenPages]
}
