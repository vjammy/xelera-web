import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://xelera.ai"),
  title: {
    default: "Xelera.ai | AI that actually ships into your business",
    template: "%s | Xelera.ai",
  },
  description:
    "Xelera.ai helps teams automate work, accelerate GTM, and build agentic AI systems securely, reliably, and with measurable ROI.",
  applicationName: "Xelera.ai",
  keywords: [
    "AI strategy",
    "AI consulting",
    "AI systems",
    "AI automation",
    "Agentic workflows",
    "Enterprise AI",
    "Xelera",
  ],
  openGraph: {
    title: "Xelera.ai",
    description:
      "AI that actually ships into your business.",
    url: "https://xelera.ai",
    siteName: "Xelera.ai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Xelera.ai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelera.ai",
    description: "AI that actually ships into your business.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <Analytics />
        <div className="relative flex min-h-full flex-col overflow-x-clip">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
