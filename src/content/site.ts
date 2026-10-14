// Every fact on the site lives here, sourced from the resume and the old noahhertlein.xyz.

export const contact = {
  email: "noahert@icloud.com",
  linkedin: "https://www.linkedin.com/in/noahhertlein",
  github: "https://github.com/noahhertlein",
  resume: "/Noah-Hertlein-Resume.pdf",
  location: "Northwest Arkansas",
};

export const focusTags = [
  { label: "ITGC", tone: "butter" },
  { label: "SOX 404", tone: "sky" },
  { label: "Application controls", tone: "blush" },
  { label: "IPE testing", tone: "sage" },
  { label: "Java, Python, SQL", tone: "lilac" },
  { label: "AI automation", tone: "butter" },
] as const;

export const stats = [
  {
    icon: "code",
    label: "Application controls tested",
    value: "100+",
    note: "The engagement's most complex, custom-built and financially material ones.",
  },
  {
    icon: "file",
    label: "ITGC workpapers",
    value: "50+",
    note: "Documented from walkthrough to conclusion, ready for review.",
  },
  {
    icon: "grid",
    label: "Controls in the matrix I automated",
    value: "250+",
    note: "Tracked and kept current by the workflow I built.",
  },
  {
    icon: "people",
    label: "Teammates using my workflows",
    value: "50+",
    note: "On one of the largest audit clients in the world.",
  },
] as const;

export type Tick = "tested" | "reconciled" | "traced";

export const roles = [
  {
    title: "IT Risk & Assurance Staff, Technology Risk",
    org: "Ernst & Young (EY)",
    place: "Bentonville, AR",
    dates: "July 2025 – present",
    summary:
      "The only onshore staff on the application-controls team for a Fortune 1 retail enterprise. I'm trusted with the controls that are custom-built, high-risk and material to the financials.",
    points: [
      {
        tick: "tested",
        text: "Test design and operating effectiveness of 100+ automated controls across inventory, order-management and financial-reporting systems, reading the source code and configuration (Java, Python, SQL) in SAP and custom platforms.",
      },
      {
        tick: "traced",
        text: "Confirm the exact production code version in scope before testing, so conclusions reflect what's actually deployed.",
      },
      {
        tick: "reconciled",
        text: "Trace data end to end through cloud data platforms, message queues, orchestration and relational databases to prove system reports (IPE) are complete and accurate, down to record counts and transaction detail.",
      },
      {
        tick: "tested",
        text: "Evaluate interface and error-handling controls (message validation, schema and total checks, monitoring and alerting) to confirm failed transactions get caught, retried and resolved.",
      },
      {
        tick: "traced",
        text: "Lead walkthroughs with developers and control owners, then write the narratives, IPE memos, benchmarking memos and PBC requests that turn technical logic into clear conclusions.",
      },
      {
        tick: "reconciled",
        text: "Spot and escalate evidence gaps and deficiencies, working with client IT, internal audit and offshore teams. I've served several clients at once, on teams from a few people to 50+.",
      },
    ],
  },
  {
    title: "Technology Risk Intern",
    org: "Ernst & Young (EY)",
    place: "Bentonville, AR",
    dates: "June – August 2024",
    summary:
      "My first look at ITGC and application-controls work on a large enterprise engagement, the summer before senior year.",
    points: [
      {
        tick: "tested",
        text: "Supported control testing and walkthrough documentation alongside the ITGC and application-controls team.",
      },
      {
        tick: "reconciled",
        text: "Collected evidence, benchmarked prior-year controls, and tied system reports back to source data under senior review.",
      },
      {
        tick: "traced",
        text: "Earned a full-time return offer and joined the same engagement after graduating.",
      },
    ],
  },
] as const satisfies ReadonlyArray<{
  points: ReadonlyArray<{ tick: Tick; text: string }>;
  [key: string]: unknown;
}>;

export const project = {
  title: "Audit automation workflow",
  lede: "An AI-driven workflow I designed to take the repetitive parts out of audit prep. It handles evidence intake, classifies controls, and gets walkthroughs ready before anyone opens a meeting invite.",
  points: [
    "Sorts incoming evidence as it arrives",
    "Classifies controls ahead of walkthroughs",
    "Keeps a 250+ control matrix current",
    "Used by 50+ people on the engagement",
  ],
  outcome:
    "The result is more consistent documentation, faster turnaround, and conclusions that hold up in review.",
  note: "Built for internal use, so the details stay confidential.",
};

export const toolkit = [
  { short: "SAP", name: "SAP & ERP platforms", tone: "navy" },
  { short: "Java", name: "Application code review", tone: "butter" },
  { short: "Py", name: "Python", tone: "sky" },
  { short: "SQL", name: "SQL & DB2", tone: "sage" },
  { icon: "cloud", name: "Cloud data platforms", tone: "blush" },
  { icon: "stream", name: "Event streaming & queues", tone: "lilac" },
  { icon: "flow", name: "Workflow orchestration", tone: "navy" },
  { short: "fx", name: "Advanced Excel", tone: "butter" },
  { short: "AI", name: "AI workflow automation", tone: "cardinal" },
] as const;

export const auditSkills = [
  "ITGCs",
  "SOX 404",
  "IT application controls",
  "IT-dependent manual controls",
  "IPE completeness & accuracy",
  "Control walkthroughs",
  "Benchmarking",
  "Data reconciliation",
];

export const beyond = [
  {
    kind: "logo",
    title: "Arkansas AI Foundry",
    role: "Co-founder, now strategic advisor",
    text: "Helped start a student AI organization at the University of Arkansas and grew it past 100 members with speaker events and workshops. It's now a 501(c)(3), and I advise on AI strategy as an unpaid, independent advisor.",
  },
  {
    kind: "icon",
    icon: "flask",
    title: "DRIVER framework research",
    role: "Finance technology research assistant",
    text: "Worked with Professor Xinde Zhang applying Python and AI to financial modeling with the DRIVER framework, and helped graduate students through their coding problems.",
  },
  {
    kind: "icon",
    icon: "cap",
    title: "University of Arkansas",
    role: "Sam M. Walton College of Business, May 2025",
    text: "B.S. in Business Administration in Financial Analytics, with a minor in Business Information Systems.",
  },
  {
    kind: "icon",
    icon: "badge",
    title: "CISA",
    role: "In progress",
    text: "Studying for the Certified Information Systems Auditor exam to back the day job with the credential.",
  },
] as const;
