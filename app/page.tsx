import Link from "next/link";
import { ArrowRight, Bot, BriefcaseBusiness, ShieldCheck, Zap } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import {
  heroHighlights,
  prototypes,
  roiStats,
  services,
  siteConfig,
  valueCards,
} from "@/lib/site-content";

const serviceIcons = [Zap, Bot, BriefcaseBusiness, ShieldCheck];

export default function Home() {
  return (
    <div className="bg-transparent text-slate-950">
      <section className="section-shell pb-8 pt-10 sm:pt-12">
        <div className="hero-card overflow-hidden rounded-[2.4rem]">
          <div className="hero-grid">
            <FadeIn className="relative z-10 max-w-2xl px-7 py-16 sm:px-10 sm:py-20">
              <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                AI that actually ships into your business
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
                Xelera.ai helps teams automate work, accelerate GTM, and build agentic AI
                systems, securely, reliably, and with measurable ROI.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="button-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/prototypes" className="hero-outline-button">
                  Explore Prototypes
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-blue-100">
                {heroHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            AI is the biggest efficiency unlock since the internet
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Most businesses already have the data, tools, and workflows. What&apos;s missing is an
            AI layer that connects them end-to-end. Xelera.ai builds that layer: automations,
            agents, and intelligence that reduce cost, eliminate repetitive work, and increase
            speed without disrupting your existing systems.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valueCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08} className="white-panel rounded-[1.8rem] p-7">
              <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-[var(--color-accent-strong)]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            ROI you can measure in weeks
          </h2>
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
          {roiStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06} className="text-center">
              <div className="text-5xl font-semibold tracking-[-0.06em] text-[var(--color-accent-strong)] sm:text-6xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            From quick wins to full AI transformation
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Zap;
            return (
              <FadeIn key={service.title} delay={index * 0.06} className="white-panel rounded-[1.8rem] p-7">
                <div className="flex items-start gap-4">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-[var(--color-accent-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Popular prototypes businesses adopt first
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            These are proven &quot;starts here&quot; projects, fast to deploy, easy to measure, and
            designed to scale.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prototypes.map((prototype, index) => (
            <FadeIn key={prototype.title} delay={index * 0.03} className="white-panel rounded-[1.4rem] p-5">
              <h3 className="text-lg font-medium text-slate-950">{prototype.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{prototype.description}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link href="/prototypes" className="button-secondary">
            See all prototypes
          </Link>
        </FadeIn>
      </section>

      <section className="section-shell pt-8">
        <FadeIn className="white-panel flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Start here</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Ready to explore the right workflow for your business?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Book a discovery call, or send a short project brief if you want us to review the
              use case before we talk.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
              Book a Discovery Call
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]">
              Send a project brief
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
