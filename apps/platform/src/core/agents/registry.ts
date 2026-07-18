import type {
  Agent,
  AgentCreateInput,
} from "./types";

const agents: Agent[] = [];

export function registerAgent(
  input: AgentCreateInput
): Agent {
  const agent: Agent = {
    id: crypto.randomUUID(),
    name: input.name,
    description: input.description,
    capabilities: input.capabilities,
    status: "idle",
  };

  agents.push(agent);

  return agent;
}

export function listAgents(): Agent[] {
  return agents;
}
