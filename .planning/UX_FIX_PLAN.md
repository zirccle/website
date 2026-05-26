# UX Fix Plan — Immediate Actions

This document lists the prioritized UX/CSS/layout fixes to reduce blank space, improve visual consistency, and address performance/lint warnings across the site. I'll apply the highest-impact changes first and iterate.

## Goals
- Fix large blank areas (privacy/legal pages and other pages with unbalanced two-column layouts).
- Standardize hero and card grid patterns to avoid uneven whitespace.
- Improve LCP by swapping important `<img>` to `next/image`.
- Reduce heavy backdrop-filter/blur and remove `background-attachment: fixed` on mobile.
- Migrate font loading to `next/font/google` (optional, after layout fixes).

## Phases
1. High-priority layout changes (privacy blank space, body background fix, hero stretch)
2. Image optimizations for hero/hero-like pages (swap to `next/image` for LCP)
3. Visual polish: reduce blur/shadow on mobile, footer spacing
4. Tooling: migrate fonts to `next/font`, resolve lint warnings
5. QA: build, lint, screenshot pages and iterate

## Immediate edits I'll make now
- Update `app/privacy-policy/page.tsx` left column to stretch and match the article height.
- Make the page grid `lg:items-stretch` so columns align vertically.
- Remove `background-attachment: fixed` from `app/globals.css` on mobile (keep on desktop via media query).
- Make the homepage hero container use `lg:items-stretch` for consistency.

## How I'll validate
- Run `npm run lint` and `npm run build` after edits.
- Provide a summary of remaining lint warnings and next recommended PR steps.

---
_Created: 2026-05-27_
