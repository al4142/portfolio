export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  tags: string[];
  links?: ProjectLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SiteContent = {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  siteUrl: string;
  nav: NavItem[];
  social: SocialLink[];
  hero: {
    eyebrow: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  about: {
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    title: string;
    intro: string;
    items: Project[];
  };
  skills: {
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    intro: string;
    formNote: string;
    successTitle: string;
    successBody: string;
  };
  footer: {
    note: string;
  };
};

export const site: SiteContent = {
  name: "Alex Lopez",
  shortName: "AL",
  role: "Product engineer",
  tagline:
    "I design and build calm, useful software — interfaces people actually want to return to.",
  location: "Portland, OR",
  availability: "Open to selected freelance and full-time roles",
  email: "hello@alexlopez.dev",
  siteUrl: "https://alexlopez.dev",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/alexlopez" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alexlopez" },
    { label: "Bluesky", href: "https://bsky.app/profile/alexlopez.dev" },
    { label: "Email", href: "mailto:hello@alexlopez.dev" },
  ],
  hero: {
    eyebrow: "Portfolio / 2026",
    ctaPrimary: { label: "View work", href: "#work" },
    ctaSecondary: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "A bit about me",
    paragraphs: [
      "I’m a product engineer who likes the quiet parts of software: clear type, honest empty states, and systems that stay understandable after the first year.",
      "Most recently I’ve been pairing design and implementation on tools for small teams — research workflows, editorial products, and the occasional map. I care as much about the handoff as the first commit.",
      "When I’m not shipping, I’m usually walking the river trail, printing letterpress cards, or taking apart a recipe until it behaves.",
    ],
    facts: [
      { label: "Based", value: "Portland, OR" },
      { label: "Focus", value: "Web apps, design systems" },
      { label: "Working", value: "Remote-first" },
    ],
  },
  projects: {
    title: "Selected work",
    intro:
      "A short set of sample pieces. Swap these with your own titles, write-ups, and links in the site config.",
    items: [
      {
        id: "lumen-ledger",
        title: "Lumen Ledger",
        summary: "Household finances without the spreadsheet dread.",
        description:
          "A shared ledger for couples and roommates. Recurring bills, gentle forecasts, and a weekly digest that stays out of the way until something actually needs attention.",
        year: "2025",
        tags: ["Next.js", "TypeScript", "Postgres", "tRPC"],
        links: [
          { label: "Live", href: "https://example.com/lumen" },
          { label: "Source", href: "https://github.com/alexlopez/lumen-ledger" },
        ],
      },
      {
        id: "northwind-atlas",
        title: "Northwind Atlas",
        summary: "Field notes, mapped.",
        description:
          "A personal atlas for trips and neighborhood walks. Offline-first notes, hand-drawn layers, and a reading list that attaches to places instead of folders.",
        year: "2025",
        tags: ["React", "MapLibre", "SQLite", "PWA"],
        links: [{ label: "Case study", href: "https://example.com/atlas" }],
      },
      {
        id: "hearth-kitchen",
        title: "Hearth Kitchen",
        summary: "Recipes that remember how you cook.",
        description:
          "A small publishing tool for cooks who iterate. Versioned recipes, pantry-aware shopping lists, and a print stylesheet that looks like a well-used notebook.",
        year: "2024",
        tags: ["Next.js", "MDX", "Tailwind", "Playwright"],
        links: [
          { label: "Live", href: "https://example.com/hearth" },
          { label: "Source", href: "https://github.com/alexlopez/hearth-kitchen" },
        ],
      },
      {
        id: "signal-board",
        title: "Signal Board",
        summary: "Ops dashboards that read like a briefing.",
        description:
          "A status surface for on-call teams. Plain-language incidents, quiet hours, and charts that default to “what changed” instead of a wall of gauges.",
        year: "2024",
        tags: ["TypeScript", "Node", "Grafana", "Go"],
        links: [{ label: "Write-up", href: "https://example.com/signal" }],
      },
    ],
  },
  skills: {
    title: "Stack & craft",
    intro:
      "Tools I reach for most often. The list is a starting point — edit the groups to match how you actually work.",
    groups: [
      {
        title: "Interface",
        items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"],
      },
      {
        title: "Systems",
        items: ["Node.js", "PostgreSQL", "tRPC", "Prisma", "Redis"],
      },
      {
        title: "Practice",
        items: ["Design systems", "Technical writing", "Playwright", "CI/CD", "Figma"],
      },
    ],
  },
  contact: {
    title: "Let’s talk",
    intro:
      "New roles, collaborations, or a question about a project — drop a note. This form stays in the browser; it does not send to a server.",
    formNote:
      "Messages are not delivered anywhere. Use the email link if you want this to leave your machine.",
    successTitle: "Saved locally — nothing was sent.",
    successBody:
      "This is a client-side demo. Copy your note, or open the email link in the sidebar to send it for real.",
  },
  footer: {
    note: "Built with Next.js, TypeScript, and Tailwind CSS. Edit src/content/site.ts to make it yours.",
  },
};
