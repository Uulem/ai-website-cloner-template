"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "@/lib/gsap";
import { CheckIcon, ArrowUpRightIcon } from "@/components/icons";
import { ScaleExperience } from "@/components/ScaleExperience";
import type { SteppedCard as SteppedCardData } from "@/types/content";

const CARDS: SteppedCardData[] = [
  {
    eyebrow: "The Purchase Experience",
    cover: "Sell with a truly seamless shopping flow",
    slides: [
      {
        title: "Launch your custom ecommerce experience",
        body: "Our warranty and conversion experts partner with you to design experiences specifically for your goals, from driving more top-line revenue to winning customers from competitors. With Clyde, you can count on:",
        bullets: [
          "PROGRAM PLANS BUILT JUST FOR YOUR BRAND",
          "EXPERT GUIDANCE TO OPTIMIZE PERFORMANCE",
          "INTEGRATIONS THAT ENHANCE YOUR TECH STACK",
        ],
        image: "/images/purchase-01a.jpg",
      },
      {
        title: "Offer your warranties (pretty much) anywhere",
        body: "Meet your customers where they’re most likely to convert — from product pages to customer support channels to registration flows. With Clyde, warranty programs can be offered anywhere, across all channels:",
        bullets: [
          "MOBILE APPS",
          "CHECKOUT PAGES",
          "PRODUCT DETAIL PAGES",
          "CUSTOMER SERVICE PAGES",
          "CUSTOMER SUPPORT CHATS",
        ],
        image: "/images/purchase-01b.jpg",
      },
      {
        title: "Go beyond warranties to engage your customers",
        body: "Clyde warranties are a wonderful way to identify your most committed customers and unlock additional revenue. Send fully branded post-purchase emails with promotional offers, purchase anniversary upsells, and much more:",
        bullets: [
          "FREE SERVICES",
          "CLUB MEMBERSHIPS",
          "MONTHLY GIVEAWAYS",
          "PROMOTIONAL CONTESTS",
          "DISCOUNTS AND BUNDLES",
          "CROSS-SELLS AND UPSELLS",
        ],
        image: "/images/purchase-01c.jpg",
      },
    ],
  },
  {
    eyebrow: "The Claims Experience",
    cover: "Designed for customer peace of mind",
    slides: [
      {
        title: "Give customers their own self-serve dashboard",
        body: "Automated for you, awesome for them. Clyde saves your customer service team precious time by giving your customers instant access to their own dashboards where they can manage their products and protection plans.",
        bullets: [
          "FILE AND RESOLVE CLAIMS",
          "VIEW CONTRACTS AND TERMS",
          "BUY ADDITIONAL COVERAGE",
          "PURCHASE MORE PRODUCTS",
        ],
        image: "/images/claims-02a.jpg",
      },
      {
        title: "Surprise customers with instant resolutions",
        body: "Clyde makes claims easy and fast. The customer submission flow is optimized for mobile and designed to turn their answers into your insights. And the best part? Claims go from zero to resolved in less than 60 seconds.",
        bullets: [
          "MOBILE-FIRST INTERFACE",
          "EASY SUBMISSION FLOW",
          "CHEETAH-FAST CLAIM DECISIONS",
          "CUSTOM RESOLUTION OPTIONS",
        ],
        image: "/images/claims-02b.jpg",
      },
      {
        title: "Ensure positive outcomes every time, no matter what",
        body: "Clyde ensures every customer has positive next steps with flexible resolution options, built-in troubleshooting, smooth handoffs to your customer support team, and thoughtfully designed customer experiences:",
        bullets: [
          "INSTANT PROMO CODES, PAYOUTS, OR RE-BUYING OPTIONS",
          "CONSOLATION DISCOUNT OFFERS (AND MORE)",
          "DIRECT CONNECTIONS TO REPAIR CENTERS",
        ],
        image: "/images/claims-02c.jpg",
      },
    ],
  },
  {
    eyebrow: "The Merchant Experience",
    cover: "Easily manage everything in one place",
    slides: [
      {
        title: "Your dashboard to maximize Customer Lifetime Value",
        body: "Clyde makes all the data and actions you need available at a glance. Manage your omni-channel customer experience breezily — resend contracts, review and file claims, adjust resolutions, and so much more.",
        bullets: [
          "PERMISSION-BASED DASHBOARD WITH UNLIMITED SEATS",
          "CONFIGURABLE EMAIL NOTIFICATIONS",
          "DETAILED CUSTOMER CLAIMS HISTORY",
          "VIEW CUSTOMER LTV, NPS, AND MORE",
          "CONTRACT AND CLAIMS MANAGEMENT",
        ],
        image: "/images/merchant-03a.jpg",
      },
      {
        title: "Connect Clyde to level up your ecommerce stack",
        body: "Get started and accelerate quickly with our pre-built integrations and strategic agency partnerships. Our one-time catalog integration ensures all new products and variants are listed and optimized automatically.",
        bullets: [
          "Integrations",
          "SHOPIFY",
          "MAGENTO",
          "BIGCOMMERCE",
          "SALESFORCE COMMERCE CLOUD",
          "KLAVIYO",
          "Agencies",
          "HALF HELIX",
          "SAMA LABS",
          "HAWKE MEDIA",
          "OBJECT EDGE",
          "IN SOCIAL",
        ],
        image: "/images/merchant-03b.jpg",
      },
      {
        title: "Elevate your ecommerce strategy with warranty data",
        body: "Warranties are a window into understanding your business more deeply. Clyde collects and aggregates meaningful feedback from highly engaged customers so you have answers to questions like:",
        bullets: [
          "WHAT TYPES OF CUSTOMERS BUY WARRANTIES?",
          "WHY DO CUSTOMERS MAKE CLAIMS (VS. RETURNS)?",
          "WHERE ARE PRODUCTS RUNNING INTO QUALITY ISSUES?",
        ],
        image: "/images/merchant-03c.jpg",
      },
    ],
  },
];

