import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { usePageSeo } from '../hooks/usePageSeo'
import { posts } from '../posts'
import { SeriesNav } from '../components/SeriesNav'

const postModules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string | null>(null)

  const post = posts.find((p) => p.slug === slug)

  usePageSeo({
    title: post?.title ?? 'Blog',
    description: post?.excerpt ?? '',
    path: `/blog/${slug ?? ''}`,
  })

  useEffect(() => {
    if (!slug) return
    const loader = postModules[`../posts/${slug}.md`]
    if (!loader) return
    loader().then((mod) => setContent(mod as string))
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <main className="min-h-screen px-6 max-w-3xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link to="/blog" className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors tracking-widest uppercase mb-12 inline-block">
          ← Blog
        </Link>
        <span className="block text-xs text-[#444] mb-8">{post.date}</span>
        {content ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#f0f0f0] leading-tight mb-8">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-[#f0f0f0] mt-12 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-semibold text-[#d0d0d0] mt-8 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-[#888] text-base leading-relaxed mb-5">{children}</p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-[#333] pl-4 my-6 text-[#666] italic">{children}</blockquote>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.startsWith('language-')
                return isBlock ? (
                  <code className="block bg-[#0d0d0d] border border-[#1f1f1f] p-4 my-4 text-sm text-[#60a5fa] overflow-x-auto font-mono leading-relaxed">
                    {children}
                  </code>
                ) : (
                  <code className="bg-[#0d0d0d] border border-[#1f1f1f] px-1.5 py-0.5 text-sm text-[#60a5fa] font-mono">
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => <pre className="my-4">{children}</pre>,
              hr: () => <hr className="border-[#1f1f1f] my-10" />,
              ul: ({ children }) => (
                <ul className="list-none text-[#888] text-base leading-relaxed mb-5 flex flex-col gap-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-[#888] text-base leading-relaxed mb-5 flex flex-col gap-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="flex gap-2 before:content-['—'] before:text-[#333]">{children}</li>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors">
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="text-[#d0d0d0] font-semibold">{children}</strong>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border border-[#1f1f1f] text-sm">{children}</table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-[#0d0d0d]">{children}</thead>,
              th: ({ children }) => (
                <th className="text-left px-4 py-2 text-[#555] font-medium border-b border-[#1f1f1f]">{children}</th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 text-[#666] border-b border-[#1a1a1a]">{children}</td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p className="text-[#555] text-sm">Loading...</p>
        )}
        {post.series && slug && (
          <SeriesNav currentSlug={slug} seriesId={post.series.id} />
        )}
      </motion.div>
    </main>
  )
}
