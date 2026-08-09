"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const isAgentMode = pathname === "/agent";
  const isProjectsPage = pathname === "/projects";
  const isAboutPage = pathname === "/about";

  return (
    <nav
      aria-label="Primary navigation"
      className="pointer-events-none fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex w-full justify-center px-3"
    >
      <div
        className={cn(
          "pointer-events-auto relative flex w-full max-w-3xl items-center justify-between gap-1.5 overflow-hidden rounded-full border p-1.5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
          "before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
          isAgentMode
            ? "border-[#434343] bg-[#181818]/90 font-mono"
            : "border-white/15 bg-neutral-900/85",
        )}
      >
        <Link
          href="/"
          className={cn(
            "group flex h-10 min-w-0 items-center gap-2 rounded-full px-1.5 pr-2 transition-colors hover:bg-white/[0.07] max-[360px]:hidden",
            pathname === "/" && !isAgentMode && "bg-white/[0.06]",
          )}
          aria-label="Nitin Jaswal, home"
        >
          <span className="relative h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-emerald-300 via-green-400 to-lime-300 shadow-[0_0_20px_rgba(74,222,128,0.24)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
            <span className="absolute inset-[3px] rounded-full border border-white/30" />
          </span>
          <span className="hidden truncate text-sm font-medium sm:inline">Nitin Jaswal</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1.5 text-xs sm:text-sm">
          <div className="flex items-center rounded-full border border-white/[0.07] bg-black/20 p-0.5">
            <Link
              href="/projects"
              aria-current={isProjectsPage ? "page" : undefined}
              className={cn(
                "rounded-full px-2.5 py-2 text-neutral-400 transition-all hover:bg-white/[0.06] hover:text-white sm:px-3",
                isProjectsPage && "bg-white/10 text-white shadow-sm",
              )}
            >
              Projects
            </Link>
            <Link
              href="/about"
              aria-current={isAboutPage ? "page" : undefined}
              className={cn(
                "rounded-full px-2.5 py-2 text-neutral-400 transition-all hover:bg-white/[0.06] hover:text-white sm:px-3",
                isAboutPage && "bg-white/10 text-white shadow-sm",
              )}
            >
              About
            </Link>
          </div>

          <div
            className="flex items-center rounded-full border border-white/[0.09] bg-black/30 p-0.5 font-mono text-[10px] uppercase tracking-wide sm:text-[11px]"
            aria-label="Choose portfolio mode"
          >
            <Link
              href="/"
              aria-label="Switch to human mode"
              aria-current={!isAgentMode ? "page" : undefined}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-2 py-2 text-neutral-400 transition-all hover:text-white sm:px-2.5",
                !isAgentMode && "bg-white text-neutral-950 shadow-sm hover:text-neutral-950",
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full border border-current", !isAgentMode && "bg-current")} />
              <span>Human</span>
            </Link>
            <Link
              href="/agent"
              aria-label="Switch to agent mode"
              aria-current={isAgentMode ? "page" : undefined}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-2 py-2 text-neutral-400 transition-all hover:text-white sm:px-2.5",
                isAgentMode && "bg-lime-300 text-neutral-950 shadow-sm hover:text-neutral-950",
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full border border-current", isAgentMode && "bg-current")} />
              <span>Agent</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
