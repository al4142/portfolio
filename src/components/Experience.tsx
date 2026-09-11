import { site } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs tracking-[0.22em] text-muted uppercase">
            03
          </p>
          <h2
            id="experience-heading"
            className="display mt-3 text-3xl tracking-tight sm:text-4xl"
          >
            {site.experience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.experience.intro}
          </p>
        </div>

        <ol className="mt-12 divide-y divide-line border-y border-line">
          {site.experience.items.map((item) => (
            <li key={`${item.company}-${item.dates}`} className="py-8">
              <article className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
                <div>
                  <h3 className="display text-2xl tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-forest">
                    {item.company}
                  </p>
                  <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mono text-xs tracking-[0.08em] text-muted lg:text-right">
                  {item.dates}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
