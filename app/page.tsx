import Link from "next/link";
import { Bot, BrainCircuit, Orbit, ShieldCheck } from "lucide-react";
import { CalInlineEmbed } from "@/components/cal-inline-embed";
import { FadeIn } from "@/components/fade-in";
import {
  featuredCaseStudy,
  homeCapabilityCards,
  roiProofBlocks,
  siteConfig,
} from "@/lib/site-content";

const primaryCards = homeCapabilityCards.slice(0, 3);

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent text-slate-950">
      <section className="section-shell pt-16 sm:pt-20">
        <div className="blue-panel relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(164,196,255,0.26),transparent_20%),radial-gradient(circle_at_18%_76%,rgba(99,138,255,0.18),transparent_24%)]" />
          <div className="grid-pattern absolute inset-0 opacity-35" />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:items-center">
            <FadeIn className="max-w-2xl">
              <p className="inline-flex w-fit rounded-full border border-white/12 bg-white/8 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-blue-100/90">
                AI that actually ships into your business
              </p>
              <h1 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Build useful AI systems without slowing the business down.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                Xelera helps mid-sized teams find the right AI use case, build the workflow, and
                launch it with real operational discipline.
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
                <Link href="/contact" className="button-secondary">
                  Send a Project Brief
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-200">
                <span>Infrastructure-agnostic</span>
                <span>On-prem or cloud</span>
                <span>Built for real operations</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-blue-100/70">
                  What we help build
                </p>
                <div className="mt-5 space-y-3">
                  {roiProofBlocks.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-[rgba(7,16,31,0.24)] px-4 py-4"
                    >
                      <p className="text-base font-semibold text-white">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">How Xelera helps</p>
              <h2 className="section-title mt-4 max-w-[12ch]">
                Pick the right workflow. Build it well. Launch it with confidence.
              </h2>
            </div>
            <p className="section-copy">
              The site should explain the offer quickly. These are the three jobs Xelera is here to
              do for teams that want AI to create real business movement.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {primaryCards.map((card, index) => (
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
            <p className="section-kicker">Representative build</p>
            <h2 className="section-title mt-4 max-w-[13ch]">
              A clearer example of the kind of project Xelera is building.
            </h2>
            <p className="section-copy mt-6">
              We do not need to invent client outcomes. A concrete build example is more honest and
              more useful for buyers evaluating fit.
            </p>
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
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
          <FadeIn>
            <p className="section-kicker">Book a meeting</p>
            <h2 className="section-title mt-4 max-w-[12ch]">
              If the workflow is urgent, schedule directly here.
            </h2>
            <p className="section-copy mt-6">
              Booking is the most reliable conversion path right now, so it should be visible and
              easy instead of buried behind another page.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Open Cal.com
              </a>
              <Link href="/contact" className="button-secondary">
                Contact Page
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="white-panel rounded-[2rem] p-4 sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-900/8 bg-white">
              <CalInlineEmbed bookingUrl={siteConfig.bookingUrl} className="w-full" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
