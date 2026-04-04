"use client";

import Script from "next/script";
import { useEffect, useId, useMemo } from "react";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      ns?: Record<string, (...args: unknown[]) => void>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

type CalInlineEmbedProps = {
  bookingUrl: string;
  className?: string;
};

function getCalLink(bookingUrl: string) {
  try {
    const url = new URL(bookingUrl);
    return url.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  } catch {
    return bookingUrl.replace(/^https?:\/\/[^/]+\//, "").replace(/^\/+/, "").replace(/\/+$/, "");
  }
}

export function CalInlineEmbed({ bookingUrl, className }: CalInlineEmbedProps) {
  const rawId = useId();
  const elementId = useMemo(() => `cal-inline-${rawId.replace(/[:]/g, "")}`, [rawId]);
  const calLink = useMemo(() => getCalLink(bookingUrl), [bookingUrl]);

  useEffect(() => {
    const cal = window.Cal;
    if (!cal || !calLink) {
      return;
    }

    cal("init", "xelera-inline", { origin: "https://cal.com" });

    const scopedCal = cal.ns?.["xelera-inline"];
    if (!scopedCal) {
      return;
    }

    scopedCal("inline", {
      elementOrSelector: `#${elementId}`,
      calLink,
      config: {
        layout: "month_view",
      },
    });

    scopedCal("ui", {
      styles: {
        body: {
          background: "#ffffff",
        },
        eventTypeListItem: {
          background: "#f8fbff",
        },
      },
    });
  }, [calLink, elementId]);

  return (
    <>
      <Script id="cal-embed-loader" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; let s = d.createElement("script"); s.src = A; d.head.appendChild(s); cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); } else { p(cal, ar); } return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");`}
      </Script>
      <div
        id={elementId}
        className={className}
        style={{ minHeight: "700px" }}
      />
    </>
  );
}
