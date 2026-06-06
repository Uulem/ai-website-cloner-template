# QuotesSection Specification

## Overview
- **Target file:** `src/components/QuotesSection.tsx`
- **Interaction model:** carousel/stack of 3 testimonials. Implement as a simple state carousel (auto-advance every ~6s, or arrow/dot controls). Each quote is a large serif block.

## Layout (per quote)
- Two columns:
  - LEFT (~30%): the brand name set in a light wordmark style — render as uppercase letter-spaced text. For quote 1 use "MOVADO" (Oldschool Grotesk 300, letterSpacing 0.15em, ~28px, color #000). A vertical divider line (1px, rgba(0,0,0,0.2), full height) sits between the columns.
  - RIGHT (~70%): the quote text in big Recoleta serif.

## Quote text styles
- fontFamily: Recoleta serif; fontWeight: 400; fontSize: ~52px (clamp(28px,4.5vw,56px)); lineHeight ~1.15; letterSpacing -0.02em; color #000.

## Quotes (verbatim, in order)
1. brand "MOVADO" — "We partnered with Clyde to provide our customers with the peace of mind they’re looking for. The technology allowed us to launch the service quickly and offers a great user experience, which helps us provide value to our customers and drive loyalty.”"
2. brand "" — "The integration was simple and frictionless. Anything that adds to the top line, helps our customers, and is low effort is a no-brainer. There are no upfront costs associated with Clyde, so it was really a win-win for everyone”"
3. brand "" — "We knew we needed a seamless warranty program, but we had no idea where to begin. Then we found Clyde. The onboarding was super easy and our customers have had an amazing experience — the result is increased revenue without the backend hassle.”"

(If brand is empty, just leave the left column blank but keep the divider.)

## Container
- max-width 1340px, side padding 48px. Section vertical padding ~100px. Background = page paper.

## Responsive
- Mobile (<768): stack — brand above quote (no vertical divider, use a top divider instead). Quote fontSize ~30px.
