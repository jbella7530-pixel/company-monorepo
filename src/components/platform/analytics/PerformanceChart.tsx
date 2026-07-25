const data = [
  "No analytics data available yet",
];

export default function PerformanceChart() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Performance
      </h2>

      <div className="mt-4 rounded-xl bg-white/5 p-6">
        <p className="text-neutral-300">
          {data[0]}
        </p>
      </div>
    </section>
  );
}
