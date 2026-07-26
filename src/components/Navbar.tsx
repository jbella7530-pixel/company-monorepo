import { marketingNavigation } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-2xl font-black tracking-widest">
          VELTROVE
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {marketingNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
}
