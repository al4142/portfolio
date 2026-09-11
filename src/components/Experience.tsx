import { site } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs text-accent">03 / experience.log</p>
          <h2
            id="experience-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.experience.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {site.experience.intro}
          </p>
        </div>

        <ol className="relative mt-10 border-l border-line pl-6">
          {site.experience.items.map((item) => (
            <li key={`${item.company}-${item.dates}`} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border border-accent bg-bg"
              />
              <article className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
                <div>
                  <h3 className="text-base font-medium tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mono mt-1 text-xs text-forest">{item.company}</p>
                  <ul className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <p className="mono text-[11px] text-muted">{item.dates}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
