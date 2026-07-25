const activities = [
  "VELTROVE system initialized",
  "Platform shell online",
  "Dashboard module loaded",
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Activity Feed
      </h2>

      <ul className="mt-4 space-y-3">
        {activities.map((activity) => (
          <li
            key={activity}
            className="text-neutral-300"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
