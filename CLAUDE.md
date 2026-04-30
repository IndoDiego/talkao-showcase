@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js version

This project runs **Next.js 16.2.4 with React 19.2.4 and Tailwind v4** — APIs and conventions differ from older training data. Before writing routing, server-component, font, or image code, read the relevant guide under `node_modules/next/dist/docs/` (see `AGENTS.md`). This is non-negotiable for anything touching `app/`, `next.config.ts`, or `next/*` imports.

## Commands

Package manager is **pnpm** (workspace declared in `pnpm-workspace.yaml`).

| Task | Command |
|------|---------|
| Dev server (http://localhost:3000) | `pnpm dev` |
| Production build | `pnpm build` |
| Production server (after build) | `pnpm start` |
| Lint (flat config, ESLint 9) | `pnpm lint` |
| Lint a single file | `pnpm exec eslint src/components/Hero.tsx` |

There is no test runner configured. There is no `typecheck` script — TS is checked by `next build` (and the editor) since `tsconfig.json` has `noEmit: true`.

## Architecture

### Single-page marketing showcase

The entire site is one route, `src/app/page.tsx`, composing section components in fixed order:

```
Navbar → Hero → BentoOverview → VoiceTranslator → Offiwiz → NexaFlow → Parkao → TechStack → Contact
```

Sections are separated by `<Divider />`. Each section component is self-contained — it pulls its own copy from the i18n dictionary and renders its own layout. Adding a new product section means: (1) create a component, (2) add to `page.tsx` between dividers, (3) add nav anchor in `Navbar.tsx`, (4) add copy keys in both locales of `src/i18n/translations.ts`.

`metadata.robots: "noindex"` is set in `layout.tsx` — this site is intentionally not indexed (private showcase for Diego Jarrin's ecosystem).

### i18n

Custom provider at [src/i18n/I18nProvider.tsx](src/i18n/I18nProvider.tsx) — no library. The dictionary lives in [src/i18n/translations.ts](src/i18n/translations.ts) as a single typed object with `en` and `es` keys. Every component reads copy via `useI18n()`:

```tsx
const { t } = useI18n();
return <h2>{t.hero.tagline}</h2>;
```

Locale persists in `localStorage` under `talkao-locale` and falls back to `navigator.language` (anything starting with `es` → Spanish, else English). The provider also keeps `<html lang>` in sync.

When adding copy: **both `en` and `es` must be updated** — the type system enforces shape parity through `type Dict = (typeof translations)["en"]`.

### Design system

Tailwind v4 (CSS-first config). The palette and animation primitives live entirely in [src/app/globals.css](src/app/globals.css):

- **Brand tokens** (CSS vars in `:root`): `--cyan #4EC1F4`, `--violet #7B5DD6` (lifted from brand `#4B269B` for AA contrast on dark), `--amber #F59E0B`, plus card / muted / grid tokens. Dark mode is the only mode (`color-scheme: dark`, `<html class="dark">`).
- **`@theme inline`** maps these to Tailwind utility names (`bg-cyan`, `text-violet`, `border-card-border`, etc.). Don't add raw hex in components — use the tokens.
- **Effect classes**: `.aurora` (animated blurred gradients), `.grid-bg` (masked grid), `.noise` (SVG turbulence overlay), `.gradient-text` / `.gradient-text-subtle`, `.spotlight` (with `.spotlight-cyan|violet|amber` variants).
- **Spotlight cards**: cursor-following radial glow + conic border. Implemented via [SpotlightCard.tsx](src/components/SpotlightCard.tsx) which sets `--mx`/`--my` CSS variables on `pointermove`; the visual effect lives in `globals.css` `.spotlight::before` / `::after`.
- **Typography**: Barlow (sans, per Talkao brand guide) and JetBrains Mono, both via `next/font/google` in `layout.tsx`. Exposed as `--font-geist-sans` / `--font-geist-mono` (variable names kept from the Geist scaffold so Tailwind utilities pick them up automatically).

### Reusable component primitives

Use these instead of re-rolling — they encode the section conventions:

- [`SectionWrapper`](src/components/SectionWrapper.tsx) — standard `px-5 py-16 md:py-24 max-w-4xl mx-auto`. Most product sections use a custom wider wrapper (`max-w-6xl`) inline; use `SectionWrapper` only for narrower content.
- [`ScrollReveal`](src/components/ScrollReveal.tsx) — `framer-motion` `whileInView` fade-up with `once: true`. Standard entrance for any section content.
- [`SpotlightCard`](src/components/SpotlightCard.tsx) — interactive card. Pass `variant="cyan|violet|amber"`; render as `<a>` via `as="a" href={...}`.
- [`Badge`](src/components/Badge.tsx) — pill with cyan/violet/amber/muted variants matching the brand palette.
- [`AnimatedCounter`](src/components/AnimatedCounter.tsx) — `IntersectionObserver`-driven count-up; animates once.
- [`brand/`](src/components/brand/) — inline-SVG brand marks (Talkao isn't here; Talkao uses raster `/public/logos/talkao/icon-transparent.png`).

### Client vs server components

`layout.tsx` and `page.tsx` are server components. Anything using hooks, `framer-motion`, or pointer events is a client component (`"use client"` at top). Most components in `src/components/` are client. The pattern: keep section composition (`page.tsx`) on the server and isolate interactivity to leaf components.

### Path alias

`@/*` → `./src/*` (in `tsconfig.json`). Always import via `@/components/...`, `@/i18n/...` rather than relative paths.

### Brand assets

Live under `public/logos/{talkao,offiwiz,parkao}/`. Reference from components with absolute paths starting at `/logos/...`. Source files (`.ai`, `.zip`) are gitignored from `/public/logos/**` (see `.gitignore`) — only deliverable formats (PNG/SVG/JPG) ship to the bundle. The brand identity PDF is at `docs/talkao-identidad-visual.pdf`.

## Conventions worth preserving

- **No new files unless necessary.** Adding a section component is fine; adding utility/helper files is usually not — most components are self-contained and use Tailwind classes directly.
- **Don't introduce a CSS-in-JS library** or move tokens out of `globals.css`. The whole design system is intentionally Tailwind v4 + CSS variables.
- **Don't add an i18n library.** The custom provider is deliberate — the site is small and the type safety is exact.
- **Animation budget**: framer-motion is the only animation dep. Don't add GSAP, Lottie, etc. without a reason — the existing primitives (`ScrollReveal`, `SpotlightCard`, aurora/grid/noise CSS) cover most needs.
