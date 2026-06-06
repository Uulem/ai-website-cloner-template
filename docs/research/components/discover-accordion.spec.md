# DiscoverAccordion Specification

## Overview
- **Target file:** `src/components/DiscoverAccordion.tsx`
- **Interaction model:** click-driven accordion. Rows expand/collapse on click of the row or the +/- toggle.

## Structure
- Small label above: "Discover more with Clyde" (Oldschool Grotesk, ~16px, weight 300, uppercase? No — sentence case; color #000), with bottom margin.
- A vertical list of 4 accordion rows separated by 1px top borders (#000 at ~12% opacity, e.g. rgba(0,0,0,0.12)).

## Rows (verbatim titles, in order)
1. "More revenue"
2. "More customers"
3. "More coverage"
4. "More insights"

(Bodies are not shown by default in the static page — when expanded each can reveal a short descriptive paragraph. Use these placeholder bodies, sentence case, Oldschool Grotesk 300 ~21px, color #000:)
- More revenue → "Boost top-line revenue and high-margin profits with protection plans customers actually want."
- More customers → "Win and retain shoppers with seamless, branded coverage at every touchpoint."
- More coverage → "Offer flexible plans across every product category and sales channel."
- More insights → "Turn warranty data into a window on customer behavior, quality, and lifetime value."

## Computed Styles
### Row title
- fontFamily: Oldschool Grotesk; fontWeight: 400; fontSize: 81.7px (clamp ~ min(8vw, 82px)); letterSpacing: -1.6px; lineHeight ~1.1
- color CLOSED: #9b9b9b (gray, rgba(0,0,0,0.4) works); color OPEN/HOVER: #000
- transition: color 0.3s ease
- Row vertical padding: ~36px

### Toggle (+ / −)
- A circular button on the far right, ~36px, white background, subtle shadow, contains a "+" that rotates 45° to "×"/"−" when open. fontSize ~24px, color #000.

### Expanded body
- Animates open: max-height/opacity transition ~0.35s ease. Padding-bottom ~36px when open.

## Container
- max-width 1340px, side padding 48px (desktop) / 20px (mobile). Background = page paper (#f6f6f4), full-width.

## Responsive
- Mobile: title fontSize ~13vw, padding 20px, toggle 30px.
