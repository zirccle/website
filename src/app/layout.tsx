import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zirccle | Your wardrobe, in motion",
  description:
    "Join Zirccle first access for a smarter mobile wardrobe, AI outfit suggestions, and confident style planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
