# FaqSection Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Interaction model:** click-driven accordion (right column). Rows expand/collapse.

## Structure
Two columns:
- LEFT (~30%): a rounded card (borderRadius ~16px) with a soft orange→pink→lilac gradient background containing the "?" 3D glass image (`/images/faq.jpg`, object-cover). Card ~300px tall, sticky-ish at top of section (optional).
- RIGHT (~70%): a vertical list of FAQ rows, each separated by a 1px divider (rgba(0,0,0,0.15)). Each row: question text on left + circular "+" toggle on right (~36px white circle, subtle shadow, "+" rotates to "×" when open).

## Question rows (verbatim, in order)
1. "What products can be covered?"
2. "How long does it take to get started?"
3. "What makes Clyde special?"
4. "Why is this better than doing it ourselves?"
5. "How do claims work? Who pays for them?"

(Provide short placeholder answers, Oldschool Grotesk 300 ~17px color #333, revealed on expand:)
1. "Nearly any physical product — electronics, appliances, furniture, fitness gear, jewelry and more can be covered."
2. "Most merchants are up and running in days thanks to pre-built integrations and a one-time catalog sync."
3. "Clyde pairs a seamless customer experience with expert program design and best-in-class claims resolution."
4. "Clyde handles underwriting, claims, and support so you capture the upside without the operational overhead."
5. "Customers file claims in under 60 seconds; Clyde and its insurance partners handle payouts — not you."

## Question styles
- fontFamily: Oldschool Grotesk; fontWeight: 400; fontSize: ~21px; color CLOSED #555, OPEN #000; transition color 0.2s. Row padding ~28px vertical.

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~80px.

## Responsive
- Mobile: stack — gradient image card on top (full width, ~220px), then questions list. Question fontSize ~18px.
