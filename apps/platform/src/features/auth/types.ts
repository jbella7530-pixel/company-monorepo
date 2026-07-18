export interface UserIdentity {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

export interface WorkspaceIdentity {
  id: string;
  name: string;
  slug: string;
}

export interface SessionIdentity {
  user: UserIdentity;
  workspace?: WorkspaceIdentity;
}
