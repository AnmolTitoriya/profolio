# Profolio

Personal portfolio site — built with React, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize

Edit `src/data.js` to update your name, bio, skills, projects, and contact links.
Section components live in `src/components/`.

## Deploy (GitHub Pages)

Push to `main` — the included GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds the site and deploys it to GitHub Pages automatically.

Before your first deploy:
1. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Confirm `vite.config.js`'s `base` matches your repo name (currently `/profolio/`).
   If you rename the repo, update `base` to match.

The site will be live at `https://<your-username>.github.io/profolio/`.
