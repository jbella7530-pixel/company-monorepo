"use client";

import Link from "next/link";
import { navigation } from "@/config/navigation";

export default function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-white/10 bg-black px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          VELTROVE
        </h1>

        <p className="text-sm text-neutral-400">
          Business Operating System
        </p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-neutral-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
