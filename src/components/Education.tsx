import { site } from "@/content/site";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mono text-xs text-accent">05 / education.json</p>
          <h2
            id="education-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.education.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {site.education.intro}
          </p>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {site.education.items.map((item) => (
            <li key={item.school} className="border border-line bg-elevated p-5">
              <p className="mono text-[11px] text-muted">{item.dates}</p>
              <h3 className="mt-2 text-lg font-medium tracking-tight">
                {item.school}
              </h3>
              <p className="mt-1 text-sm text-forest">{item.credential}</p>
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
                  className="mono mt-4 inline-block text-xs text-accent no-underline underline-offset-4 hover:underline"
                >
                  program reference
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
