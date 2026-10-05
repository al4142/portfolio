import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="card px-5 py-6 sm:px-8">
          <h2
            id="contact-heading"
            className="font-display text-[28px] leading-8 font-extrabold tracking-[-0.02em] text-ink"
          >
            {site.contact.title}
          </h2>
          <p className="mt-2 text-[16px] leading-6 text-body">{site.contact.intro}</p>
          <a href={`mailto:${site.email}`} className="btn btn-primary mt-5">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
