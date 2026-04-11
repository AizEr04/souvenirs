# Project Structure

```
app/
├── root.tsx              # HTML shell, global imports (styles, i18n, favicon)
├── routes.ts             # Route definitions (React Router v7 config-based routing)
├── styles.css            # Global CSS: Tailwind import, CSS custom properties, base styles
├── routes/               # Route components (thin wrappers composing Header + page + Footer)
│   ├── _index.tsx        # Home page (/)
│   ├── ueber-uns.tsx     # About page (/ueber-uns)
│   ├── sponsoren.tsx     # Sponsors page (/sponsoren)
│   └── info.$slug.tsx    # Event detail page (/info/:slug)
├── components/           # Feature components (one per page section)
│   ├── HomePage.tsx      # Hero, upcoming events, past events, gallery modal
│   ├── Header.tsx        # Fixed nav bar with mobile hamburger menu
│   ├── Footer.tsx        # Site footer with sponsor CTA and social links
│   ├── AboutUs.tsx       # Team description and values
│   ├── Info.tsx          # Single event detail view
│   ├── EventGallery.tsx  # Fullscreen image gallery modal
│   ├── Sponsors.tsx      # Sponsor benefits + contact form (EmailJS + Zod)
│   ├── LanguageSwitcher.tsx  # DE/EN/FR language toggle
│   └── ui/               # shadcn/ui primitives (do not edit manually; use shadcn CLI)
├── data/
│   └── events.ts         # Static event data array with localized fields
├── types/
│   └── event.ts          # TypeScript types: Event, EventDetails, LocalizedString, etc.
├── i18n/
│   ├── i18n.ts           # i18next initialization (fallback: DE)
│   └── locales/          # Translation JSON files: de.json, en.json, fr.json
├── lib/
│   └── i18n-helpers.ts   # L() helper — resolves LocalizedString to current language
└── assets/               # Static images organized by event slug
```

## Conventions
- Route files are thin layout wrappers: they compose `<Header />`, a page component, and `<Footer />` inside a shared flex layout.
- Page-level logic lives in `app/components/` (e.g., `HomePage.tsx`, `Sponsors.tsx`), not in route files.
- All user-facing text uses i18next `t()` keys. Event-specific content uses `LocalizedString` objects resolved via the `L()` helper.
- Event data is static (no API); defined in `app/data/events.ts` and typed in `app/types/event.ts`.
- Routes use German slugs (e.g., `/ueber-uns`, `/sponsoren`).
- The `app/components/ui/` directory contains shadcn/ui components — these are generated and should not be hand-edited.
- Assets are organized in subdirectories by event slug under `app/assets/`.
