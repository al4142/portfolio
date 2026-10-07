import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
        <div className="min-w-0">
          {site.hero.eyebrow ? (
            <p className="mono mb-5 text-xs text-accent">{site.hero.eyebrow}</p>
          ) : null}
          <p className="mono text-xs text-muted">{site.name}</p>
          <h1
            id="hero-heading"
            className="display mt-2 max-w-full text-[clamp(1.75rem,1.15rem+1.5vw,2.5rem)] leading-[1.12] font-semibold"
          >
            {site.hero.headline.split(" | ").map((part, index, parts) => (
              <span
                key={part}
                className={
                  index === parts.length - 1
                    ? "block whitespace-nowrap"
                    : "block whitespace-nowrap lg:inline"
                }
              >
                {part}
                {index < parts.length - 1 ? (
                  <span className={index === 0 ? "max-lg:sr-only" : "sr-only"}>
                    {" | "}
                  </span>
                ) : null}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {site.hero.subline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {site.hero.ctaPrimary.label ? (
              <a
                href={site.hero.ctaPrimary.href}
                className="inline-flex h-11 items-center rounded-md bg-ink px-5 font-mono text-sm text-bg no-underline transition-colors hover:bg-accent"
                {...(site.hero.ctaPrimary.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                {site.hero.ctaPrimary.label}
                {site.hero.ctaPrimary.href.startsWith("http") ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            ) : null}
            <a
              href={site.hero.ctaSecondary.href}
              className="inline-flex h-11 items-center rounded-md border border-line bg-elevated px-5 font-mono text-sm text-ink no-underline transition-colors hover:border-accent hover:text-accent"
            >
              {site.hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <aside className="mono space-y-4 border-t border-line pt-6 text-xs lg:border-t-0 lg:pt-0">
          <p className="text-accent">{"// status"}</p>
          <p className="leading-relaxed text-muted">{site.availability}</p>
          <dl className="space-y-3">
            <div>
              <dt className="text-muted">role</dt>
              <dd className="mt-1 text-ink">{site.role}</dd>
            </div>
            <div>
              <dt className="text-muted">based</dt>
              <dd className="mt-1 text-ink">{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted">stack</dt>
              <dd className="mt-1 text-ink">{site.skills.featured.join(" · ")}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
