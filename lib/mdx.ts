import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  category?: string
  readingTime?: string
}

export interface Post extends PostMeta {
  content: string
}

export async function getPostSlugs(dir: string): Promise<string[]> {
  try {
    const files = await fs.readdir(dir)
    return files
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map((f) => f.replace(/\.(mdx|md)$/, ''))
  } catch {
    return []
  }
}

export async function getPost(dir: string, slug: string): Promise<Post | null> {
  const extensions = ['mdx', 'md']
  for (const ext of extensions) {
    try {
      const filePath = path.join(dir, `${slug}.${ext}`)
      const source = await fs.readFile(filePath, 'utf8')
      const { content, data } = matter(source)
      return {
        slug,
        content,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: data.date ?? '',
        category: data.category,
        readingTime: data.readingTime,
      }
    } catch {
      continue
    }
  }
  return null
}

export async function getAllPosts(dir: string): Promise<PostMeta[]> {
  const slugs = await getPostSlugs(dir)
  const posts: PostMeta[] = []

  for (const slug of slugs) {
    const post = await getPost(dir, slug)
    if (post) {
      const { content: _content, ...meta } = post
      posts.push(meta)
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}
