# joinclyde.com — Animation Behavior Bible

Reference: https://joinclyde.com/?ref=godly — captured 2026-06-05.
Goal: clone the site's animations onto the already-built design using **GSAP + ScrollTrigger** and **Lenis** smooth scroll. Gradients are approximated in CSS (already present in `globals.css`).

## Tech the original uses
- **Locomotive Scroll** (`html.has-scroll-smooth`) — inertia/smoothed scrolling. → Clone with **Lenis**.
- **`data-scroll-speed`** parallax (Locomotive) — values `2 / 4 / 6` on `assets-mosaic` image columns. → Clone with ScrollTrigger scrub `y`.
- **`data-scroll`** reveal-on-view (20 elements) — fade/slide up when entering viewport. → Clone with `ScrollTrigger.batch`.
- **CSS keyframe marquees** (`marquee` animation) — `44s` for the "Request a demo" prefooter band, faster loops for logo/tagline rows. → Already CSS in build.
- **Animated `<canvas>` gradient** (`animated-gradient`) — morphing watercolor used in hero, stepped bg, and footer. → Approximated by `clyde-aurora` / `aurora-drift` CSS (already in build).

## THE headline behavior — Footer reveal
- `footer` is **`position: fixed; inset: 0`** (full viewport, height = 100vh), **behind** the page content.
- The scroll container (`layout_scroll`, `z-index: 2`) holds all content and scrolls **on top** of the fixed footer.
- `main` has **`padding-bottom: ~595px`** — a reveal window equal to the footer's visible inner height.
- The footer inner content (link columns, "C" badge, bottom bar) is **bottom-aligned** inside the fixed 100vh footer.
- As you scroll to the end, the opaque content slides up and **uncovers the fixed footer behind it** — the footer never scrolls; it's revealed.
- Footer also contains the animated canvas gradient (watercolor) behind the columns.

### Clone mechanics
- Footer rendered `position: fixed; bottom: 0; left: 0; width: 100%; z-index: 0`.
- All page content wrapped in `position: relative; z-index: 10; background: var(--background)` (opaque, so it hides the footer until scrolled away).
- Content wrapper gets `margin-bottom = footer height` (measured live via ResizeObserver) to create the scroll room that reveals the footer.
- Optional polish: subtle fade/slide-up of footer columns as they're uncovered (ScrollTrigger).

## Section-by-section animation inventory
Live order: hero → mosaic(parallax) → taglines → stepped(pinned) → cases(logo marquee) → quotes → prefooter(marquee) → pushButtons → footer.
Mapped onto the existing build components:

| Behavior | Mechanism (original) | Clone target component | Implementation |
|---|---|---|---|
| Smooth/inertia scroll | Locomotive | global | Lenis + `gsap.ticker` + `ScrollTrigger.update` |
| Entrance reveals (fade-up) | `data-scroll` → `is-inview` | all sections | global `[data-reveal]` + `ScrollTrigger.batch` (y:40→0, opacity 0→1, stagger) |
| Parallax image drift | `data-scroll-speed 2/4/6` | hero image, usecase/benefit images | `[data-parallax]` ScrollTrigger scrub `yPercent` |
| Pinned stepped sequence | sticky card + step indicator 01→03 + progress line, content swaps per scroll step | `SteppedExperience` | keep CSS `sticky` pin; drive step + progress line via ScrollTrigger `onUpdate`/scrub; gsap cross-fade slides |
| Headline marquee | CSS `marquee` loop | `ActionMarquee` | already CSS; add scroll-velocity skew (Lenis velocity) for polish |
| Quotes carousel | auto-advance opacity | `QuotesSection` | already implemented (interval + opacity) — leave |
| Accordions | height/opacity expand | `DiscoverAccordion`, `FaqSection` | already implemented — leave (CSS grid-rows transition) |
| Nav background | switches per section theme on scroll | `SiteNav` | add scroll-driven translucent bg + shadow after hero |
| Scroll progress indicator | thin gradient bar, right edge | global | fixed gradient bar scaled by scroll progress |

## Reduced motion
All scroll animations must no-op under `prefers-reduced-motion: reduce`: skip Lenis, reveal everything immediately, no parallax/skew. CSS gradient animations already gated in `globals.css`.
