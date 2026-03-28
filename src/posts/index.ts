export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

const _posts: Post[] = [
  {
    slug: '20250615',
    title: '쿠키를 제대로 쓰고 있는가 — SameSite부터 RBAC까지',
    date: '2025.06.15',
    excerpt: 'httpOnly, secure, sameSite를 설정하면서도 왜 그래야 하는지 모른다면. CSRF부터 Refresh Token까지.',
  },
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
  {
    slug: '20250912',
    title: '진국의 거인 — 인터뷰의 미학',
    date: '2025.09.12',
    excerpt: '락스타들의 인터뷰 영상을 보며 자란 사람으로서, 사회에 나온 뒤 그 영상들을 다시 떠올렸다.',
  },
  {
    slug: '20250809',
    title: 'FSD와 성급한 추상화 — 본질을 찾아가는 과정',
    date: '2025.08.09',
    excerpt: '겉은 FSD였지만 실제로는 중앙집중형 구조. 공통 컴포넌트 하나를 고치려다 드러난 문제들.',
  },
  {
    slug: '20250816',
    title: '카고 컬트 프로그래밍 — 직장인 개발자와 개발자의 차이',
    date: '2025.08.16',
    excerpt: '맥락과 철학을 이해하지 못한 채 무작정 따라 하는 개발. 그 끝에 남는 건 레거시뿐이다.',
  },
  {
    slug: '20250830',
    title: '음악과 개발은 닮아있다',
    date: '2025.08.30',
    excerpt: '음악을 만들고 프로덕트를 만드는 사람으로서 — 두 과정이 놀랍도록 비슷하다는 걸 반복해서 느낀다.',
  },
  {
    slug: '20250330',
    title: 'DRM의 구조 — FairPlay, Widevine, 그리고 AES-CTR',
    date: '2025.03.30',
    excerpt: '스트리밍 서비스에서 콘텐츠가 어떻게 보호되는가. 암호화부터 플랫폼별 구현까지.',
  },
  {
    slug: '20250607',
    title: 'SSR은 언제 써야 하는가',
    date: '2025.06.07',
    excerpt: '웹뷰에서 반쯤만 그려지는 화면을 개선하면서. 무엇을 서버에서 그리고 무엇을 클라이언트에 위임할 것인가.',
  },
  {
    slug: '20250712',
    title: '엘리베이터 옆의 거울 — 바텀시트와 문제 재정의',
    date: '2025.07.12',
    excerpt: '기술적으로 해결하려다 오히려 더 복잡하게 만드는 순간. 바텀시트를 개발하며 떠오른 이야기.',
  },
  {
    slug: '20250801',
    title: '감정이 팩트를 이기는 순간',
    date: '2025.08.01',
    excerpt: '팩트 없이 말로만 이기려 드는 태도는 학교뿐 아니라 직장과 사회 곳곳에 만연하다.',
  },
]

export const posts: Post[] = _posts.sort((a, b) => b.slug.localeCompare(a.slug))
