import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { prototypes, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Prototypes",
  description: "Popular AI prototypes businesses adopt first.",
};

export default function PrototypesPage() {
  return (
    <div className="section-shell pt-24">
      <FadeIn className="max-w-3xl">
        <p className="section-kicker">Prototypes</p>
        <h1 className="section-title mt-4 max-w-[11ch]">Popular prototypes businesses adopt first</h1>
        <p className="section-copy mt-6">
          These are proven &quot;starts here&quot; projects, fast to deploy, easy to measure, and
          designed to scale.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {prototypes.map((prototype, index) => (
          <FadeIn key={prototype.title} delay={index * 0.03} className="white-panel rounded-[1.6rem] p-6">
            <h2 className="text-xl font-medium tracking-[-0.03em] text-slate-950">{prototype.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{prototype.description}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="white-panel mt-14 flex flex-col gap-5 rounded-[1.8rem] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Need help choosing?</p>
          <p className="mt-2 text-lg leading-7 text-slate-600">
            We can help you decide which prototype gives the fastest path to measurable value.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
            Book a Discovery Call
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]">
            Send a brief
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
