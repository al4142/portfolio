import { site } from "@/content/site";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
        <h2
          id="education-heading"
          className="font-display text-[28px] leading-8 font-extrabold tracking-[-0.02em] text-ink"
        >
          {site.education.title}
        </h2>
        <ul className="card mt-5 divide-y divide-line">
          {site.education.items.map((item) => (
            <li
              key={item.school}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <h3 className="font-display text-[16px] leading-6 font-bold text-ink">
                  {item.school}
                </h3>
                <p className="mt-0.5 text-[14px] leading-5 text-body">
                  {item.credential}
                </p>
              </div>
              <p className="font-mono text-[12px] font-medium text-body">
                {item.dates}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
