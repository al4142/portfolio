import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-xl tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {site.footer.note}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted no-underline underline-offset-4 hover:text-ink hover:underline"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mono text-xs text-muted">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
