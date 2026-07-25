const actions = [
  "Create Product",
  "Generate Listing",
  "Create Landing Page",
];

export default function CommerceActions() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="mt-4 space-y-3">
        {actions.map((action) => (
          <button
            key={action}
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-left text-white hover:bg-white/20"
          >
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
