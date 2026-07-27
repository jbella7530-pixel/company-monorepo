import ActivityPanel from "@/components/platform/dashboard/ActivityPanel";
import QuickActions from "@/components/platform/dashboard/QuickActions";

import FounderHeader from "@/components/platform/founder/FounderHeader";
import RevenueGrid from "@/components/platform/founder/RevenueGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <FounderHeader />

      <RevenueGrid />

      <section className="grid gap-8 lg:grid-cols-2">
        <ActivityPanel />
        <QuickActions />
      </section>
    </div>
  );
}
