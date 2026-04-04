"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { navigationLinks, siteConfig } from "@/lib/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(4,10,17,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-white/[0.04] font-mono text-sm text-cyan-100">
            X
          </span>
          <div>
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan-100/55">
              Xelera.ai
            </div>
            <div className="text-sm text-slate-300">AI operating systems for growth</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
            onClick={() => trackEvent("booking_click", { location: "header" })}
          >
            Book a Call
          </a>
          <Link href="/contact" className="button-primary">
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-3 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/8 bg-[rgba(4,10,17,0.96)] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-slate-300 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
                onClick={() => {
                  setIsOpen(false);
                  trackEvent("booking_click", { location: "mobile_header" });
                }}
              >
                Book a Call
              </a>
              <Link href="/contact" className="button-primary" onClick={() => setIsOpen(false)}>
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
