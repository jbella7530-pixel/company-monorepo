import { ArrowRight } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e922,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 uppercase tracking-[0.5em] text-cyan-400">
            AI • SOFTWARE • AUTOMATION
          </p>

          <h1 className="mb-8 text-6xl font-black leading-none lg:text-8xl">
            Building
            <br />
            Intelligent
            <br />
            Businesses.
          </h1>

          <p className="mb-10 max-w-xl text-xl text-zinc-400">
            Premium AI software, automation platforms and digital products
            engineered for ambitious companies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Start Project
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 transition hover:border-cyan-400">
              Explore Products
            </button>
          </div>
        </div>

        <div className="h-[600px] w-full">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}
