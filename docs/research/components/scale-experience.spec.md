# ScaleExperience Specification

## Overview
- **Target file:** `src/components/ScaleExperience.tsx`
- **Animation source:** joinclyde.com "Why Clyde?" section (scroll-driven scale-to-fullscreen + pinned panels)
- **Applied to:** the **Claims Experience** and **Merchant Experience** blocks inside `SteppedExperience.tsx` (per user request — the standalone Why-Clyde section was removed). The **Purchase Experience** keeps its original aurora `SteppedCardBlock` behavior.
- **Interaction model:** scroll-driven, GSAP ScrollTrigger pinned + scrubbed
- **Background:** pure black (`#000`); rectangle `#0a0a0a` with a drifting purple/amber glow (`.why-stage-glow`).

## Props
```ts
{ eyebrow: string; cover: string; slides: { title; body; bullets[]; image }[] }
```
Reuses the existing `SteppedCard` data from `SteppedExperience` (`The Claims Experience` / `The Merchant Experience`).

## Two-stage scroll experience
### Stage 1 — Scale-to-fullscreen intro
- Dark rounded rectangle starts inset (top 88 / sides 114 / bottom 40, radius 22px) and grows to fill the viewport (inset → 0, radius → 0). Content inside does NOT scale.
- Centered cover: eyebrow (Oldschool Grotesk, uppercase) + serif cover line (Recoleta, clamp 44–96px), white `#f6f6f4`.
- Near end of scale, cover fades out, panels fade in.

### Stage 2 — Pinned panel crossfade (one per slide)
- Left half: the slide `image` in a rounded container (shadowed). Right half: eyebrow + serif title + body + uppercase checklist (CheckIcon bullets).
- Far-right vertical progress indicator: active number `01..0N` (top), orange→pink gradient fill grows per slide, `0N` (bottom).
- Slides cross-fade (image + text + number) as the timeline scrubs.

## Implementation
- `gsap.timeline({ scrollTrigger: { trigger, start:'top top', end:`+=${(n+1)*115}%`, scrub, pin } })`.
- Tween rect inset+radius (scale), then fade cover→panels, then per-slide crossfades + progress fill.
- `prefers-reduced-motion` / `<1024px`: static stacked fallback (image above text per slide), no pin.
