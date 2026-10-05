import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="hero-wash">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="font-mono text-[12px] font-semibold tracking-[0.06em] text-accent uppercase">
          {site.hero.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="font-display mt-3 max-w-3xl text-[44px] leading-[48px] font-extrabold tracking-[-0.028em] text-ink sm:text-[64px] sm:leading-[68px]"
        >
          {site.hero.headline}
        </h1>
        <p className="mt-5 max-w-xl text-[17px] leading-7 text-body">
          {site.hero.message}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={site.hero.ctaPrimary.href}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer noopener"
          >
            {site.hero.ctaPrimary.label}
            <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={site.hero.ctaSecondary.href} className="btn btn-secondary">
            {site.hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
