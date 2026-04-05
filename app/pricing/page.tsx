import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { pricingPlans, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple engagement models for discovery, prototype delivery, and ongoing AI execution.",
};

export default function PricingPage() {
  return (
    <div className="section-shell pt-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Pricing</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
          Start with the scope that matches your AI ambition
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Some teams need clarity first. Others are ready for a live prototype or an ongoing
          delivery partner. These are the common ways we engage.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <FadeIn key={plan.name} delay={index * 0.06} className="white-panel rounded-[1.8rem] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{plan.name}</p>
            <div className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              {plan.price}
            </div>
            <p className="mt-4 text-base leading-7 text-slate-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="white-panel mt-14 rounded-[1.8rem] p-8">
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Need a custom scope?
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          If you already know the workflow, the systems involved, or the implementation constraints,
          we can tailor the engagement around that reality instead of forcing it into a package.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
            Book a Discovery Call
          </a>
          <Link href="/contact" className="button-secondary">
            Send a brief
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
