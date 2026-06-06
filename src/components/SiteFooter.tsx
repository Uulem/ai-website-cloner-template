import { cn } from "@/lib/utils";
import { ClydeLogo, ArrowUpRightIcon } from "@/components/icons";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type LinkItem = {
  label: string;
  href: string;
  outbound?: boolean;
};

type Column = {
  heading: string;
  links: LinkItem[];
};

const COLUMNS: Column[] = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Extended Warranty", href: "#" },
      { label: "Registration", href: "#" },
      { label: "Resolution", href: "#" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Documentation", href: "#", outbound: true },
      { label: "Blog", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Referral Program", href: "#", outbound: true },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Support", href: "#", outbound: true },
      { label: "Book a Demo", href: "#" },
    ],
  },
  {
    heading: "PRODUCT",
    links: [
      { label: "Merchant Login", href: "#", outbound: true },
      { label: "Customer Login", href: "#", outbound: true },
      { label: "System Status", href: "#", outbound: true },
    ],
  },
  {
    heading: "SOCIAL",
    links: [
      { label: "LinkedIn", href: "#", outbound: true },
      { label: "Facebook", href: "#", outbound: true },
      { label: "Twitter", href: "#", outbound: true },
      { label: "Instagram", href: "#", outbound: true },
    ],
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FooterColumn({ column }: { column: Column }) {
  return (
    <div className="flex flex-col gap-3 min-w-[140px]">
      <p
        className="uppercase text-[12px] tracking-[0.08em] font-light text-black/50 mb-1"
      >
        {column.heading}
      </p>
      <ul className="flex flex-col gap-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                "text-[16px] text-black leading-none transition-opacity duration-150 hover:opacity-60",
                "flex items-center gap-1"
              )}
            >
              {link.label}
              {link.outbound && (
                <ArrowUpRightIcon className="w-[13px] h-[13px] opacity-60 shrink-0" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function SiteFooter() {
  return (
    <footer>
      {/* ── Light footer block (watercolor gradient on paper) ─────────── */}
      <div className="clyde-footer-light relative min-h-[560px] px-6 pt-16 pb-10 sm:px-12 lg:px-20 xl:px-28">
        {/* Top-right circular "C" badge */}
        <div
          className={cn(
            "absolute top-8 right-8",
            "w-12 h-12 rounded-full bg-black",
            "flex items-center justify-center",
            "text-white font-bold text-[22px] leading-none select-none"
          )}
          aria-hidden="true"
        >
          C
        </div>

        {/* ── Link columns grid ─────────────────────────────────────── */}
        <div
          className={cn(
            "grid gap-x-8 gap-y-10",
            // 5 cols on large, 2 cols on sm/md, 1 col on xs
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          )}
        >
          {COLUMNS.map((col) => (
            <FooterColumn key={col.heading} column={col} />
          ))}
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div
          className={cn(
            "mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0",
            "sm:justify-between"
          )}
        >
          {/* Left: Clyde logo (dark) */}
          <a href="#" className="shrink-0">
            <ClydeLogo className="h-[18px] w-auto [&_path]:fill-black" />
          </a>

          {/* Center: Data & Privacy */}
          <a
            href="#"
            className="text-[13px] text-black/70 hover:text-black transition-colors duration-150 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            Data &amp; Privacy
          </a>

          {/* Right: copyright */}
          <p className="text-[13px] font-light text-black/50 tracking-wide uppercase">
            2026 Clyde Technologies, Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
