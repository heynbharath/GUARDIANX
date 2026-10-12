import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://guardianx-safety.vercel.app"),
  title: "GuardianX — Safety, before it's too late.",
  description:
    "Independence for them. Peace of mind for you. Explore the live interactive wearable safety prototype with fall triage, real-time telemetry, and family care circle coordination.",
  keywords: [
    "Elderly Remote Safety",
    "GuardianX",
    "Wearable Safety",
    "Fall Detection Concept",
    "Caregiver Dashboard",
    "Health Tech Prototype",
    "Elder Care Technology",
  ],
  authors: [{ name: "GuardianX Research" }],
  openGraph: {
    title: "GuardianX — Elderly Remote Safety Platform",
    description:
      "Independence for them. Peace of mind for you. Explore the live interactive wearable safety prototype with fall triage, real-time telemetry, and family care circle coordination.",
    siteName: "GuardianX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GuardianX — Elderly Remote Safety Platform Interactive Prototype",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuardianX — Elderly Remote Safety Platform",
    description:
      "Independence for them. Peace of mind for you. Explore the live interactive wearable safety prototype with fall triage, real-time telemetry, and family care circle coordination.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#071311",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#071311] text-[#f2fbf5] min-h-screen flex flex-col selection:bg-gx-mint selection:text-[#08221a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
