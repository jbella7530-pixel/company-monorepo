import Link from "next/link";
import {
  Activity,
  Bot,
  Briefcase,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

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

const quickActions = [
  {
    label: "Create AI Agent",
    href: "/ai",
  },
  {
    label: "Launch Workspace",
    href: "/dashboard",
  },
  {
    label: "Open Commerce",
    href: "/commerce",
  },
  {
    label: "Generate Report",
    href: "/analytics",
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
          automate workflows, launch products and manage your entire
          business ecosystem from one place.
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
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Activity className="text-cyan-400" />
            Recent Activity
          </h2>

          <div className="space-y-4 text-zinc-300">
            <p>• Genesis workspace updated</p>
            <p>• AI workflow completed</p>
            <p>• Marketplace synchronised</p>
            <p>• Analytics refreshed</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Users className="text-cyan-400" />
            Quick Actions
          </h2>

          <div className="grid gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 transition hover:border-cyan-400"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
