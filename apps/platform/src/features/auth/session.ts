import type { SessionIdentity } from "./types";

export interface SessionProvider {
  getSession(): Promise<SessionIdentity | null>;
}

export async function requireSession(
  provider: SessionProvider
): Promise<SessionIdentity> {
  const session = await provider.getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}
