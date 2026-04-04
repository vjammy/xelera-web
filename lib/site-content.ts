export const siteConfig = {
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com",
};

export const navigationLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const homeProofItems = [
  { value: "AI-ready", label: "Built for teams moving from experimentation to production" },
  { value: "Human-guided", label: "Operational controls and role-aware workflows" },
  { value: "Customer-led", label: "Designed to improve buyer experience and revenue motion" },
];

export const homeSignalItems = [
  { label: "Opportunity mapping", value: "92%", progress: "92%" },
  { label: "Workflow readiness", value: "84%", progress: "84%" },
  { label: "Governance coverage", value: "88%", progress: "88%" },
];

export const homeCapabilityCards = [
  {
    icon: "brain",
    title: "AI strategy that stays close to the business",
    copy: "Identify the customer journeys, team workflows, and decision surfaces where AI can create real advantage instead of shallow novelty.",
    tagline: "Opportunity mapping",
  },
  {
    icon: "bot",
    title: "Agentic workflows built for production pressure",
    copy: "Design copilots, assistants, and orchestration layers that connect humans, data, and actions without sacrificing control.",
    tagline: "Workflow automation",
  },
  {
    icon: "shield",
    title: "Governance, evaluation, and rollout discipline",
    copy: "Ship with guardrails, ownership boundaries, and evaluation loops that keep the system trustworthy as it grows.",
    tagline: "Operational trust",
  },
  {
    icon: "orbit",
    title: "Adoption systems that create momentum after launch",
    copy: "Turn pilots into repeatable operating patterns with enablement, measurement, and a roadmap for the next layer of value.",
    tagline: "Scale and adoption",
  },
];

export const workloadFitOptions = [
  {
    id: "revenue",
    label: "Revenue teams",
    kicker: "Buyer-facing systems",
    title: "Improve how prospects discover, evaluate, and move.",
    description:
      "Use AI to shorten response times, strengthen qualification, surface insight faster, and give commercial teams better context at the moment of action.",
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
    title: "Reduce the drag inside recurring workflows.",
    description:
      "Automate repetitive decision support, structure knowledge, and create guided AI workflows that free teams to focus on high-value work.",
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
    title: "Bring AI into the product without losing clarity or trust.",
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
    title: "Turn scattered AI efforts into a coherent operating program.",
    description:
      "Align leadership, business cases, and delivery sequencing so the organization invests in the right AI moves and knows how to scale them.",
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
    title: "Frame the business move",
    copy: "We map the customer problem, internal workflow, and target outcome so the AI strategy starts from a real operating lever.",
  },
  {
    title: "Design the system around trust and action",
    copy: "Interfaces, automations, human review points, and data touchpoints are designed together so the solution fits production reality.",
  },
  {
    title: "Launch with governance built in",
    copy: "We implement the workflow, measurement plan, and operating controls needed to deploy with confidence and learn quickly.",
  },
  {
    title: "Expand what works",
    copy: "Once the first system proves itself, Xelera helps turn that momentum into a roadmap for broader customer and operational value.",
  },
];

export const solutions = [
  {
    eyebrow: "Strategic advisory",
    title: "AI roadmap and opportunity design",
    description:
      "Define where AI should create leverage, what the first high-value use cases are, and how to sequence delivery around real business goals.",
    highlights: [
      "Executive alignment and prioritization",
      "Use-case discovery tied to measurable outcomes",
      "Operating model recommendations",
    ],
  },
  {
    eyebrow: "Product and workflow delivery",
    title: "Agentic workflows and customer-facing AI",
    description:
      "Ship assistants, copilots, and orchestration layers that connect context to action across internal and external experiences.",
    highlights: [
      "User journey and workflow design",
      "Prompting, orchestration, and evaluation patterns",
      "Launch support from pilot through production",
    ],
  },
  {
    eyebrow: "Governance and measurement",
    title: "AI controls, evaluation, and operating trust",
    description:
      "Create the guardrails, testing loops, and accountability structure needed to scale AI confidently inside real organizations.",
    highlights: [
      "Review and approval checkpoints",
      "Measurement plans for adoption and quality",
      "Governance patterns that fit the business",
    ],
  },
  {
    eyebrow: "Scale",
    title: "Adoption systems and next-phase expansion",
    description:
      "Convert a good first launch into a durable capability with enablement, iteration, and a path toward broader organizational value.",
    highlights: [
      "Post-launch optimization",
      "Team enablement and adoption support",
      "Roadmapping for the next AI layer",
    ],
  },
];

export const industries = [
  {
    kicker: "Commercial teams",
    title: "Growth, sales, and customer experience",
    description:
      "When revenue teams need better qualification, smarter follow-up, and more responsive buyer journeys, Xelera shapes the workflow around speed and trust.",
    examples: ["Lead qualification", "Proposal assistance", "Knowledge capture", "Response acceleration"],
  },
  {
    kicker: "Operations",
    title: "Workflow-heavy internal functions",
    description:
      "Operations teams often have clear bottlenecks but fragmented systems. Xelera uses AI to reduce coordination overhead and improve consistency.",
    examples: ["Internal copilots", "Policy guidance", "Operational triage", "Knowledge routing"],
  },
  {
    kicker: "Product and platform",
    title: "Digital products with AI features",
    description:
      "For product teams embedding AI into the customer experience, we help balance capability, usability, evaluation, and release discipline.",
    examples: ["Embedded assistants", "Feature prototyping", "Release evaluation", "Governed rollout"],
  },
  {
    kicker: "Regulated and high-trust environments",
    title: "Organizations where risk and clarity matter",
    description:
      "In high-trust settings, AI needs stronger review layers, clearer ownership, and tighter operating controls. That is built into the delivery path from the start.",
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
