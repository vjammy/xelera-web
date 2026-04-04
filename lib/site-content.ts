export const siteConfig = {
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/vivek-jamwal-hfu8xu",
};

export const navigationLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const homeProofItems = [
  { value: "Build-first", label: "Focused on projects that can move from concept to workflow fast" },
  { value: "Operator-led", label: "Designed around the teams who have to run the process every day" },
  { value: "Mid-market fit", label: "Built for practical operators, not innovation theater" },
];

export const homeSignalItems = [
  { label: "Revenue use-case fit", value: "92%", progress: "92%" },
  { label: "Operational readiness", value: "84%", progress: "84%" },
  { label: "Risk control coverage", value: "88%", progress: "88%" },
];

export const roiProofBlocks = [
  {
    metric: "01",
    label: "Lead qualification and routing",
    detail:
      "A practical build track for teams that want faster inbound follow-up, better prioritization, and fewer manual handoff delays.",
  },
  {
    metric: "02",
    label: "Internal knowledge and decision support",
    detail:
      "A focused project area for businesses that need one reliable layer for answers, policy guidance, and team-specific workflow context.",
  },
  {
    metric: "03",
    label: "Customer service and operations automation",
    detail:
      "A current delivery pattern for teams looking to reduce repetitive work, improve service responsiveness, and keep humans in control.",
  },
];

export const featuredCaseStudy = {
  industry: "B2B services and revenue operations",
  title: "A representative workflow we are building for service-led mid-market teams.",
  summary:
    "Instead of presenting a client case study we have not earned yet, Xelera shows the kind of workflow program we are actively building: map the inbound funnel, automate qualification and routing, and add guided AI support for proposal, follow-up, and delivery coordination.",
  outcomes: [
    "Reduce response lag between inbound demand and first action",
    "Create cleaner handoffs across sales, operations, and delivery",
    "Give leadership more visibility into workflow performance",
  ],
};

