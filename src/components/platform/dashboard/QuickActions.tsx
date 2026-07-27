import Link from "next/link";
import { Users } from "lucide-react";

const actions = [
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

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <Users className="text-cyan-400" />
        Quick Actions
      </h2>

      <div className="grid gap-4">
        {actions.map((action) => (
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
  );
}
