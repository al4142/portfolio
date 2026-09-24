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
  year?: string;
  featured?: boolean;
  tags: string[];
  highlights?: string[];
  links?: ProjectLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  credential: string;
  dates: string;
  detail?: string;
  href?: string;
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
  /** City-level only (e.g. Miami Beach, FL). Never a street address. */
  location: string;
  availability: string;
  /** Public contact channel. Do not add a phone number to this site. */
  email: string;
  siteUrl: string;
  nav: NavItem[];
  social: SocialLink[];
  hero: {
    eyebrow: string;
    headline: string;
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
  experience: {
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    intro: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    intro: string;
    featured: string[];
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

/**
 * Public site copy. Contact is email only (`alex@4142mb.com`).
 * Keep location at city level. Do not add a phone number or street address.
 */
export const site: SiteContent = {
  name: "Alex Lopez",
  shortName: "AL",
  role: "Python · AI · data",
  tagline:
    "AI-driven automation (n8n, APIs, agents, multi-model workflows), financial analysis and modeling, and data tools (Python, SQL, Power BI, pandas) — on 15+ years of trade ops.",
  location: "Miami Beach, FL",
  availability:
    "Ops focus: frictionless process improvement — map bottlenecks, integrate systems, tighten controls.",
  email: "alex@4142mb.com",
  siteUrl: "https://4142mb.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  social: [{ label: "Email", href: "mailto:alex@4142mb.com" }],
  hero: {
    eyebrow: "alex.lopez // miami-beach",
    headline: "Building with Python, AI, and data.",
    ctaPrimary: { label: "View projects", href: "#work" },
    ctaSecondary: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "About",
    paragraphs: [
      "I build AI-driven automation and a growing Python / data practice — n8n, APIs, agents, multi-model workflows, SQL, Power BI, and pandas. Trade operations is the domain behind that stack: 15+ years across hedge funds, credit, and asset management, full lifecycle (equities, fixed income, derivatives, FX), settlement, reconciliation, Bloomberg.",
      "Same systems habit off the desk: a Fronius robotic welding cell (jig, robot, electrical, production rollout) and full-stack training at 4Geeks Academy (HTML, CSS, and Java — 2023, web fundamentals).",
      "I care about processes that stay understandable after the first year: clear controls, fewer manual breaks, and tools the team will actually use. Based in Miami Beach, I surf, compete in triathlons, and play tennis.",
    ],
    facts: [
      { label: "Based", value: "Miami Beach, FL" },
      { label: "Focus", value: "Python, AI, data" },
      { label: "Background", value: "Hedge funds, credit, AM" },
    ],
  },
  projects: {
    title: "Projects",
    intro:
      "Two case studies: a robotic welder that scaled fence-panel throughput, and an operations platform for jobs, inventory, BOM, and P&L.",
    items: [
      {
        id: "fronius-welder",
        title: "Fronius robotic welder",
        summary:
          "Robotic welder for aluminum and steel fence panels — from ~15 to ~120 panels per day (~8× throughput).",
        description:
          "Designed, implemented, and commissioned a robotic welder for aluminum and steel fence panels for an industry-leading metal fabrication company. The cell removed production bottlenecks and improved throughput and scalability — from ~15 to ~120 panels per day (~8× throughput) — so idle material converted to revenue faster and the company strengthened its local leadership and market position.",
        featured: true,
        tags: [
          "Industrial automation",
          "Jig design",
          "Robotics",
          "Electrical",
          "Production rollout",
        ],
        highlights: [
          "Designed, implemented, and commissioned a robotic welder for aluminum and steel fence panels",
          "Built for an industry-leading metal fabrication company",
          "Removed production bottlenecks and improved scalability so idle material converted to revenue faster",
          "Throughput from ~15 to ~120 panels per day (~8× throughput)",
          "Strengthened the company's local leadership and market position",
        ],
      },
      {
        id: "temp-fence-ops",
        title: "Temp Fence Ops",
        summary:
          "Operations platform for a national temporary-fence contractor — jobs, inventory, BOM, and P&L in one system.",
        description:
          "Designed and built an operations management platform for a national construction company specializing in temporary fence. Replaces spreadsheet/tribal-knowledge workflows with one system for yards, crews, and job economics — from quote-ready material lists through install, relocate, pickup, and closeout. Operators create/track jobs (install, relocate, site walk, cancelled), generate accurate multi-section bills of materials (panels, posts, gates including slide configs, chain-link, consumables), manage yard catalogs and inventory, capture labor and contacts, and see job-level P&L without double-counting materials. Built for multi-yard scale with shared catalog patterns, additive job types, and production-safe deploys.",
        featured: true,
        tags: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Operations",
          "BOM",
          "Inventory",
        ],
        highlights: [
          "Job lifecycle including cancel with history",
          "Rule-driven multi-section BOM",
          "Multi-yard inventory and catalog seeding",
          "Relocate and Site Walk job types",
          "Operator P&L and contacts",
          "Stack: Next.js, TypeScript, Prisma, Neon, and Vercel",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    intro: "Domain context. Titles and dates as on the resume.",
    items: [
      {
        company: "Eastern Harbour Group",
        role: "Senior Project Manager, Accounting & Operations",
        dates: "Jan 2023 – Present",
        bullets: [
          "Accounting/ops projects across the trade lifecycle; process and automation design",
        ],
      },
      {
        company: "Newland Capital Group",
        role: "Senior Accounting Analyst",
        dates: "Feb 2022 – Jan 2023",
        bullets: ["Investment-ops accounting: settlement, reconciliation, reporting"],
      },
      {
        company: "Inflo Capital Partners",
        role: "Director, Finance and Trading Operations",
        dates: "Apr 2020 – Jan 2022",
        bullets: ["Finance and trading ops: trade support, settlement, controls"],
      },
      {
        company: "TCA Global Credit Master Fund",
        role: "VP Special Assets / CRO",
        dates: "Nov 2017 – Feb 2020",
        bullets: ["Special assets and CRO — credit-fund ops and risk processes"],
      },
      {
        company: "CRL Management / Napeague Capital",
        role: "Senior Analyst, Trading and Operations",
        dates: "Aug 2005 – Nov 2017",
        bullets: ["Trading and operations analyst; full lifecycle and desk-adjacent systems"],
      },
    ],
  },
  education: {
    title: "Education & training",
    intro: "Finance degree, then a full-stack program focused on web fundamentals.",
    items: [
      {
        school: "Florida International University",
        credential: "BBA, Finance",
        dates: "Aug 2001 – May 2006",
      },
      {
        school: "4Geeks Academy",
        credential: "Full-Stack Bootcamp",
        dates: "2023",
        detail:
          "HTML, CSS, and Java. This cohort was before the program’s later AI course — web fundamentals only.",
        href: "https://fl.4geeksacademy.com/en/programs/full-stack",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "First-class: AI / Automation, Python, SQL, Power BI, and pandas. Then the desk tools and 4Geeks web training (HTML, CSS, Java).",
    featured: [
      "AI / Automation",
      "Python",
      "SQL",
      "Power BI",
      "pandas",
    ],
    groups: [
      {
        title: "AI / Automation",
        items: [
          "AI-driven automation & agents",
          "n8n, APIs, multi-model workflows",
          "Process automation",
          "Python (growing)",
        ],
      },
      {
        title: "Data",
        items: ["SQL", "Power BI", "pandas", "Excel (expert)"],
      },
      {
        title: "Markets & web",
        items: [
          "Trade ops & settlement",
          "Bloomberg",
          "CapitalIQ",
          "QuickBooks",
          "Leadership",
          "HTML, CSS, Java",
        ],
      },
    ],
  },
  contact: {
    title: "Let’s talk",
    intro:
      "Roles, operations problems, or a question about a project — email alex@4142mb.com. The form below stays in the browser and does not send to a server.",
    formNote:
      "Messages are not delivered anywhere. Use the email link if you want this to leave your machine.",
    successTitle: "Saved locally — nothing was sent.",
    successBody:
      "This form does not post anywhere. Copy your note, or open the email link to send it for real.",
  },
  footer: {
    note: "Edit src/content/site.ts to update copy, roles, and links. Built with Next.js, TypeScript, and Tailwind CSS.",
  },
};
