"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What products can be covered?",
    answer:
      "Nearly any physical product — electronics, appliances, furniture, fitness gear, jewelry and more can be covered.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most merchants are up and running in days thanks to pre-built integrations and a one-time catalog sync.",
  },
  {
    question: "What makes Clyde special?",
    answer:
      "Clyde pairs a seamless customer experience with expert program design and best-in-class claims resolution.",
  },
  {
    question: "Why is this better than doing it ourselves?",
    answer:
      "Clyde handles underwriting, claims, and support so you capture the upside without the operational overhead.",
  },
  {
    question: "How do claims work? Who pays for them?",
    answer:
      "Customers file claims in under 60 seconds; Clyde and its insurance partners handle payouts — not you.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1340px] px-5 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* LEFT: gradient card with image */}
          <div data-reveal className="w-full md:w-[30%]">
            <div
              className={cn(
                "relative h-[220px] w-full overflow-hidden rounded-2xl md:h-[300px]",
                "bg-[linear-gradient(135deg,oklch(80%_0.12_60),oklch(78%_0.14_0),oklch(75%_0.10_300))]"
              )}
            >
              <img
                src="/images/faq.jpg"
                alt="FAQ"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: accordion list */}
          <div data-reveal className="w-full md:w-[70%]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={cn(
                    "border-b border-black/15",
                    index === 0 && "border-t"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-sans text-[18px] font-normal transition-colors duration-200 md:text-[21px]",
                        isOpen ? "text-black" : "text-black/55"
                      )}
                    >
                      {faq.question}
                    </span>

                    {/* Circular toggle button */}
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm",
                        "text-xl font-light leading-none text-black/70 transition-transform duration-200",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="pb-7 font-light text-[17px] text-black/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
