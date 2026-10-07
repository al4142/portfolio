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
 * Public site copy. Contact is email only (info@stannos.com).
 * Experience entries live in `experience.items` below.
 * Keep location at city level. Do not add a phone number or street address.
 */
export const site: SiteContent = {
  name: "Alex Lopez",
  shortName: "AL",
  role: "Fund operator turned builder",
  tagline:
    "15+ years running fund operations, now fixing operations from the floor up for funds, operating businesses, and robotics.",
  location: "Miami Beach, Florida",
  availability:
    "Fixing operations from the floor up for funds, operating businesses, and robotics.",
  email: "info@stannos.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  social: [{ label: "Email", href: "mailto:info@stannos.com" }],
  hero: {
    eyebrow: "founder · stannos",
    headline: "A fund operator turned builder.",
    ctaPrimary: { label: "Stannos", href: "https://stannos.com" },
    ctaSecondary: {
      label: "info@stannos.com",
      href: "mailto:info@stannos.com",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "I run Stannos and still work operations from the floor, with the people doing the work. Python, automation, and reporting for funds, operating businesses, and robotics.",
      "Based in Miami Beach, I surf, compete in triathlons, and play tennis.",
    ],
    facts: [
      { label: "Based", value: "Miami Beach, Florida" },
      { label: "Focus", value: "Fund operations" },
      { label: "Now", value: "Founder, Stannos" },
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
          "A multi-trader fund. Automated trade settlement and daily profit and loss across 400+ accounts and multiple brokers, with prime broker files generated with no manual work.",
        featured: true,
        tags: ["Fund operations", "Settlement", "Reporting"],
        highlights: [
          "Prime broker files generated with no manual work.",
          "Same-day reconciliation with fewer settlement breaks.",
          "41% lower administrative costs.",
        ],
      },
      {
        id: "development-monitor",
        title: "Development monitor and lender draw reporting",
        summary:
          "Project monitor and lender draw reporting for industrial real estate.",
        description:
          "Newland Capital Group. A development monitor for industrial real estate, with lender draw reporting driven from one invoice ledger.",
        featured: true,
        tags: ["Industrial real estate", "Development monitor", "Lender draw reporting"],
        highlights: [
          "Every invoice tagged to a draw and a budget line.",
          "Monthly draw packages and draw history for the lender.",
          "Budget versus funded, and cost to complete, kept current.",
          "Lender and investor reporting on a set schedule.",
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
        summary: "Inbox to agreed terms.",
        description:
          "A creator marketing agency managing hundreds of creators and brands.",
        featured: true,
        tags: ["Automation", "Approvals"],
        highlights: [
          "Artificial intelligence (AI) drafts counteroffers and a person approves each one.",
        ],
      },
      {
        id: "robotic-welding-cell",
        title: "Robotic welding cell",
        summary: "Cycle time from 28 to 3 minutes.",
        description:
          "Manufacturing. A robotic welding cell brought cycle time from 28 to 3 minutes, and the weld is the same every time.",
        featured: true,
        tags: ["Industrial automation", "Robotics", "Electrical"],
        highlights: ["The same weld every time."],
      },
    ],
  },
  experience: {
    title: "Experience",
    intro: "Newest first.",
    items: [
      {
        role: "Founder",
        company: "Stannos",
        dates: "2025 – Present",
        href: "https://stannos.com",
        bullets: [],
      },
      {
        role: "Senior Project Manager, Accounting & Operations",
        company: "Eastern Harbour Group",
        dates: "Jan 2023 – Present",
        bullets: [
          "Accounting and operations projects across the trade lifecycle; process and automation design.",
        ],
      },
      {
        role: "Senior Accounting Analyst",
        company: "Newland Capital Group",
        dates: "Feb 2022 – Jan 2023",
        bullets: [
          "Investment operations accounting: settlement, reconciliation, reporting.",
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
          "Asset manager across the fund's portfolio, including the hotel sale and the operating businesses the fund took over.",
        ],
      },
      {
        role: "Senior Analyst, Trading and Operations",
        company: "CRL Management / Napeague Capital",
        dates: "Aug 2005 – Nov 2017",
        bullets: [
          "Built automated trade settlement, daily profit and loss across 400+ accounts and multiple brokers, and prime broker files generated with no manual work.",
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
        dates: "2023",
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
        items: ["Python", "Automation", "Robotics"],
      },
      {
        title: "Practice",
        items: ["Process design", "Controls", "Field operations"],
      },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Email info@stannos.com.",
    formNote:
      "This form stays in the browser and does not send. Use info@stannos.com for a reply.",
    successTitle: "Saved in the browser. Nothing was sent.",
    successBody:
      "This form does not send. Email info@stannos.com if you want this to go out.",
  },
  footer: {
    note: "",
  },
};
