import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Store | VELTROVE",
  description:
    "Browse premium AI software, templates, digital assets and business tools from VELTROVE.",
};

export default function StorePage() {
  return (
    <MarketingPage
      eyebrow="VELTROVE Store"
      title="Store"
      description="Discover premium AI software, automation systems, templates, digital products and business resources designed to accelerate your growth."
      primaryLabel="Return Home"
      primaryHref="/"
    />
  );
}
