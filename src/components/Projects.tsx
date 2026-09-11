import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs tracking-[0.22em] text-muted uppercase">
            02
          </p>
          <h2
            id="work-heading"
            className="display mt-3 text-3xl tracking-tight sm:text-4xl"
          >
            {site.projects.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.projects.intro}
          </p>
        </div>

        <ol className="mt-12 divide-y divide-line border-y border-line">
          {site.projects.items.map((project, index) => (
            <li key={project.id} className="group py-10 first:pt-8 last:pb-8">
              <article className="grid gap-6 lg:grid-cols-[5rem_minmax(0,1fr)_18rem] lg:items-start">
                <p className="mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="display text-2xl tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="mono text-xs text-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-forest">
                    {project.summary}
                  </p>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.links && project.links.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-sm font-medium text-accent no-underline underline-offset-4 hover:underline"
                        >
                          {link.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-elevated px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
