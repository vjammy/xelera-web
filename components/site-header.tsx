"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { trackEvent } from "@/lib/analytics";
import { navigationLinks, siteConfig } from "@/lib/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b blue-divider bg-[rgba(255,255,255,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <BrandLockup href="/" onClick={() => setIsOpen(false)} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-950"
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
            Book a 30-minute AI workflow review
          </a>
          <Link href="/contact" className="button-primary">
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-900/10 bg-white p-3 text-slate-900 shadow-sm lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t blue-divider bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-slate-700 transition-colors hover:text-slate-950"
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
                Book a 30-minute AI workflow review
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
