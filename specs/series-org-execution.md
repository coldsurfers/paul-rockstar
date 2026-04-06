# SPEC: 시리즈 연결 — "실행되지 않는 조직"

## 배경

아래 네 글은 같은 조직 병리의 서로 다른 층위를 다룬다.

```
20260405 (기획 부재)  ──┐
20260406 (결정 지연)  ──┼──▶  20260409 (구조적 진단)
20260407 (협업 붕괴)  ──┘
       [증상 글]                 [종합 글]
```

현재 네 글은 날짜순 나열만 되어 있어 독자가 관계를 인식하기 어렵다.
이 스펙은 **독자가 어떤 글을 먼저 읽든 시리즈 구조를 인식할 수 있게** 하는 것이 목표다.

---

## Phase 1: 콘텐츠 연결 (마크다운만 수정)

코드 변경 없이 글 본문만 수정한다. 가장 빠르게 적용 가능.

### 1-A. 종합 글(20260409)에서 증상 글 세 편을 회수

`20260409.md`의 "월요일 아침, 또 다시 원점" 섹션 마지막에 아래 문단을 추가한다.

```markdown
기획이 부재한 상황에서 개발자가 어디까지 해야 하는지 고민했고,
결정이 느린 구조에서 실행을 멈추지 않는 방법을 찾았고,
협업이 깨진 환경에서 커뮤니케이션을 재설계해봤다.

그런데 세 문제를 따로 풀수록, 하나의 공통 패턴이 보이기 시작했다.
```

**의도:** 종합 글이 세 글의 상위 글임을 서사적으로 선언한다.

### 1-B. 증상 글 세 편 각각의 마지막에 종합 글을 가리킨다

각 글의 마지막 섹션 뒤에 아래 한 줄을 추가한다.

```markdown
*이 문제의 구조적 원인을 파고든 글: [실행되지 않는 조직은 어떻게 만들어지는가](/blog/20260409)*
```

**대상 파일:**
- `20260405.md` — "느낀 것" 섹션 뒤
- `20260406.md` — "한 줄로" 섹션 뒤
- `20260407.md` — "느낀 것" 섹션 뒤

**의도:** 증상 글을 먼저 읽은 독자가 종합 글로 자연스럽게 이동한다.

### Phase 1 체크리스트

- [ ] `20260409.md` 도입부에 세 글 회수 문단 추가
- [ ] `20260405.md` 하단에 종합 글 링크 추가
- [ ] `20260406.md` 하단에 종합 글 링크 추가
- [ ] `20260407.md` 하단에 종합 글 링크 추가

---

## Phase 2: 데이터 모델 확장 (index.ts 수정)

시리즈 개념을 데이터 레벨에서 지원한다.

### 2-A. Post 인터페이스에 series 필드 추가

```typescript
// src/posts/index.ts

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  series?: {
    id: string        // 시리즈 식별자 (예: 'org-execution')
    title: string     // 시리즈 표시명 (예: '실행되지 않는 조직')
    order: number     // 시리즈 내 순서 (1부터 시작)
    isSummary?: boolean // 종합 글 여부
  }
}
```

### 2-B. 시리즈 데이터 적용

```typescript
{
  slug: '20260405',
  title: '기획이 없는 조직에서 개발자는 어디까지 해야 할까',
  date: '2026.04.05',
  excerpt: '...',
  series: { id: 'org-execution', title: '실행되지 않는 조직', order: 1 },
},
{
  slug: '20260406',
  title: '결정이 느린 조직에서 실행 속도를 만드는 방법',
  date: '2026.04.06',
  excerpt: '...',
  series: { id: 'org-execution', title: '실행되지 않는 조직', order: 2 },
},
{
  slug: '20260407',
  title: '협업이 깨진 조직에서 커뮤니케이션을 설계하는 법',
  date: '2026.04.07',
  excerpt: '...',
  series: { id: 'org-execution', title: '실행되지 않는 조직', order: 3 },
},
{
  slug: '20260409',
  title: '실행되지 않는 조직은 어떻게 만들어지는가',
  date: '2026.04.09',
  excerpt: '...',
  series: { id: 'org-execution', title: '실행되지 않는 조직', order: 4, isSummary: true },
},
```

### 2-C. 시리즈 유틸 함수

```typescript
// src/posts/index.ts

export function getSeriesPosts(seriesId: string): Post[] {
  return posts
    .filter((p) => p.series?.id === seriesId)
    .sort((a, b) => (a.series?.order ?? 0) - (b.series?.order ?? 0))
}
```

