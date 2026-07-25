const stats = [
  {
    title: "Revenue",
    value: "R0",
  },
  {
    title: "Customers",
    value: "0",
  },
  {
    title: "Growth",
    value: "0%",
  },
];

export default function AnalyticsStats() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-white/10 bg-black p-6"
        >
          <p className="text-sm text-neutral-400">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}
