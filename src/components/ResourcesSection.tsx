import { cn } from "@/lib/utils";

interface BlogCard {
  category: string;
  title: string;
  image: string;
}

const cards: BlogCard[] = [
  {
    category: "NEWS & UPDATES • NEWS UPDATES",
    title: "Clyde's Commitment to Focus",
    image: "/images/blog-commitment.png",
  },
  {
    category: "INSURANCE • ARTICLES",
    title: "3 Lessons from Brands Reimagining the Claims Experience",
    image: "/images/blog-claims.png",
  },
  {
    category: "ECOMMERCE • ARTICLES",
    title: "4 Ways to Gauge Customer Value Beyond Revenue",
    image: "/images/blog-value.png",
  },
];

export function ResourcesSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1340px] px-5 md:px-12">
        {/* Giant heading */}
        <h2
          data-reveal
          className={cn(
            "font-normal text-black leading-none tracking-[-0.03em]",
            "text-[clamp(48px,16vw,150px)] md:text-[clamp(64px,10vw,150px)]"
          )}
        >
          Resources
        </h2>

        {/* Two-column layout */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-10 md:mt-12">
          {/* LEFT: Pill button ~30% */}
          <div className="flex items-start md:w-[30%]">
            <button
              type="button"
              className={cn(
                "rounded-xl bg-white px-[22px] py-3 text-black text-base font-normal",
                "shadow-[0_2px_12px_rgba(0,0,0,0.10)]",
                "transition-colors duration-200",
                "hover:bg-black/5",
                "cursor-pointer"
              )}
            >
              Explore More Resources
            </button>
          </div>

          {/* RIGHT: Stack of blog cards ~70% */}
          <div className="flex flex-col gap-4 md:w-[70%]">
            {cards.map((card) => (
              <article
                key={card.title}
                data-reveal
                className={cn(
                  "flex flex-col gap-4 rounded-[20px] bg-white p-4",
                  "shadow-[0_2px_12px_rgba(0,0,0,0.07)]",
                  "transition-shadow duration-[250ms]",
                  "hover:shadow-[0_6px_28px_rgba(0,0,0,0.13)]",
                  "md:flex-row md:items-center"
                )}
              >
                {/* Thumbnail */}
                <div
                  className={cn(
                    "flex-shrink-0 overflow-hidden rounded-2xl",
                    "bg-[linear-gradient(135deg,#fde8e0_0%,#fce4c8_100%)]",
                    "h-[160px] w-full md:h-[110px] md:w-[200px]"
                  )}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      "font-light uppercase tracking-[0.05em] text-[13px] text-black/50"
                    )}
                  >
                    {card.category}
                  </span>
                  <p className="clyde-serif text-[28px] font-normal leading-tight text-black">
                    {card.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
