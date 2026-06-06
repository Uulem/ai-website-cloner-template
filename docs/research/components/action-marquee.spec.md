# ActionMarquee Specification

## Overview
- **Target file:** `src/components/ActionMarquee.tsx`
- **Interaction model:** time-driven. Infinite horizontal auto-scroll (CSS keyframes), independent of page scroll.

## Structure
A single full-width row that overflows horizontally (overflow hidden). Inside, a flex track that repeats the phrase "See Clyde in action" several times, with a small gradient orb between each repetition. The track translateX animates from 0 to -50% in a loop (duplicate the content so it loops seamlessly).

## Phrase
- "See Clyde in action" (repeat; between phrases place a circular gradient orb)

## Styles
### Text
- fontFamily: Oldschool Grotesk; fontWeight: 400; fontSize: 140px (≈ clamp(80px, 11vw, 150px)); letterSpacing: -4.2px; color: #000; whiteSpace: nowrap; lineHeight: 1

### Orb (between phrases)
- A circle ~110px diameter, background: a soft radial/conic gradient of orange→yellow→purple
  (e.g. `radial-gradient(circle at 35% 35%, #fbbf60, #f97316 40%, #c084fc 75%)` with blur(2px)), margin 0 48px, flex-shrink 0.

### Track / animation
- display:flex; align-items:center; gap:48px; width:max-content
- `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
- animation: marquee 28s linear infinite
- Duplicate the phrase+orb list twice inside the track for a seamless loop.
- Wrapper: use `.no-scrollbar` and overflow-x hidden.

## Vertical spacing
- Section vertical padding ~80px top/bottom. Background = page paper.

## Responsive
- Mobile: fontSize ~ 64px, orb ~64px, animation speed unchanged.
