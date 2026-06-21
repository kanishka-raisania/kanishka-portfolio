# Kanishka Raisania — Portfolio 🌸

A dark, aurora-lit personal portfolio built with **React + Vite** and **framer-motion**.
Design language: "Soft Machine" — pastel pink / lavender / mint accents on a plum-black canvas,
glassmorphism, a typing terminal hero, and subtle scroll animations.

## Run locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
```

## Build

```bash
npm run build    # outputs static site to /dist
npm run preview  # preview the production build locally
```

## ✏️ Updating content

**Everything lives in [`src/data.js`](src/data.js).** No need to touch the components.

- Add a project → add one object to the `projects` array (set `featured: true` for a bigger card, `badge: '...'` to make it full-width).
- Change a job, skill, achievement, link, or your bio → edit the matching array/object.
- Swap your photo → replace `public/kanishka.jpg`.
- Update your resume → replace `public/Kanishka_Raisania_Resume.pdf`.

Then: **commit → push → it deploys automatically.**

## 🚀 Deploy (Vercel — one-time setup)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import this repo.
3. Vercel auto-detects Vite (build: `npm run build`, output: `dist`). Just click **Deploy**.
4. After that, **every `git push` to `main` auto-deploys** in ~30s. Branches get preview URLs.

## Structure

```
src/
├── data.js              ← ALL content (edit this)
├── index.css            ← design tokens + all styles
├── App.jsx
└── components/
    ├── Background.jsx    aurora, stars, cursor sparkle, scroll progress
    ├── Navbar.jsx
    ├── Hero.jsx          typing terminal + portrait
    ├── About.jsx         count-up stats + education
    ├── Experience.jsx    timeline
    ├── Projects.jsx      tilt cards
    ├── Skills.jsx
    ├── Achievements.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── Icons.jsx
    ├── Reveal.jsx        scroll-reveal wrapper
    └── Counter.jsx       count-up animation
```
