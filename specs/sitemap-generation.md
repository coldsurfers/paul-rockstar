# Sitemap 빌드 시 생성

## 목표

`pnpm build` 실행 시 `dist/sitemap.xml`을 자동 생성하여, Cloudflare Pages 배포 후 Google Search Console 등 검색엔진 크롤러가 수집할 수 있게 한다.

## 현재 상태

- Vite + React SPA (CSR). SSR/SSG 없음.
- 라우트: `/`, `/blog`, `/blog/:slug` (30+ 포스트)
- 포스트 메타데이터: `src/posts/index.ts`에 수동 배열로 관리 (`slug`, `date` 포함)
- 사이트 URL: `VITE_SITE_URL` 환경변수 (현재 `.env` 파일 없음, Cloudflare에서 설정 추정)
- `robots.txt` 없음

## 구현 방향

### 접근법: Vite 빌드 후 실행하는 Node 스크립트

Vite 플러그인 대신, 독립 스크립트(`scripts/generate-sitemap.ts`)를 `vite build` 이후에 실행한다.

**이유:**
- 포스트 목록이 TypeScript 배열이라 Node에서 직접 import 가능 (tsx 사용)
- Vite 플러그인은 빌드 파이프라인에 결합도가 높아지고, `closeBundle` 타이밍 이슈가 있을 수 있음
- 스크립트 방식이 디버깅과 단독 실행이 쉬움

### 생성할 파일

#### 1. `dist/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://paul-rockstar.coldsurf.io/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://paul-rockstar.coldsurf.io/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://paul-rockstar.coldsurf.io/blog/20260410</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <!-- ... 각 포스트 -->
</urlset>
```

#### 2. `public/robots.txt` (정적 파일)

```
User-agent: *
Allow: /

Sitemap: https://paul-rockstar.coldsurf.io/sitemap.xml
```

### 변경 범위

| 파일 | 작업 |
|------|------|
| `scripts/generate-sitemap.ts` | **신규** — sitemap.xml 생성 스크립트 |
| `public/robots.txt` | **신규** — 크롤러 안내 + sitemap 위치 |
| `package.json` | **수정** — `build` 스크립트에 sitemap 생성 단계 추가 |

### 상세 설계

#### `scripts/generate-sitemap.ts`

```typescript
// 1. src/posts/index.ts에서 posts 배열 import
// 2. 정적 라우트(/, /blog) + 동적 라우트(/blog/:slug) 조합
// 3. date 필드(YYYY.MM.DD)를 lastmod용 YYYY-MM-DD로 변환
// 4. XML 문자열 생성 후 dist/sitemap.xml에 write
```

- 사이트 URL은 `SITE_URL` 환경변수에서 읽되, 기본값 `https://paul-rockstar.coldsurf.io` 사용
- 외부 라이브러리 없이 순수 문자열 템플릿으로 생성 (의존성 최소화)

#### `package.json` 스크립트 변경

```diff
- "build": "tsc -b && vite build",
+ "build": "tsc -b && vite build && tsx scripts/generate-sitemap.ts",
```

- `tsx`는 devDependencies에 추가 (`pnpm add -D tsx`)

### 우선순위/빈도 정책

| 경로 | priority | changefreq |
|------|----------|------------|
| `/` | 1.0 | monthly |
| `/blog` | 0.8 | daily |
| `/blog/:slug` | 0.6 | monthly |

### 체크리스트

- [ ] `tsx` devDependency 추가
- [ ] `scripts/generate-sitemap.ts` 작성
- [ ] `public/robots.txt` 작성
- [ ] `package.json`의 `build` 스크립트 수정
- [ ] 로컬 빌드 후 `dist/sitemap.xml` 생성 확인
- [ ] `dist/robots.txt` 포함 확인
- [ ] sitemap XML 유효성 검증 (URL 개수 = 정적 2개 + 포스트 수)
- [ ] biome check 통과
- [ ] type check 통과
