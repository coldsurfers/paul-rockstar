import { useHead } from '@unhead/react'

const SITE_NAME = 'Paul Choi'

function absoluteUrl(path: string): string {
  const base =
    (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ??
    (typeof window !== 'undefined' ? window.location.origin : '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

export type PageSeoInput = {
  title: string
  description: string
  path: string
}

/**
 * Unhead 기반: 라우트별 title / 메타 / canonical.
 * 언마운트 시 해당 엔트리는 자동으로 제거되고, createHead init 기본값으로 돌아갑니다.
 */
export function usePageSeo({ title, description, path }: PageSeoInput): void {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = absoluteUrl(path)

  useHead({
    title: fullTitle,
    htmlAttrs: { lang: 'ko' },
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'ko_KR' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'canonical', href: url }],
  })
}
