/**
 * Dark "Request a demo" panel that sits at the very bottom of the scrolling
 * content and slides up to reveal the (white) footer behind it — mirroring
 * Clyde's prefooter. The headline is a continuous horizontal marquee, and the
 * panel has rounded bottom corners so the footer peeks through as it rises.
 */
const PHRASE = "Request a demo";

function Track() {
  // Duplicated content so the -50% translate loops seamlessly.
  return (
    <div
      className="flex w-max items-center"
      style={{ animation: "clyde-marquee 36s linear infinite" }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="clyde-serif whitespace-nowrap px-8 text-[#f6f6f4]"
          style={{
            fontSize: "clamp(64px, 12vw, 150px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {PHRASE}
        </span>
      ))}
    </div>
  );
}

export function RequestDemoMarquee() {
  return (
    <section className="px-0">
      <div className="relative flex min-h-[64vh] flex-col justify-end overflow-hidden rounded-b-[28px] bg-[#0b0a0c] pb-16 pt-24">
        <Track />
      </div>
    </section>
  );
}
