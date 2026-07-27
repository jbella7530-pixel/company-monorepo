import { Bell, Search } from "lucide-react";

export default function FounderHeader() {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Founder Dashboard
        </p>

        <h1 className="mt-2 text-4xl font-black">
          VELTROVE Enterprise Services
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-400">
          Monitor revenue, customers, orders, products, services and AI
          operations from one enterprise workspace.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-2xl border border-white/10 p-4 transition hover:border-cyan-400">
          <Search className="h-5 w-5" />
        </button>

        <button className="rounded-2xl border border-white/10 p-4 transition hover:border-cyan-400">
          <Bell className="h-5 w-5" />
        </button>

        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Signed In
          </p>

          <p className="mt-1 font-bold text-white">
            Founder
          </p>
        </div>
      </div>
    </header>
  );
}
