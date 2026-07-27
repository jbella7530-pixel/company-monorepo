import type { LucideIcon } from "lucide-react";

interface RevenueCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export default function RevenueCard({
  title,
  value,
  change,
  icon: Icon,
}: RevenueCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-black">
            {value}
          </h3>

          <p className="mt-2 text-sm font-semibold text-emerald-400">
            {change}
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-400/10 p-4">
          <Icon className="h-8 w-8 text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
