export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

export const posts: Post[] = [
  {
    slug: '20260328',
    title: '자율성을 선언한 순간, 결과가 전부가 된다',
    date: '2026.03.28',
    excerpt: '여러 조직을 거치며 반복해서 목격한 패턴. 자율성을 얻은 팀이 왜 6개월 뒤 사라지는가.',
  },
  {
    slug: '20260327',
    title: '입사 2개월 회고: 코드보다 제품이 먼저다',
    date: '2026.03.27',
    excerpt: '많이 만들었고, 많이 쳐냈다. 메디컬 안티에이징 스타트업에서 보낸 두 달의 기록.',
  },
]
