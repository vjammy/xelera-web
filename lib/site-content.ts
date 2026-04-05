export const siteConfig = {
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/vivek-jamwal-hfu8xu",
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/prototypes", label: "Prototypes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
];

export const heroHighlights = [
  "Infrastructure-agnostic",
  "On-prem or cloud",
  "Built for real operations",
];

export const valueCards = [
  {
    title: "Cut Operating Effort",
    description: "Automate repetitive tasks across functions",
  },
  {
    title: "Move Faster",
    description: "Agents that research, draft, triage, and execute",
  },
  {
    title: "Improve Quality",
    description: "Consistent decisions and reduced human error",
  },
];

export const roiStats = [
  { value: "30-70%", label: "Time saved on repetitive workflows" },
  { value: "Faster", label: "Response times in sales, support, and ops" },
  { value: "Lower", label: "Error rates through automated validation" },
  { value: "Zero", label: "Downtime with safe deployment strategy" },
];

export const services = [
  {
    title: "AI Automation & Workflow Modernization",
    description:
      "Automate tasks across tools like CRM, email, HRIS, ticketing, finance, and docs with approvals, audit logs, and human-in-the-loop controls.",
  },
  {
    title: "Agentic AI Systems",
    description:
      "Multi-step agents that can plan, research, call tools, make decisions, and complete workflows safely and transparently.",
  },
  {
    title: "AI-Powered GTM Acceleration",
    description:
      "ICP discovery, account research, personalized outreach, proposal creation, meeting intelligence, follow-ups, and pipeline hygiene.",
  },
  {
    title: "Deep Research & Knowledge Systems",
    description:
      "Internal copilots that answer from your documents, policies, tickets, and past decisions while respecting access controls.",
  },
];

export type PrototypeShowcase = {
  name: string;
  summary: string;
  launchUrl?: string;
  status: string;
  audience: string;
  trustNote: string;
  workflowSteps: string[];
  opsFeatures: string[];
  disclaimer?: string;
  launchCta?: string;
  secondaryCta?: string;
  upcoming?: boolean;
};

export const prototypeShowcases: PrototypeShowcase[] = [
  {
    name: "Xelera SDR Sales Module",
    summary:
      "A working SDR workflow for event and conference lead intake, account research, outbound drafting, and approval-driven follow-up.",
    launchUrl: "https://sdr.xelera.ai/login",
    status: "Working Prototype",
    audience: "Built for sales leaders, SDR managers, and revenue teams running event-driven outbound motion.",
    trustNote:
      "Human review stays in the loop before approval so teams can move faster without giving up control.",
    workflowSteps: [
      "Upload conference or event leads through CSV or XLSX intake.",
      "Assign each list to a salesperson before research and follow-up begin.",
      "Research and enrich accounts so reps have better context before outreach.",
      "Generate outbound draft sequences for human review instead of sending automatically.",
      "Let reps review lead-by-lead and prepare sequences for manager approval.",
      "Allow managers to bulk approve only the leads that are already review-ready.",
    ],
    opsFeatures: [
      "Lead upload and list operations",
      "User onboarding and access management",
      "Digest operations and send operations",
      "Setup, product configuration, and admin controls",
    ],
    disclaimer: "This is a working pilot. Demo access details are available on the prototype login page.",
    launchCta: "Launch Prototype",
    secondaryCta: "Book a Discovery Call",
  },
  {
    name: "Inbox Automation Console",
    summary: "Classify, route, summarize, and escalate inbound email with explicit review layers.",
    status: "Upcoming",
    audience: "For ops and support teams handling high-volume shared inbox workflows.",
    trustNote: "Designed as a future internal prototype.",
    workflowSteps: ["Intake", "Classify", "Route", "Review"],
    opsFeatures: ["Shared mailbox triage"],
    upcoming: true,
  },
  {
    name: "Knowledge Workflow Copilot",
    summary: "Assist teams with governed document answers, citations, and workflow handoffs.",
    status: "Upcoming",
    audience: "For internal operations teams working across documents and approvals.",
    trustNote: "Designed as a future internal prototype.",
    workflowSteps: ["Search", "Draft", "Review", "Approve"],
    opsFeatures: ["Knowledge retrieval with citations"],
    upcoming: true,
  },
];

export const pricingPlans = [
  {
    name: "Quick Sprints",
    duration: "Efforts required less than a month",
    price: "$1,500",
    cadence: "/week",
    cta: "Get Started",
    featured: false,
    features: [
      "Rapid prototype development",
      "Single process automation",
      "Production-ready deliverable",
      "Documentation included",
    ],
  },
  {
    name: "Dedicated AI Pod",
    duration: "AI developer embedded in your team",
    price: "$4,000",
    cadence: "/month",
    cta: "Book a Call",
    featured: true,
    features: [
      "Dedicated AI developer",
      "Tech lead support",
      "QA/ops assistance",
      "Continuous iteration",
      "Priority support",
    ],
  },
  {
    name: "Long Commitment",
    duration: "Enterprise-scale AI transformation",
    price: "Custom",
    cadence: "",
    cta: "Reach Out to Us",
    featured: false,
    features: [
      "Full AI transformation",
      "Multiple workstreams",
      "Dedicated team",
      "Strategic planning",
      "Executive partnership",
    ],
  },
];

