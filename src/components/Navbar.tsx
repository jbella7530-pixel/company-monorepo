export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-2xl font-black tracking-widest">
          VELTROVE
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#products" className="transition hover:text-cyan-400">
            Products
          </a>
          <a href="#services" className="transition hover:text-cyan-400">
            Services
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        <button className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
}
