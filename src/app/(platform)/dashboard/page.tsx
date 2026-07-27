import {
  Bot,
  Briefcase,
  TrendingUp,
  Zap,
} from "lucide-react";

import ActivityPanel from "@/components/platform/dashboard/ActivityPanel";
import QuickActions from "@/components/platform/dashboard/QuickActions";
import StatCard from "@/components/platform/dashboard/StatCard";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    icon: Briefcase,
  },
  {
    title: "AI Agents",
    value: "8",
    icon: Bot,
  },
  {
    title: "Automations",
    value: "27",
    icon: Zap,
  },
  {
    title: "Growth Score",
    value: "94%",
    icon: TrendingUp,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Welcome to VELTROVE
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Your AI-powered business operating system. Monitor projects,
          automate workflows, launch products and manage your business
          ecosystem from one place.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <ActivityPanel />
        <QuickActions />
      </section>
    </div>
  );
}
