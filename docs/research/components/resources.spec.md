# ResourcesSection Specification

## Overview
- **Target file:** `src/components/ResourcesSection.tsx`
- **Interaction model:** static (card hover lift).

## Structure
1. Giant heading "Resources" top-left (Oldschool Grotesk 400, ~140px clamp, letterSpacing -4.2px, color #000).
2. Two-column area:
   - LEFT (~30%): a pill button "Explore More Resources" (white bg, borderRadius 12px, padding 12px 22px, soft shadow, Oldschool Grotesk 400 ~16px, color #000, hover bg slightly darker).
   - RIGHT (~70%): a vertical stack of 3 blog cards (gap ~16px).

## Blog card
- Layout: horizontal. LEFT = rounded gradient thumbnail (~200px wide, contains the blog image, object-contain on a soft pink/orange gradient, borderRadius 16px). RIGHT = text: a small uppercase category eyebrow (Oldschool Grotesk 300, ~13px, letterSpacing 0.05em, color #888) then a serif title (Recoleta 400, ~28px, color #000).
- Card: background #fff (very subtle), borderRadius 20px, padding 16px, soft shadow; hover: shadow grows, transition 0.25s.

## Cards (verbatim)
1. category "NEWS & UPDATES • NEWS UPDATES", title "Clyde’s Commitment to Focus", image `/images/blog-commitment.png`
2. category "INSURANCE • ARTICLES", title "3 Lessons from Brands Reimagining the Claims Experience", image `/images/blog-claims.png`
3. category "ECOMMERCE • ARTICLES", title "4 Ways to Gauge Customer Value Beyond Revenue", image `/images/blog-value.png`

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~80px.

## Responsive
- Mobile: heading ~16vw; the pill sits above the stack; cards stack thumbnail-top, text-below.
