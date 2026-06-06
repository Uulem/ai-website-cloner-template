# UseCasesSection Specification

## Overview
- **Target file:** `src/components/UseCasesSection.tsx`
- **Interaction model:** click-driven tabs. A radio-style list on the left selects which case study card shows on the right. (Default selected: first item.) Use React state.

## Structure
1. Giant heading "Use cases" (Oldschool Grotesk 400, ~140px clamp, letterSpacing -4.2px, color #000), top-left.
2. Two-column layout below:
   - LEFT (~40%): a radio list of 6 industries. Each row = a small circle (radio) + label. Selected row has a FILLED orange dot (#f97316); others have an empty 1px ring. Labels: Oldschool Grotesk weight 400, ~17px, color #000. Row spacing ~14px. A thin top divider above the list.
   - RIGHT (~60%): a large rounded card (borderRadius ~28px, white card on a soft warm gradient top→pink/lilac bottom; box-shadow soft). Inside: a centered product render image (top), a brand logo (mid), and a blurb paragraph (Oldschool Grotesk 300 ~17px, color #333), plus an optional CTA link "View Case Study ↗".

## Data (industry → case card)
1. industry "Consumer Electronics" → logo `/images/logo-vaio.svg`, image `/images/usecase-01.png`, blurb "With simple integration and a handsome 20% attachment rate, Clyde helps VAIO offer good-looking warranty options where customers want them."
2. industry "Appliances & Hardware" → logo `/images/logo-senville.svg`, image `/images/usecase-senville.png`, blurb "Senville uses Clyde to help their customers and boost top-line revenue with an attachment rate 3x the industry average for appliances.", cta "View Case Study ↗"
3. industry "Furniture & Mattress" → logo `/images/logo-lull.svg`, image `/images/usecase-lull.png`, blurb "Give the people what they want: Lull proved that co-marketing with Clyde can boost attachment rates by as much as 35%."
4. industry "E-bikes & Scooters" → logo `/images/logo-blix.svg`, image `/images/usecase-06.png`, blurb "Blix revved up customer LTV and passive revenue with protection plans that attach at 3x the rate of industry competitors."
5. industry "Fitness & Sporting Equipment" → logo `/images/logo-tempo.svg`, image `/images/usecase-07.png`, blurb "The all-in-one gym chose Clyde’s all-in-one platform to build value into their customer experience and boost top-line revenue."
6. industry "Jewelry, Watches, Optical" → logo `/images/logo-movado.svg`, image `/images/usecase-04.png`, blurb "Clyde partnered with Movado to provide customers with the peace of mind they’re looking for when purchasing watches that are timeless and commemorate special milestones in life."

## Card image / logo styles
- Product image: max-width ~360px, centered, object-contain.
- Brand logo: height ~28px, displayed left-aligned above the blurb.
- Switching states: cross-fade the card content (opacity transition ~0.3s).

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~80px.

## Responsive
- Desktop: two columns. Mobile (<768): heading ~16vw; stack — radio list becomes a horizontal scroll of pills OR stays a vertical list above the card; card full width.
