import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Orbit, ShieldCheck, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { WorkloadFit } from "@/components/workload-fit";
import {
  homeCapabilityCards,
  homeProofItems,
  homeSignalItems,
  processSteps,
  siteConfig,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="hero-shell relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(33,212,253,0.3),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(0,255,170,0.22),_transparent_25%),linear-gradient(180deg,_rgba(6,11,19,0.75),_rgba(6,11,19,0.95))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-12 lg:py-20">
          <FadeIn className="flex max-w-2xl flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-cyan-100/80">
              <Sparkles className="h-3.5 w-3.5" />
              AI that actually ships into your business
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-cyan-100/60">
              Automate work. Accelerate GTM. Prove ROI.
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Deploy AI into real workflows without slowing the business down.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Xelera helps mid-sized businesses automate work, improve sales and service
              workflows, and launch AI systems that deliver measurable business results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Book a Call
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {homeProofItems.map((item) => (
                <div key={item.label} className="border-l border-cyan-300/35 pl-4">
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative flex items-center">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(19,255,197,0.2),_transparent_45%)] blur-3xl" />
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_-40px_rgba(18,255,198,0.45)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-cyan-100/60">
                    Xelera Revenue + Operations Map
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">Live workflow impact snapshot</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan-100/55">
                      ROI readiness
                    </p>
                    <Orbit className="h-4 w-4 text-cyan-200" />
                  </div>
                  <div className="mt-6 space-y-5">
                    {homeSignalItems.map((signal) => (
                      <div key={signal.label}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{signal.label}</span>
                          <span className="font-mono text-cyan-100">{signal.value}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/6">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-[var(--color-accent)] to-emerald-300 shadow-[0_0_32px_rgba(39,246,196,0.4)]"
                            style={{ width: signal.progress }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan-100/55">
                      Current motion
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                        <div className="flex items-center gap-3 text-white">
                          <Bot className="h-5 w-5 text-[var(--color-accent)]" />
                          <span className="text-sm font-medium">Revenue workflow automation</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          Speed up qualification, follow-up, routing, and customer response
                          without adding more manual coordination.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                        <div className="flex items-center gap-3 text-white">
                          <ShieldCheck className="h-5 w-5 text-cyan-200" />
                          <span className="text-sm font-medium">Secure rollout from day one</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          Give leadership confidence with review points, permissions, and
                          evaluation built into the delivery plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(23,36,57,0.95),rgba(11,17,26,0.95))] p-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan-100/55">
                      Delivery path
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                      <span className="rounded-full border border-white/10 px-3 py-1">Map</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="rounded-full border border-white/10 px-3 py-1">Deploy</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="rounded-full border border-white/10 px-3 py-1">Scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <FadeIn>
          <p className="section-kicker">What Xelera does</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="section-title">
              Apply AI where it creates visible gains in revenue, operations, and customer experience.
            </h2>
            <p className="section-copy">
              We help teams find the right use cases, launch production-ready workflows, and
              measure the business impact so AI becomes a practical growth lever instead of an
              expensive side project.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {homeCapabilityCards.map((card, index) => (
            <FadeIn
              key={card.title}
              delay={index * 0.08}
              className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-7 transition-colors duration-300 hover:bg-white/[0.05]"
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-[var(--color-accent)]">
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
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/55">
                {card.tagline}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="section-kicker">Find your AI path</p>
            <h2 className="section-title mt-4">
              Different starting points. One clear route to measurable value.
            </h2>
            <p className="section-copy mt-6">
              Use the selector to see how Xelera shapes the first move for revenue teams,
              operations leaders, product owners, and executive sponsors.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <WorkloadFit />
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="section-kicker">How we work</p>
            <h2 className="section-title mt-4">
              Xelera helps you move from AI interest to deployed workflows with business accountability.
            </h2>
          </FadeIn>
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <FadeIn
                key={step.title}
                delay={index * 0.08}
                className="flex gap-5 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-sm text-cyan-100">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{step.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell border-t border-white/8 bg-[linear-gradient(180deg,rgba(6,11,19,0.4),rgba(6,11,19,0.96))]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn>
            <p className="section-kicker">Start the conversation</p>
            <h2 className="section-title mt-4">Bring us the workflow, bottleneck, or growth target you want to improve.</h2>
            <p className="section-copy mt-6">
              Every submission routes into Xelera&apos;s lead workflow so the team can respond quickly,
              qualify the opportunity, and move you toward the right next step.
            </p>
            <div className="mt-10 grid gap-4">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/55">
                  Included in the flow
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Internal email alert, prospect confirmation email, CRM sync, and a direct booking
                  path for high-intent conversations.
                </p>
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
              >
                Prefer to skip the form? Book directly
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
