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
            AI systems for teams that need clearer decisions, stronger delivery, and practical
            progress on the workflows they want to modernize next.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/solutions" className="transition-colors hover:text-slate-950">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-slate-950">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-slate-950">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-slate-950">
            Contact
          </Link>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-950"
          >
            Book a 30-minute AI workflow review
          </a>
        </div>
      </div>
    </footer>
  );
}
