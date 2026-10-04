export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  result: string;
  details: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  summary?: string;
  href?: string;
};

export type EducationItem = {
  school: string;
  credential: string;
  dates: string;
};

export type SiteContent = {
  name: string;
  role: string;
  tagline: string;
  /** City-level only. Never a street address or phone number. */
  location: string;
  email: string;
  stannosUrl: string;
  nav: NavItem[];
  social: SocialLink[];
  hero: {
    eyebrow: string;
    headline: string;
    message: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  work: {
    title: string;
    intro: string;
    items: CaseStudy[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  contact: {
    title: string;
    intro: string;
  };
};

/**
 * Public site copy. Contact is email only (info@stannos.com).
 * Keep location at city level. Do not add a phone number or street address.
 */
export const site: SiteContent = {
  name: "Alex Lopez",
  role: "Fund operator turned builder",
  tagline:
    "A fund operator turned builder. 15 years running fund operations, now fixing operations from the floor up for funds, operating businesses, and robotics.",
  location: "Miami Beach, FL",
  email: "info@stannos.com",
  stannosUrl: "https://stannos.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  social: [{ label: "Email", href: "mailto:info@stannos.com" }],
  hero: {
    eyebrow: "Founder, Stannos",
    headline: "Alex Lopez",
    message:
      "A fund operator turned builder. 15 years running fund operations, now fixing operations from the floor up for funds, operating businesses, and robotics.",
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
  },
  work: {
    title: "Work",
    intro: "Four case studies.",
    items: [
      {
        id: "robotic-welding-cell",
        title: "Robotic welding cell",
        client: "Manufacturing",
        result: "Cycle time from 28 to 3 minutes",
        details: [
          "About 9x the output from one cell.",
          "The same weld every time.",
        ],
      },
      {
        id: "fund-trading-operations",
        title: "Fund trading operations platform",
        client: "A multi-trader fund",
        result: "41% lower administrative costs",
        details: [
          "Daily profit and loss splits automated across every account.",
          "Prime broker and settlement files generated automatically.",
          "Same-day reconciliation with fewer settlement breaks.",
        ],
      },
      {
        id: "field-operations",
        title: "Field operations platform",
        client: "A national site services provider",
        result: "Project-level profit and loss with no double counting",
        details: [
          "Project lifecycle from site walk to close-out.",
          "Crew scheduling across projects and yards.",
          "Live inventory tied to each yard.",
          "Automated bills of materials.",
          "Work-order tracking.",
          "Project-level profit and loss with no double counting.",
        ],
      },
      {
        id: "brand-partnership-automation",
        title: "Brand partnership automation",
        client:
          "A creator marketing agency managing hundreds of creators and brands",
        result: "Inbox to agreed terms",
        details: [
          "AI drafts counteroffers and a person approves each one.",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Founder",
        company: "Stannos",
        dates: "2025–present",
        href: "https://stannos.com",
      },
      {
        role: "Senior Project Manager",
        company: "Eastern Harbour Group",
        dates: "2023–present",
        summary: "Accounting and operations.",
      },
      {
        role: "Senior Accounting Analyst",
        company: "Newland Capital",
        dates: "Feb 2022 – Jan 2023",
        summary: "An industrial real estate fund.",
      },
      {
        role: "Director of Finance & Trading Operations",
        company: "A multi-strategy hedge fund",
        dates: "2020–2022",
      },
      {
        role: "Vice President, Special Assets",
        company: "TCA Global Credit Master Fund",
        dates: "Nov 2016–Feb 2020",
        summary:
          "Asset manager across the fund's portfolio, including the hotel sale and the operating businesses the fund took over.",
      },
      {
        role: "Trident Holding Group",
        company: "A fund",
        dates: "Dec 2015–Nov 2016",
      },
      {
        role: "Senior Analyst, Trading & Operations",
        company: "Napeague Capital",
        dates: "2005–Dec 2015",
        summary:
          "Built a trade settlement and profit and loss platform across 400+ accounts, with 41% lower administrative costs.",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        school: "4Geeks Academy",
        credential: "Full-Stack Software Development Bootcamp",
        dates: "2023",
      },
      {
        school: "Florida International University",
        credential: "Bachelor of Business Administration in Finance",
        dates: "2006",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Email info@stannos.com.",
  },
};
