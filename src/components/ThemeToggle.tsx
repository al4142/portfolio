"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-elevated text-ink transition-colors hover:border-accent hover:text-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 3v1.4M12 19.6V21M4.2 4.2l1 1M18.8 18.8l1 1M3 12h1.4M19.6 12H21M4.2 19.8l1-1M18.8 5.2l1-1"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 13.2A6.2 6.2 0 0 1 10.8 5 6.6 6.6 0 1 0 16.5 13.2Z"
          />
        </svg>
      )}
    </button>
  );
}
