import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../posts'

export function BlogList() {
  return (
    <main className="min-h-screen px-6 max-w-3xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link to="/" className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors tracking-widest uppercase mb-12 inline-block">
          ← Paul Choi
        </Link>
        <p className="text-sm text-[#555] tracking-widest uppercase mb-10">Blog</p>
        <div className="flex flex-col border border-[#1f1f1f]">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
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
                <span className="text-xs text-[#444]">{post.date}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
