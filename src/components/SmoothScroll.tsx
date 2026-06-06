"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Global animation provider. Mirrors the original Clyde site, which runs on
 * Locomotive Scroll. We reproduce the feel with:
 *   - Lenis smooth/inertia scrolling, wired into the GSAP ticker + ScrollTrigger
 *   - fade-up entrance reveals for any `[data-reveal]` element
 *   - drift parallax for any `[data-parallax="<speed>"]` element
 *   - a thin gradient scroll-progress bar pinned to the right edge
 *   - a subtle scroll-velocity skew on `[data-marquee-skew]` rows
 *
 * Everything no-ops under `prefers-reduced-motion: reduce`.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion: no smoothing, reveal everything immediately.
    if (reduce) {
      document.documentElement.classList.remove("reveal-on");
      gsap.set("[data-reveal]", { clearProps: "all" });
      return;
    }

    // ---- Lenis smooth scroll, driven by the GSAP ticker -------------------
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // ---- Entrance reveals (fade + rise) --------------------------------
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            }
          ),
      });

      // ---- Parallax drift -------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "2");
        gsap.fromTo(
          el,
          { yPercent: speed * 3 },
          {
            yPercent: -speed * 3,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // ---- Scroll progress bar -------------------------------------------
      const bar = document.getElementById("scroll-progress");
      if (bar) {
        gsap.set(bar, { scaleY: 0, transformOrigin: "top center" });
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => gsap.set(bar, { scaleY: self.progress }),
        });
      }

      // ---- Scroll-velocity skew for marquees -----------------------------
      const skewRows = gsap.utils.toArray<HTMLElement>("[data-marquee-skew]");
      if (skewRows.length) {
        const setters = skewRows.map((row) => gsap.quickTo(row, "skewX", {
          duration: 0.5,
          ease: "power3",
        }));
        let raf2 = 0;
        const onVelocity = ({ velocity }: { velocity: number }) => {
          const skew = gsap.utils.clamp(-7, 7, velocity * 0.4);
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => setters.forEach((s) => s(skew)));
        };
        lenis.on("scroll", onVelocity);
      }
    });

    // Recalculate once fonts/images have settled.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(settle);
      gsap.ticker.remove(raf);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {children}
      <div
        id="scroll-progress"
        aria-hidden="true"
        className="pointer-events-none fixed right-0 top-0 z-[60] h-screen w-[3px] bg-gradient-to-b from-[#f7941d] via-[#f25f9c] to-[#a855f7]"
        style={{ transform: "scaleY(0)" }}
      />
    </>
  );
}