### Phase 2 체크리스트

- [ ] `Post` 인터페이스에 `series` 옵셔널 필드 추가
- [ ] 4개 포스트에 `series` 데이터 적용
- [ ] `getSeriesPosts` 유틸 함수 추가

---

## Phase 3: UI 반영 (컴포넌트 수정)

### 3-A. BlogPost 페이지 — 시리즈 네비게이션 컴포넌트

글 본문 하단에 같은 시리즈의 다른 글을 보여주는 컴포넌트를 추가한다.

```
┌─────────────────────────────────────────┐
│  시리즈: 실행되지 않는 조직              │
│                                         │
│  1. 기획이 없는 조직에서 개발자는...     │  ← 현재 글이면 하이라이트
│  2. 결정이 느린 조직에서 실행 속도를...   │
│  3. 협업이 깨진 조직에서 커뮤니케이션...  │
│  4. 실행되지 않는 조직은 어떻게... ★     │  ← isSummary 표시
└─────────────────────────────────────────┘
```

**위치:** `src/pages/BlogPost.tsx` 내부, 마크다운 렌더링 이후
**조건:** `post.series`가 존재할 때만 렌더링

```tsx
// src/components/SeriesNav.tsx (신규 파일)

interface SeriesNavProps {
  currentSlug: string
  seriesId: string
}

export function SeriesNav({ currentSlug, seriesId }: SeriesNavProps) {
  const seriesPosts = getSeriesPosts(seriesId)
  if (seriesPosts.length === 0) return null

  const seriesTitle = seriesPosts[0].series?.title ?? ''

  return (
    <nav className="border border-[#1f1f1f] bg-[#0d0d0d] p-6 mt-16">
      <p className="text-xs text-[#555] tracking-widest uppercase mb-4">
        시리즈: {seriesTitle}
      </p>
      <ol className="flex flex-col gap-2">
        {seriesPosts.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className={`text-sm transition-colors ${
                p.slug === currentSlug
                  ? 'text-[#f0f0f0] font-medium'
                  : 'text-[#666] hover:text-[#60a5fa]'
              }`}
            >
              {p.series?.order}. {p.title}
              {p.series?.isSummary && ' ★'}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

### 3-B. BlogList 페이지 — 시리즈 배지

목록에서 시리즈에 속한 글에 작은 배지를 표시한다.

```
┌────────────────────────────────────────────────┐
│ 실행되지 않는 조직은 어떻게 만들어지는가    →  │
│ 비전은 있었다. 방향도 있었다...                 │
│ 2026.04.09  ·  시리즈: 실행되지 않는 조직 4/4  │
└────────────────────────────────────────────────┘
```

**위치:** `src/pages/BlogList.tsx` — 각 포스트 아이템의 날짜 옆
**조건:** `post.series`가 존재할 때만 표시

```tsx
{post.series && (
  <span className="text-xs text-[#444]">
    · 시리즈: {post.series.title} {post.series.order}/{seriesTotal}
  </span>
)}
```

### Phase 3 체크리스트

- [ ] `src/components/SeriesNav.tsx` 신규 생성
- [ ] `src/pages/BlogPost.tsx`에 `SeriesNav` 조건부 렌더링 추가
- [ ] `src/pages/BlogList.tsx`에 시리즈 배지 표시 추가

---

## 실행 순서 요약

| Phase | 범위 | 수정 파일 | 난이도 | 독립 실행 가능 |
|-------|------|-----------|--------|----------------|
| 1 | 마크다운 본문만 | 4개 `.md` 파일 | 낮음 | O |
| 2 | 데이터 모델 | `index.ts` | 중간 | O (UI 없이도 동작) |
| 3 | UI 컴포넌트 | `SeriesNav.tsx`, `BlogPost.tsx`, `BlogList.tsx` | 중간 | Phase 2 선행 필요 |

**권장:** Phase 1 → 2 → 3 순서로 진행.
Phase 1만으로도 독자 경험이 개선되며, Phase 2~3은 시리즈가 더 쌓일 때 진행해도 무방하다.

---

## 향후 확장 가능성

- 다른 시리즈 후보: RAG 시리즈 (`20260331` → `20260404`), 조직 생존 시리즈 (`20260403` → `20260328`)
- 시리즈 목차 전용 페이지 (`/series/:id`)
- 시리즈 단위 RSS 피드
