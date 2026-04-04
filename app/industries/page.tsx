import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { industries } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how Xelera frames AI opportunities across revenue teams, operations, platforms, and regulated environments.",
};

export default function IndustriesPage() {
  return (
    <div className="section-shell bg-[linear-gradient(180deg,#f6f8fb_0%,#eef3f8_100%)] pt-28">
      <FadeIn>
        <p className="section-kicker">Industries and use cases</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <h1 className="section-title">Where AI adoption gets real, Xelera becomes the operating partner.</h1>
          <p className="section-copy">
            We shape AI programs around commercial outcomes, workflow realities, and governance
            requirements so the solution fits the business instead of fighting it.
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {industries.map((industry, index) => (
          <FadeIn
            key={industry.title}
            delay={index * 0.08}
            className="rounded-[1.75rem] border border-slate-900/8 bg-white p-7 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.22)]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">{industry.kicker}</p>
            <h2 className="mt-4 text-2xl font-medium text-slate-950">{industry.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{industry.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {industry.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-slate-900/8 bg-[var(--color-paper-soft)] px-3 py-1.5 text-sm text-slate-600"
                >
                  {example}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
