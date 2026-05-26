# Changes Applied — 2026-05-27

Summary of the edits applied so far to reduce blank space, improve layout consistency, and improve LCP/performance.

## High-priority changes (applied)
- Privacy page: stretched left column and matched article height to eliminate large blank area. (`app/privacy-policy/page.tsx`)
- Global background: removed `background-attachment: fixed` on small screens; enabled only on desktop to avoid large repaints. (`app/globals.css`)
- Homepage hero: standardized column alignment with `lg:items-stretch` so hero columns match height. (`app/page.tsx`)
- Site header fonts: migrated `Manrope` to `next/font/google` and added its class to root HTML. Kept Material Symbols link (font lint suppressed for layout). (`app/layout.tsx`)
- Hero/feature images: replaced major decorative `<img>` elements with `next/image` in these files to improve LCP:
  - `app/page.tsx` (home hero)
  - `app/about/page.tsx`
  - `app/features/page.tsx`
  - `app/how-it-works/page.tsx`
  - `app/wardrobe-app/page.tsx`
  - `app/site-components.tsx` (ScreenHero)
- Terms page: switched to `lg:items-stretch` and made aside `h-full` so columns align and reduce whitespace. (`app/terms-of-service/page.tsx`)
- Reduced heavy backdrop-filter and shadow values on small screens to improve perceived performance and visual density. (`app/globals.css`)
- Footer padding reduced on mobile so the footer uses space more efficiently. (`app/site-components.tsx`)

## Validation
- `npm run lint` — no errors; warnings acceptable removed except those addressed.
- `npm run build` — production build succeeded and all static routes were generated.

## Remaining work (next steps)
- Replace remaining smaller `<img>` occurrences (if any) or fine-tune Image sizing to avoid layout shifts.
- Migrate Material Symbols into a font or SVG sprite if you want to remove the small lint suppression.
- Further reduce whitespace by standardizing grid fractions across all hero sections (apply single `lg:grid-cols` pattern).
- QA screenshots and mobile/desktop verification across breakpoints.

If you want I will continue and apply the remaining fixes now (image sizing finalization, hero grid standardization, and migration of Material Symbols), then run a full QA pass and produce a PR-ready diff.
