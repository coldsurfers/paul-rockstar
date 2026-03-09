import { motion } from 'framer-motion'

const links = [
  { label: 'GitHub', href: 'https://github.com/coldsurfers' },
  { label: 'COLDSURF', href: 'https://coldsurf.io' },
  { label: 'Email', href: 'mailto:imcoldsurf@gmail.com' },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-sm text-[#555] tracking-widest uppercase mb-4">
          Paul Choi
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#f0f0f0] leading-tight mb-6">
          Frontend Engineer<br />& Founder
        </h1>
        <p className="text-[#888] text-lg leading-relaxed max-w-xl mb-10">
          Building{' '}
          <a
            href="https://coldsurf.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
          >
            COLDSURF
          </a>
          {' '}— a better ticketing ecosystem.
          React, React Native, TypeScript, and Node.js across the full stack.
        </p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-[#555] hover:text-[#f0f0f0] transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
