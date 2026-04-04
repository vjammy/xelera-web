import type { Metadata } from "next";
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
          <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/55">
              Prefer live scheduling?
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
            >
              Book a Call
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
