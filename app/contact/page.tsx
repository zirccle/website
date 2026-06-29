import type { Metadata } from "next";
import { PageShell, ContactSection } from "../site-components";

export const metadata: Metadata = {
  title: "Contact | Zirccle",
  description: "Reach the Zirccle team for support, partnerships, feedback, or early access.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
