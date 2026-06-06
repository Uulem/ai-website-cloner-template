"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionRow {
  title: string;
  body: string;
}

const ROWS: AccordionRow[] = [
  {
    title: "More revenue",
    body: "Boost top-line revenue and high-margin profits with protection plans customers actually want.",
  },
  {
    title: "More customers",
    body: "Win and retain shoppers with seamless, branded coverage at every touchpoint.",
  },
  {
    title: "More coverage",
    body: "Offer flexible plans across every product category and sales channel.",
  },
  {
    title: "More insights",
    body: "Turn warranty data into a window on customer behavior, quality, and lifetime value.",
  },
];

export function DiscoverAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="w-full bg-[#f6f6f4]">
      <div className="mx-auto max-w-[1340px] px-[48px] max-[640px]:px-[20px] py-16">
        {/* Label */}
        <p data-reveal className="mb-6 text-[16px] font-light text-black" style={{ fontFamily: "Oldschool Grotesk, sans-serif" }}>
          Discover more with Clyde
        </p>

        {/* Accordion rows */}
        <div>
          {ROWS.map((row, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={row.title} data-reveal className="border-t border-black/10">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="group flex w-full items-center justify-between py-[36px] max-[640px]:py-[24px] text-left"
                  aria-expanded={isOpen}
                >
                  {/* Row title */}
                  <span
                    className={cn(
                      "leading-[1.1] tracking-[-0.02em] transition-colors duration-300",
                      "text-[clamp(40px,8vw,82px)] max-[640px]:text-[13vw]",
                      isOpen
                        ? "text-black"
                        : "text-black/40 group-hover:text-black"
                    )}
                    style={{ fontFamily: "Oldschool Grotesk, sans-serif", fontWeight: 400 }}
                  >
                    {row.title}
                  </span>

                  {/* Toggle button */}
                  <span
                    className={cn(
                      "ml-4 flex shrink-0 items-center justify-center rounded-full bg-white shadow",
                      "h-9 w-9 max-[640px]:h-[30px] max-[640px]:w-[30px]",
                      "text-2xl font-light text-black leading-none",
                      "transition-transform duration-300",
                      isOpen ? "rotate-45" : "rotate-0"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Expanded body */}
                <div
                  className={cn(
                    "grid transition-all duration-[350ms] ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-[36px]"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      className="text-[21px] font-light text-black"
                      style={{ fontFamily: "Oldschool Grotesk, sans-serif" }}
                    >
                      {row.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
