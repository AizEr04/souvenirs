# Arbeitspräferenzen & Verhaltensregeln

## Code Style & Conventions

### TypeScript & React
- Strict mode enabled — no `any` types without justification
- Use functional components with hooks (no class components)
- Props should be typed explicitly; avoid inline object types where possible
- Use `const` for components and functions; avoid `function` keyword
- Arrow functions preferred for callbacks and event handlers

### Naming
- Components: PascalCase (e.g., `HomePage`, `EventGallery`)
- Functions/variables: camelCase (e.g., `getEventBySlug`, `selectedEvent`)
- Constants: UPPER_SNAKE_CASE (e.g., `UPCOMING_EVENTS`, `SERVICE_ID`)
- Files: match component name (e.g., `HomePage.tsx`, `events.ts`)

### Imports & Organization
- Group imports: React/libraries first, then local modules, then types
- Use path alias `~/` for app imports (e.g., `import { L } from "~/lib/i18n-helpers"`)
- Keep imports sorted alphabetically within groups

### Comments
- Write comments in German (matching codebase style)
- Use comments sparingly — code should be self-documenting
- Explain *why*, not *what* (the code shows what it does)

## Localization

### i18n Keys
- Use nested keys: `home.hero.title`, `sponsors.form.fields.name`
- Keep keys lowercase with dots as separators
- All user-facing text must have i18n keys; no hardcoded strings in components
- Use `t()` from `react-i18next` for UI text
- Use `L()` helper from `~/lib/i18n-helpers` for `LocalizedString` objects (event data)

### LocalizedString Objects
- Define in `app/data/events.ts` or component state
- Always include German (de) as the primary language
- Provide EN and FR translations when possible
- Use `L()` to resolve to current language

## Component Structure

### Page Components
- Live in `app/components/` (e.g., `HomePage.tsx`, `Sponsors.tsx`)
- Contain page-level logic, state, and layout
- Use composition: break into smaller sub-components if needed
- Keep route files thin — they only compose Header + page + Footer

### UI Components
- Located in `app/components/ui/` (shadcn/ui generated)
- **Do not edit manually** — use shadcn CLI to add/update
- Import from `./ui/` in feature components

### Form Validation
- Use Zod for schema validation (see `Sponsors.tsx` for pattern)
- Validate on submit and optionally on blur for UX
- Display field-level errors with `aria-invalid` and `aria-describedby`

## Styling

### Tailwind CSS
- Use utility classes; avoid custom CSS when possible
- Responsive design: mobile-first approach (`sm:`, `md:`, `lg:` prefixes)
- Use CSS custom properties for theme colors (defined in `app/styles.css`)
- Gradient backgrounds: use `from-*`, `via-*`, `to-*` utilities

### Dark Mode
- CSS custom properties support light/dark via `:root` and `.dark` selectors
- Use `dark:` prefix for dark mode overrides
- Test both modes during development

## Accessibility

### ARIA & Semantics
- Use semantic HTML: `<button>`, `<nav>`, `<header>`, `<footer>`, `<main>`
- Add `aria-label` for icon-only buttons
- Use `aria-invalid` and `aria-describedby` for form errors
- Use `aria-busy` for loading states
- Use `aria-pressed` for toggle buttons

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use `tabIndex={-1}` for hidden/decorative elements
- Test with Tab, Enter, Escape keys

### Images
- Use `loading="lazy"` for below-fold images
- Use `loading="eager"` for critical images (gallery modal)

## Performance

### Optimization
- Use `React.memo()` for expensive components if needed
- Lazy-load images with `loading="lazy"`
- Avoid unnecessary re-renders — memoize callbacks with `useCallback` if needed
- Keep bundle size in mind — prefer lightweight libraries

### Build & Deployment
- Run `npm run build` before committing to verify no errors
- Test production build locally if making significant changes
- GitHub Pages deployment is automatic via `npm run deploy`

## Git & Commits

### Commit Messages
- Use clear, descriptive messages in English
- Format: `type: description` (e.g., `feat: add event gallery modal`, `fix: sponsor form validation`)
- Keep commits focused on a single feature or fix

## Testing & Validation

### Before Committing
- Run `npm run build` to ensure no TypeScript errors
- Test all pages in both light and dark modes
- Test on mobile (use browser DevTools)
- Verify all language switches work (DE/EN/FR)
- Test form validation and error states

## Documentation

### When to Document
- Add comments for complex logic or non-obvious patterns
- Update this file if adding new conventions
- Keep README.md in sync with setup/deployment instructions
- Document environment variables in `.env.example`

### Code Comments Style
- Use `//` for single-line comments
- Use `/* */` for multi-line comments
- Keep comments concise and actionable

## Collaboration

### Code Review Mindset
- Prioritize clarity and maintainability over cleverness
- Follow existing patterns — consistency matters
- Ask questions if something is unclear
- Suggest improvements constructively

### Communication
- Use German for internal discussions (matching team language)
- Keep i18n keys and translations organized and up-to-date
