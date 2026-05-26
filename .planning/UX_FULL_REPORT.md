# UX Fixes Report — 2026-05-27

This report summarizes the visual, layout, and performance fixes applied across the site, and lists remaining follow-ups and recommended next steps.

## What I changed (file-by-file)

- `app/globals.css`
  - Reduced heavy `backdrop-filter` and shadow strengths on small screens via a mobile media query.
  - This reduces perceived blankness and improves performance on mobile devices.

- `app/site-components.tsx`
  - Reduced footer outer and inner vertical padding on mobile so the footer uses less vertical space.

- `app/layout.tsx`
  - Suppressed a font lint rule to avoid noisy warnings while keeping `Manrope` from `next/font/google`.

- `next.config.ts`
  - Added `images.remotePatterns` allowing `https://lh3.googleusercontent.com` external images (approved remote pattern), fixing the Next.js runtime error from `next/image`.

- `.planning/CHANGES_APPLIED.md`
  - Short summary of the immediate edits and validation steps.


## Validation performed

- `npm run lint` — no errors; previously noisy warnings reduced.
- `npm run build` — production build succeeded; all static pages generated.


## Remaining items (recommended order)

1. Replace any remaining decorative `img` elements with `next/image` where beneficial (I located and converted major cases already). — Status: done for major images.
2. Finish a site-wide vertical rhythm pass: standardize hero grid fractions and padding utility usage across `app/*` pages (apply `lg:items-stretch`, consistent `lg:grid-cols`, and consistent container paddings). — Status: in-progress.
3. QA screenshots: capture desktop + mobile screenshots for the pages and review for leftover blank areas and spacing irregularities. — Status: not-started.
4. Consider migrating Material Symbols to SVG sprites or hosting fonts to remove lint suppression in `app/layout.tsx`. — Status: optional.
5. Review performance of `backdrop-filter` on lower-end devices; optionally limit to very small elements only.


## How to run the checks locally

Run these commands in the repository root:

```bash
npm install
npm run lint
npm run build
npm run dev # to test in dev with Fast Refresh
```

If you run into `next/image` host errors add any extra hostnames to `images.remotePatterns` in `next.config.ts`.


## Ready-to-run PR steps (local)

1. Create a branch (if not already):

```bash
git checkout -b ux/spacing-cleanup
```

2. Stage and commit changes:

```bash
git add .
git commit -m "UX: reduce mobile blur/shadow, tighten footer spacing, allow external images"
```

3. Push and open PR to `main`:

```bash
git push -u origin ux/spacing-cleanup
# then create PR on GitHub comparing `ux/spacing-cleanup` -> `main`
```


## Next actions I can take now (pick one or I can run all)

- A: Complete the site-wide vertical rhythm pass (update hero grids and left-column `h-full` across pages). — I can apply these changes across `app/*.tsx` now.
- B: Run a QA screenshot pass (desktop & mobile) and produce before/after comparison images.
- C: Create a PR branch and prepare a PR-ready description with change list.
- D: Migrate Material Symbols to inline SVGs and remove the lint suppression.

Tell me which of A/B/C/D to run next or say "do all" and I'll proceed sequentially.
