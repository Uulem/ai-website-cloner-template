import { cn } from "@/lib/utils";

interface CardData {
  index: string;
  image: string;
  imageAlt: string;
  points: string[];
  audience: string;
}

const CARDS: CardData[] = [
  {
    index: "01",
    image: "/images/love-01.png",
    imageAlt: "Shopping bag icon",
    points: [
      "Increased conversion rates",
      "Optimized checkout flows",
      "More direct shoppers",
    ],
    audience: "Ecommerce leads and owners",
  },
  {
    index: "02",
    image: "/images/love-02.png",
    imageAlt: "5-star avatar icon",
    points: [
      "Industry-best claims filing",
      "Boosted customer satisfaction scores",
      "Single decision-point for customer issues",
    ],
    audience: "Customer experience teams",
  },
  {
    index: "03",
    image: "/images/love-03.png",
    imageAlt: "Piggy bank / coin icon",
    points: [
      "Higher customer lifetime value (CLV)",
      "Massive increase in high margin revenue",
      "Industry leading attachment rates",
    ],
    audience: "Finance and strategy teams",
  },
  {
    index: "04",
    image: "/images/love-04.png",
    imageAlt: "Heart icon",
    points: [
      "Exceptional customer support",
      "Easy-to-use contract dashboard",
      "Fast and simple claims processing",
    ],
    audience: "(Soon to love you) customers",
  },
];

/** Varied drift speeds give the icon grid the staggered-column feel of the
 *  original site's parallax mosaic. */
const ICON_PARALLAX = ["2", "4", "6", "3"];

function BenefitCard({ card, parallax }: { card: CardData; parallax: string }) {
  return (
    <div
      data-reveal
      className={cn(
        "flex min-h-[280px] md:min-h-[430px] flex-col rounded-[20px] bg-white p-5 md:p-7",
        "border border-black/[0.06]",
        "shadow-sm transition-shadow duration-200 hover:shadow-md"
      )}
    >
      {/* Index label */}
      <span className="font-light text-[14px] leading-none text-[#555]">
        {card.index}
      </span>

      {/* Icon image — centered, gentle parallax drift */}
      <div className="flex flex-1 items-center justify-center overflow-hidden py-6">
        <img
          src={card.image}
          alt={card.imageAlt}
          width={150}
          height={150}
          data-parallax={parallax}
          className="h-auto w-[150px] drop-shadow-md"
        />
      </div>

      {/* Benefit points */}
      <ul className="flex flex-col gap-[10px]">
        {card.points.map((point) => (
          <li key={point} className="text-[16px] leading-snug text-black">
            {point}
          </li>
        ))}
      </ul>

      {/* Audience label */}
      <div className="mt-5 border-t border-black/[0.08] pt-4">
        <span className="font-light text-[15px] leading-none text-[#777]">
          {card.audience}
        </span>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1340px] px-5 md:px-12">
        {/* Heading block with umbrella image layered behind */}
        <div className="relative mb-8 md:mb-16 flex flex-col items-center">
          {/* Umbrella glow halo — behind the umbrella itself */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2",
              "-translate-x-1/2 -translate-y-1/2",
              "h-[320px] w-[320px] rounded-full",
              "bg-[radial-gradient(ellipse_at_center,rgba(255,160,100,0.35)_0%,transparent_70%)]"
            )}
            aria-hidden="true"
          />

          {/* Umbrella image — centered, behind text (z-0) */}
          <img
            src="/images/umbrella.png"
            alt=""
            width={280}
            height={280}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 z-0",
              "-translate-x-1/2 -translate-y-[60%]",
              "h-auto w-[160px] md:w-[280px]"
            )}
          />

          {/* Giant heading — in front (z-10) */}
          <h2
            data-reveal
            className={cn(
              "relative z-10 text-center font-normal leading-none text-black",
              "tracking-[-0.03em]",
              "text-[clamp(44px,16vw,150px)] md:text-[clamp(64px,10vw,150px)]"
            )}
          >
            Why folks love
            <br />
            Clyde
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <BenefitCard
              key={card.index}
              card={card}
              parallax={ICON_PARALLAX[i % ICON_PARALLAX.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
