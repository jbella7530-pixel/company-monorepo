export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h3 className="text-xl font-black tracking-widest text-white">
            VELTROVE
          </h3>

          <p className="mt-2 text-zinc-500">
            AI • SOFTWARE • AUTOMATION
          </p>
        </div>

        <div className="flex justify-center gap-8 md:justify-end">
          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#products" className="hover:text-cyan-400">
            Products
          </a>
        </div>
      </div>
    </footer>
  );
}
