"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-black/80 px-6 backdrop-blur-xl">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Workspace
        </p>

        <h2 className="text-xl font-semibold text-white">
          VELTROVE
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-neutral-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          />
        </div>

        <button
          className="rounded-xl border border-white/10 p-2 transition hover:bg-white/5"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-semibold text-white">
          V
        </div>
      </div>
    </header>
  );
}
