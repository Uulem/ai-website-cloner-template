# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static. Big serif heading scrolls in normal flow.

## Structure (top to bottom)
1. A top row, two columns within a max-width 1340px container, ~48px side padding:
   - Left: small serif label "Extended Warranty"
   - Right (right-aligned, ~max 420px): intro paragraph
2. A GIANT serif headline spanning full width: "Easy, breezy, bountiful coverage"
3. Hero image (`/images/hero.jpg`) — a 3D render (purple Marshall speaker + white guitar/objects), full-bleed-ish, rounded? No — it sits below as a wide image. naturalSize 1087x574. Display full container width, object-cover, no radius.

## Background
- The whole hero sits on the warm aurora gradient. Apply `clyde-aurora` class to the section (defined in globals.css) OR a radial-gradient blend of warm orange (#f9c46b) center-left fading to pink (#f7d6e0) / lilac (#e7c9f0) on the right. The gradient fades to the paper color near the image.

## Computed Styles
### "Extended Warranty" label
- fontFamily: Recoleta serif; fontWeight: 400; fontSize: 36.75px; color: #000
- top padding from nav ~ 110px

### Intro paragraph
- fontFamily: Oldschool Grotesk; fontWeight: 300; fontSize: 21.4px; lineHeight: 27.9px; color: #000
- max-width ~ 420px, right aligned in its column
- Text: "Clyde makes it easy to offer product protection plans that boost profits and charm customers."

### Giant headline "Easy, breezy, bountiful coverage"
- fontFamily: Recoleta serif; fontWeight: 400; color: #000
- fontSize: clamp huge — ~ 13vw (≈ 190px at 1440). letterSpacing: -0.03em; lineHeight: 0.95
- It wraps across ~2-3 lines and is left-aligned, full container width. Spans below the two-column row with generous top margin (~120px).

## Assets
- `/images/hero.jpg`

## Responsive
- Desktop: two-col top row, giant headline left aligned.
- Mobile (<768): stack — label, then paragraph (left aligned, full width), then headline at ~16vw, then image. Side padding 20px.
