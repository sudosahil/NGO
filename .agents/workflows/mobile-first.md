---
description: Mobile-first development rules for Earthen Routes website
---

# Earthen Routes — Mobile-First Development Rules

These rules apply to every single change made to the Earthen Routes website going forward, no exceptions.

## RULE 1 — MOBILE FIRST, ALWAYS
Write every style for mobile (375px) first. Then scale up using these breakpoints only:
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

Never use fixed pixel widths. Always use `width: 100%; max-width: Xpx; margin: 0 auto`.

## RULE 2 — GRIDS ALWAYS COLLAPSE
Every grid must be single column on mobile. Use `grid-template-columns: 1fr` as the base, then add multi-column at breakpoints.

## RULE 3 — TYPOGRAPHY SCALES
All headings must use `clamp()` or responsive font sizes at breakpoints. Never hardcode a fixed font size in px for headings.

## RULE 4 — PADDING SCALES
Start small on mobile, increase at breakpoints:
- Mobile: `padding: 2.5rem 1rem`
- Tablet: `padding: 4rem 2rem`
- Desktop: `padding: 6rem 4rem`

## RULE 5 — IMAGES NEVER OVERFLOW
Every image must have `max-width: 100%; height: auto`. Profile/portrait images must use `object-fit: cover` with a defined aspect ratio container.

## RULE 6 — TEST AT THESE WIDTHS BEFORE FINALISING
- 375px — iPhone SE (smallest common phone)
- 390px — iPhone 14
- 768px — iPad
- 1280px — Desktop

If it breaks at any of these — fix it before moving on.

## RULE 7 — NO INLINE FIXED WIDTHS
Never write `width: 400px` on any container, card, or text block. Use percentages, `max-width`, or `width: 100%`.

## RULE 8 — STACKING ORDER ON MOBILE
Anything side-by-side on desktop must stack vertically on mobile. Text always comes before image when stacked unless explicitly specified otherwise.

## Pre-Finalisation Checklist
- [ ] Does it look correct at 375px width?
- [ ] Does it look correct at 768px width?
- [ ] Do all grids collapse to single column on mobile?
- [ ] Is all text readable without zooming on mobile?
- [ ] Does nothing overflow horizontally?
- [ ] Are all images contained within their parent?
