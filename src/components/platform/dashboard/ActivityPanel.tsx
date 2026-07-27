import { getDashboardActivity } from "@/lib/dashboard";

export default async function ActivityPanel() {
  const activity = await getDashboardActivity();

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Latest events across your VELTROVE workspace.
        </p>
      </div>

      <div className="space-y-4">
        {activity.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No activity yet.
          </p>
        ) : (
          activity.map((item) => (
            <div
              key={`${item.type}-${item.id}`}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
            >
              <div>
                <p className="font-medium text-white">
                  {item.title}
                </p>

                <p className="text-sm text-zinc-500">
                  {item.type}
                </p>
              </div>

              <span className="text-xs text-zinc-500">
                {item.createdAt.toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
