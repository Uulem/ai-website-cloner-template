import { cn } from "@/lib/utils";

interface PushCard {
  title: string;
  body: string;
  href: string;
}

const CARDS: PushCard[] = [
  {
    title: "Resolution",
    body: "Win over customers and unlock cost savings with automated limited warranty claims resolutions.",
    href: "#",
  },
  {
    title: "Registration",
    body: "Know and keep your customers close with an oh-so-simple registration experience.",
    href: "#",
  },
];

function PushCard({ card }: { card: PushCard }) {
  return (
    <a
      href={card.href}
      data-reveal
      className={cn(
        "group flex min-h-[260px] sm:min-h-[430px] flex-col items-center justify-center rounded-[28px]",
        "bg-white px-6 sm:px-12 py-10 sm:py-12 text-center",
        "shadow-[0_10px_40px_rgba(0,0,0,0.05)]",
        "transition-all duration-[250ms] ease-out",
        "hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]",
        "no-underline"
      )}
    >
      {/* Eyebrow */}
      <span
        className={cn(
          "mb-4 block font-light uppercase tracking-[0.08em]",
          "text-[13px] text-black/50"
        )}
      >
        EXPLORE
      </span>

      {/* Title */}
      <h2
        className={cn(
          "clyde-serif font-normal leading-none tracking-[-0.02em] text-black",
          "text-[clamp(40px,13vw,82px)] sm:text-[clamp(40px,5vw,82px)]"
        )}
      >
        {card.title}
      </h2>

      {/* Body */}
      <p
        className={cn(
          "mt-4 max-w-[340px] font-light leading-[1.4]",
          "text-[17px] text-black/70"
        )}
      >
        {card.body}
      </p>
    </a>
  );
}

export function PushesSection() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-[1340px] px-5 md:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {CARDS.map((card) => (
            <PushCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