export const careerPrinciples = [
  "Small team, high ownership",
  "Work directly on real business problems",
  "Build AI systems that have to survive in production",
  "Operate with speed, clarity, and low ego",
];

export const openRoles = [
  {
    title: "AI Engineer",
    description:
      "Design and ship production-grade automations, agents, and workflow systems across a range of business use cases.",
  },
  {
    title: "Applied AI Product Builder",
    description:
      "Bridge product thinking and implementation by turning fuzzy customer needs into clean, useful AI experiences.",
  },
  {
    title: "Workflow Automation Specialist",
    description:
      "Own the orchestration layer across tools, APIs, prompts, and review flows that make AI useful inside the business.",
  },
];

export const blogPosts = [
  {
    title: "Why most AI pilots never reach the workflow",
    summary:
      "A practical look at the delivery gap between a good demo and a system a real team can depend on.",
  },
  {
    title: "What mid-sized teams should automate first",
    summary:
      "The highest-leverage AI starting points are usually repetitive, cross-functional, and easy to measure.",
  },
  {
    title: "Designing human review into agentic systems",
    summary:
      "The right review layer makes AI more usable, more trusted, and safer to adopt across the business.",
  },
];

export const solutions = services.map((service) => ({
  eyebrow: "Service",
  title: service.title,
  description: service.description,
  highlights: ["Production-minded delivery", "Workflow fit over novelty", "Built around measurable business value"],
}));

export const industries = [
  {
    kicker: "Revenue teams",
    title: "Sales, marketing, and GTM",
    description:
      "Use AI to improve qualification, follow-up speed, messaging support, and the repetitive execution work that slows down commercial teams.",
    examples: ["AI SDR automation", "Proposal support", "Research assistance", "Pipeline hygiene"],
  },
  {
    kicker: "Operations",
    title: "Internal workflow-heavy teams",
    description:
      "Reduce repetitive tasks, route work faster, and create better visibility across the internal processes that keep the business moving.",
    examples: ["Inbox automation", "Operations copilots", "Document workflows", "Cross-tool orchestration"],
  },
  {
    kicker: "Support and service",
    title: "Customer-facing operational teams",
    description:
      "Improve response quality and speed with triage agents, suggested replies, knowledge access, and better escalation logic.",
    examples: ["Support triage", "Knowledge systems", "Escalation routing", "Service summaries"],
  },
  {
    kicker: "Compliance and control",
    title: "High-trust environments",
    description:
      "Design AI systems with citations, review layers, permissions, and clear control points where the workflow demands more trust.",
    examples: ["Policy copilot", "Audit-friendly workflows", "Human review", "Governed automation"],
  },
];

export const principles = [
  {
    title: "Useful beats impressive",
    description:
      "We care more about a workflow that saves time, improves quality, or speeds up execution than a flashy demo that never leaves the workshop.",
  },
  {
    title: "Business context comes first",
    description:
      "The best AI system is the one that fits the real tools, people, approvals, and constraints already present in the business.",
  },
  {
    title: "Shipping matters",
    description:
      "We build for adoption and reliability, not just technical possibility, so the work can survive real usage after launch.",
  },
];

export const workloadFitOptions = [
  {
    id: "revenue",
    label: "Revenue teams",
    kicker: "Buyer-facing workflows",
    title: "Improve how leads are qualified, routed, and converted.",
    description:
      "Use AI to reduce response time, improve qualification quality, and give revenue teams better context at the moment a buyer needs an answer.",
    outcomes: [
      "Faster lead qualification",
      "Better handoff across sales and delivery",
      "Higher-quality customer conversations",
      "Clearer signal from inbound demand",
    ],
  },
  {
    id: "operations",
    label: "Operations leaders",
    kicker: "Internal operating leverage",
    title: "Reduce the drag inside repetitive business processes.",
    description:
      "Automate repetitive work, organize scattered knowledge, and create guided AI workflows that free teams to focus on customers and execution.",
    outcomes: [
      "Less manual coordination",
      "Better process consistency",
      "Faster internal response cycles",
      "More usable institutional knowledge",
    ],
  },
];

export const processSteps = [
  {
    title: "Find the workflow that matters most",
    copy: "Identify the business process where AI can create visible improvement quickly.",
  },
  {
    title: "Design for the real operating environment",
    copy: "Fit the automations, approvals, and handoffs to the tools and teams already in place.",
  },
  {
    title: "Launch and measure",
    copy: "Deploy the workflow with clear ownership, controls, and success signals.",
  },
  {
    title: "Expand what works",
    copy: "Turn an early win into a broader AI roadmap across the business.",
  },
];

export const contactInterestOptions = [
  "AI automation and workflow modernization",
  "Agentic AI systems",
  "AI-powered GTM acceleration",
  "Deep research and knowledge systems",
  "General inquiry",
];
