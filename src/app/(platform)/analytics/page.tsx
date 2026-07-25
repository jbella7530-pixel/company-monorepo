import AnalyticsStats from "@/components/platform/analytics/AnalyticsStats";
import PerformanceChart from "@/components/platform/analytics/PerformanceChart";
import InsightsPanel from "@/components/platform/analytics/InsightsPanel";

export default function AnalyticsPage() {
  return (
    <main className="space-y-8 p-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-neutral-400">
          Monitor business performance and intelligence.
        </p>
      </section>

      <AnalyticsStats />

      <section className="grid gap-6 lg:grid-cols-2">
        <PerformanceChart />
        <InsightsPanel />
      </section>
    </main>
  );
}
