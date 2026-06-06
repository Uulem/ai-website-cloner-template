# BenefitsSection Specification

## Overview
- **Target file:** `src/components/BenefitsSection.tsx`
- **Interaction model:** static (card hover lift optional).

## Structure
1. A giant heading "Why folks love Clyde" with the umbrella render (`/images/umbrella.png`, 147x146 natural but display large ~280px wide) positioned BEHIND/OVERLAPPING the heading, centered horizontally above the word "folks". The umbrella has a soft pink/orange glow halo behind it.
2. Below the heading: a 4-column row of cards numbered 01–04. Each card has an index label (top-left), a centered icon image, and on the live site reveals points + an audience label.

## Heading
- "Why folks love Clyde" — Oldschool Grotesk weight 400, fontSize ~140px (clamp(64px,10vw,150px)), letterSpacing -4.2px, lineHeight 1, color #000, centered. Wraps to ~2 lines ("Why folks love" / "Clyde").

## Cards (4 across)
Card images and content:
- 01 → image `/images/love-01.png` (shopping bag). points: ["Increased conversion rates","Optimized checkout flows","More direct shoppers"]. audience: "Ecommerce leads and owners"
- 02 → `/images/love-02.png` (5-star avatar). points: ["Industry-best claims filing","Boosted customer satisfaction scores","Single decision-point for customer issues"]. audience: "Customer experience teams"
- 03 → `/images/love-03.png` (piggy/coin). points: ["Higher customer lifetime value (CLV)","Massive increase in high margin revenue","Industry leading attachment rates"]. audience: "Finance and strategy teams"
- 04 → `/images/love-04.png` (heart). points: ["Exceptional customer support","Easy-to-use contract dashboard","Fast and simple claims processing"]. audience: "(Soon to love you) customers"

### Card styles
- background: #ffffff or very light; borderRadius: 20px; border: 1px solid rgba(0,0,0,0.06); subtle box-shadow on hover.
- padding: 28px; min-height ~ 430px; display flex column.
- Index "01" top-left: Oldschool Grotesk 300, ~14px, color #555.
- Icon image: centered, ~150px, drop-shadow glow.
- Points: small list, Oldschool Grotesk ~16px, color #000, each on its own line with spacing ~10px (no bullets, or small check). 
- Audience: bottom, Oldschool Grotesk 300, ~15px, color #777, with a top divider.
- gap between cards: 24px.

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~80px.

## Responsive
- Desktop: 4 columns. Tablet (768): 2x2. Mobile (390): 1 column stacked. Heading ~16vw on mobile.
