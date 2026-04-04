import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Orbit, ShieldCheck, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { WorkloadFit } from "@/components/workload-fit";
import {
  featuredCaseStudy,
  homeCapabilityCards,
  homeProofItems,
  homeSignalItems,
  processSteps,
  roiProofBlocks,
  siteConfig,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="hero-shell relative overflow-hidden border-b blue-divider">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(95,136,255,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(85,162,255,0.22),transparent_24%),linear-gradient(180deg,rgba(8,17,33,0.88),rgba(7,16,31,0.96))]" />
        <div className="grid-pattern absolute inset-0 opacity-60" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[7%] top-28 h-64 w-64 rounded-full border border-blue-300/15" />
          <div className="absolute left-[11%] top-36 h-48 w-48 rounded-full border border-blue-300/12" />
          <div className="absolute right-[11%] top-24 h-80 w-80 rounded-full border border-blue-200/12" />
          <div className="absolute right-[16%] top-40 h-52 w-52 rounded-full border border-blue-200/10" />
          <div className="absolute left-[17%] top-[42%] h-px w-[32%] bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
          <div className="absolute right-[18%] top-[53%] h-px w-[28%] bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
          <div className="absolute left-[25%] top-[24%] h-3 w-3 rounded-full bg-blue-300/80 shadow-[0_0_24px_rgba(123,169,255,0.8)]" />
          <div className="absolute right-[26%] top-[33%] h-3 w-3 rounded-full bg-blue-200/80 shadow-[0_0_24px_rgba(123,169,255,0.8)]" />
          <div className="absolute left-[56%] top-[60%] h-3 w-3 rounded-full bg-blue-300/70 shadow-[0_0_24px_rgba(123,169,255,0.75)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:px-12 lg:py-20">
          <FadeIn className="flex max-w-2xl flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/15 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-blue-100/85">
              <Sparkles className="h-3.5 w-3.5" />
              AI systems built for real operating teams
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-blue-100/60">
              Blueprint. Build. Operational lift.
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.93] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Bring AI into the business with a clearer plan and a sharper operating system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Xelera helps mid-sized teams turn AI interest into focused workflow builds across
              revenue, operations, and customer-facing execution.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f7cff,#2f5cff)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Book a 30-minute AI workflow review
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {homeProofItems.map((item) => (
                <div key={item.label} className="border-l border-blue-300/25 pl-4">
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative flex items-center">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(90,138,255,0.24),transparent_52%)] blur-3xl" />
            <div className="relative blue-panel w-full overflow-hidden rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-blue-100/60">
                    Xelera operating map
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">AI workflow system overview</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-200/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-blue-100/55">
                      Build readiness
                    </p>
                    <Orbit className="h-4 w-4 text-blue-200" />
                  </div>
                  <div className="mt-6 space-y-5">
                    {homeSignalItems.map((signal) => (
                      <div key={signal.label}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{signal.label}</span>
                          <span className="font-mono text-blue-100">{signal.value}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/6">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-300 via-[var(--color-accent)] to-blue-100 shadow-[0_0_28px_rgba(79,124,255,0.45)]"
                            style={{ width: signal.progress }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-blue-100/55">
                      Current focus
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
                        <div className="flex items-center gap-3 text-white">
                          <Bot className="h-5 w-5 text-blue-300" />
                          <span className="text-sm font-medium">Workflow automation</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          Qualification, routing, knowledge access, and response workflows built
                          for teams that need practical lift now.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
                        <div className="flex items-center gap-3 text-white">
                          <ShieldCheck className="h-5 w-5 text-blue-200" />
                          <span className="text-sm font-medium">Controlled delivery</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          Governance, review paths, and measurement are designed into the workflow
                          instead of bolted on later.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(32,55,97,0.9),rgba(11,20,38,0.94))] p-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-blue-100/55">
                      Delivery path
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                      <span className="rounded-full border border-white/10 px-3 py-1">Scope</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="rounded-full border border-white/10 px-3 py-1">Build</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="rounded-full border border-white/10 px-3 py-1">Operationalize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell bg-transparent">
        <FadeIn>
          <p className="section-kicker">What Xelera does</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="section-title max-w-[14ch]">
              Design AI workflow systems that can actually live inside the business.
            </h2>
            <p className="section-copy">
              The goal is not a flashy prototype. The goal is a cleaner workflow, better decisions,
              and a delivery path leadership can understand.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {homeCapabilityCards.map((card, index) => (
            <FadeIn
              key={card.title}
              delay={index * 0.08}
              className="blue-panel-soft rounded-[1.9rem] p-7 transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/6 p-3 text-blue-200">
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
              <h3 className="mt-6 text-2xl font-medium text-white">{card.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{card.copy}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">
                {card.tagline}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell border-y blue-divider bg-[rgba(255,255,255,0.02)]">
        <FadeIn>
          <p className="section-kicker">What we are building</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <h2 className="section-title max-w-[14ch]">
              Focused AI tracks for teams that want visible operating leverage.
            </h2>
            <p className="section-copy">
              We are early, so the site should show the workflow problems Xelera is built to solve,
              not pretend to have a library of polished client wins.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roiProofBlocks.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08} className="blue-panel rounded-[1.9rem] p-7">
              <p className="text-5xl font-semibold tracking-[-0.05em] text-blue-200">{item.metric}</p>
              <h3 className="mt-4 text-xl font-medium text-white">{item.label}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="section-kicker">Find your AI path</p>
            <h2 className="section-title mt-4">
              Different operating starting points. One focused route to value.
            </h2>
            <p className="section-copy mt-6">
              Use the selector to see how Xelera frames the first build for revenue teams,
              operations leaders, product owners, and executive sponsors.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <WorkloadFit />
          </FadeIn>
        </div>
      </section>

      <section className="section-shell border-y blue-divider bg-[rgba(255,255,255,0.02)]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <p className="section-kicker">Industry-specific build spotlight</p>
            <h2 className="section-title mt-4 max-w-[14ch]">
              A concrete workflow concept for service-led mid-market growth teams.
            </h2>
            <p className="section-copy mt-6">
              This section works better when it is honest: a representative build vision that shows
              commercial understanding without inventing customer history.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="blue-panel rounded-[2rem] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">
              {featuredCaseStudy.industry}
            </p>
            <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-white">
              {featuredCaseStudy.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">{featuredCaseStudy.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {featuredCaseStudy.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-6 text-slate-200"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="section-kicker">How we work</p>
            <h2 className="section-title mt-4">
              Move from AI interest to a live operating workflow with clearer accountability.
            </h2>
          </FadeIn>
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08} className="blue-panel-soft rounded-[1.6rem] p-6">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-sm text-blue-100">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{step.copy}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell border-t blue-divider bg-[rgba(255,255,255,0.03)]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn>
            <p className="section-kicker">Start the conversation</p>
            <h2 className="section-title mt-4">
              Bring the workflow, bottleneck, or growth target you want to improve next.
            </h2>
            <p className="section-copy mt-6">
              The best first conversation is specific. Tell us where the friction sits today and
              we will shape the most sensible AI starting point with you.
            </p>
            <div className="mt-10 grid gap-4">
              <div className="blue-panel-soft rounded-[1.5rem] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">
                  Included in the flow
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Internal email alert, confirmation email, CRM sync, and a direct booking path for
                  high-intent conversations.
                </p>
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-200"
              >
                Prefer to skip the form? Book a 30-minute AI workflow review
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
