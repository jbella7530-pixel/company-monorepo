const insights = [
  "Business intelligence system initialized",
  "No performance data collected yet",
  "AI recommendations will appear here",
];

export default function InsightsPanel() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        AI Insights
      </h2>

      <ul className="mt-4 space-y-3">
        {insights.map((insight) => (
          <li
            key={insight}
            className="text-neutral-300"
          >
            {insight}
          </li>
        ))}
      </ul>
    </section>
  );
}

