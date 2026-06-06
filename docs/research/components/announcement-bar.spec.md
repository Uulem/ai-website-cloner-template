# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/AnnouncementBar.tsx`
- **Interaction model:** static (link hover only)

## Structure
A full-width black bar pinned at the very top of the page (above the nav). Single centered line of text that is a link.

## Computed Styles
### Bar
- backgroundColor: #000000
- width: 100%
- padding: ~10px 16px (py-2.5)
- textAlign: center
- position: relative (it sits at top of document flow; the nav is fixed below it — page content is offset accordingly by the layout, but for our clone render it as the first in-flow block, full width)

### Text (link)
- color: #f6f6f4
- fontFamily: var(--font-sans) ("Oldschool Grotesk")
- fontWeight: 300
- fontSize: 16px
- letterSpacing: normal
- hover: slight opacity change (opacity .8), transition 0.2s

## Text Content (verbatim)
"Clyde is now a part of Cover Genius. Read the full announcement »"
(the » is a literal right-pointing double angle quote character)

## Responsive
- Desktop & mobile identical; on mobile fontSize ~14px, padding 8px 12px.
- Single line, may wrap on very small screens.
