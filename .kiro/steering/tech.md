# Tech Stack & Build

## Core
- React 19 with TypeScript (strict mode)
- React Router v7 (framework mode via `@react-router/dev`)
- Vite 6 as bundler
- Node 20 (Alpine Docker image for production)

## Styling
- Tailwind CSS v4 (using `@tailwindcss/postcss` and `@tailwindcss/vite` plugins)
- CSS custom properties for theming (light/dark) defined in `app/styles.css`
- shadcn/ui component library (Radix primitives + CVA + tailwind-merge + clsx) in `app/components/ui/`

## Key Libraries
- i18next + react-i18next — internationalization (DE/EN/FR)
- @emailjs/browser — client-side email sending for sponsor form
- zod — form validation (sponsor contact form)
- lucide-react — icons

## SPA Configuration
- SSR is disabled (`ssr: false` in `react-router.config.ts`)
- Pre-renders only `/`
- Deployed as a static SPA to GitHub Pages

## Commands
| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite dev server (localhost:5173) |
| `npm run build` | Production build (outputs to `build/`) |
| `npm run deploy` | Deploy to GitHub Pages via gh-pages |

## Environment Variables
Defined in `.env.local` (see `.env.example`):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Path Aliases
- `~/*` maps to `./app/*` (configured in `tsconfig.json`)
