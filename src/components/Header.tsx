"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";

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
    <header className="sticky top-0 z-40 border-b border-line bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[15px] font-extrabold tracking-tight text-ink no-underline"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-body no-underline transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.stannosUrl}
            className="btn btn-primary h-10 px-4 text-sm"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stannos
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-0.5 w-4 rounded-full bg-ink transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 rounded-full bg-ink transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-white md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-line py-3 text-[15px] font-medium text-ink no-underline last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.stannosUrl}
            className="btn btn-primary mt-3 mb-3"
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
          >
            Stannos
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
