import { site } from "@/content/site";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
        <h2
          id="work-heading"
          className="font-display text-[28px] leading-8 font-extrabold tracking-[-0.02em] text-ink"
        >
          {site.work.title}
        </h2>
        <p className="mt-2 text-[16px] leading-6 text-body">{site.work.intro}</p>

        <div className="mt-5 grid gap-3">
          {site.work.items.map((item) => (
            <details key={item.id} className="card group">
              <summary className="cursor-pointer px-5 py-4">
                <span className="flex items-start justify-between gap-4">
                  <span className="min-w-0">
                    <span className="font-display block text-[16px] leading-6 font-bold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[14px] leading-5 text-body">
                      {item.client}
                    </span>
                    <span className="mt-1 block text-[14px] leading-5 font-semibold text-accent">
                      {item.result}
                    </span>
                  </span>
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-soft text-[18px] leading-none font-medium text-accent transition-transform group-open:rotate-45">
                    <span aria-hidden="true">+</span>
                    <span className="sr-only group-open:hidden">Show details</span>
                    <span className="sr-only hidden group-open:inline">Hide details</span>
                  </span>
                </span>
              </summary>
              <ul className="space-y-2 border-t border-line px-5 py-4 text-[14px] leading-5 text-body">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#4f46e5,#7c3aed_55%,#06b6d4)]"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
