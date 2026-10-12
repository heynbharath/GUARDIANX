import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GuardianX — Safety, before it's too late.",
  description:
    "A wearable-powered elderly remote safety and response platform concept by Sunaina Mohapatra. Bringing passive signals, family awareness, and coordinated escalation together.",
  keywords: [
    "Elderly Remote Safety",
    "GuardianX",
    "Wearable Safety",
    "Fall Detection Concept",
    "Caregiver Dashboard",
    "Health Tech Prototype",
  ],
  authors: [{ name: "Sunaina Mohapatra" }],
  openGraph: {
    title: "GuardianX — Elderly Remote Safety Concept",
    description:
      "Independence for them. Peace of mind for you. A wearable-powered elderly safety and response platform concept by Sunaina Mohapatra.",
    siteName: "GuardianX",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
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
