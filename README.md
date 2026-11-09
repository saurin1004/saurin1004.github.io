# saurin1004.github.io

My personal website: **[saurin1004.github.io](https://saurin1004.github.io)**

I'm Saurin Prajapati, a software engineer working on backend services, event-driven systems and ML-powered pipelines, and an M.S. Computer Science student at Arizona State University.

## What's here

- **Home**: intro, a quick profile, skills, recent experience and projects
- **Experience**: a timeline of roles, with each one's impact and stack
- **Projects**: searchable and filterable by technology
- **Education**: degrees, coursework, certifications and coding profiles
- **Résumé**: embedded from Google Drive, so it's always the latest copy
- **Contact**: email (one-click copy) and profiles

Extras: light/dark themes that follow your system setting, a command palette (`⌘K`, `Ctrl+K` or `/`), SEO and structured data, and reduced-motion support.

## Editing content

All the content lives in two files:

| File                     | What it controls                                                       |
| ------------------------ | ---------------------------------------------------------------------- |
| `src/portfolio.js`       | Profile, about, socials, skills, experience, education, certifications |
| `src/data/projects.json` | Project cards                                                          |

Company and school logos live in `src/assets/logos/`.

## Running locally

```bash
npm install
npm start          # http://localhost:3000
```

## Deploying

Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/deploy.yml`. Pull requests are built but not deployed.

## Stack

React, React Router, react-helmet and react-icons. The styling is plain CSS with custom properties (`src/styles.css`). Fonts are Space Grotesk, Inter and JetBrains Mono. Tech logos come from Iconify.

## License

MIT. See [LICENSE](LICENSE).
