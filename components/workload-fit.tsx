"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig, workloadFitOptions } from "@/lib/site-content";

export function WorkloadFit() {
  const [selectedId, setSelectedId] = useState(workloadFitOptions[0]?.id ?? "");
  const selected =
    workloadFitOptions.find((option) => option.id === selectedId) ?? workloadFitOptions[0];

  return (
    <div className="white-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-wrap gap-3">
        {workloadFitOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setSelectedId(option.id);
              trackEvent("workload_fit_selected", { path: option.id });
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selected.id === option.id
                ? "bg-[linear-gradient(135deg,#4f7cff,#2f5cff)] text-white shadow-[0_12px_34px_-18px_rgba(79,124,255,0.9)]"
                : "border border-slate-900/8 bg-[var(--color-paper-soft)] text-slate-700 hover:bg-[#e7eefb]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-slate-900/8 bg-[var(--color-paper-soft)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">{selected.kicker}</p>
        <h3 className="mt-4 text-2xl font-medium text-slate-950">{selected.title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{selected.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {selected.outcomes.map((outcome) => (
            <div key={outcome} className="rounded-2xl border border-slate-900/8 bg-white px-4 py-3 text-sm text-slate-600">
              {outcome}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
            onClick={() => trackEvent("booking_click", { location: `workload_fit_${selected.id}` })}
          >
            Book a 30-minute AI workflow review
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)]"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
