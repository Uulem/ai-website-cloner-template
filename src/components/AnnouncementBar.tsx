import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div
      className={cn(
        "w-full bg-black",
        "py-2.5 px-4",
        "text-center",
        "relative",
        "sm:py-2.5 sm:px-4",
      )}
    >
      <a
        href="https://covergenius.com"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "font-sans font-light",
          "text-sm sm:text-base",
          "text-[#f6f6f4]",
          "transition-opacity duration-200",
          "hover:opacity-80",
        )}
      >
        Clyde is now a part of Cover Genius. Read the full announcement &raquo;
      </a>
    </div>
  );
}
