import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { posts } from '../src/posts/index.ts'

const SITE_URL =
  (process.env.SITE_URL ?? 'https://paul-rockstar.coldsurf.io').replace(
    /\/$/,
    '',
  )

interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq: string
  priority: string
}

function toISODate(dotDate: string): string {
  return dotDate.replace(/\./g, '-')
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { loc: '/', changefreq: 'monthly', priority: '1.0' },
    { loc: '/blog', changefreq: 'daily', priority: '0.8' },
  ]

  for (const post of posts) {
    entries.push({
      loc: `/blog/${post.slug}`,
      lastmod: toISODate(post.date),
      changefreq: 'monthly',
      priority: '0.6',
    })
  }

  return entries
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''
      return `  <url>
    <loc>${SITE_URL}${e.loc}</loc>${lastmod}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

const entries = buildEntries()
const xml = toXml(entries)
const outPath = resolve(import.meta.dirname, '..', 'dist', 'sitemap.xml')

writeFileSync(outPath, xml, 'utf-8')

console.log(
  `sitemap.xml generated: ${entries.length} URLs → ${outPath}`,
)
