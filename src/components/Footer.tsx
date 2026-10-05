import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-[15px] font-bold text-ink">{site.name}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-body">
          <a
            href={`mailto:${site.email}`}
            className="text-body no-underline underline-offset-4 hover:text-accent hover:underline"
          >
            {site.email}
          </a>
          <p>© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
