import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { principles } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Xelera approaches AI strategy, delivery, governance, and long-term operating value.",
};

export default function AboutPage() {
  return (
    <div className="section-shell pt-28">
      <FadeIn>
        <p className="section-kicker">About Xelera</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <h1 className="section-title">Built for teams that need AI to become an advantage, not a headline.</h1>
          <p className="section-copy">
            Xelera exists to help leaders turn AI exploration into commercial clarity, delivery
            discipline, and repeatable operating value. We stay close to the business problem while
            designing systems strong enough for production reality.
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <FadeIn
            key={principle.title}
            delay={index * 0.08}
            className="blue-panel rounded-[1.75rem] p-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100/60">
              Principle {index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-medium text-white">{principle.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{principle.description}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
