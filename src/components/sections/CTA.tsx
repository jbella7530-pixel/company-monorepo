export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Build Something Extraordinary?
        </h2>

        <p className="mt-6 text-lg text-zinc-300">
          We design premium AI software, immersive websites, automation systems,
          and digital experiences that help businesses grow.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
