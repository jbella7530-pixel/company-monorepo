import Link from "next/link";
import { marketingNavigation } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest"
        >
          VELTROVE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {marketingNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/memberships"
          className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
