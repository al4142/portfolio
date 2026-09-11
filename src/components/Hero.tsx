import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 rounded-full border border-line/80 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-24 hidden h-40 w-40 rounded-full bg-accent-soft md:block"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-end">
        <div>
          <p className="mono mb-6 text-xs tracking-[0.22em] text-muted uppercase">
            {site.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="display text-[clamp(3.2rem,10vw,6.75rem)] leading-[0.9] font-medium tracking-[-0.03em] text-balance"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.hero.ctaPrimary.href}
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-bg no-underline transition-colors hover:bg-accent-hover"
            >
              {site.hero.ctaPrimary.label}
            </a>
            <a
              href={site.hero.ctaSecondary.href}
              className="inline-flex h-12 items-center rounded-full border border-line bg-elevated px-6 text-sm font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
            >
              {site.hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <aside className="flex flex-col gap-6 border-t border-line pt-6 lg:border-t-0 lg:pt-0">
          <p className="mono text-xs tracking-[0.18em] text-muted uppercase">
            Now
          </p>
          <p className="text-sm leading-relaxed text-ink">{site.availability}</p>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
                Role
              </dt>
              <dd className="mt-1">{site.role}</dd>
            </div>
            <div>
              <dt className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
                Based
              </dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
