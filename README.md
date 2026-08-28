# Profolio

Personal portfolio of **Anmol Titoriya** — Software Engineer (.NET/C#, Azure & AWS, Angular & React).
Built with React, Vite, and Tailwind CSS.

**Live:** https://AnmolTitoriya.github.io/profolio/

## Sections

- **Hero** — name, title, tagline, Contact Me / Download Resume CTAs
- **About** — bio
- **Experience** — work history, reverse chronological, with tech tags
- **Skills** — grouped by category (Backend, Frontend, Cloud & DevOps, Databases, Other)
- **Projects** — highlight cards
- **Contact** — email, phone, social links, and a contact form

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

All content lives in `src/data.js` — name, title, bio, experience, skills, projects, and
contact/social links. Section components live in `src/components/`.

- **Resume**: drop your resume PDF at `public/resume.pdf` — the "Download Resume" button
  in the Hero section links there.
- **Contact form**: submits via a `mailto:` link (opens the visitor's email client with the
  message prefilled) — no backend required. To collect submissions without relying on the
  visitor's mail client, wire `src/components/ContactForm.jsx` to a service like Formspree
  or EmailJS instead.

## Deploy (GitHub Pages)

Push to `main` — the included GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds the site and deploys it to GitHub Pages automatically.

Before your first deploy:
1. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Confirm `vite.config.js`'s `base` matches your repo name (currently `/profolio/`).
   If you rename the repo, update `base` to match.

The site will be live at `https://<your-username>.github.io/profolio/`.
