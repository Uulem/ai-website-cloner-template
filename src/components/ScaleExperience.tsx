"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons";
import type { SteppedCard } from "@/types/content";

/* ------------------------------------------------------------------ *
 * Scroll-driven "scale to fullscreen + pinned panels" experience.
 * A dark rounded rectangle scales from inset to full-bleed while a
 * centered cover heading shows, then the rectangle pins and its slides
 * cross-fade as you keep scrolling. Driven by GSAP ScrollTrigger.
 * (Same mechanic as joinclyde.com's "Why Clyde?" section.)
 * ------------------------------------------------------------------ */

type Slide = SteppedCard["slides"][number];

interface Props {
  eyebrow: string;
  cover: string;
  slides: Slide[];
}

function PanelText({ slide }: { slide: Slide }) {
  return (
    <>
      <h3 className="clyde-serif max-w-[16ch] text-[clamp(28px,3.1vw,46px)] leading-[1.05] text-[#f6f6f4]">
        {slide.title}
      </h3>
      <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.1vw,18px)] font-light leading-[1.5] text-white/75">
        {slide.body}
      </p>
      <ul className="mt-7 flex flex-col gap-[10px]">
        {slide.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-3 text-[13px] font-light uppercase tracking-[0.05em] text-white/80"
          >
            <CheckIcon className="h-3 w-4 shrink-0 text-[#f6f6f4]" />
            {b}
          </li>
        ))}
      </ul>
    </>
  );
}

export function ScaleExperience({ eyebrow, cover, slides }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  const n = slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (mq.matches || isMobile) {
      setReduced(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(panelsRef.current, { opacity: 0 });
      gsap.set(imgRefs.current.slice(1), { opacity: 0 });
      gsap.set(textRefs.current.slice(1), { opacity: 0 });
      gsap.set(numRefs.current.slice(1), { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(n + 1) * 115}%`,
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      });

      // Stage 1 — scale the rounded rectangle to fullscreen
      tl.fromTo(
        rectRef.current,
        { top: 88, left: 114, right: 114, bottom: 40, borderRadius: 22 },
        { top: 0, left: 0, right: 0, bottom: 0, borderRadius: 0, duration: 1, ease: "none" },
        0
      );
      tl.to(introRef.current, { opacity: 0, duration: 0.22, ease: "none" }, 0.8);
      tl.to(panelsRef.current, { opacity: 1, duration: 0.22, ease: "none" }, 0.86);

      // Stage 2 — crossfade through the slides
      const start = 1.12;
      const seg = 1.0;
      const fade = 0.28;
      tl.fromTo(
        fillRef.current,
        { height: `${100 / n}%` },
        { height: "100%", duration: seg * (n - 1) + 0.5, ease: "none" },
        start
      );
      for (let i = 1; i < n; i++) {
        const at = start + i * seg;
        tl.to(textRefs.current[i - 1], { opacity: 0, duration: fade, ease: "none" }, at);
        tl.to(imgRefs.current[i - 1], { opacity: 0, duration: fade, ease: "none" }, at);
        tl.to(numRefs.current[i - 1], { opacity: 0, duration: fade, ease: "none" }, at);
        tl.to(textRefs.current[i], { opacity: 1, duration: fade, ease: "none" }, at + fade * 0.5);
        tl.to(imgRefs.current[i], { opacity: 1, duration: fade, ease: "none" }, at + fade * 0.5);
        tl.to(numRefs.current[i], { opacity: 1, duration: fade, ease: "none" }, at + fade * 0.5);
      }
      tl.to({}, { duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, [n]);

  /* -------- Reduced motion / mobile: static stack -------- */
  if (reduced) {
    return (
      <section className="bg-black px-5 py-20 text-[#f6f6f4]">
        <div className="mx-auto max-w-[1340px]">
          <p className="clyde-eyebrow text-center text-[14px] text-white/70">{eyebrow}</p>
          <h2 className="clyde-serif mt-3 text-center text-[clamp(34px,8vw,64px)]">{cover}</h2>
          <div className="mt-14 flex flex-col gap-20">
            {slides.map((s) => (
              <div key={s.title} className="flex flex-col gap-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" className="w-full rounded-[20px] object-contain" />
                <PanelText slide={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* -------- Desktop: pinned scale + crossfade -------- */
  return (
    <section ref={sectionRef} className="relative bg-black">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={rectRef}
          className="absolute overflow-hidden bg-[#0a0a0a]"
          style={{ top: 88, left: 114, right: 114, bottom: 40, borderRadius: 22 }}
        >
          <div className="why-stage-glow pointer-events-none absolute inset-0" />

          {/* cover heading (visible during the scale) */}
          <div
            ref={introRef}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#f6f6f4]"
          >
            <p className="clyde-eyebrow text-[clamp(18px,2vw,32px)] text-white/85">{eyebrow}</p>
            <h2 className="clyde-serif mt-4 max-w-[15ch] text-[clamp(44px,6.5vw,96px)]">
              {cover}
            </h2>
          </div>

          {/* pinned panels */}
          <div ref={panelsRef} className="absolute inset-0 flex items-center px-[6vw]">
            <div className="grid w-full grid-cols-2 items-center gap-[4vw]">
              {/* left: slide imagery */}
              <div className="relative flex h-[78vh] items-center justify-center">
                {slides.map((s, i) => (
                  <div
                    key={s.title}
                    ref={(el) => {
                      imgRefs.current[i] = el;
                    }}
                    className="absolute flex h-full w-full max-w-[620px] items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt=""
                      className="max-h-full w-full rounded-[20px] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                ))}
              </div>

              {/* right: slide text */}
              <div className="relative min-h-[440px] pr-[5vw]">
                {slides.map((s, i) => (
                  <div
                    key={s.title}
                    ref={(el) => {
                      textRefs.current[i] = el;
                    }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <p className="clyde-eyebrow text-[13px] tracking-[0.08em] text-white/55">
                      {eyebrow}
                    </p>
                    <div className="mt-4">
                      <PanelText slide={s} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* progress indicator */}
            <div className="absolute right-[3vw] top-1/2 flex h-[60%] -translate-y-1/2 flex-col items-center justify-between">
              <div className="relative h-5 w-6 text-center">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      numRefs.current[i] = el;
                    }}
                    className="absolute inset-0 text-[13px] text-white/70"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>
              <div className="relative my-3 w-px flex-1 bg-white/15">
                <div
                  ref={fillRef}
                  className="absolute left-0 top-0 w-px"
                  style={{
                    background: "linear-gradient(180deg,#f25f9c,#f7941d)",
                    height: `${100 / n}%`,
                  }}
                />
              </div>
              <span className="text-[13px] text-white/40">{String(n).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
