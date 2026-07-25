const agents = [
  "No AI agents deployed yet",
];

export default function AgentList() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Agents
      </h2>

      <ul className="mt-4 space-y-3">
        {agents.map((agent) => (
          <li
            key={agent}
            className="text-neutral-300"
          >
            {agent}
          </li>
        ))}
      </ul>
    </section>
  );
}
