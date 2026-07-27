import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Industry OS | VELTROVE",
  description:
    "Industry-specific operating systems built for modern organisations.",
};

export default function IndustryPage() {
  return (
    <MarketingPage
      eyebrow="Industry OS"
      title="Industry Operating Systems"
      description="Purpose-built operating systems tailored for different industries, combining AI, workflows, analytics and automation to help organisations operate at their highest potential."
      primaryLabel="Return Home"
      primaryHref="/"
    />
  );
}
