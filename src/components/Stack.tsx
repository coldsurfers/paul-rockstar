import { motion } from 'framer-motion'

const stack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'New Architecture', 'NativeModules'] },
  { category: 'Backend', items: ['Node.js', 'tRPC', 'PostgreSQL', 'Prisma'] },
  { category: 'Tooling', items: ['Turborepo', 'pnpm', 'Vite', 'Vercel'] },
]

export function Stack() {
  return (
    <section className="px-6 max-w-3xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-sm text-[#555] tracking-widest uppercase mb-10">
          Stack
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-[#111] p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-xs text-[#555] uppercase tracking-widest mb-4">
                {group.category}
              </p>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-[#888] text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
