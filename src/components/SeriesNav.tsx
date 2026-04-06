import { Link } from 'react-router-dom'
import { getSeriesPosts } from '../posts'

interface SeriesNavProps {
  currentSlug: string
  seriesId: string
}

export function SeriesNav({ currentSlug, seriesId }: SeriesNavProps) {
  const seriesPosts = getSeriesPosts(seriesId)
  if (seriesPosts.length === 0) return null

  const seriesTitle = seriesPosts[0].series?.title ?? ''

  return (
    <nav className="border border-[#1f1f1f] bg-[#0d0d0d] p-6 mt-16">
      <p className="text-xs text-[#555] tracking-widest uppercase mb-4">
        시리즈: {seriesTitle}
      </p>
      <ol className="flex flex-col gap-2">
        {seriesPosts.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className={`text-sm transition-colors ${
                p.slug === currentSlug
                  ? 'text-[#f0f0f0] font-medium'
                  : 'text-[#666] hover:text-[#60a5fa]'
              }`}
            >
              {p.series?.order}. {p.title}
              {p.series?.isSummary && ' ★'}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
