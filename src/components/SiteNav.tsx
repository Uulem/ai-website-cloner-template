"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ClydeLogo, MenuDotsIcon } from "@/components/icons";

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 text-foreground",
        "transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-background"
      )}
    >
      {/* Main nav row */}
      <div className="flex items-center justify-between h-[72px] md:h-[92px] px-5 md:px-12">
        {/* Left group: Product + Resources links */}
        <div className="flex items-center gap-7">
          <a
            href="#"
            className="hidden md:block text-[15.3px] font-normal text-black opacity-100 hover:opacity-65 transition-opacity duration-200"
          >
            Product
          </a>
          <a
            href="#"
            className="hidden md:block text-[15.3px] font-normal text-black opacity-100 hover:opacity-65 transition-opacity duration-200"
          >
            Resources
          </a>
        </div>

        {/* Center: Logo absolutely centered */}
        <a
          href="#"
          aria-label="Clyde home"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <ClydeLogo className="md:h-[26px] h-[22px] w-auto" />
        </a>

        {/* Right group: Login + Demo button (+ mobile menu icon) */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#"
            className="hidden md:block text-[15.3px] font-normal text-black opacity-100 hover:opacity-65 transition-opacity duration-200"
          >
            Login
          </a>

          <a
            href="#"
            className={cn(
              "text-[14px] md:text-[15.3px] font-normal text-black rounded-xl px-4 md:px-[22px] py-2 md:py-[10px]",
              "bg-white/50 hover:bg-white/90 transition-colors duration-200"
            )}
          >
            Demo
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center"
          >
            <MenuDotsIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col px-5 py-4 gap-1">
            <a
              href="#"
              className="text-[17px] font-normal text-black py-3 border-b border-black/08 hover:opacity-65 transition-opacity"
            >
              Product
            </a>
            <a
              href="#"
              className="text-[17px] font-normal text-black py-3 border-b border-black/08 hover:opacity-65 transition-opacity"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-[17px] font-normal text-black py-3 hover:opacity-65 transition-opacity"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
