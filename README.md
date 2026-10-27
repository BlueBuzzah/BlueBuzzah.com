# BlueBuzzah.com

Landing page for the BlueBuzzah open-source vibrotactile therapy ecosystem.

## About

BlueBuzzah develops open-source vibrotactile coordinated reset (vCR) therapy devices for people living with Parkinson's disease. This repository contains the static landing page that introduces the project, references peer-reviewed research, and provides download links for the BlueBuzzah Updater application.

## Tech Stack

- **HTML5** - Semantic markup
- **BlueBuzzah design system** - `css/tokens.css` and `css/bundle.css`, copied in by `scripts/sync_design_system.py`, plus `css/site.css` for layout
- **Vanilla JavaScript** - Theme selection and the footer theme override; the pages read fine without it

No build process required. The site is fully static and can be deployed anywhere.

## Disclaimer

BlueBuzzah is an experimental, open-source project. It is not FDA-approved and is not a substitute for medical care. Talk with your neurologist before using it.
