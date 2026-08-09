"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const isAgentMode = pathname === "/agent";

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="pointer-events-none fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex w-full justify-center px-3"
    >
      <div
        className={cn(
          "pointer-events-auto relative flex max-w-[calc(100vw-1.5rem)] items-center gap-1.5 overflow-hidden rounded-full border p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-2xl dark:shadow-[0_18px_60px_rgba(0,0,0,0.5)]",
          "before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-foreground/20 before:to-transparent dark:before:via-white/30",
          "border-border bg-background/90 text-foreground dark:border-stone-800 dark:bg-stone-950/90 dark:text-stone-100",
          isAgentMode && "font-mono",
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex h-10 min-w-0 items-center rounded-full px-3 transition-colors hover:bg-accent dark:hover:bg-stone-900",
            pathname === "/" && "bg-accent dark:bg-stone-900",
          )}
          aria-label="Nitin Jaswal, home"
        >
          <span className="truncate text-xs font-medium sm:text-sm">Nitin Jaswal</span>
        </Link>

        <div
          className="flex items-center rounded-full border border-border bg-muted/60 p-0.5 text-[10px] uppercase tracking-wide dark:border-stone-800 dark:bg-stone-900/70 sm:text-[11px]"
          aria-label="Choose portfolio mode"
        >
          <Link
            href="/"
            aria-label="Switch to human mode"
            aria-current={!isAgentMode ? "page" : undefined}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-muted-foreground transition-all hover:text-foreground dark:text-stone-400 dark:hover:text-stone-100",
              !isAgentMode && "bg-foreground text-background shadow-sm hover:text-background dark:bg-stone-100 dark:text-stone-950 dark:hover:text-stone-950",
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
              "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-muted-foreground transition-all hover:text-foreground dark:text-stone-400 dark:hover:text-stone-100",
              isAgentMode && "bg-foreground text-background shadow-sm hover:text-background dark:bg-stone-100 dark:text-stone-950 dark:hover:text-stone-950",
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full border border-current", isAgentMode && "bg-current")} />
            <span>Agent</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
        >
          <Moon className="h-3.5 w-3.5 dark:hidden" aria-hidden="true" />
          <Sun className="hidden h-3.5 w-3.5 dark:block" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
