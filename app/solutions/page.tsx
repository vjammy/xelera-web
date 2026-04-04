import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { siteConfig, solutions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Xelera solutions for AI automation, GTM acceleration, operational workflows, and measurable business ROI.",
};

export default function SolutionsPage() {
  return (
    <div className="section-shell pt-28">
      <FadeIn>
        <p className="section-kicker">Solutions</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <h1 className="section-title">AI solutions built to improve revenue, operations, and customer workflows.</h1>
          <p className="section-copy">
            Xelera packages strategy, workflow delivery, governance, and adoption into focused
            solution tracks that help mid-sized businesses choose the right place to start.
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 space-y-6">
        {solutions.map((solution, index) => (
          <FadeIn
            key={solution.title}
            delay={index * 0.08}
            className="blue-panel grid gap-6 rounded-[1.75rem] p-7 lg:grid-cols-[0.55fr_0.45fr]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">{solution.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-medium text-white">{solution.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{solution.description}</p>
            </div>
            <div className="space-y-3">
              {solution.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-300">
                  {highlight}
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15} className="blue-panel mt-16 rounded-[2rem] p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Next step</p>
            <h2 className="mt-4 text-3xl font-medium text-white">Need help choosing the right starting point?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Request a Demo
            </Link>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Book a 30-minute AI workflow review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
