import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs text-accent">02 / projects/</p>
          <h2
            id="work-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.projects.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {site.projects.intro}
          </p>
        </div>

        <ol className="mt-10 space-y-6">
          {site.projects.items.map((project) => (
            <li key={project.id}>
              <article className="overflow-hidden rounded-lg border border-line bg-elevated">
                <div className="flex items-center gap-2 border-b border-line px-4 py-2">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <p className="mono ml-2 text-[11px] text-muted">
                    {project.featured ? "featured" : "project"} · {project.id}.md
                  </p>
                </div>
                <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                  <div>
                    <h3 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-forest">{project.summary}</p>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 ? (
                      <ul className="mt-5 space-y-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-ink"
                          >
                            <span aria-hidden="true" className="mono text-accent">
                              ▸
                            </span>
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
                            className="mono text-sm text-accent no-underline underline-offset-4 hover:underline"
                          >
                            {link.label}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="mono rounded-md border border-line bg-bg px-2.5 py-1 text-[11px] text-muted"
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
