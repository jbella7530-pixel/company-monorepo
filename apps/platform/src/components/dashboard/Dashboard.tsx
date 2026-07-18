import AssistantPanel from "@/components/assistant/AssistantPanel";
import MetricCard from "./MetricCard";
import RecentActivity from "./RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground">
          Enterprise Platform Dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Projects"
          value={0}
          description="Active projects"
        />

        <MetricCard
          title="AI Agents"
          value={0}
          description="Running agents"
        />

        <MetricCard
          title="Workflows"
          value={0}
          description="Automations"
        />

        <MetricCard
          title="Knowledge"
          value={0}
          description="Knowledge assets"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <AssistantPanel />
      </div>
    </div>
  );
}
