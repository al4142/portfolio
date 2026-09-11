import { site } from "@/content/site";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs tracking-[0.22em] text-muted uppercase">
            05
          </p>
          <h2
            id="education-heading"
            className="display mt-3 text-3xl tracking-tight sm:text-4xl"
          >
            {site.education.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.education.intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {site.education.items.map((item) => (
            <li
              key={item.school}
              className="rounded-2xl border border-line bg-elevated p-6"
            >
              <p className="mono text-xs tracking-[0.12em] text-muted">
                {item.dates}
              </p>
              <h3 className="display mt-3 text-2xl tracking-tight">
                {item.school}
              </h3>
              <p className="mt-1 text-sm font-medium text-forest">
                {item.credential}
              </p>
              {item.detail ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              ) : null}
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-block text-sm font-medium text-accent no-underline underline-offset-4 hover:underline"
                >
                  Program reference
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
