import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t blue-divider bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-xl">
          <BrandLockup compact />
          <p className="mt-4 text-lg leading-8 text-slate-600">
            AI systems that help teams automate work, accelerate GTM, and deploy useful workflows
            without unnecessary complexity.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-950">
            Home
          </Link>
          <Link href="/prototypes" className="transition-colors hover:text-slate-950">
            Prototypes
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-slate-950">
            Pricing
          </Link>
          <Link href="/careers" className="transition-colors hover:text-slate-950">
            Careers
          </Link>
          <Link href="/contact" className="transition-colors hover:text-slate-950">
            Contact
          </Link>
          <Link href="/blog" className="transition-colors hover:text-slate-950">
            Blog
          </Link>
          <Link href="/terms" className="transition-colors hover:text-slate-950">
            Terms
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-slate-950">
            Privacy
          </Link>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-950"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </footer>
  );
}
