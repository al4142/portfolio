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
  role: "Trade operations & finance",
  tagline:
    "Fifteen-plus years across hedge funds, credit, and asset management — pairing full trade-lifecycle experience with automation, growing Python, and full-stack training.",
  location: "Miami Beach, FL",
  availability: "Technology-forward operations: settlement, controls, and workflow automation.",
  email: "alex@4142mb.com",
  siteUrl: "https://4142mb.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  social: [{ label: "Email", href: "mailto:alex@4142mb.com" }],
  hero: {
    eyebrow: "Miami Beach · Operations & systems",
    ctaPrimary: { label: "View work", href: "#work" },
    ctaSecondary: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "A bit about me",
    paragraphs: [
      "I work the full trade lifecycle — equities, fixed income, derivatives, and FX, including APAC — from execution support through settlement and reconciliation. Bloomberg and expert Excel are daily tools; I also build automation workflows and am growing a Python practice around the same operational problems.",
      "That systems habit shows up off the desk, too. I helped design and stand up a Fronius robotic welding cell — jig, robot, electrical, and production rollout — and completed full-stack web training at 4Geeks Academy (HTML, CSS, and Java).",
      "I care about processes that stay understandable after the first year: clear controls, fewer manual breaks, and tools the team will actually use.",
    ],
    facts: [
      { label: "Based", value: "Miami Beach, FL" },
      { label: "Focus", value: "Trade ops, automation" },
      { label: "Background", value: "Hedge funds, credit, AM" },
    ],
  },
  projects: {
    title: "Featured project",
    intro:
      "A standout technical delivery outside the office: industrial automation from fixture design through production rollout.",
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
    intro:
      "Operations, accounting, and trading-support roles across funds and asset managers. Dates and titles are as on the resume.",
    items: [
      {
        company: "Eastern Harbour Group",
        role: "Senior Project Manager, Accounting & Operations",
        dates: "Jan 2023 – Present",
        bullets: [
          "Leads accounting and operations projects across the trade lifecycle",
          "Tightens workflows with process design and automation where it pays off",
        ],
      },
      {
        company: "Newland Capital Group",
        role: "Senior Accounting Analyst",
        dates: "Feb 2022 – Jan 2023",
        bullets: [
          "Accounting analysis in support of investment operations",
          "Settlement, reconciliation, and reporting",
        ],
      },
      {
        company: "Inflo Capital Partners",
        role: "Director, Finance and Trading Operations",
        dates: "Apr 2020 – Jan 2022",
        bullets: [
          "Directed finance and trading operations",
          "Day-to-day trade support, settlement, and operational controls",
        ],
      },
      {
        company: "TCA Global Credit Master Fund",
        role: "VP Special Assets / CRO",
        dates: "Nov 2017 – Feb 2020",
        bullets: [
          "Vice president for special assets and chief risk officer",
          "Credit-fund operations and risk processes",
        ],
      },
      {
        company: "CRL Management / Napeague Capital",
        role: "Senior Analyst, Trading and Operations",
        dates: "Aug 2005 – Nov 2017",
        bullets: [
          "Trading and operations analyst across a long tenure",
          "Full trade-lifecycle support and desk-adjacent systems work",
        ],
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
      "Markets and operations first; automation and web training alongside. Edit the groups in the site config.",
    groups: [
      {
        title: "Operations",
        items: [
          "Trade ops & settlement",
          "Bloomberg",
          "CapitalIQ",
          "Excel (expert)",
          "QuickBooks",
          "Leadership",
        ],
      },
      {
        title: "Automation",
        items: [
          "Process automation",
          "Python (growing)",
          "AI/automation workflows (n8n, APIs)",
        ],
      },
      {
        title: "Web",
        items: ["HTML", "CSS", "Java"],
      },
    ],
  },
  contact: {
    title: "Let’s talk",
    intro:
      "Roles, operations problems, or a question about a project — write to alex@4142mb.com. The form below stays in the browser and does not send to a server.",
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
