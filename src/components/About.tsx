import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <h2
          id="about-heading"
          className="font-display text-[28px] leading-8 font-extrabold tracking-[-0.02em] text-ink"
        >
          {site.about.title}
        </h2>
        <div className="mt-3 max-w-2xl space-y-3 text-[16px] leading-6 text-body">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
