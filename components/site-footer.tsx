import Link from "next/link";
import { siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#07111b]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-100/55">Xelera.ai</p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            AI systems for teams that need clearer decisions, stronger delivery, and customer-facing
            momentum.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href="/solutions" className="transition-colors hover:text-white">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-white">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}
