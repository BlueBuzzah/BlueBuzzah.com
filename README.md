# BlueBuzzah.com

Landing page for the BlueBuzzah open-source vibrotactile therapy ecosystem.

## About

BlueBuzzah develops open-source vibrotactile coordinated reset (vCR) therapy devices for people living with Parkinson's disease. This repository contains the static landing page that introduces the project, references peer-reviewed research, and provides download links for the BlueBuzzah Updater application.

## Tech Stack

- **[VitePress](https://vitepress.dev) 1.6.4** - Builds the pages to plain static HTML (MPA mode, custom theme, no framework JavaScript)
- **BlueBuzzah design system** - `css/tokens.css` and `css/bundle.css` copied from the design system, plus `css/site.css` for layout; icons are [Lucide](https://lucide.dev) SVG files in `src/public/assets/icons/`
- **Vanilla JavaScript** - Theme selection and the Display settings dialog; the pages read fine without it

```bash
npm install
npm run build    # static site in src/.vitepress/dist/
npm run preview  # serve the build at http://localhost:4173
```

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`.

## Disclaimer

BlueBuzzah devices are not FDA approved medical devices and not intended to diagnose, treat, cure, or prevent any disease. The information provided through BlueBuzzah is for general wellness purposes only and not a substitute for professional medical advice, diagnosis, or treatment.
