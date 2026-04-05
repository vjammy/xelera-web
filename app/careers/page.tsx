import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { careerPrinciples, openRoles } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build practical AI systems with a small team focused on real business outcomes.",
};

export default function CareersPage() {
  return (
    <div className="section-shell pt-24">
      <FadeIn className="max-w-3xl">
        <p className="section-kicker">Careers</p>
        <h1 className="section-title mt-4 max-w-[11ch]">Join a team focused on useful AI, not theater.</h1>
        <p className="section-copy mt-6">
          We care about building AI systems that work in the real world, inside real businesses,
          with real constraints. That means more ownership, more clarity, and more focus on what
          actually helps customers move faster.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn className="white-panel rounded-[1.8rem] p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">How we work</h2>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            {careerPrinciples.map((principle) => (
              <li key={principle}>• {principle}</li>
            ))}
          </ul>
        </FadeIn>

        <div className="grid gap-5">
          {openRoles.map((role, index) => (
            <FadeIn key={role.title} delay={index * 0.05} className="white-panel rounded-[1.8rem] p-8">
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950">{role.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{role.description}</p>
              <a
                href="mailto:careers@xelera.ai?subject=Application%20for%20Xelera"
                className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent-strong)]"
              >
                Apply via email
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
