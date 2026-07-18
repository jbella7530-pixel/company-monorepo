import type {
  Workspace,
  WorkspaceCreateInput,
} from "./types";

const workspaces: Workspace[] = [];

export function createWorkspace(
  input: WorkspaceCreateInput
): Workspace {
  const workspace: Workspace = {
    id: crypto.randomUUID(),
    name: input.name,
    createdAt: new Date(),
    status: "active",
  };

  workspaces.push(workspace);

  return workspace;
}

export function listWorkspaces(): Workspace[] {
  return workspaces;
}
