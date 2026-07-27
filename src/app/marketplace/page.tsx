import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Marketplace | VELTROVE",
  description:
    "Discover AI solutions, digital products, templates and services from the VELTROVE ecosystem.",
};

export default function MarketplacePage() {
  return (
    <MarketingPage
      eyebrow="VELTROVE Marketplace"
      title="Marketplace"
      description="Explore a growing ecosystem of AI-powered software, premium digital assets, automation solutions and business resources from VELTROVE and trusted creators."
      primaryLabel="Return Home"
      primaryHref="/"
    />
  );
}
