import type { Metadata } from "next";
import Link from "next/link";
import { Bolt, Calculator, Check, Users } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { pricingPlans, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose between quick sprints, a dedicated AI pod, or a custom long-term engagement.",
};

const pricingIcons = [Bolt, Users, Calculator];

export default function PricingPage() {
  return (
    <div className="section-shell pt-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Pricing</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
          Engagement models built around speed, ownership, and scale
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Start with a short sprint, embed an AI pod inside your team, or build toward a broader
          long-term transformation.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => {
          const Icon = pricingIcons[index] ?? Bolt;
          return (
            <FadeIn
              key={plan.name}
              delay={index * 0.06}
              className={`relative rounded-[1.8rem] border p-8 ${
                plan.featured
                  ? "border-blue-200 bg-[linear-gradient(180deg,#f5f8ff_0%,#eef3ff_100%)] shadow-[0_24px_80px_-58px_rgba(47,92,255,0.45)]"
                  : "white-panel"
              }`}
            >
              {plan.featured ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--color-accent-strong)] px-4 py-2 text-sm font-semibold text-white">
                  Most Popular
                </div>
              ) : null}

              <div className="mx-auto inline-flex rounded-full bg-blue-100 p-5 text-[var(--color-accent-strong)]">
                <Icon className="h-8 w-8" />
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{plan.name}</h2>
                <p className="mt-3 text-lg text-slate-600">{plan.duration}</p>
                <div className="mt-6 flex items-end justify-center gap-1">
                  <span className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">
                    {plan.price}
                  </span>
                  {plan.cadence ? <span className="pb-1 text-xl text-slate-600">{plan.cadence}</span> : null}
                </div>
              </div>

              <ul className="mt-10 space-y-4 text-left text-base leading-7 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                {plan.name === "Long Commitment" ? (
                  <Link href="/contact" className="button-secondary flex w-full">
                    {plan.cta}
                  </Link>
                ) : (
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${plan.featured ? "button-primary" : "button-secondary"} flex w-full`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
