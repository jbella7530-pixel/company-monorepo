import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Genesis | VELTROVE",
  description:
    "Meet Genesis, the AI operating intelligence powering the next generation of businesses.",
};

export default function GenesisPage() {
  return (
    <MarketingPage
      eyebrow="Genesis"
      title="AI Operating Intelligence"
      description="Genesis is the intelligent execution engine behind VELTROVE, combining AI assistants, automation, knowledge management and decision support into one unified operating system."
      primaryLabel="Return Home"
      primaryHref="/"
    />
  );
}
