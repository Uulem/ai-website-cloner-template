# SiteNav Specification

## Overview
- **Target file:** `src/components/SiteNav.tsx`
- **Interaction model:** static, sticky/fixed at top. (No scroll-shrink; bg stays solid.)

## Structure
Horizontal bar, 3 logical groups across a max-width container:
- Left: two text links "Product", "Resources"
- Center (absolutely centered): `<ClydeLogo />` from `@/components/icons`
- Right: text link "Login" + "Demo" button

## Computed Styles
### Bar
- position: sticky, top: 0 (render `sticky top-0 z-50`); it sits directly under the AnnouncementBar
- backgroundColor: #f6f6f4 (var(--background))
- height: ~92px; vertical padding ~28px; horizontal padding 48px (desktop), 20px (mobile)
- display: flex; align-items: center; justify-content: space-between
- color: #000

### Nav links (Product, Resources, Login)
- fontFamily: Oldschool Grotesk; fontWeight: 400; fontSize: 15.3px
- color: #000; gap between Product/Resources ~28px
- hover: opacity .65, transition 0.2s

### Logo
- `<ClydeLogo>` height ~26px, width auto. Center it absolutely (left-1/2 -translate-x-1/2) so left/right groups don't shift it.

### Demo button
- backgroundColor: rgba(255,255,255,0.5)
- color: #000; borderRadius: 12px; padding: 10px 22px; fontSize: 15.3px; fontWeight: 400
- hover: backgroundColor rgba(255,255,255,0.9), transition 0.2s

## Responsive
- Desktop (≥1024): full layout as above.
- Mobile (<768): hide "Product"/"Resources"/"Login" text links, show a `<MenuDotsIcon />` (4-dot) button on the right beside Demo; logo stays centered. Reduce logo height to ~22px.
