# My 3D Portfolio

A one-page developer portfolio built with React, TypeScript, Vite, Three.js
(via React Three Fiber) and GSAP — an interactive 3D hero, a code-editor
styled intro, and content-only sections for about/career/stack/work/contact.

Everything you'd personalize lives in `src/data/`, so you don't need to touch
component code just to update your name, bio, projects, or links.

## Table of contents

- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Customization guide](#customization-guide)
- [Available scripts](#available-scripts)
- [Deploying](#deploying)
- [Pushing this to your own GitHub](#pushing-this-to-your-own-github)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Tech stack

**Core:** React 18, TypeScript, Vite

**3D & animation:** Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP,
`@gsap/react`

**Supporting:** `react-icons`, `react-fast-marquee`

## Project structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Character/          # 3D scene (Scene.tsx) + Canvas wrapper
│   │   ├── styles/              # one CSS file per component
│   │   ├── Navbar.tsx
│   │   ├── Landing.tsx          # hero: code panel + 3D scene
│   │   ├── About.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Career.tsx
│   │   ├── TechStack.tsx
│   │   ├── Work.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── MainContainer.tsx    # composes every section in order
│   ├── context/
│   │   └── LoadingContext.tsx
│   ├── data/                    # <- edit these files with your content
│   │   ├── profile.ts
│   │   ├── about.ts
│   │   ├── whatIDo.ts
│   │   ├── career.ts
│   │   ├── techStack.ts
│   │   └── work.ts
│   ├── App.tsx
│   ├── App.css                  # design tokens + shared layout classes
│   ├── index.css                # reset + fonts
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Getting started

**Prerequisites:** Node.js 18+ and npm 9+.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## Customization guide

You should be able to make this feel like *your* portfolio without touching
any component markup:

1. **Your info** — edit `src/data/profile.ts` (name, role, tagline, email,
   social links, resume URL).
2. **Bio & stats** — `src/data/about.ts`.
3. **Services** — `src/data/whatIDo.ts`.
4. **Experience timeline** — `src/data/career.ts`.
5. **Tech chips** — `src/data/techStack.ts`.
6. **Projects** — `src/data/work.ts` (title, description, tags, live/repo
   links).
7. **Resume file** — drop a PDF at `public/resume.pdf` to match the
   `resumeUrl` in `profile.ts`, or update the field to point elsewhere.
8. **Colors & type** — the whole palette and font stack are CSS variables at
   the top of `src/index.css` (`--bg`, `--primary`, `--accent`,
   `--glass-light`, `--font-display`, etc.), so a re-theme is a handful of
   value changes, not a rewrite. The site uses a light, glassmorphic style —
   translucent, blurred cards (`--glass-light` / `--glass-dark`) over a
   fixed gradient backdrop defined in `src/App.css` (`.app::before`).
9. **3D scene** — `src/components/Character/Scene.tsx`. The floating shape,
   its material, and the pointer-follow behavior are all there if you want to
   swap in a different geometry or, eventually, a rigged model.

## Available scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint

## Deploying

1. `npm run build`
2. `npm run preview` to sanity-check the build locally
3. Deploy the `dist/` folder — Netlify, Vercel, and Cloudflare Pages all work
   with zero extra config for a static Vite app. On Vercel/Netlify you can
   just point them at the repo with build command `npm run build` and output
   directory `dist`.

## Pushing this to your own GitHub

If this folder isn't a git repo yet:

```bash
cd my-3d-portfolio
git init
git add .
git commit -m "Initial commit"
```

Then, on GitHub, create a new **empty** repository (no README/license/
.gitignore, so there's nothing to conflict with) and run the two commands
GitHub shows you, which look like:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

After that, any further changes are the usual:

```bash
git add .
git commit -m "Update projects"
git push
```

## Troubleshooting

- **Blank screen in dev** — check the browser console for import errors and
  confirm `npm install` finished without errors.
- **3D scene not showing / low frame rate** — try a different browser or GPU;
  reduce `count` in the `<Stars />` component or the `dpr` prop on the
  `Canvas` in `HeroCanvas.tsx`.
- **Build fails on TypeScript errors** — run `npm run build` locally and fix
  the reported errors before deploying; Vite's dev server is more forgiving
  than the production build.

## License

MIT — see [LICENSE](./LICENSE).
