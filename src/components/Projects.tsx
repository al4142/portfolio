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

        <ol className="mt-12 space-y-8">
          {site.projects.items.map((project, index) => (
            <li key={project.id}>
              <article
                className={
                  project.featured
                    ? "rounded-3xl border border-line bg-elevated p-6 sm:p-10"
                    : "border-y border-line py-10"
                }
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
                  <div>
                    {project.featured ? (
                      <p className="mono mb-3 text-xs tracking-[0.2em] text-accent uppercase">
                        Featured
                      </p>
                    ) : (
                      <p className="mono text-sm text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    )}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="display text-3xl tracking-tight sm:text-4xl">
                        {project.title}
                      </h3>
                      {project.year ? (
                        <span className="mono text-xs text-muted">
                          {project.year}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm font-medium text-forest">
                      {project.summary}
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 ? (
                      <ul className="mt-6 space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-ink"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
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
                        className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
