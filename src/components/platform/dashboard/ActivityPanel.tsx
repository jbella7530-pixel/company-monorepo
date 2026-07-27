import { Activity } from "lucide-react";

const activities = [
  "Genesis workspace updated",
  "AI workflow completed",
  "Marketplace synchronised",
  "Analytics refreshed",
];

export default function ActivityPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <Activity className="text-cyan-400" />
        Recent Activity
      </h2>

      <div className="space-y-4 text-zinc-300">
        {activities.map((activity) => (
          <p key={activity}>
            • {activity}
          </p>
        ))}
      </div>
    </div>
  );
}
