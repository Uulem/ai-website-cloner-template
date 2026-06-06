/** Shared content types for the Clyde extended-warranty clone. */

export interface NavLink {
  label: string;
  href: string;
}

/** A single scroll slide inside a "stepped" experience card. */
export interface SteppedSlide {
  /** Heading shown alongside the mockup. */
  title: string;
  /** Supporting paragraph. */
  body: string;
  /** Uppercase checklist items. */
  bullets: string[];
  /** Local path to the mockup image (e.g. /images/purchase-01a.jpg). */
  image: string;
}

/** One of the three big pinned experience sections. */
export interface SteppedCard {
  /** Eyebrow, e.g. "The Purchase Experience". */
  eyebrow: string;
  /** Big serif cover heading. */
  cover: string;
  slides: SteppedSlide[];
}

/** "Discover more with Clyde" accordion row. */
export interface AccordionItem {
  title: string;
  body?: string;
}

/** "Why folks love Clyde" benefit block. */
export interface Benefit {
  index: string; // "01"
  image: string;
  points: string[];
  audience: string; // "Ecommerce leads and owners"
}

/** Use-case industry tab + its case study. */
export interface UseCase {
  industry: string;
  logo: string; // brand svg
  image: string; // product render
  blurb: string;
  cta?: { label: string; href: string };
}

/** Customer testimonial quote. */
export interface Quote {
  author?: string;
  role?: string;
  text: string;
}

/** Resources / blog card. */
export interface ResourceCard {
  category: string;
  title: string;
  image: string;
  href: string;
}

/** FAQ accordion entry. */
export interface FaqItem {
  question: string;
  answer?: string;
}

/** Bottom "Explore" push card (Resolution / Registration). */
export interface PushCard {
  eyebrow: string; // "EXPLORE"
  title: string;
  body: string;
  href: string;
}
