import AgentStats from "@/components/platform/ai/AgentStats";
import AgentList from "@/components/platform/ai/AgentList";
import AgentActions from "@/components/platform/ai/AgentActions";

export default function AIPage() {
  return (
    <main className="space-y-8 p-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          AI Workforce
        </h1>

        <p className="text-neutral-400">
          Manage autonomous business agents.
        </p>
      </section>

      <AgentStats />

      <section className="grid gap-6 lg:grid-cols-2">
        <AgentList />
        <AgentActions />
      </section>
    </main>
  );
}