export const homeCapabilityCards = [
  {
    icon: "brain",
    title: "Find the AI use cases worth funding",
    copy: "Prioritize the workflows where automation, copilots, or AI decision support can create visible gains in speed, conversion, service, or margin.",
    tagline: "ROI-focused roadmap",
  },
  {
    icon: "bot",
    title: "Automate revenue and operations workflows",
    copy: "Launch AI-driven workflows that improve lead handling, internal coordination, customer response, and recurring operational tasks.",
    tagline: "Workflow deployment",
  },
  {
    icon: "shield",
    title: "Deploy with control, security, and accountability",
    copy: "Put guardrails, review steps, permissions, and measurement in place so leadership can trust the rollout from day one.",
    tagline: "Risk-managed delivery",
  },
  {
    icon: "orbit",
    title: "Scale what works after the first win",
    copy: "Turn an initial launch into repeatable business value with adoption support, iteration plans, and a pipeline of next-step opportunities.",
    tagline: "Expansion and adoption",
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
  {
    id: "product",
    label: "Product owners",
    kicker: "Productized AI experiences",
    title: "Bring AI into the product without confusing users or adding risk.",
    description:
      "Shape features, evaluation, and delivery patterns so customer-facing AI feels useful, understandable, and commercially durable.",
    outcomes: [
      "Sharper product roadmap decisions",
      "Faster learning from releases",
      "Governed AI feature delivery",
      "Better user adoption",
    ],
  },
  {
    id: "executive",
    label: "Executive sponsors",
    kicker: "Portfolio-level orchestration",
    title: "Turn scattered AI efforts into a focused business program.",
    description:
      "Align leadership, business cases, and delivery sequencing so the company invests in the right use cases and knows how to scale them responsibly.",
    outcomes: [
      "Stronger investment prioritization",
      "Better cross-team alignment",
      "Clearer governance and ownership",
      "Faster path from pilot to value",
    ],
  },
];

export const processSteps = [
  {
    title: "Pick the workflow that matters most",
    copy: "We identify the business bottleneck, customer friction point, or manual process where AI can create visible improvement fast.",
  },
  {
    title: "Design the workflow around real operating needs",
    copy: "Interfaces, automations, review points, and handoffs are designed together so the solution fits how your teams already work.",
  },
  {
    title: "Launch with measurement and controls in place",
    copy: "We implement the workflow, rollout plan, and success metrics needed to deploy with confidence and learn quickly.",
  },
  {
    title: "Expand the wins that prove ROI",
    copy: "Once the first workflow performs, Xelera helps turn that result into a roadmap for broader revenue and operational impact.",
  },
];

export const solutions = [
  {
    eyebrow: "Strategic advisory",
    title: "AI roadmap tied to business ROI",
    description:
      "Define where AI should create measurable value first, what the highest-impact workflows are, and how to sequence delivery around real business goals.",
    highlights: [
      "Executive alignment around business outcomes",
      "Use-case prioritization tied to ROI",
      "Practical rollout recommendations",
    ],
  },
  {
    eyebrow: "Workflow delivery",
    title: "AI automation for sales, service, and operations",
    description:
      "Deploy assistants, copilots, and workflow automation that reduce manual effort and improve responsiveness across customer and internal teams.",
    highlights: [
      "Workflow design tied to team adoption",
      "Automation, prompting, and orchestration",
      "Launch support from pilot to production",
    ],
  },
  {
    eyebrow: "Governance and measurement",
    title: "AI controls, measurement, and rollout trust",
    description:
      "Create the guardrails, testing loops, and accountability structure needed to scale AI confidently inside a growing business.",
    highlights: [
      "Review and approval checkpoints",
      "Measurement plans for ROI and adoption",
      "Governance patterns that fit the company",
    ],
  },
  {
    eyebrow: "Scale",
    title: "Adoption support and next-phase expansion",
    description:
      "Convert a strong first launch into a durable capability with enablement, iteration, and a path toward broader business value.",
    highlights: [
      "Post-launch optimization",
      "Team enablement and adoption support",
      "Roadmapping for the next ROI-driven use case",
    ],
  },
];

export const industries = [
  {
    kicker: "Commercial teams",
    title: "Growth, sales, and customer experience",
    description:
      "When revenue teams need better qualification, faster follow-up, and more responsive buyer journeys, Xelera shapes the workflow around speed and measurable impact.",
    examples: ["Lead qualification", "Proposal assistance", "Knowledge capture", "Response acceleration"],
  },
  {
    kicker: "Operations",
    title: "Workflow-heavy internal functions",
    description:
      "Operations teams often have clear bottlenecks but fragmented systems. Xelera uses AI to reduce coordination overhead, speed up execution, and improve consistency.",
    examples: ["Internal copilots", "Policy guidance", "Operational triage", "Knowledge routing"],
  },
  {
    kicker: "Product and platform",
    title: "Digital products with AI features",
    description:
      "For product teams embedding AI into the customer experience, we help balance capability, usability, evaluation, and commercial discipline.",
    examples: ["Embedded assistants", "Feature prototyping", "Release evaluation", "Governed rollout"],
  },
  {
    kicker: "Regulated and high-trust environments",
    title: "Organizations where risk and clarity matter",
    description:
      "In high-trust settings, AI needs stronger review layers, clearer ownership, and tighter operating controls. That gets built into the delivery path from the start.",
    examples: ["Human review points", "Decision logging", "Guardrail design", "Escalation flows"],
  },
];

export const principles = [
  {
    title: "Business-first AI",
    description:
      "The point is not to deploy AI for its own sake. The point is to improve a real commercial or operational outcome that matters to the business.",
  },
  {
    title: "Systems, not demos",
    description:
      "We design the interfaces, workflows, controls, and measurement loops together so the result can survive outside a workshop or pilot.",
  },
  {
    title: "Trust as a product feature",
    description:
      "Governance, review, and accountability are treated as part of the user experience because durable AI depends on trust as much as capability.",
  },
];

export const contactInterestOptions = [
  "AI strategy and roadmap",
  "Agentic workflow design",
  "Customer-facing AI product",
  "Governance and evaluation",
  "General inquiry",
];
