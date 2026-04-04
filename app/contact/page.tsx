import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CalInlineEmbed } from "@/components/cal-inline-embed";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Xelera about AI strategy, production delivery, or governed automation.",
};

export default function ContactPage() {
  return (
    <div className="section-shell pt-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeIn>
          <p className="section-kicker">Contact</p>
          <h1 className="section-title mt-4">Tell us where the AI opportunity is getting stuck.</h1>
          <p className="section-copy mt-6">
            Whether you need strategic alignment, a faster path to deployment, or a more durable
            AI operating model, Xelera can help shape the right next move.
          </p>
          <div className="white-panel mt-8 rounded-[1.75rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
              Prefer live scheduling?
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              You can book directly below without leaving the site, or use the external booking
              page if you prefer.
            </p>
            <a href="#book-call" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]">
              Jump to inline scheduler
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>

      <FadeIn id="book-call" delay={0.12} className="mt-14">
        <div className="white-panel rounded-[2rem] p-4 sm:p-6">
          <div className="flex flex-col gap-3 border-b border-slate-900/8 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Book instantly</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-950">
                Schedule your discovery call without leaving the page.
              </h2>
            </div>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Open full Cal page
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-900/8 bg-white">
            <CalInlineEmbed bookingUrl={siteConfig.bookingUrl} className="w-full" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
