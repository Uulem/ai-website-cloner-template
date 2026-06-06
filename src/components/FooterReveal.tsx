"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Recreates Clyde's scroll-driven footer reveal.
 *
 * On the original site the `<footer>` is `position: fixed; inset: 0` and sits
 * *behind* the page content (the scroll container has a higher z-index). The
 * content is opaque, so the footer is hidden until you reach the bottom — then
 * the content slides up and uncovers the fixed footer behind it.
 *
 * We reproduce it by pinning the footer to the bottom of the viewport at z-0
 * and giving the opaque content wrapper a bottom margin equal to the footer's
 * height, which creates exactly enough scroll room to reveal it.
 */
export function FooterReveal({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    let frame = 0;
    const measure = () => {
      const next = el.offsetHeight;
      setFooterHeight((prev) => {
        if (prev === next) return prev;
        // Let the new margin apply, then recompute scroll positions.
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => ScrollTrigger.refresh());
        return next;
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Opaque content that scrolls over the footer. */}
      <div
        className="relative z-10 bg-background"
        style={footerHeight ? { marginBottom: `${footerHeight}px` } : undefined}
      >
        {children}
      </div>

      {/* Fixed footer revealed from behind as the content scrolls away. */}
      <div ref={footerRef} className="fixed inset-x-0 bottom-0 z-0">
        {footer}
      </div>
    </div>
  );
}
