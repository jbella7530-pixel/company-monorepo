export interface Workspace {
  id: string;
  name: string;
  createdAt: Date;
  status: "active" | "suspended";
}

export interface WorkspaceCreateInput {
  name: string;
}
