"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { UseCase } from "@/types/content";

const USE_CASES: UseCase[] = [
  {
    industry: "Consumer Electronics",
    logo: "/images/logo-vaio.svg",
    image: "/images/usecase-01.png",
    blurb:
      "With simple integration and a handsome 20% attachment rate, Clyde helps VAIO offer good-looking warranty options where customers want them.",
  },
  {
    industry: "Appliances & Hardware",
    logo: "/images/logo-senville.svg",
    image: "/images/usecase-senville.png",
    blurb:
      "Senville uses Clyde to help their customers and boost top-line revenue with an attachment rate 3x the industry average for appliances.",
    cta: { label: "View Case Study ↗", href: "#" },
  },
  {
    industry: "Furniture & Mattress",
    logo: "/images/logo-lull.svg",
    image: "/images/usecase-lull.png",
    blurb:
      "Give the people what they want: Lull proved that co-marketing with Clyde can boost attachment rates by as much as 35%.",
  },
  {
    industry: "E-bikes & Scooters",
    logo: "/images/logo-blix.svg",
    image: "/images/usecase-06.png",
    blurb:
      "Blix revved up customer LTV and passive revenue with protection plans that attach at 3x the rate of industry competitors.",
  },
  {
    industry: "Fitness & Sporting Equipment",
    logo: "/images/logo-tempo.svg",
    image: "/images/usecase-07.png",
    blurb:
      "The all-in-one gym chose Clyde's all-in-one platform to build value into their customer experience and boost top-line revenue.",
  },
  {
    industry: "Jewelry, Watches, Optical",
    logo: "/images/logo-movado.svg",
    image: "/images/usecase-04.png",
    blurb:
      "Clyde partnered with Movado to provide customers with the peace of mind they're looking for when purchasing watches that are timeless and commemorate special milestones in life.",
  },
];

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = USE_CASES[activeIndex];

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1340px] px-5 md:px-12">
        {/* Giant heading */}
        <h2
          data-reveal
          className="font-['Oldschool_Grotesk'] font-normal tracking-[-0.03em] leading-none text-black mb-8 md:mb-12"
          style={{ fontSize: "clamp(48px, 10vw, 150px)" }}
        >
          Use cases
        </h2>

        {/* Two-column layout */}
        <div data-reveal className="flex flex-col md:flex-row gap-10">
          {/* LEFT: radio list ~40% */}
          <div className="md:w-[40%] w-full">
            {/* Top divider */}
            <div className="border-t border-black/20 mb-0" />

            <ul className="flex flex-col">
              {USE_CASES.map((uc, i) => {
                const isSelected = i === activeIndex;
                return (
                  <li key={uc.industry}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "flex items-center gap-3 w-full text-left py-[14px] border-b border-black/10",
                        "font-['Oldschool_Grotesk'] font-normal text-[17px] text-black",
                        "hover:opacity-70 transition-opacity duration-150"
                      )}
                    >
                      {/* Radio indicator */}
                      <span
                        className={cn(
                          "flex-shrink-0 w-3.5 h-3.5 rounded-full",
                          isSelected
                            ? "bg-[#f97316]"
                            : "border border-black/40 bg-transparent"
                        )}
                      />
                      {uc.industry}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT: case study card ~60% */}
          <div className="md:w-[60%] w-full">
            <div
              className="rounded-[28px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, #ffffff 0%, #f3e8ff 60%, #fce7f3 100%)",
                boxShadow: "0 4px 40px 0 rgba(0,0,0,0.08)",
              }}
            >
              <div
                key={activeIndex}
                className="flex flex-col items-center px-5 py-6 md:px-10 md:py-10 gap-4 md:gap-6 transition-opacity duration-300 opacity-100"
              >
                {/* Product image */}
                <div className="flex items-center justify-center w-full">
                  <img
                    src={active.image}
                    alt={active.industry}
                    className="max-w-[360px] w-full object-contain max-h-40 md:max-h-64"
                  />
                </div>

                {/* Brand logo + blurb + cta */}
                <div className="w-full flex flex-col gap-4">
                  <img
                    src={active.logo}
                    alt={`${active.industry} brand logo`}
                    className="h-7 object-contain object-left"
                  />
                  <p
                    className="font-['Oldschool_Grotesk'] font-light text-[17px] text-[#333] leading-relaxed"
                  >
                    {active.blurb}
                  </p>
                  {active.cta && (
                    <a
                      href={active.cta.href}
                      className="inline-flex items-center gap-1 font-['Oldschool_Grotesk'] font-normal text-[15px] text-black underline underline-offset-2 hover:opacity-70 transition-opacity duration-150 self-start"
                    >
                      {active.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
