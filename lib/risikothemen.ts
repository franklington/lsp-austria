import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const CONTENT_DIR = path.join(process.cwd(), 'content/risikothemen')

export interface FaqItem {
  q: string
  a: string
}

export interface RisikothemaFrontmatter {
  title: string
  description: string
  ctaSecondary: string
  faqs: FaqItem[]
}

export interface Risikothema extends RisikothemaFrontmatter {
  slug: string
  bodyHtml: string
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getRisikothema(slug: string): Risikothema {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const bodyHtml = marked(content.trim()) as string
  return {
    slug,
    ...(data as RisikothemaFrontmatter),
    bodyHtml,
  }
}
