# BlueBuzzah.com

Static landing page for the BlueBuzzah open-source vibrotactile therapy project: what it is, the research behind it, and BlueBuzzah Updater downloads. `index.html` and `privacy.html`, styled with the design system's `css/tokens.css` and `css/bundle.css` (its `bb-` component classes on plain HTML, no React) plus `css/site.css` for layout. `js/theme.js` sets `data-theme` before first paint; `js/site.js` adds the mobile-menu close and the footer's Display settings dialog (theme override). There is no build step. It deploys as-is to GitHub Pages (`CNAME`). Pages must stay readable with JavaScript off.

## Commands

```bash
node scripts/test_theme.mjs                  # theme resolution
python3 scripts/sync_design_system.py        # re-copy tokens, fonts, logo, favicons, icon sprite after a design-system re-import
python3 scripts/sync_design_system.py --check  # report drift from the design system
python3 -m http.server 8000                  # local preview; the icon sprite (assets/icons.svg) needs http, not file://
```

- Never edit `css/tokens.css`, `css/bundle.css`, `css/fonts/`, `assets/icons.svg` or the favicon files by hand. They are copies; change the design system and re-sync.
- Icons come from the sprite: `<svg class="bb-icon" width="24" height="24" aria-hidden="true" focusable="false"><use href="assets/icons.svg#name"/></svg>`. To add one, add its name to `ICONS` in `scripts/sync_design_system.py`. Glyphs the design system doesn't ship go in `scripts/lucide/` from `lucide-static@1.55.0`.
- Static markup that mirrors a `bundle.js` component carries a `<!-- mirrors bundle.js <Comp> (DS import …) -->` comment. Re-check it after a design-system re-import.

## Design System — required for every UI/UX change

Any change a person can see, hear or touch follows the **BlueBuzzah design system**. That includes layout, color, type, spacing, components, icons, logos and favicons, motion, accessibility, and copy (voice, medical claims, the disclaimer). The design system lives in the BlueBuzzah workspace repo as the `bluebuzzah-design-system` skill, at `../../.claude/skills/bluebuzzah-design-system/` from this repo's root.

Before making a UI/UX change:

1. **Load it.** Invoke the `bluebuzzah-design-system` skill. If it isn't in your skill list (e.g. Claude was started in this repo instead of the workspace root), read `../../.claude/skills/bluebuzzah-design-system/SKILL.md` directly and follow it.
2. **If that path doesn't exist, stop.** This repo isn't checked out inside the workspace. Ask the user to set it up: clone `https://github.com/BlueBuzzah/BlueBuzzah-Workspace`, then run `npm run workspace:setup` to clone this repo under its `projects/`. Don't work from memory or from the current page's styling.
3. **Read what applies:** `README.md` and `accessibility.md`, then `web.md` (the website surface guide), then the README of every design-system component you use.

Rules:

- **The design system wins any conflict.** That includes the disclaimer, which must use the canonical text verbatim.
- **Take every value from the design system's tokens.** Use `var(--token)` from `tokens.css` (custom properties, all four themes). Never hand-type a hex color, size, radius, duration or font, and never add a CSS framework.
- **Copy, don't link.** Copy `tokens.css`, the fonts, icons, logo and the `assets/Web` favicon set into this repo. Never reference the workspace path from a page, because the site deploys on its own.
- **Don't invent rules.** If the design system doesn't cover something, ask rather than inventing a rule.
- **Full migrations:** a whole-site pass is the `/implement-design-system` command, run from the workspace.
