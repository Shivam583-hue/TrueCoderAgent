# TrueCoder — preview site

The marketing/preview website for [TrueCoder](https://github.com/Shivam583-hue/TrueCoder), a terminal coding agent with an auditable execution plane. Built with Next.js (App Router), TypeScript, and hand-written CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/app` — root layout, global styles, fonts
- `src/components` — shared UI (`Nav`, `Footer`, `Reveal`, `CountUp`, `ThemeToggle`)
- `src/components/sections` — one component per page section (`Hero`, `Pipeline`, `Features`, `Scorecard`, `Architecture`, `Sandbox`, `Install`)
- `public` — static assets, including the terminal screenshot used in the hero

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
