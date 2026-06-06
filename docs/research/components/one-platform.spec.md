# OnePlatformSection Specification

## Overview
- **Target file:** `src/components/OnePlatformSection.tsx`
- **Source:** https://joinclyde.com/ — "One platform for warranties & shipping protection"
- **Interaction model:** scroll-driven horizontal gallery (GSAP ScrollTrigger pin + horizontal translate), followed by a scroll-highlighted serif list.
- **Background:** pure black (`#000`), text #f6f6f4.

## Part A — Intro + horizontal card gallery
- **Left intro block** (sticky-ish, sits at left while cards scroll past on the right):
  - Heading `One platform for warranties & shipping protection` — Recoleta, clamp ~40–63px, line-height ~1.05.
  - Body: "Say goodbye to multiple integrations. We enable you to offer extended warranties, product registration and global shipping protection with tracking all from a single platform. Plus, we take care of everything from optimized offer placements to claims processing to help build long-lasting relationships with your customers."
- **Horizontal card track:** pinned section; as the user scrolls vertically, a row of cards translates left (`x: 0 → -(trackWidth - viewport)`). Cards (light paper `#e9e7df`, radius ~20px) in order:
  1. **Eligible** — headphones in circle, "Alliance", green "Add protection plan" button.
  2. **Active** — headphones in circle, "Weilmade", outline "View product" button.
  3. **Phone mockup** — "ADD PROTECTION TO YOUR HEADPHONES", checklist (Accidental damage…, Extend warranty, No deductibles), 3-Year $15 / 5-Year $20 tiles (dark, green text), green "Add to cart".
  4. **Program Performance** (wide) — pills (Running Total, **Week over week**, Day over day), green area line chart Mar–Aug with a peak marker in July.
  5. **29 Days** — hand holding headphones photo + circular green progress ring "29 DAYS left to add coverage", ALLIANCE | Clyde.
  6. **Claim Approved** — green shield w/ check, "CLAIM APPROVED!", promo code + COPY.
  7. **Register** — ALLIANCE | Clyde, "REGISTER YOUR ALLIANCE HEADPHONES", dark checklist (Join the Alliance members club, Access product help from experts, Get 20% off your next order), green "Continue to Register Product".

## Part B — Scroll-highlighted serif list
Five big serif lines (Recoleta, clamp ~40–64px). Each line starts dim (`rgba(246,246,244,0.18)`) and brightens to solid `#f6f6f4` as it scrolls through the vertical center (per-line ScrollTrigger scrub on color/opacity). Lines:
1. Protection for the things they love
2. Covered from origin to destination
3. Hassle-free claims with instant payouts
4. End-to-end servicing
5. Ranked #1 on TrustPilot

A soft purple aura drifts behind the list.

## Implementation
- GSAP horizontal pin: `scrollTrigger:{ trigger, start:'top top', end:()=>'+='+trackScrollDistance, scrub, pin }`, tween `x` of the track.
- Highlight list: per-line `scrollTrigger` scrub mapping a CSS var / color from dim → bright.
- Respect `prefers-reduced-motion`: render cards in a normal horizontal-scroll overflow container; list lines all bright.

## Responsive
- Desktop (≥1024px): pinned horizontal gallery; two-stage.
- Mobile (<1024px): cards become a native horizontal `overflow-x-auto` row (`.no-scrollbar`), no pin; list stacked & all bright.
