# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Annie Qiu's personal portfolio/photography website, built with Astro + React islands + Tailwind.

## Commands

- `npm run dev` / `npm start` — local dev server
- `npm run build` — runs `astro check` (type checking against content collection schemas) then `astro build`; always run this before considering a change done, since Astro content collections are strictly typed
- `npm run preview` — preview the production build
- There is no test suite and no separate lint script wired into `npm run lint` (ESLint config exists at `.eslintrc.*` but must be invoked directly, e.g. `npx eslint src`)

## Architecture

### Content collections (`src/content/`)

Three collections defined in `src/content/config.ts`, each with a Zod schema:
- **`projects`** (type `content`, markdown) — portfolio case studies. Frontmatter includes `title`, `description`, `year`, `tools`, optional `images` (array, resolved via the `image()` helper), `archive` (boolean — splits the sidebar into current vs. archive sections), and `video` (Vimeo ID, not a URL). Body markdown is rendered as `Content` on project detail pages.
- **`paintings`** (type `content`, markdown) — art pieces with `title`, `year`, `image`, optional `text`.
- **`albums`** (type `data`, YAML files like `src/content/albums/2-hanover.yml`) — photo albums. Each album has a matching directory of images at `src/content/albums/<album-id>/`; images are NOT declared in the YAML frontmatter but discovered at build time via `import.meta.glob` in `src/utils/photos.ts` (`getAlbumImages`), matched by directory name containing the album id. When adding photos to an album, just drop files into the matching directory — no manifest to update.

Adding a new project/painting: add a markdown file to the relevant `src/content/*` folder following an existing file's frontmatter shape; it's picked up automatically by `getCollection()` calls in pages/components — no registration elsewhere needed.

### Routing & layouts

- `src/pages/index.astro` is a single-page app-like home: one page with hidden/shown "panels" (`WorkPanel` instances for paintings/software/design/about) toggled via a client-side `<script>` that shows/hides `[data-work-panel]` elements based on which `.category` label was clicked. There's no client router for this — it's plain DOM show/hide.
- `src/pages/projects/[...slug].astro` and `src/pages/photos/[id].astro` are dynamic routes driven by `getStaticPaths()` over the `projects` and `albums` collections respectively (static output, one page per entry).
- Two base layouts in `src/layouts/`: `Layout.astro` (simple, single content column) and `SplitLayout2.astro` (adds the persistent `ProjectsList` sidebar — used by project detail pages so the sidebar nav stays visible while browsing between projects).
- `WorkPanel.astro` is a generic panel renderer with three `layout` modes (`grid`, `list`, `design`) driven by its `items`/`projects` props — check this component before adding a new "section" to the homepage rather than building a bespoke block.

### Images

Local images go through Astro's `astro:assets` `Image` component and the content collection `image()` schema helper for type-safe, optimized builds. Book cover images in `src/data/books.ts` are plain external URLs (not Astro-optimized) rendered directly — that list is a static hardcoded array (title/author/img/year/rec), not a content collection, so new books are added by editing that file directly.

### Styling

Tailwind (`tailwind.config.mjs`) plus one global Sass file (`src/styles/global.scss`) imported per-layout. Custom theme colors: `dark-green`, `hover-color`, `beige`, `light-green`. Body font is DM Mono loaded via Google Fonts `<link>` tags in each layout's `<head>` (not self-hosted).
