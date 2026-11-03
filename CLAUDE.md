# BlueBuzzah.com

Static landing page for the BlueBuzzah open-source vibrotactile therapy project: what it is, the research behind it, and downloads for BlueBuzzah Updater and BuzzahBuddy. Built with VitePress 1.6.4 in MPA mode with a custom theme: the output is plain static HTML with no framework JavaScript. Pages: `/`, `/privacy` and the build guide under `/docs/…`, styled with the design system's `css/tokens.css` and `css/bundle.css` (its `bb-` component classes on plain HTML, no React) plus `css/site.css` for layout and `css/docs.css` (linked on every page, its rules scoped under `.docs`). `js/theme.js` sets `data-theme` before first paint; `js/site.js` adds the mobile-menu close, the footer's Display settings dialog (theme override) and the docs lightbox. `.github/workflows/deploy.yml` builds pull requests and deploys `main` to GitHub Pages (source: GitHub Actions). Pages must stay readable with JavaScript off.

## Layout

- `src/.vitepress/theme/Layout.vue`: the shared header, footer and Display settings dialog; picks the page body from the page's `page` frontmatter.
- `src/.vitepress/theme/Home.vue`, `Privacy.vue`, `Docs.vue`: each page's `<main>`. `DocsNav.vue` is the docs nav (rendered twice: side and mobile Contents).
- `src/.vitepress/theme/docs.ts`: the one stage list (Start here, stages 1-7, Keep handy) that drives the nav, the StageRail and the Pager. Add or reorder a page there.
- `src/index.md`, `src/privacy.md`: frontmatter only (`page`, `title`, `description`, and `head` for page-only meta such as Open Graph).
- `src/docs/*.md`: the docs pages, Markdown only (see Docs pages).
- `src/.vitepress/config.mts`: the global `<head>`. `theme.js` must stay a blocking script before the stylesheets.
- `src/public/`: everything the pages link, served as-is at the site root (`css/`, `js/`, `assets/`, `docs/img/`, `favicon.ico`, `site.webmanifest`, `CNAME`).

## Working on it

```bash
npm install
npm run build    # static site in src/.vitepress/dist/
npm run preview  # serve the build at http://localhost:4173 (touches dist/404.html first)
```

`vitepress preview` crashes without `dist/404.html`, but `buildEnd` deletes it on purpose (GitHub Pages must serve its own 404), so the preview script touches an empty one. It only exists in your local dist. There are no tests, and no dev server: `vitepress dev` renders pages client-side after `site.js` has run, so it doesn't match production. Run `rm -rf src/.vitepress/dist` before `npm run build` when verifying: stale files hide missing images. Rebuild (under a second) and check the preview in a browser: narrow and wide widths, light and dark themes, keyboard.

- **Page markup goes in the `.vue` files, never as HTML in a `.md` file** (home and privacy). Markdown ends an HTML block at the first blank line and turns the next indented line into a code block, which breaks the build.
- **A new page** needs a `src/<name>.md` with `page`, `title` and `description` (without a description VitePress writes "A VitePress site"), a `<Name>.vue`, and a branch for it in `Layout.vue`. A new docs page needs only a `src/docs/<slug>.md` and an entry in `docs.ts`; the `.vue` and `Layout.vue` steps apply to the non-docs pages.
- **Clean URLs** (`cleanUrls: true`): links never end in `.html` (`/docs/parts`, `/privacy`). The files keep `.html`, so both forms are served.
- Keep `mpa: true` (no Vue runtime or client router; links and `#` anchors behave natively) and `appearance: false` (otherwise VitePress adds its own dark-mode script that fights `theme.js`).
- Reference public files by absolute path (`/assets/…`, `/css/…`). A missing `<img src>` or `<use href>` target in a `.vue` template fails the build. `<a href>` targets, `#anchor` links and the `head` paths in `config.mts` aren't checked, so a typo there builds and deploys. After a build, grep `src/.vitepress/dist` for the ids and pages you link.
- The build deletes VitePress's `404.html` (blank in MPA mode), so GitHub Pages serves its own 404.
- **Copied from the design system, never edited by hand:** `src/public/css/tokens.css`, `src/public/css/bundle.css`, `src/public/css/fonts/`, `src/public/assets/bluebuzzah-mark-512.png`, the favicon/app icons in `src/public/assets/` and `src/public/favicon.ico`. After a design-system re-import, re-copy them from the workspace root:
  ```bash
  DS=.claude/skills/bluebuzzah-design-system; SITE=projects/BlueBuzzah.com/src/public
  cp $DS/tokens.css $DS/components/bundle.css $SITE/css/ && cp $DS/fonts/* $SITE/css/fonts/
  cp $DS/assets/Logos/bluebuzzah-mark-512.png $DS/assets/Web/{favicon-16,favicon-32,apple-touch-icon-180,icon-192,icon-512,icon-maskable-512}.png $SITE/assets/
  cp $DS/favicons/favicon.ico $SITE/
  ```
  `css/fonts/` must sit next to `css/tokens.css`, since its `@font-face` URLs are relative.
