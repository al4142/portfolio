import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <div>
          <p className="mono text-xs tracking-[0.22em] text-muted uppercase">
            01
          </p>
          <h2
            id="about-heading"
            className="display mt-3 text-3xl tracking-tight sm:text-4xl"
          >
            {site.about.title}
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {site.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-line pt-3"
              >
                <dt className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
