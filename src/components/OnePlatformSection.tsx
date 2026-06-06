"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * "One platform for warranties & shipping protection"
 * Part A: warm animated mesh-gradient + a bento mosaic of product-gallery
 *         cards that cross-fades between three brand demos (Wellmade,
 *         TYME, Alliance) with a staggered cascade — matching joinclyde.com.
 * Part B: scroll-highlighted serif list.
 * ------------------------------------------------------------------ */

/* The mosaic shows three brand demos in turn. Each demo is the same 7-slot
 * bento (slots a–g); the live site swaps the whole set behind a staggered
 * opacity cascade (`asset:not(.current){opacity:0}` + transition-delay i*.15s). */
const BRAND_SETS = [
  { id: "1", brand: "Wellmade furniture protection demo" },
  { id: "2", brand: "TYME watch protection demo" },
  { id: "3", brand: "Alliance headphones protection demo" },
] as const;

const SET_COUNT = BRAND_SETS.length;
const CYCLE_MS = 3600;

/** One mosaic cell. `i` drives the staggered cross-fade; `current` fades it in. */
function Asset({
  set,
  slot,
  i,
  current,
  className,
  framed,
}: {
  set: string;
  slot: string;
  i: number;
  current: boolean;
  className?: string;
  framed?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.6vw] transition-opacity duration-700 ease-out lg:rounded-[14px]",
        framed && "border-[3px] border-[#1a1a1a] lg:border-[4px]",
        current ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ transitionDelay: `${i * 0.12}s` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/mosaic/mosaic-${set}${slot}.webp`}
        alt={slot === "a" ? `Clyde — ${BRAND_SETS.find((b) => b.id === set)?.brand}` : ""}
        className="h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

/** The three-column bento for a single brand set, stacked absolutely so sets
 * overlap and cross-fade in place. */
function MosaicSet({ set, current }: { set: string; current: boolean }) {
  return (
    <div className="absolute inset-0 grid grid-cols-[1fr_0.52fr_1fr] gap-[2vw] lg:gap-[1.2vw]">
      {/* Column 1 — two small cards over a wide card (spans both) */}
      <div className="grid grid-cols-2 gap-[2vw] [grid-auto-rows:1fr] lg:gap-[1.2vw]">
        <Asset set={set} slot="f" i={0} current={current} />
        <Asset set={set} slot="g" i={1} current={current} />
        <Asset set={set} slot="a" i={2} current={current} className="col-span-2" />
      </div>
      {/* Column 2 — narrow: a framed "phone" card over a tall card */}
      <div className="grid gap-[2vw] [grid-auto-rows:1fr] lg:gap-[1.2vw]">
        <Asset set={set} slot="c" i={3} current={current} framed />
        <Asset set={set} slot="d" i={4} current={current} />
      </div>
      {/* Column 3 — a wide card over a tall card */}
      <div className="grid gap-[2vw] [grid-auto-rows:1fr] lg:gap-[1.2vw]">
        <Asset set={set} slot="e" i={5} current={current} />
        <Asset set={set} slot="b" i={6} current={current} />
      </div>
    </div>
  );
}

const HIGHLIGHT_LINES = [
  "Protection for the things they love",
  "Covered from origin to destination",
  "Hassle-free claims with instant payouts",
  "End-to-end servicing",
  "Ranked #1 on TrustPilot",
];

export function OnePlatformSection() {
  const lineRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Cross-fade the mosaic between the three brand sets on a gentle loop.
  // Under reduced-motion we simply leave the first set showing (active stays 0).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % SET_COUNT),
      CYCLE_MS
    );
    return () => window.clearInterval(id);
  }, []);

  // Part B: scroll-highlighted serif lines (dim → bright on scroll).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      lineRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { color: "rgba(246,246,244,0.18)" },
          {
            color: "rgba(246,246,244,1)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "top 45%", scrub: true },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-[#f6f6f4]">
      {/* ---------------- Part A: heading + animated gradient + mosaic ---------------- */}
      <section className="relative overflow-hidden">
        {/* Warm flowing mesh-gradient (two counter-drifting layers over black). */}
        <div className="clyde-mosaic-aurora pointer-events-none absolute inset-0" />
        <div className="clyde-mosaic-aurora-2 pointer-events-none absolute inset-0" />

        <div className="relative px-[5.3vw] pb-[10vh] pt-[14vh]">
          {/* Intro */}
          <div className="max-w-[640px]">
            <h2 className="clyde-serif text-[clamp(34px,5vw,64px)] font-normal leading-[1.06]">
              One platform for warranties &amp; shipping protection
            </h2>
            <p className="mt-6 max-w-[52ch] text-[clamp(16px,1.4vw,24px)] font-light leading-[1.4] text-[#f6f6f4]/90">
              Say goodbye to multiple integrations. We enable you to offer extended
              warranties, product registration and global shipping protection with
              tracking all from a single platform. Plus, we take care of everything
              from optimized offer placements to claims processing to help build
              long-lasting relationships with your customers.
            </p>
          </div>

          {/* Mosaic — three brand sets cross-fading in place */}
          <div className="relative mt-[8vh] aspect-[7/8] w-full sm:aspect-[5/4] lg:mt-[10vh] lg:aspect-[13/10]">
            {BRAND_SETS.map((b, i) => (
              <MosaicSet key={b.id} set={b.id} current={i === active} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Part B: scroll-highlighted serif list ---------------- */}
      <section className="relative overflow-hidden px-6 py-[12vh] lg:px-[6vw]">
        <div className="why-stage-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1340px]">
          {HIGHLIGHT_LINES.map((line, i) => (
            <h3
              key={line}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="clyde-serif py-1 text-[clamp(34px,6vw,72px)] leading-[1.1]"
            >
              {line}
            </h3>
          ))}
        </div>
      </section>
    </div>
  );
}
