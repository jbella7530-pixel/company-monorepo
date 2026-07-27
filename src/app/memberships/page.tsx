import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Memberships | VELTROVE",
  description:
    "Access premium AI tools, business systems, exclusive resources and member benefits.",
};

export default function MembershipsPage() {
  return (
    <MarketingPage
      eyebrow="VELTROVE Memberships"
      title="Memberships"
      description="Unlock premium AI capabilities, exclusive business resources, private communities and advanced productivity systems designed to help you build and scale faster."
      primaryLabel="Return Home"
      primaryHref="/"
    />
  );
}
