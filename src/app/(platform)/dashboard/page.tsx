import StatCard from "@/components/platform/dashboard/StatCard";
import AgentStatus from "@/components/platform/dashboard/AgentStatus";
import ActivityFeed from "@/components/platform/dashboard/ActivityFeed";
import QuickActions from "@/components/platform/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <main className="space-y-8 p-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          Command Centre
        </h1>

        <p className="text-neutral-400">
          VELTROVE Business Operating System
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard title="Revenue" value="R0" />
        <StatCard title="Tasks" value="0" />
        <StatCard title="AI Agents" value="0" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <AgentStatus />
        <QuickActions />
      </section>

      <ActivityFeed />
    </main>
  );
}
