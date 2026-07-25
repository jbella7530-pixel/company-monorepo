const actions = [
  "Create Business",
  "Launch Product",
  "Generate SOP",
  "Run AI Audit",
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="mt-4 space-y-2">
        {actions.map((action) => (
          <button
            key={action}
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-left text-white hover:bg-white/20"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
