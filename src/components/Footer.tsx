import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mono text-sm text-ink">
            <span className="text-accent">{"{}"}</span>{" "}
            {site.name.toLowerCase().replace(" ", ".")}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {site.footer.note}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mono text-xs text-muted no-underline underline-offset-4 hover:text-ink hover:underline"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          <p className="mono text-[11px] text-muted">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
