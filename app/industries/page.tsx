import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { industries } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how Xelera frames AI opportunities across revenue teams, operations, platforms, and regulated environments.",
};

export default function IndustriesPage() {
  return (
    <div className="section-shell pt-28">
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
            className="blue-panel rounded-[1.75rem] p-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">{industry.kicker}</p>
            <h2 className="mt-4 text-2xl font-medium text-white">{industry.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{industry.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {industry.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-slate-300"
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