/** A subdued, organic warm aurora used behind each pinned card. */
const AURORA =
  "radial-gradient(50% 55% at 28% 32%, rgba(249,196,107,0.85) 0%, rgba(249,196,107,0) 60%)," +
  "radial-gradient(50% 50% at 76% 28%, rgba(247,214,224,0.9) 0%, rgba(247,214,224,0) 60%)," +
  "radial-gradient(55% 60% at 85% 78%, rgba(231,201,240,0.85) 0%, rgba(231,201,240,0) 62%)," +
  "radial-gradient(45% 50% at 14% 82%, rgba(246,210,192,0.8) 0%, rgba(246,210,192,0) 60%)," +
  "#f6f6f4";

function Slide({ slide }: { slide: SteppedCardData["slides"][number] }) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-8 px-8 lg:flex-row lg:gap-16 lg:px-16">
      <div className="flex w-full items-center justify-center lg:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.image}
          alt=""
          className="h-auto w-full max-w-[620px] rounded-2xl object-contain"
        />
      </div>
      <div className="flex w-full flex-col justify-center lg:w-1/2">
        <h3 className="clyde-serif text-[clamp(28px,3vw,44px)] text-black">
          {slide.title}
        </h3>
        <p className="mt-5 max-w-[460px] text-[18px] font-light leading-[1.4] text-black">
          {slide.body}
        </p>
        <ul className="mt-7 flex flex-col gap-[10px]">
          {slide.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 text-[14px] font-light uppercase tracking-[0.04em] text-black"
            >
              <CheckIcon className="h-3 w-4 shrink-0 text-black" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SteppedCardBlock({ card }: { card: SteppedCardData }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0); // 0 = cover, 1..n = slide index + 1
  const steps = card.slides.length + 1;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Drive the active step from the sticky track's scroll progress. The CSS
    // `position: sticky` child handles the actual pinning; ScrollTrigger only
    // reports progress (and stays in sync with Lenis via SmoothScroll).
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const next = Math.min(Math.floor(self.progress * steps), steps - 1);
        setStep((prev) => (prev === next ? prev : next));
      },
    });
    return () => st.kill();
  }, [steps]);

  const n = card.slides.length;
  const slideNum = Math.min(Math.max(step, 1), n);

  return (
    <>
      {/* Desktop: scroll-pinned card */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${steps * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 py-10">
          <div
            className="aurora-animate relative h-[calc(100vh-120px)] w-full max-w-[1340px] overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
            style={{ background: AURORA }}
          >
            {/* Cover */}
            <div
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center px-8 text-center transition-opacity duration-500",
                step === 0 ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <span className="text-[21px] font-light text-black">
                {card.eyebrow}
              </span>
              <h2 className="clyde-serif mt-4 max-w-[14ch] text-[clamp(40px,5.5vw,84px)] leading-[1] text-black">
                {card.cover}
              </h2>
            </div>
            {/* Slides */}
            {card.slides.map((slide, i) => (
              <div
                key={slide.title}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  step === i + 1
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                )}
              >
                <Slide slide={slide} />
              </div>
            ))}
            {/* Progress indicator */}
            <div
              className={cn(
                "absolute right-8 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-300",
                step >= 1 ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="text-[14px] font-light text-black/60">
                {String(slideNum).padStart(2, "0")}
              </span>
              <div className="relative h-40 w-px bg-black/15">
                <div
                  className="absolute left-0 top-0 w-px bg-[#f97316] transition-[height] duration-300"
                  style={{ height: `${(slideNum / n) * 100}%` }}
                />
              </div>
              <span className="text-[14px] font-light text-black/60">
                {String(n).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked, no pinning */}
      <div className="lg:hidden">
        <div
          className="aurora-animate flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center"
          style={{ background: AURORA }}
        >
          <span className="text-[16px] font-light text-black">
            {card.eyebrow}
          </span>
          <h2 className="clyde-serif mt-3 text-[clamp(30px,8vw,44px)] leading-[1.05] text-black">
            {card.cover}
          </h2>
        </div>
        {card.slides.map((slide) => (
          <div key={slide.title} className="px-6 py-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt=""
              className="mb-6 w-full rounded-2xl object-contain"
            />
            <h3 className="clyde-serif text-[28px] text-black">{slide.title}</h3>
            <p className="mt-4 text-[17px] font-light leading-[1.4] text-black">
              {slide.body}
            </p>
            <ul className="mt-6 flex flex-col gap-[10px]">
              {slide.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[13px] font-light uppercase tracking-[0.04em] text-black"
                >
                  <CheckIcon className="h-3 w-4 shrink-0 text-black" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function SteppedExperience() {
  const [purchase, ...scaleCards] = CARDS; // Claims + Merchant use the scale animation
  return (
    <section className="bg-background">
      <SteppedCardBlock key={purchase.eyebrow} card={purchase} />
      {scaleCards.map((card) => (
        <ScaleExperience
          key={card.eyebrow}
          eyebrow={card.eyebrow}
          cover={card.cover}
          slides={card.slides}
        />
      ))}
      {/* Registria partnership note (closes the Merchant Experience) */}
      <div className="mx-auto flex max-w-[1340px] flex-col items-center gap-5 px-6 py-16 text-center lg:px-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/registria.png"
          alt="Clyde + Registria partnership"
          className="h-auto w-[280px] max-w-full object-contain"
        />
        <p className="max-w-[520px] text-[18px] font-light text-black">
          Using Registria and want to add warranties into your product
          registration flow?
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-[16px] text-black underline-offset-4 hover:underline"
        >
          View Our Partnership
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
