import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
        <div>
          <p className="mono mb-5 text-xs text-accent">
            {site.hero.eyebrow}
          </p>
          <p className="mono text-xs text-muted">{site.name}</p>
          <h1
            id="hero-heading"
            className="display mt-2 max-w-3xl text-[clamp(2.4rem,7vw,4.6rem)] leading-[1.05] font-semibold text-balance"
          >
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.hero.ctaPrimary.href}
              className="inline-flex h-11 items-center rounded-md bg-ink px-5 font-mono text-sm text-bg no-underline transition-colors hover:bg-accent"
            >
              {site.hero.ctaPrimary.label}
            </a>
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
