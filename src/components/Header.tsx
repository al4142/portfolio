"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="mono group flex items-center gap-2 text-sm text-ink no-underline"
        >
          <span aria-hidden="true" className="text-accent">
            {"{}"}
          </span>
          <span>{site.name.toLowerCase().replace(" ", ".")}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono text-xs tracking-wide text-muted no-underline transition-colors hover:text-ink"
            >
              {item.label.toLowerCase()}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-elevated"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-3">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono border-b border-line py-3 text-sm text-ink no-underline last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {item.label.toLowerCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
