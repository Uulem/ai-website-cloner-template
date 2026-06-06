# PushesSection Specification

## Overview
- **Target file:** `src/components/PushesSection.tsx`
- **Interaction model:** static (card hover lift / gradient reveal optional).

## Structure
Two equal side-by-side rounded white cards (gap ~24px). Each card is tall (~430px), centered content.

## Card content (verbatim)
1. eyebrow "EXPLORE", title "Resolution", body "Win over customers and unlock cost savings with automated limited warranty claims resolutions.", href "#"
2. eyebrow "EXPLORE", title "Registration", body "Know and keep your customers close with an oh-so-simple registration experience.", href "#"

## Card styles
- background: #ffffff; borderRadius: 28px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); padding ~48px; display flex column; align-items center; justify-content center; text-align center.
- eyebrow "EXPLORE": Oldschool Grotesk 300, uppercase, letterSpacing 0.08em, ~13px, color #888, margin-bottom ~16px.
- title: Recoleta serif 400, fontSize 81.7px (clamp(40px,5vw,82px)), letterSpacing -0.02em, color #000.
- body: Oldschool Grotesk 300, ~17px, lineHeight 1.4, color #333, max-width ~340px, margin-top ~16px.
- hover: card lifts (translateY -4px) + shadow grows, transition 0.25s; optionally a faint warm gradient fades in behind the title.

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~40px (sits just above footer).

## Responsive
- Mobile: stack the two cards vertically (gap 16px); title ~13vw.
