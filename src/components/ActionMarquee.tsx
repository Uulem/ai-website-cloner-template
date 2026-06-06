import { cn } from "@/lib/utils";

const phrase = "See Clyde in action";

function Orb() {
  return (
    <span
      className="flex-shrink-0 rounded-full"
      style={{
        width: "110px",
        height: "110px",
        background:
          "radial-gradient(circle at 35% 35%, #fbbf60, #f97316 40%, #c084fc 75%)",
        filter: "blur(2px)",
        margin: "0 48px",
      }}
      aria-hidden="true"
    />
  );
}

function TrackContent() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span
            className={cn(
              "font-sans font-normal whitespace-nowrap text-black leading-none tracking-[-0.03em]",
            )}
            style={{
              fontSize: "clamp(64px, 11vw, 150px)",
              letterSpacing: "-4.2px",
            }}
          >
            {phrase}
          </span>
          <Orb />
        </span>
      ))}
    </>
  );
}

export function ActionMarquee() {
  return (
    <section className="overflow-x-hidden py-20 bg-[--background]">
      <style>{`
        @keyframes clyde-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Track: duplicate content twice so the loop is seamless */}
      <div
        data-marquee-skew
        className="flex items-center"
        style={{
          width: "max-content",
          animation: "clyde-marquee 28s linear infinite",
        }}
      >
        {/* First copy */}
        <TrackContent />
        {/* Second copy — makes the seamless loop */}
        <TrackContent />
      </div>
    </section>
  );
}
