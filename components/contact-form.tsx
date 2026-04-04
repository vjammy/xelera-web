"use client";

import { useMemo, useState, useTransition } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { contactInterestOptions, siteConfig } from "@/lib/site-content";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  interest: contactInterestOptions[0] ?? "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({
    type: "idle",
  });
  const [isPending, startTransition] = useTransition();

  const submitDisabled = useMemo(
    () =>
      !formState.name ||
      !formState.email ||
      !formState.company ||
      !formState.role ||
      !formState.message,
    [formState],
  );

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("form_submitted_attempt", { form_name: "contact" });

    startTransition(async () => {
      setStatus({ type: "idle" });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formState,
            startedAt,
          }),
        });

        const result = (await response.json()) as {
          ok: boolean;
          error?: string;
        };

        if (!response.ok || !result.ok) {
          throw new Error(result.error ?? "We could not submit the form.");
        }

        trackEvent("form_submitted", {
          form_name: "contact",
          interest: formState.interest,
        });

        setStatus({
          type: "success",
          message:
            "Thanks. Your inquiry is in motion. We have sent a confirmation and routed your note to the Xelera team.",
        });
        setFormState(initialState);
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "We could not process your request right now. Please try again shortly.",
        });
      }
    });
  }

  return (
    <div className="blue-panel rounded-[2rem] p-6 sm:p-8">
      <form
        className="grid gap-5"
        onSubmit={handleSubmit}
        onFocus={() => trackEvent("form_started", { form_name: "contact" })}
      >
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          value={formState.website}
          onChange={(event) => updateField("website", event.target.value)}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            value={formState.name}
            onChange={(value) => updateField("name", value)}
            placeholder="Your name"
          />
          <Field
            label="Work email"
            type="email"
            value={formState.email}
            onChange={(value) => updateField("email", value)}
            placeholder="you@company.com"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Company"
            value={formState.company}
            onChange={(value) => updateField("company", value)}
            placeholder="Company name"
          />
          <Field
            label="Role"
            value={formState.role}
            onChange={(value) => updateField("role", value)}
            placeholder="Head of Product"
          />
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Area of interest</span>
          <select
            value={formState.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className="input-shell"
          >
            {contactInterestOptions.map((option) => (
              <option key={option} value={option} className="bg-slate-950 text-white">
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">What should we know?</span>
          <textarea
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Share the business problem, current blockers, or the outcome you want to reach."
            className="input-shell min-h-36 resize-y"
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-white/8 pt-5">
          <button
            type="submit"
            disabled={submitDisabled || isPending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f7cff,#2f5cff)] px-6 py-3.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Sending..." : "Request a Demo"}
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-sm leading-6 text-slate-400">
            Submission triggers an internal alert, a confirmation email, CRM logging, and a booking
            handoff.
          </p>
        </div>
      </form>

      {status.type !== "idle" ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-4 text-sm leading-6 ${
            status.type === "success"
              ? "border-blue-300/20 bg-blue-400/10 text-blue-50"
              : "border-rose-400/20 bg-rose-400/10 text-rose-100"
          }`}
        >
          <div className="flex items-start gap-3">
            {status.type === "success" ? <CheckCircle2 className="mt-0.5 h-5 w-5" /> : null}
            <div>
              <p>{status.message}</p>
              {status.type === "success" ? (
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-blue-200"
                  onClick={() => trackEvent("booking_click", { location: "contact_form_success" })}
                >
                  Book a 30-minute AI workflow review
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="input-shell"
      />
    </label>
  );
}
