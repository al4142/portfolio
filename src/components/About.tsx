import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <div>
          <p className="mono text-xs text-accent">01 / about.md</p>
          <h2
            id="about-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.about.title}
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {site.about.facts.map((fact) => (
              <div key={fact.label} className="border border-line bg-elevated p-3">
                <dt className="mono text-[11px] text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
