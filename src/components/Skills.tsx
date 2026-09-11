import { site } from "@/content/site";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs text-accent">04 / skills.ts</p>
          <h2
            id="skills-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.skills.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {site.skills.intro}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {site.skills.featured.map((item) => (
            <li
              key={item}
              className="mono rounded-md border-2 border-accent bg-accent-soft px-4 py-2 text-base font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {site.skills.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mono text-xs text-muted">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="mono rounded-md border border-line bg-elevated px-2.5 py-1 text-[11px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
