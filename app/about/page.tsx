import type { Metadata } from "next";
import { FinalCta, PageShell } from "../site-components";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About | Zirccle",
  description: "Learn how Zirccle turns wardrobe organization and outfit planning into a calmer daily routine.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutClient />
      <FinalCta />
    </PageShell>
  );
}
