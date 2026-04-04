import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Orbit, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { WorkloadFit } from "@/components/workload-fit";
import {
  featuredCaseStudy,
  homeCapabilityCards,
  homeProofItems,
  processSteps,
  roiProofBlocks,
  siteConfig,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent text-slate-950">
      <section className="section-shell pt-16 sm:pt-20">
        <div className="blue-panel relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(164,196,255,0.26),transparent_20%),radial-gradient(circle_at_18%_76%,rgba(99,138,255,0.18),transparent_24%)]" />
          <div className="grid-pattern absolute inset-0 opacity-35" />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)] lg:items-center">
            <FadeIn className="max-w-2xl">
              <p className="inline-flex w-fit rounded-full border border-white/12 bg-white/8 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-blue-100/90">
                AI that actually ships into your business
              </p>
              <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Practical AI systems for teams that need real movement.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                Xelera helps mid-sized businesses automate work, improve customer workflows, and
                build AI systems with clearer delivery discipline.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Book a Discovery Call
                </a>
                <Link href="/solutions" className="button-secondary">
                  Explore Solutions
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-200">
                <span>Infrastructure-agnostic</span>
                <span>On-prem or cloud</span>
                <span>Built for real operations</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(7,16,31,0.24)] p-5">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-blue-100/70">
                      What Xelera focuses on
                    </p>
                    <div className="mt-5 space-y-4">
                      {homeProofItems.map((item) => (
                        <div key={item.label}>
                          <p className="text-lg font-semibold text-white">{item.value}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(7,16,31,0.24)] p-5">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-blue-100/70">
                      Built to help with
                    </p>
                    <div className="mt-5 space-y-3">
                      {roiProofBlocks.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-kicker">What Xelera does</p>
              <h2 className="section-title mt-4 max-w-[12ch]">
                Build the workflows that make AI useful to the business.
              </h2>
            </div>
            <p className="section-copy">
              We help teams pick the right use cases, design the workflow around real operations,
              and launch with the controls and visibility leadership needs.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {homeCapabilityCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08} className="white-panel rounded-[1.85rem] p-7">
              <div className="inline-flex rounded-full border border-slate-900/8 bg-[var(--color-paper-soft)] p-3 text-[var(--color-accent-strong)]">
                {card.icon === "brain" ? (
                  <BrainCircuit className="h-5 w-5" />
                ) : card.icon === "bot" ? (
                  <Bot className="h-5 w-5" />
                ) : card.icon === "shield" ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : (
                  <Orbit className="h-5 w-5" />
                )}
              </div>
              <h3 className="mt-6 text-2xl font-medium text-slate-950">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{card.copy}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell border-y blue-divider bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn>
            <p className="section-kicker">Representative project</p>
            <h2 className="section-title mt-4 max-w-[13ch]">
              A stronger way to explain what Xelera can build next.
            </h2>
            <p className="section-copy mt-6">
              Since we are early, this section works best as a concrete project spotlight rather
              than a fabricated customer success story.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="white-panel rounded-[2rem] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
              {featuredCaseStudy.industry}
            </p>
            <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950">
              {featuredCaseStudy.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">{featuredCaseStudy.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {featuredCaseStudy.outcomes.map((outcome) => (
                <div key={outcome} className="white-chip rounded-2xl px-4 py-4 text-sm leading-6 text-slate-700">
                  {outcome}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <FadeIn>
            <p className="section-kicker">Find your path</p>
            <h2 className="section-title mt-4 max-w-[13ch]">
              Different teams start in different places. The operating logic should still be clear.
            </h2>
            <p className="section-copy mt-6">
              Use the selector to see how the first Xelera build changes for revenue, operations,
              product, and executive stakeholders.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <WorkloadFit />
          </FadeIn>
        </div>
      </section>

      <section className="section-shell border-y blue-divider bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <FadeIn>
            <p className="section-kicker">How we work</p>
            <h2 className="section-title mt-4 max-w-[13ch]">
              A simpler path from AI interest to a deployed workflow.
            </h2>
          </FadeIn>
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08} className="white-panel rounded-[1.6rem] p-6">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-900/8 bg-[var(--color-paper-soft)] font-mono text-sm text-slate-700">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{step.copy}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn>
            <p className="section-kicker">Start the conversation</p>
            <h2 className="section-title mt-4 max-w-[13ch]">
              Tell us the workflow, bottleneck, or growth target you want to improve.
            </h2>
            <p className="section-copy mt-6">
              The best conversations start with a specific business problem. We will help shape the
              right AI path from there.
            </p>
            <div className="mt-10 grid gap-4">
              <div className="white-panel rounded-[1.5rem] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                  Included in the flow
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Internal email alert, confirmation email, CRM sync, and a booking handoff for
                  higher-intent conversations.
                </p>
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]"
              >
                Prefer to skip the form? Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
