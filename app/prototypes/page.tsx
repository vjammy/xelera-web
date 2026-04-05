import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Workflow } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { prototypeShowcases, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Prototypes",
  description: "Working Xelera prototypes you can launch and evaluate today.",
};

export default function PrototypesPage() {
  const [featuredPrototype, ...upcomingPrototypes] = prototypeShowcases;

  return (
    <div className="section-shell pt-24">
      <FadeIn className="max-w-3xl">
        <p className="section-kicker">Prototypes</p>
        <h1 className="section-title mt-4 max-w-[12ch]">Working AI prototypes built to show the workflow, not just the idea</h1>
        <p className="section-copy mt-6">
          We use this page to showcase live Xelera builds that teams can launch, inspect, and discuss
          in a real operating context.
        </p>
      </FadeIn>

      <FadeIn className="white-panel mt-14 rounded-[2rem] p-8 sm:p-10">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent-strong)]" />
              {featuredPrototype.status}
            </div>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-slate-950 sm:text-5xl">
              {featuredPrototype.name}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{featuredPrototype.summary}</p>
            <p className="mt-4 text-base leading-7 text-slate-500">{featuredPrototype.audience}</p>
          </div>

          <div className="flex w-full max-w-sm flex-col gap-3">
            <a
              href={featuredPrototype.launchUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex w-full items-center justify-center gap-2"
            >
              {featuredPrototype.launchCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              {featuredPrototype.secondaryCta}
            </a>
            <p className="text-sm leading-6 text-slate-500">{featuredPrototype.disclaimer}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/70 p-7">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5 text-[var(--color-accent-strong)]" />
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Workflow the prototype covers</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {featuredPrototype.workflowSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent-strong)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.6rem] border border-slate-200 p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent-strong)]" />
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Human-in-the-loop by design</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">{featuredPrototype.trustNote}</p>
            </div>

            <div className="rounded-[1.6rem] border border-slate-200 p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Operations support</p>
              <ul className="mt-4 space-y-3">
                {featuredPrototype.opsFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent-strong)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker">Upcoming</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Additional workflows in the Xelera prototype pipeline
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              We&apos;re using the same showcase pattern so new prototypes can be added as they become ready for external review.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {upcomingPrototypes.map((prototype, index) => (
          <FadeIn key={prototype.name} delay={index * 0.04} className="white-panel rounded-[1.6rem] p-6">
            <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {prototype.status}
            </div>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-slate-950">{prototype.name}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{prototype.summary}</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">{prototype.audience}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="white-panel mt-14 flex flex-col gap-5 rounded-[1.8rem] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Want a walkthrough?</p>
          <p className="mt-2 text-lg leading-7 text-slate-600">
            We can show how this prototype works, where human review fits, and how it could map into your workflow.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
            Book a Discovery Call
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]"
          >
            Send a brief
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
