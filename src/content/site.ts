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
    "Technology-forward stack: AI-driven automation (n8n, APIs, agents, multi-model workflows), growing Python for financial data, plus SQL, Power BI, and pandas — on 15+ years of trade-ops experience.",
  location: "Miami Beach, FL",
  availability:
    "AI + data mindset: agents, process automation, and financial datasets — not a side hobby on a finance resume.",
  email: "alex@4142mb.com",
  siteUrl: "https://4142mb.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
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
      "I’m a trade operations and finance professional with 15+ years across hedge funds, credit, and asset management. I work the full trade lifecycle — equities, fixed income, derivatives, and FX, including APAC — from execution support through settlement and reconciliation. Bloomberg and expert Excel are daily tools. Alongside that, I build AI-driven automation: n8n and API workflows, agents, and multi-model process automation, with growing Python for financial data and the same operational problems.",
      "The data side of that stack is first-class for me — SQL, Power BI, and pandas — not an afterthought on a finance resume. Off the desk, the same systems habit showed up on a Fronius robotic welding cell (jig, robot, electrical, production rollout) and in full-stack training at 4Geeks Academy (HTML, CSS, and Java).",
      "I care about processes that stay understandable after the first year: clear controls, fewer manual breaks, and tools the team will actually use. In Miami Beach I surf, race triathlons, and play tennis — useful pressure valves next to a desk that runs on exceptions.",
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
      "Case-study style write-up of a real build. Industrial automation from fixture design through production rollout.",
    items: [
      {
        id: "fronius-welder",
        title: "Fronius robotic welder",
        summary: "Industrial automation — jig, robot, electrical, rollout.",
        description:
          "I helped put together a Fronius robotic welding system and stayed in the work from overall design through implementation. The cell had to hold a part, weld it consistently, and survive a real shop floor — not a slide deck.",
        featured: true,
        tags: [
          "Industrial automation",
          "Jig design",
          "Robotics",
          "Electrical",
          "Production rollout",
        ],
        highlights: [
          "Mechanical fixture and jig design so parts locate repeatably for the weld path",
          "Robotic cell layout and implementation around a Fronius welding system",
          "Electrical integration so power, sensors, and controls behaved as one unit",
          "Production rollout — from build to a cell the floor could actually run",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    intro: "Domain context — funds and asset managers. Titles and dates as on the resume.",
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
