import { motion } from 'framer-motion'

const projects = [
  {
    name: 'COLDSURF',
    description: 'A better ticketing ecosystem. Concert ticketing platform built from scratch.',
    tags: ['React Native', 'Next.js', 'TypeScript', 'Node.js'],
    href: 'https://coldsurf.io',
  },
  {
    name: 'Ocean Road',
    description: 'Design system powering COLDSURF products. Components, tokens, and more.',
    tags: ['React', 'React Native', 'Storybook', 'TypeScript'],
    href: 'https://github.com/coldsurfers/ocean-road',
  },
  {
    name: '@coldsurf/tickets',
    description: 'CLI tool for querying KOPIS performing arts data. Search concerts, musicals, and more from your terminal.',
    tags: ['CLI', 'TypeScript', 'KOPIS', 'Node.js'],
    href: 'https://github.com/coldsurfers/kopis-cli',
  },
  {
    name: 'Surfers Common',
    description: 'Shared utilities and helpers across the COLDSURF monorepo.',
    tags: ['TypeScript', 'Monorepo', 'Turborepo'],
    href: 'https://github.com/coldsurfers/surfers-common',
  },
  {
    name: 'github-watcher',
    description: 'macOS menu bar app to watch GitHub PR activity in real time. Built with Tauri 2 + Rust + React.',
    tags: ['Tauri', 'Rust', 'React', 'TypeScript', 'macOS'],
    href: 'https://github.com/yungblud/github-watcher',
  },
]

export function Projects() {
  return (
    <section className="px-6 max-w-3xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-sm text-[#555] tracking-widest uppercase mb-10">
          Projects
        </p>
        <div className="flex flex-col gap-px border border-[#1f1f1f]">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-start gap-4 p-6 bg-[#111] hover:bg-[#161616] transition-colors border-b border-[#1f1f1f] last:border-b-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#f0f0f0] font-medium group-hover:text-[#60a5fa] transition-colors">
                    {project.name}
                  </span>
                  <span className="text-[#333] group-hover:text-[#555] transition-colors text-sm">↗</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#444] border border-[#222] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
