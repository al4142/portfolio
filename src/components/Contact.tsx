import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div>
          <p className="mono text-xs text-accent">06 / contact.sh</p>
          <h2
            id="contact-heading"
            className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {site.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {site.contact.intro}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mono mt-6 inline-block text-sm text-accent no-underline underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <ul className="mt-6 space-y-2">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mono text-xs text-ink no-underline underline-offset-4 hover:text-accent hover:underline"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
