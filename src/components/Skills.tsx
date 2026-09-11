import { site } from "@/content/site";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs tracking-[0.22em] text-muted uppercase">
            03
          </p>
          <h2
            id="skills-heading"
            className="display mt-3 text-3xl tracking-tight sm:text-4xl"
          >
            {site.skills.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.skills.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.skills.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-line bg-elevated p-6"
            >
              <h3 className="display text-xl tracking-tight">{group.title}</h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
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
