# paul-rockstar

Personal portfolio site for Paul Choi — Frontend Engineer & Founder of [COLDSURF](https://coldsurf.io).

Live at [paul-rockstar.coldsurf.io](https://paul-rockstar.coldsurf.io)

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion

## Dev

패키지 매니저는 **pnpm**만 사용합니다 (`npm` / `yarn`으로 설치하지 마세요). [Corepack](https://nodejs.org/api/corepack.html)을 켜 두면 `packageManager` 버전과 맞춰집니다.

```bash
corepack enable
pnpm install
pnpm dev
pnpm build
```

## Blog

포스트는 `src/posts/` 에서 관리됩니다.

### 새 포스트 추가

**1. 마크다운 파일 생성**

```
src/posts/YYYYMMDD.md
```

**2. 메타데이터 등록** (`src/posts/index.ts`)

```ts
export const posts: Post[] = [
  {
    slug: 'YYYYMMDD',
    title: '포스트 제목',
    date: 'YYYY.MM.DD',
    excerpt: '목록에 표시될 한 줄 요약.',
  },
  // ...
]
```

목록은 배열 순서대로 표시됩니다. 최신 글을 위에 추가하세요.
