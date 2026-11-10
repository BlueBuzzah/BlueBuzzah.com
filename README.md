# BlueBuzzah.com

Landing page for the BlueBuzzah open-source vibrotactile stimulation ecosystem.

## About

BlueBuzzah publishes open-source vibrotactile coordinated reset (vCR) stimulation gloves for people living with Parkinson's disease. This repository contains the static landing page that introduces the project, references peer-reviewed research, and provides download links for the BlueBuzzah Updater application.

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

## Important notices

BlueBuzzah devices are not FDA cleared or approved medical devices and not intended to diagnose, treat, cure, mitigate, or prevent any disease. The information provided through BlueBuzzah is for general wellness purposes only and not a substitute for professional medical advice, diagnosis, or treatment.

**Important:** People with implanted electrodes from deep brain stimulation (DBS), heart pacemakers, or other internal electronic devices should take special precautions around all electronic devices, including BlueBuzzah. Consult your physician before use.

Read the [terms and safety](https://bluebuzzah.com/terms) page before you build or wear a pair.

## License

- **Site code** is under the MIT License ([`LICENSE`](LICENSE)): `src/.vitepress/`, `src/public/js/`, `src/public/css/` (except `fonts/`), `package.json` and `.github/`.
- **Site content** is under CC BY-SA 4.0 ([`LICENSE-CC-BY-SA-4.0.txt`](LICENSE-CC-BY-SA-4.0.txt)): the Markdown pages in `src/` (including `docs/`), `src/public/docs/`, `src/public/assets/og/` and `og-image.png`.
- **Third-party files** keep their own licenses: the fonts in `src/public/css/fonts/` (SIL Open Font License, files alongside) and the icons in `src/public/assets/icons/` (Lucide, ISC, `LICENSE.txt` there). The App Store, Google Play, macOS and Windows download badges use Apple, Google and Microsoft trademarks under their guidelines.

The BlueBuzzah and BuzzahBuddy names and logos, including the app icons and favicons in `src/public/assets/` and `src/public/favicon.ico`, are not covered by these licenses. See [Licenses and the BlueBuzzah name](https://bluebuzzah.com/terms#licenses).
