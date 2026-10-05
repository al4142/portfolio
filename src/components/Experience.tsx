import { site } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <h2
          id="experience-heading"
          className="font-display text-[28px] leading-8 font-extrabold tracking-[-0.02em] text-ink"
        >
          {site.experience.title}
        </h2>

        <ol className="card mt-5 divide-y divide-line">
          {site.experience.items.map((item) => (
            <li
              key={`${item.role}-${item.dates}`}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
            >
              <div>
                <h3 className="font-display text-[16px] leading-6 font-bold text-ink">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-[14px] leading-5 text-body">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-accent no-underline underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {item.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
                {item.summary ? (
                  <p className="mt-1.5 max-w-2xl text-[14px] leading-5 text-body">
                    {item.summary}
                  </p>
                ) : null}
              </div>
              <p className="font-mono text-[12px] font-medium text-body sm:pt-1">
                {item.dates}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
