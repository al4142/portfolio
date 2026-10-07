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
  href?: string;
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
  /** City-level only. Never a street address. */
  location: string;
  availability: string;
  /** Public contact channel. Do not add a phone number to this site. */
  email: string;
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
 * Public site copy. Contact is email only (alex@4142mb.com).
 * Experience entries live in `experience.items` below.
 * Keep location at city level. Do not add a phone number or street address.
 */
export const site: SiteContent = {
  name: "Alex Lopez",
  shortName: "AL",
  role: "Fund Operations | Trading & Finance | Automation & AI",
  tagline:
    "15+ years running fund operations, now fixing operations from the floor up for funds, operating businesses, and robotics.",
  location: "Miami Beach, Florida",
  availability:
    "Fixing operations from the floor up for funds, operating businesses, and robotics.",
  email: "alex@4142mb.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  social: [{ label: "Email", href: "mailto:alex@4142mb.com" }],
  hero: {
    eyebrow: "",
    headline: "A fund operator turned builder.",
    ctaPrimary: { label: "", href: "" },
    ctaSecondary: {
      label: "alex@4142mb.com",
      href: "mailto:alex@4142mb.com",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "Fund operator turned technology builder with 15+ years of experience across hedge funds, private credit, and real estate. I've led trading, finance, and fund operations while building the systems behind them—from automated trade settlement and daily profit and loss across 400+ accounts to AI-powered workflows and reporting.",
      "I bring a combination of hands-on fund expertise and technical execution, using Python, automation, and private AI to eliminate manual work, strengthen controls, and help investment teams scale without adding unnecessary headcount.",
      "Based in Miami Beach, I surf, compete in triathlons, and play tennis.",
    ],
    facts: [
      { label: "Based", value: "Miami Beach, Florida" },
      { label: "Focus", value: "Fund operations" },
      {
        label: "Now",
        value:
          "Senior Project Manager, Accounting & Operations, Eastern Harbour Group",
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Five case studies.",
    items: [
      {
        id: "fund-trading-operations",
        title: "Fund trading operations platform",
        summary:
          "Automated trade settlement and daily profit and loss across 400+ accounts and multiple brokers.",
        description:
          "A multi-trader fund. Automated trade settlement and daily profit and loss across 400+ accounts and multiple brokers, with prime broker files generated with no manual work. The same daily data supports screening and analysis of deals, plus portfolio exposure and performance views.",
        featured: true,
        tags: ["Fund operations", "Settlement", "Reporting"],
        highlights: [
          "Prime broker files generated with no manual work.",
          "Same-day reconciliation with fewer settlement breaks.",
          "Screening and analysis of deals, plus portfolio exposure and performance views on the same daily data.",
          "41% lower administrative costs.",
        ],
      },
      {
        id: "development-monitor",
        title: "Development monitor and lender draw reporting",
        summary:
          "Project monitor and lender draw reporting for Class-A industrial developments.",
        description:
          "Newland Capital Group. A development monitor for a portfolio of ground-up Class-A industrial developments of $150 million to $400 million each, with lender draw reporting driven from one invoice ledger.",
        featured: true,
        tags: ["Industrial real estate", "Development monitor", "Lender draw reporting"],
        highlights: [
          "Every invoice tagged to a draw and a budget line.",
          "Monthly draw packages and draw history for the lender.",
          "Budget versus funded, and cost to complete, kept current.",
          "Reporting to lenders and joint venture investors.",
        ],
      },
      {
        id: "field-operations",
        title: "Field operations platform",
        summary: "Project-level profit and loss with no double counting.",
        description:
          "A national site services provider. The project lifecycle runs from site walk to close-out, with crew scheduling, live inventory, automated bills of materials, and work-order tracking.",
        featured: true,
        tags: ["Field operations", "Inventory", "Scheduling"],
        highlights: [
          "Project lifecycle from site walk to close-out.",
          "Crew scheduling across projects and yards.",
          "Live inventory tied to each yard.",
          "Automated bills of materials.",
          "Work-order tracking.",
          "Project-level profit and loss with no double counting.",
        ],
      },
      {
        id: "brand-collaboration",
        title: "Brand collaboration automation",
        summary: "Creator intake through the content calendar.",
        description:
          "Creator intake, negotiated deal terms, and contract generation. A deal tracker holds milestones, with a posting and content calendar and a dashboard.",
        featured: true,
        tags: ["Deal tracker", "Contracts", "Content calendar"],
        highlights: [
          "Creator intake.",
          "Negotiated deal terms.",
          "Contract generation.",
          "Deal tracker with milestones.",
          "Posting and content calendar.",
          "Dashboard.",
        ],
      },
      {
        id: "robotic-welding-cell",
        title: "Robotic welding cell",
        summary: "Cycle time from 28 to 3 minutes.",
        description:
          "Manufacturing. Robot programming, a custom jig for fixturing, and an operator workflow. The weld is the same every time. Cycle time from 28 to 3 minutes.",
        featured: true,
        tags: ["Robot programming", "Fixturing", "Robotics"],
        highlights: [
          "Robot programming.",
          "Custom jig for fixturing.",
          "The same weld every time.",
          "An operator workflow for the cell.",
          "Cycle time from 28 to 3 minutes.",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    intro: "Newest first.",
    items: [
      {
        role: "Senior Project Manager, Accounting & Operations",
        company: "Eastern Harbour Group",
        dates: "Jan 2023 – Present",
        bullets: [
          "Accounting and operations projects across the project lifecycle; process and automation design.",
        ],
      },
      {
        role: "Senior Accounting Analyst",
        company: "Newland Capital Group",
        dates: "Feb 2022 – Jan 2023",
        bullets: [
          "Managed, tracked and reported on ground-up Class-A industrial developments of $150 million to $400 million each, build-to-suit and speculative, for e-commerce and distribution tenants in major U.S. port markets. Built the development project monitor and lender draw reporting.",
        ],
      },
      {
        role: "Director, Finance and Trading Operations",
        company: "Inflo Capital Partners",
        dates: "Apr 2020 – Jan 2022",
        bullets: [
          "Finance and trading operations: trade support, settlement, controls.",
        ],
      },
      {
        role: "Vice President, Special Assets / Chief Restructuring Officer (CRO)",
        company: "TCA Global Credit Master Fund",
        dates: "Nov 2017 – Feb 2020",
        bullets: [
          "Asset manager across the portfolio of a $500 million private credit fund (assets under management), including the hotel sale and the operating businesses the fund took over.",
        ],
      },
      {
        role: "Senior Analyst, Trading and Operations",
        company: "CRL Management / Napeague Capital",
        dates: "Aug 2005 – Nov 2017",
        bullets: [
          "Built automated trade settlement, daily profit and loss across 400+ accounts and multiple brokers, and prime broker files generated with no manual work, for a $500 million fund (assets under management).",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    intro: "Finance degree, then a full-stack bootcamp.",
    items: [
      {
        school: "Florida International University",
        credential: "Bachelor of Business Administration in Finance",
        dates: "2006",
      },
      {
        school: "4Geeks Academy",
        credential: "Full-Stack Bootcamp",
        dates: "2021",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "Fund operations, automation, and robotics. Python and reporting sit alongside the work.",
    featured: ["Fund operations", "Automation", "Robotics"],
    groups: [
      {
        title: "Operations",
        items: ["Fund operations", "Settlement", "Reporting"],
      },
      {
        title: "Building",
        items: [
          "Python",
          "Automation",
          "AI agents",
          "Private AI (self-hosted models)",
          "Robotics",
        ],
      },
      {
        title: "Practice",
        items: ["Process design", "Controls", "Field operations"],
      },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Email alex@4142mb.com.",
    formNote:
      "This form stays in the browser and does not send. Use alex@4142mb.com for a reply.",
    successTitle: "Saved in the browser. Nothing was sent.",
    successBody:
      "This form does not send. Email alex@4142mb.com if you want this to go out.",
  },
  footer: {
    note: "",
  },
};
