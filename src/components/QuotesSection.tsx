"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const QUOTES = [
  {
    brand: "MOVADO",
    text: "We partnered with Clyde to provide our customers with the peace of mind they’re looking for. The technology allowed us to launch the service quickly and offers a great user experience, which helps us provide value to our customers and drive loyalty.",
  },
  {
    brand: "",
    text: "The integration was simple and frictionless. Anything that adds to the top line, helps our customers, and is low effort is a no-brainer. There are no upfront costs associated with Clyde, so it was really a win-win for everyone",
  },
  {
    brand: "",
    text: "We knew we needed a seamless warranty program, but we had no idea where to begin. Then we found Clyde. The onboarding was super easy and our customers have had an amazing experience — the result is increased revenue without the backend hassle.",
  },
] as const;

const AUTO_ADVANCE_MS = 6000;

export function QuotesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % QUOTES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#faf8f4] py-[100px]">
      <div className="mx-auto max-w-[1340px] px-6 md:px-12">
        {/* Carousel */}
        <div className="relative min-h-[220px] md:min-h-[260px]">
          {QUOTES.map((quote, index) => (
            <div
              key={index}
              aria-hidden={index !== active}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                index === active ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              {/* Mobile layout: brand on top, horizontal divider, quote below */}
              <div className="flex flex-col md:hidden">
                {quote.brand && (
                  <span
                    className={cn(
                      "font-sans font-light uppercase tracking-[0.15em] text-[28px] text-black"
                    )}
                  >
                    {quote.brand}
                  </span>
                )}
                <div className="mt-4 h-px w-full bg-black/20" />
                <blockquote
                  className={cn(
                    "clyde-serif mt-6 font-normal text-black",
                    "text-[30px] leading-[1.15] tracking-[-0.02em]"
                  )}
                >
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
              </div>

              {/* Desktop layout: two columns with vertical divider */}
              <div className="hidden md:flex md:items-stretch md:gap-0">
                {/* Left column ~30% */}
                <div className="flex w-[30%] shrink-0 items-start pr-10 pt-1">
                  {quote.brand && (
                    <span
                      className={cn(
                        "font-sans font-light uppercase tracking-[0.15em] text-[28px] text-black leading-tight"
                      )}
                    >
                      {quote.brand}
                    </span>
                  )}
                </div>

                {/* Vertical divider */}
                <div className="w-px self-stretch bg-black/20" />

                {/* Right column ~70% */}
                <div className="w-[70%] pl-10 pt-1">
                  <blockquote
                    className={cn(
                      "clyde-serif font-normal text-black",
                      "text-[clamp(28px,4.5vw,56px)] leading-[1.15] tracking-[-0.02em]"
                    )}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot controls */}
        <div className="mt-10 flex items-center gap-3 md:pl-[calc(30%+40px)]">
          {QUOTES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to quote ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-colors duration-300",
                index === active ? "bg-black" : "bg-black/25"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
