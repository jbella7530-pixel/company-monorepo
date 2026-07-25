export default function DashboardPage() {
  const stats = [
    {
      title: "Connected Stores",
      value: "0",
    },
    {
      title: "AI Agents",
      value: "0",
    },
    {
      title: "Automations",
      value: "0",
    },
    {
      title: "Monthly Revenue",
      value: "£0",
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-3 max-w-3xl text-neutral-400">
          Welcome to VELTROVE. This dashboard will become the command centre
          for your businesses, AI workforce, commerce operations and analytics.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-neutral-400">
              {stat.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {stat.value}
            </h2>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
        <h2 className="text-2xl font-semibold">
          Platform Foundation Complete
        </h2>

        <p className="mt-3 text-neutral-400">
          Authentication, AI services, commerce, workspaces and analytics
          will be added on top of this foundation.
        </p>
      </section>
    </div>
  );
}
