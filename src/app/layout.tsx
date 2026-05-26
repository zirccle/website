import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zirccle | Elegant modern wardrobe concierge",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
