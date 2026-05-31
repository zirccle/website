import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zirccle",
  description:
    "Join Zirccle first access for a smarter mobile wardrobe, AI outfit suggestions, and confident style planning.",
};

export const viewport = {
  themeColor: "#fcf9f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={manrope.className}>
      <head>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
