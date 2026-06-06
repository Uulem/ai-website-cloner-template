# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** static. Big "Request a demo" headline marquee on top, then dark footer.

## Structure
1. A "Request a demo" giant headline band on the paper background (full width). On the live site it scrolls horizontally like a marquee; render it as a large centered/over-wide heading. Oldschool Grotesk 400, ~140px clamp, letterSpacing -4.2px, color #000, whiteSpace nowrap, overflow hidden. (Simple version: a single centered "Request a demo" link/heading is acceptable; nicer: repeat it in an auto-scrolling marquee like ActionMarquee.)
2. The dark footer block below: background is a near-black (#0c0b0d) with a warm aurora gradient glow in the lower-right (radial orange #f97316 / purple #a855f7 fading into black). Text is light.

## Footer columns (5 columns, light text on dark)
Column header style: Oldschool Grotesk 300, uppercase, ~12px, letterSpacing 0.08em, color rgba(255,255,255,0.5). Links: Oldschool Grotesk 400, ~16px, color #fff, line spacing ~12px, hover opacity .7. Links with "↗" are outbound (append ArrowUpRightIcon or "↗").

- PLATFORM: "Extended Warranty", "Registration", "Resolution"
- RESOURCES: "Documentation ↗", "Blog", "Partnerships", "Referral Program ↗"
- COMPANY: "About", "Careers", "Support ↗", "Book a Demo"
- PRODUCT: "Merchant Login ↗", "Customer Login ↗", "System Status ↗"
- SOCIAL: "LinkedIn ↗", "Facebook ↗", "Twitter ↗", "Instagram ↗"

## Top-right badge
- A circular white badge (~48px) with a black "C" (Clyde monogram) in the top-right of the dark footer.

## Bottom bar
- Left: `<ClydeLogo />` rendered small (~18px tall) but inverted to white (wrap in a span with `[&_path]:fill-white` or set the svg to filter invert). Center: "Data & Privacy" link. Right: "2026 CLYDE TECHNOLOGIES, INC" (Oldschool Grotesk 300, ~13px, color rgba(255,255,255,0.5)).

## Layout
- Dark footer: padding ~64px 48px; columns in a flex/grid row (5 cols), wrap on small screens. Bottom bar separated by ~80px gap, baseline row.
- min-height ~ 560px for the dark block.

## Responsive
- Mobile: headline ~16vw; columns stack to 2-per-row then 1; bottom bar stacks.
