# Firdaus Portfolio

Personal portfolio site for **Muhammad Firdaus Zahin Bin Nurus Sham** — IT Undergraduate at Universiti Teknologi PETRONAS (UTP), MARA Scholar, and campus leader across cybersecurity, digital solutions, and event direction.

**Live site:** [firdaus-portfolio-six.vercel.app](https://firdaus-portfolio-six.vercel.app)

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **React Router** for client-side routing
- **Framer Motion** for entrance animations, staggered scroll reveals, and scroll-linked parallax
- Hand-written CSS design system (`src/styles.css`) — dark cyber aesthetic with cyan/rust accents, DM Serif Display + Inter

## Pages

| Route | Description |
|---|---|
| `/` | Hero, stats, tech stack, featured projects, about strip, latest writing |
| `/projects` | All projects grouped by category (Hackathon, Data & Analytics, UI/UX, Networking, Databases) |
| `/resume` | Full experience/education timeline, awards, certifications, technical skills |
| `/blog` | Writing index |
| `/blog/:slug` | Individual blog post |
| `/contact` | Contact form, socials, location map |

## Project Structure

```
src/
├── components/   # Reusable UI (cards, nav, footer, scroll-reveal helpers)
├── routes/       # Page-level components, one per route
├── data/         # Single source of truth for content (personal info, resume, projects, blog, skills)
├── hooks/        # Custom hooks (parallax, typewriter, count-up, etc.)
├── types/        # Shared TypeScript interfaces
└── styles.css    # Global design system
```

Content (bio, work history, projects, blog posts) lives entirely in `src/data/` — update those files to change what's on the site without touching layout code.

## Getting Started

```bash
npm install
npm run dev        # start dev server at localhost:3000
npm run build       # production build to dist/
npm run typecheck   # TypeScript check, no emit
npm run preview     # preview the production build locally
```

## License

Personal project — all rights reserved.
