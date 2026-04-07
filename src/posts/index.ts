export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  series?: {
    id: string
    title: string
    order: number
    isSummary?: boolean
  }
}

const _posts: Post[] = [
  {
    slug: '20260412',
    title: 'RSS와 REST API를 하나의 피드로 — React Native에서 이기종 콘텐츠를 통합한 이야기',
    date: '2026.04.12',
    excerpt:
      '데이터 소스가 다르다는 건 사용자가 알 필요 없는 사실이다. 네 개의 이기종 소스를 하나의 타임라인으로 합치며 마주한 타입, 캐시, 페이지네이션 문제들.',
  },
  {
    slug: '20260411',
    title: '디자인 시안을 읽는 개발자 — Figma 반복 패턴을 React 선언적 API로 바꾸기',
    date: '2026.04.11',
    excerpt:
      '같은 구조가 6번 반복되면, 그건 패턴이다. 어드민 폼의 시각적 반복 단위를 30줄짜리 선언적 컴포넌트로 추상화한 이야기.',
  },
  {
    slug: '20260410',
    title: '공공 API를 CLI로 감싸기 — kopis-cli 3일간의 빌드업',
    date: '2026.04.10',
    excerpt:
      'KOPIS(공연예술통합전산망)는 한국 공연 정보의 거의 유일한 공공 데이터 소스다. 이걸 터미널에서 바로 쓸 수 있는 도구로 만들기로 했다.',
    series: { id: 'kopis-cli', title: 'KOPIS(공연예술통합전산망)의 DX를 올려요', order: 1 },
  },
  {
    slug: '20260409',
    title: '실행되지 않는 조직은 어떻게 만들어지는가',
    date: '2026.04.09',
    excerpt:
      '비전은 있었다. 방향도 있었다. 그런데 아무것도 만들어지지 않았다. 문제는 사람이 아니라 구조였다.',
    series: { id: 'org-execution', title: '실행되지 않는 조직', order: 4, isSummary: true },
  },
  {
    slug: '20260408',
    title: '명동밥집, 그리고 봉사',
    date: '2026.04.08',
    excerpt:
      '베풀러 간 자리에서 오히려 내가 가진 것을 돌아보게 됐다. 자발성은 체력까지 바꾼다.',
  },
  {
    slug: '20260407',
    title: '협업이 깨진 조직에서 커뮤니케이션을 설계하는 법',
    date: '2026.04.07',
    excerpt:
      '대화를 늘리면 협업이 나아질 거라 생각하기 쉽다. 하지만 구조가 없는 대화는 혼란만 키운다.',
    series: { id: 'org-execution', title: '실행되지 않는 조직', order: 3 },
  },
  {
    slug: '20260406',
    title: '결정이 느린 조직에서 실행 속도를 만드는 방법',
    date: '2026.04.06',
    excerpt:
      '결정을 빠르게 내리는 조직은 드물다. 하지만 결정이 느려도 실행이 멈추지 않는 조직은 만들 수 있다.',
    series: { id: 'org-execution', title: '실행되지 않는 조직', order: 2 },
  },
  {
    slug: '20260405',
    title: '기획이 없는 조직에서 개발자는 어디까지 해야 할까',
    date: '2026.04.05',
    excerpt:
      '기획서가 없으면 개발도 없다고 생각하기 쉽다. 하지만 제품이 멈추는 건 기획서 때문이 아니라, 아무도 다음 한 발을 안 내딛기 때문이다.',
    series: { id: 'org-execution', title: '실행되지 않는 조직', order: 1 },
  },
  {
    slug: '20260404',
    title: 'RAG가 "쓰이기 시작한" 다음에 오는 일',
    date: '2026.04.04',
    excerpt:
      '봇이 답하기 시작하면, 다음 질문은 "더 잘 답하게 하려면 뭘 넣어야 하지?"가 된다. 거기서부터가 진짜 운영이다.',
  },
  {
    slug: '20260403',
    title: '직장인으로서의 올바른 개발자',
    date: '2026.04.03',
    excerpt:
      '실력만 있으면 살아남을 줄 알았다. 그런데 조직이 기울기 시작하면, 살아남는 건 실력이 아니라 위치였다.',
  },
  {
    slug: '20260331',
    title: '팀 안에서 실제로 쓰기 시작한 RAG + Slack bot',
    date: '2026.03.31',
    excerpt: '거창한 AI 플랫폼보다 먼저 필요한 것. Slack 멘션 한 번으로 팀 문서를 근거로 답하는, 실제 운영 흐름 안의 RAG bot.',
  },
  {
    slug: '20250329',
    title: '존 윅에서 배우는 일 잘하는 법',
    date: '2025.03.29',
    excerpt: '완벽한 밸런스와 불굴의 장인정신. 존 윅이 독보적인 이유이자, 일 잘하는 사람의 조건.',
  },
  {
    slug: '20230220',
    title: 'Android 에뮬레이터에 Play Store 활성화하기',
    date: '2023.02.20',
    excerpt: 'AVD config.ini 파일 두 줄만 바꾸면 된다. PlayStore.enabled와 image.sysdir.1 수정법.',
  },
  {
    slug: '20200120',
    title: '이벤트 루프 — 자바스크립트가 비동기를 처리하는 방식',
    date: '2020.01.20',
    excerpt: '자바스크립트는 싱글 스레드다. 그런데 어떻게 비동기가 가능한가. Call Stack, Task Queue, 이벤트 루프의 작동 원리.',
  },
  {
    slug: '20240101',
    title: 'IntersectionObserver — 스크롤 감지의 올바른 방법',
    date: '2024.01.01',
    excerpt: 'scroll 이벤트와 getBoundingClientRect의 단점을 피하는 법. 무한 스크롤과 고정 사이드바 실전 예시.',
  },
  {
    slug: '20240102',
    title: 'Virtual DOM — 왜 필요한가',
    date: '2024.01.02',
    excerpt: '브라우저 DOM을 직접 건드리는 것은 생각보다 훨씬 비싸다. Virtual DOM과 Reconciliation의 작동 원리.',
  },
  {
    slug: '20240113',
    title: '의견 전달의 두 가지 방향',
    date: '2024.01.13',
    excerpt: '의견을 전달하는 방식은 결국 지배와 복종의 관계를 지향하느냐의 문제다. 열린 전달과 통보는 다르다.',
  },
  {
    slug: '20240116',
    title: '신뢰는 어디서 오는가',
    date: '2024.01.16',
    excerpt: '일을 잘하는 것과 신뢰는 다르다. 무의식적으로 나오는 행동들이 그 사람을 믿을 수 있는 존재로 만든다.',
  },
  {
    slug: '20240119',
    title: '그린필드 프로젝트에서 배운 것들',
    date: '2024.01.19',
    excerpt: '도메인에 따른 DB 스키마가 모든 것이다. React Native 앱을 처음부터 만들며 경험한 굵직한 것들.',
  },
  {
    slug: '20240210',
    title: '스타트업은 예술가 집단이다',
    date: '2024.02.10',
    excerpt: 'Radiohead와 Muse가 보여주는 두 갈래. 대중에게 다가갈 것인가, 불가능에 계속 도전할 것인가.',
  },
  {
    slug: '20240901',
    title: 'MySQL에서 위치 데이터를 다루는 법 — GeoHash로 최적화하기',
    date: '2024.09.01',
    excerpt: 'ST_Contains 대신 GeoHash prefix로. 서비스 관점에서 위치 데이터 쿼리를 단순하고 빠르게.',
  },
  {
    slug: '20241112',
    title: '나와 결을 같이 할 수 있는 회사를 알아보는 노하우',
    date: '2024.11.12',
    excerpt: '좋은 회사가 아니라 나와 결을 같이 할 수 있는 회사. 동류, 프로덕트 관점, 전환기를 보는 법.',
  },
  {
    slug: '20241117',
    title: '토스는 왜 상장하지 않을까',
    date: '2024.11.17',
    excerpt: '토스보다 작은 기업들이 상장을 준비하는 걸 보면서 든 의문. 상장 보류가 오히려 더 전략적인 선택일 수 있다.',
  },
  {
    slug: '20250316',
    title: 'React Native New Architecture — 브릿징의 진화',
    date: '2025.03.16',
    excerpt: '우리가 편하게 쓰던 View는 사실 네이티브 브릿징 컴포넌트다. JSI, Fabric, TurboModules까지.',
  },
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

export function getSeriesPosts(seriesId: string): Post[] {
  return posts
    .filter((p) => p.series?.id === seriesId)
    .sort((a, b) => (a.series?.order ?? 0) - (b.series?.order ?? 0))
}
