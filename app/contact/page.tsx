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
          <div className="white-panel mt-8 rounded-[1.75rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
              Prefer live scheduling?
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary mt-4"
            >
              Book a 30-minute AI workflow review
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
