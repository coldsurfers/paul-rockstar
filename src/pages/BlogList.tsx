import { useEffect, useMemo } from 'react'
import { Link, useNavigationType } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageSeo } from '../hooks/usePageSeo'
import { posts, getSeriesPosts } from '../posts'

const BLOG_SEO = {
  title: 'Blog',
  description:
    'Paul Choi의 글 모음. 프론트엔드, 제품, 조직과 개발 문화에 대한 짧은 메모와 회고.',
  path: '/blog',
} as const

let hasEverMounted = false

function useListMotion() {
  const skip = useNavigationType() === 'POP' && hasEverMounted

  useEffect(() => {
    hasEverMounted = true
  }, [])

  return useMemo(
    () => ({
      container: {
        initial: skip ? false : ({ opacity: 0, y: 24 } as const),
        animate: { opacity: 1, y: 0 } as const,
        transition: { duration: 0.6, ease: 'easeOut' } as const,
      },
      item: (i: number) => ({
        initial: skip ? false : ({ opacity: 0, y: 12 } as const),
        animate: { opacity: 1, y: 0 } as const,
        transition: { duration: 0.4, delay: skip ? 0 : i * 0.08 } as const,
      }),
    }),
    [skip],
  )
}

export function BlogList() {
  usePageSeo(BLOG_SEO)
  const motion$ = useListMotion()

  return (
    <main className="min-h-screen px-6 max-w-3xl mx-auto py-24">
      <motion.div {...motion$.container}>
        <Link to="/" className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors tracking-widest uppercase mb-12 inline-block">
          ← Paul Choi
        </Link>
        <p className="text-sm text-[#555] tracking-widest uppercase mb-10">Blog</p>
        <div className="flex flex-col border border-[#1f1f1f]">
          {posts.map((post, i) => (
            <motion.div key={post.slug} {...motion$.item(i)}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 p-6 bg-[#111] hover:bg-[#161616] transition-colors border-b border-[#1f1f1f] last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#f0f0f0] font-medium group-hover:text-[#60a5fa] transition-colors">
                    {post.title}
                  </span>
                  <span className="text-[#333] text-sm">→</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">{post.excerpt}</p>
                <span className="text-xs text-[#444]">
                  {post.date}
                  {post.series && (
                    <span className="ml-1">
                      · 시리즈: {post.series.title} {post.series.order}/{getSeriesPosts(post.series.id).length}
                    </span>
                  )}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