- **Icons are Lucide SVG files in `src/public/assets/icons/`** (v1.55.0, ISC; see `assets/icons/LICENSE.txt`), one file per glyph, used everywhere by reference:
  `<svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/NAME.svg#icon"/></svg>`
  To add or replace an icon, download it from `https://unpkg.com/lucide-static@1.55.0/icons/NAME.svg` and add `id="icon"` to its root `<svg>`. That's the only edit, and every use updates. The files draw in `currentColor`, so icons take their text's colour. Use sizes 20, 24 or 32, and always pair an icon with a word.
- Static markup that mirrors a `bundle.js` component carries a `<!-- mirrors bundle.js <Comp> (DS import …) -->` comment. Re-check it after a design-system re-import.
- **Worktrees go only in `.claude/worktrees/<name>`** inside this repo (gitignored), never beside it in the workspace's `projects/` or anywhere else.

## Docs pages (`/docs/…`)

- Markdown in `src/docs/`, frontmatter `page: docs`, `title`, `description`, and optionally `lead`, `need` (`[{qty,label}]`), `tools`, `figure` (`{src,alt,caption}`), `buy` (for `<BuyList />`). `Docs.vue` renders the rest. Stage pages get the StageRail and Pager from their place in `docs.ts`.
- **Markdown uses only these global components and never raw HTML blocks:** `<Notices />` (the legal notices, verbatim; put it on every therapy page), `<Banner tone title>`, `<Checklist :items>`, `<BuyList />`, `<FileButton href label>`, `<FileButtons :files>` (two or more in a row), `<Shot src alt caption>` (put blank lines around it, indented under its step), `<StageList />`. Source of truth for props is each `.vue` file.
- Every top-level ordered list renders as numbered steps (numbers restart at 1; `start=` is ignored). Keep a section's steps one list, indent notes into their step, and use bullets for anything that isn't a step.
- Images live in `src/public/docs/img/` as `NAME.webp` (up to 1600px wide, never upscaled) and `NAME-thumb.webp` (640px wide), converted once with `cwebp` from the source PNG. No script is committed. Reference them as `/docs/img/NAME` in `figure.src` and `<Shot src>`. A missing one fails the build only through frontmatter or `<Shot>` in Vue; check the built HTML:
  ```bash
  cd src/.vitepress/dist && grep -rhoE '/docs/img/[A-Za-z0-9._-]+' --include='*.html' . | sort -u | while read f; do [ -f ".$f" ] || echo "MISSING $f"; done
  ```
  It must print nothing.
- The left nav doesn't expand to show a page's sections and doesn't scroll on its own.
- No time estimates for buying, shipping, printing or assembling. Build facts from the owner win over the old wiki.

## Design System — required for every UI/UX change

Any change a person can see, hear or touch follows the **BlueBuzzah design system**. That includes layout, color, type, spacing, components, icons, logos and favicons, motion, accessibility, and copy (voice, medical claims, the disclaimer). The design system lives in the BlueBuzzah workspace repo as the `bluebuzzah-design-system` skill, at `../../.claude/skills/bluebuzzah-design-system/` from this repo's root.

Before making a UI/UX change:

1. **Load it.** Invoke the `bluebuzzah-design-system` skill. If it isn't in your skill list (e.g. Claude was started in this repo instead of the workspace root), read `../../.claude/skills/bluebuzzah-design-system/SKILL.md` directly and follow it.
2. **If that path doesn't exist, stop.** This repo isn't checked out inside the workspace. Ask the user to set it up: clone `https://github.com/BlueBuzzah/BlueBuzzah-Workspace`, then run `npm run workspace:setup` to clone this repo under its `projects/`. Don't work from memory or from the current page's styling.
3. **Read what applies:** `README.md` and `accessibility.md`, then `web.md` (the website surface guide), then the README of every design-system component you use.

Rules:

- **The Home page uses the two separate Banners described here. Docs pages put both notices in one untitled info Banner through `<Notices />`, and `Notices.vue` must stay that way.**
- **The design system wins any conflict, except the legal notices.** The medical disclaimer and the implanted-device notice use this text verbatim, chosen for legal reasons. Never replace them with design-system wording or reword them. The disclaimer:
  > BlueBuzzah devices are not FDA approved medical devices and not intended to diagnose, treat, cure, or prevent any disease. The information provided through BlueBuzzah is for general wellness purposes only and not a substitute for professional medical advice, diagnosis, or treatment.
  The implanted-device notice (a warning Banner whose title is "Important:", with the rest as its text):
  > Important: People with implanted electrodes from deep brain stimulation (DBS), heart pacemakers, or other internal electronic devices should take special precautions around all electronic devices, including BlueBuzzah. Consult your physician before use.
- **Take every value from the design system's tokens.** Use `var(--token)` from `tokens.css` (custom properties, all four themes). Never hand-type a hex color, size, radius, duration or font, and never add a CSS framework.
- **Copy, don't link.** Copy `tokens.css`, the fonts, icons, logo and the `assets/Web` favicon set into this repo. Never reference the workspace path from a page, because the site deploys on its own.
- **Don't invent rules.** If the design system doesn't cover something, ask rather than inventing a rule.
- **Full migrations:** a whole-site pass is the `/implement-design-system` command, run from the workspace.
