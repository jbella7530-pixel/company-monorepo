import type { SessionIdentity } from "./types";
import type { SessionProvider } from "./session";

const developmentSession: SessionIdentity = {
  user: {
    id: "dev-user",
    email: "developer@example.com",
    name: "Development User",
  },
  workspace: {
    id: "default-workspace",
    name: "Default Workspace",
    slug: "default",
  },
};

export class DevelopmentSessionProvider
  implements SessionProvider
{
  async getSession(): Promise<SessionIdentity | null> {
    return developmentSession;
  }
}
