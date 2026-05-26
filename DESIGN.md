# Zirccle Website Design Specification

This document details the design system, architecture, and page structure implemented for the Zirccle pre-launch website. It aligns with the "Elegant Modernist" aesthetic established in the Stitch project "Zirccle".

---

## 1. Core Visual Aesthetic & Design Theme

Zirccle’s brand personality is innovative, organized, and premium—acting as a personal style concierge. The UI uses high-quality whitespace, crisp geometry, and soft glassmorphism to evoke a luxury fashion magazine feel.

### Color Tokens (Verbatim from Stitch)
- **Primary Purple:** `#591162` (deep plum used for branding, navigation accents, headings)
- **Primary Container:** `#732C7B` (button backgrounds, prominent highlights)
- **Primary Glow / Accent:** `#FCAAFF` (glow states, interactive icons)
- **Warm Background:** `#FCF9F8` (soft, comfortable light-mode canvas)
- **On-Surface:** `#1C1B1B` (near-black, editorial text for high readability)
- **Surface Containers:**
  - `lowest`: `#FFFFFF`
  - `low`: `#F6F3F2`
  - `medium`: `#F0EDED`
  - `high`: `#EAE7E7`
  - `highest`: `#E5E2E1`
- **Secondary / Muted:** `#5F5E63` / `#4F434E` (for body paragraphs and description text)
- **Outline & Borders:** `#81737F` (outline) and `#D3C2CF` (outline variant)

### Typography Scale
We use the **Manrope** font family across all roles for a geometry-infused modern look.
- **Display Large (Desktop):** 64px | Weight: 600 | Line Height: 1.1 | Letter Spacing: -0.02em
- **Display Large (Mobile):** 40px | Weight: 600 | Line Height: 1.2
- **Headline Medium:** 32px | Weight: 600 | Line Height: 1.3
- **Headline Small:** 24px | Weight: 500 | Line Height: 1.4
- **Body Large:** 18px | Weight: 400 | Line Height: 1.6
- **Body Medium:** 16px | Weight: 400 | Line Height: 1.6
- **Label Small:** 14px | Weight: 600 | Line Height: 1 | Letter Spacing: 0.05em (uppercase)

### Geometry & Depth
- **Standard Elements:** Buttons and form inputs use an 8px (`0.5rem`) border radius.
- **Large Container Elements:** Bento grid panels, calendar showcases, and walk-in closets use a 24px (`1.5rem`) or 32px (`2rem`) radius for a modern feel.
- **Glassmorphism:** The main navbar and dropdowns use a frosted glass effect (white at 75% opacity, `20px` backdrop blur, and `-webkit-backdrop-filter`).
- **Elevation:** Soft, elegant shadows are used instead of borders (`box-shadow: 0 4px 20px rgba(115, 44, 123, 0.05)`).

---

## 2. Technical Implementation & Stack

- **Core Framework:** Next.js 16.2 (App Router with Turbopack compilation)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 + Autoprefixer & `@tailwindcss/postcss` for high-performance builds
- **Icons:** Material Symbols Outlined (loaded dynamically via Google Fonts)
- **Waitlist Backend:** Next.js Server API Route (`/api/waitlist`) storing submissions in local file storage (`waitlist-emails.json`) to guarantee zero external dependency overhead during initial pre-launch testing.

---

## 3. Site Map & Page Breakdown

The website features 7 gorgeous, fully responsive, mobile-optimized pages:

### 1. Home (`/`)
- **Parallax Hero Banner:** Large headline accompanied by a dynamic, interactive three-phone app mockup stack that follows the user's cursor movements.
- **Quick Benefit Strip:** 3-column layout highlighting digitizing, styling, and planning with custom Material Symbols.
- **Style Journey Steps:** Elegant horizontal timeline detailing the 5 stages of the user's wardrobe lifecycle.
- **Waitlist Form:** Fast signup integrated directly into the local storage JSON database.

### 2. About Us (`/about`)
- **Editorial Spotlight:** Elegant description alongside a high-fashion boutique closet display.
- **Mission & Vision Bento Grid:** Layout utilizing custom background containers and clean spacing (e.g., `#732c7b` solid alongside an offset white bento box).
- **The Paradox Section:** Highlights the "Nothing to Wear" paradox in an image-packed editorial showcase.
- **Brand Values:** 4-column custom grid highlighting Innovation, Conscious Luxury, Empowerment, and Inclusivity.

### 3. Features (`/features`)
- **Showcase Spotlight:** Panoramic preview image of the mobile style concierge.
- **Detailed Modules:** Features split sections for the Smart Wardrobe, the AI Personal Stylist, and the Visual Event Calendar.
- **Interactive FAQ Accordion:** Soft-border detail sections that open smoothly using native browser interactions.

### 4. How It Works (`/how-it-works`)
- **The Journey Walkthrough:** Editorial step-by-step showcase illustrating mobile app screenshots, calendar previews, wardrobe organization layouts, and confident lifestyle photography.
- **Step 5 Finale:** Solid purple CTA block highlighting the final step: "Feel amazing every day."

### 5. Contact Us (`/contact`)
- **Dual Column Setup:** One side lists support email contacts and physical location details with premium 3D-styled icons; the other houses a clean message contact form with beautiful text areas.
- **Feedback State:** Fully animated button submit state confirming successful dispatch.

### 6. Privacy Policy (`/privacy-policy`) & 7. Terms of Service (`/terms-of-service`)
- **Editorial Print-ready layout:** Clean, readable typography focused on legal transparency.
- **Interactive Terms Navigation:** Dynamic sticky sidebar that monitors scroll height and highlights the active legal section automatically using IntersectionObservers.
- **Print Capabilities:** Integrates a native print-style stylesheet and button triggering native browser formatting.
