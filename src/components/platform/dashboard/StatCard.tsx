import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-cyan-400" />

        <span className="text-3xl font-black">
          {value}
        </span>
      </div>

      <p className="mt-6 text-zinc-400">
        {title}
      </p>
    </div>
  );
}
