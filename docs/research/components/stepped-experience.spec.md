# SteppedExperience Specification

## Overview
- **Target files:** `src/components/SteppedExperience.tsx` (wrapper) + `src/components/SteppedCard.tsx` (one pinned card)
- **Interaction model:** SCROLL-DRIVEN, sticky-pinned. Each experience is a tall (~300vh) track; an inner panel is `position: sticky; top: <navHeight>` and pins to the viewport while the track scrolls. As scroll progresses through the track, the cover fades out and the 3 slides cross-fade in sequence; a vertical NN/03 progress indicator on the right fills.

## Mechanism (from live site)
- Outer card track height ≈ 4440px (~ slides+cover count * viewport). Inner panel height = 100vh, sticky.
- Inner panel contains: a `cover` layer (eyebrow + big serif heading over aurora) shown at progress 0, then 3 `slide` layers absolutely stacked, cross-fading by scroll progress.
- Right edge: a progress column showing "01 … 03" with a vertical line that fills (orange gradient) as you advance.
- Implement with a scroll listener / IntersectionObserver computing progress = (scrollY - trackTop) / (trackHeight - viewportH), clamped 0..1. Map progress→active slide index. Cross-fade via opacity transitions (0.4s ease).

## Pinned panel layout (per active slide)
- Full-bleed rounded gradient card filling the viewport width inside a max-width ~1340 container, borderRadius ~32px, soft box-shadow, background = warm aurora (orange/pink/lilac radial blend on paper).
- LEFT half: the mockup image (`/images/<slide image>`), ~620px wide, object-contain, centered vertically.
- RIGHT half: heading (Recoleta serif ~44px, color #000) + paragraph (Oldschool Grotesk 300 ~18px, color #000, max-width 460px) + an uppercase checklist (Oldschool Grotesk 300 ~14px, letterSpacing 0.04em, color #000, each item prefixed with a small CheckIcon or a leading dot; rows ~10px apart).
- Far RIGHT: progress indicator. Two small numbers "01" (top) and "03" (bottom) in Oldschool Grotesk 300 ~14px color #777, with a vertical 1px track between them; an orange (#f97316) fill grows top→down with progress.

## Cover (intro, progress≈0)
- Centered over the aurora: eyebrow (Oldschool Grotesk 300 ~21px color #000) then big serif heading (Recoleta 400 ~82px clamp(40px,5.5vw,84px), letterSpacing -0.03em, lineHeight 1, color #000, centered, max-width ~12ch).

## Cards & content (verbatim)

### Card 1 — eyebrow "The Purchase Experience", cover "Sell with a truly seamless shopping flow"
- Slide A — image `/images/purchase-01a.jpg`, title "Launch your custom ecommerce experience", body "Our warranty and conversion experts partner with you to design experiences specifically for your goals, from driving more top-line revenue to winning customers from competitors. With Clyde, you can count on:", bullets ["PROGRAM PLANS BUILT JUST FOR YOUR BRAND","EXPERT GUIDANCE TO OPTIMIZE PERFORMANCE","INTEGRATIONS THAT ENHANCE YOUR TECH STACK"]
- Slide B — image `/images/purchase-01b.jpg`, title "Offer your warranties (pretty much) anywhere", body "Meet your customers where they’re most likely to convert — from product pages to customer support channels to registration flows. With Clyde, warranty programs can be offered anywhere, across all channels:", bullets ["MOBILE APPS","CHECKOUT PAGES","PRODUCT DETAIL PAGES","CUSTOMER SERVICE PAGES","CUSTOMER SUPPORT CHATS"]
- Slide C — image `/images/purchase-01c.jpg`, title "Go beyond warranties to engage your customers", body "Clyde warranties are a wonderful way to identify your most committed customers and unlock additional revenue. Send fully branded post-purchase emails with promotional offers, purchase anniversary upsells, and much more:", bullets ["FREE SERVICES","CLUB MEMBERSHIPS","MONTHLY GIVEAWAYS","PROMOTIONAL CONTESTS","DISCOUNTS AND BUNDLES","CROSS-SELLS AND UPSELLS"]

### Card 2 — eyebrow "The Claims Experience", cover "Designed for customer peace of mind"
- Slide A — image `/images/claims-02a.jpg`, title "Give customers their own self-serve dashboard", body "Automated for you, awesome for them. Clyde saves your customer service team precious time by giving your customers instant access to their own dashboards where they can manage their products and protection plans.", bullets ["FILE AND RESOLVE CLAIMS","VIEW CONTRACTS AND TERMS","BUY ADDITIONAL COVERAGE","PURCHASE MORE PRODUCTS"]
- Slide B — image `/images/claims-02b.jpg`, title "Surprise customers with instant resolutions", body "Clyde makes claims easy and fast. The customer submission flow is optimized for mobile and designed to turn their answers into your insights. And the best part? Claims go from zero to resolved in less than 60 seconds.", bullets ["MOBILE-FIRST INTERFACE","EASY SUBMISSION FLOW","CHEETAH-FAST CLAIM DECISIONS","CUSTOM RESOLUTION OPTIONS"]
- Slide C — image `/images/claims-02c.jpg`, title "Ensure positive outcomes every time, no matter what", body "Clyde ensures every customer has positive next steps with flexible resolution options, built-in troubleshooting, smooth handoffs to your customer support team, and thoughtfully designed customer experiences:", bullets ["INSTANT PROMO CODES, PAYOUTS, OR RE-BUYING OPTIONS","CONSOLATION DISCOUNT OFFERS (AND MORE)","DIRECT CONNECTIONS TO REPAIR CENTERS"]

### Card 3 — eyebrow "The Merchant Experience", cover "Easily manage everything in one place"
- Slide A — image `/images/merchant-03a.jpg`, title "Your dashboard to maximize Customer Lifetime Value", body "Clyde makes all the data and actions you need available at a glance. Manage your omni-channel customer experience breezily — resend contracts, review and file claims, adjust resolutions, and so much more.", bullets ["PERMISSION-BASED DASHBOARD WITH UNLIMITED SEATS","CONFIGURABLE EMAIL NOTIFICATIONS","DETAILED CUSTOMER CLAIMS HISTORY","VIEW CUSTOMER LTV, NPS, AND MORE","CONTRACT AND CLAIMS MANAGEMENT"]
- Slide B — image `/images/merchant-03b.jpg`, title "Connect Clyde to level up your ecommerce stack", body "Get started and accelerate quickly with our pre-built integrations and strategic agency partnerships. Our one-time catalog integration ensures all new products and variants are listed and optimized automatically.", bullets ["Integrations","SHOPIFY","MAGENTO","BIGCOMMERCE","SALESFORCE COMMERCE CLOUD","KLAVIYO","Agencies","HALF HELIX","SAMA LABS","HAWKE MEDIA","OBJECT EDGE","IN SOCIAL"]
- Slide C — image `/images/merchant-03c.jpg`, title "Elevate your ecommerce strategy with warranty data", body "Warranties are a window into understanding your business more deeply. Clyde collects and aggregates meaningful feedback from highly engaged customers so you have answers to questions like:", bullets ["WHAT TYPES OF CUSTOMERS BUY WARRANTIES?","WHY DO CUSTOMERS MAKE CLAIMS (VS. RETURNS)?","WHERE ARE PRODUCTS RUNNING INTO QUALITY ISSUES?"]
  - Plus a Registria note below the bullets: "Using Registria and want to add warranties into your product registration flow?" + link "View Our Partnership ↗" + image `/images/registria.png`

## Responsive
- Desktop (≥1024): pinned scroll behavior as above, two-column slide layout.
- Mobile (<768): DROP the pinning. Render each card's cover then the 3 slides stacked vertically (image on top, text below), normal scroll. (The live site uses separate hide-on-desktop / hide-on-mobile trees.) Headings ~32px, image full width.
