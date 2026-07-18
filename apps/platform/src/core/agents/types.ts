export type AgentStatus =
  | "idle"
  | "running"
  | "paused"
  | "error";

export interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  status: AgentStatus;
}

export interface AgentCreateInput {
  name: string;
  description: string;
  capabilities: string[];
}
