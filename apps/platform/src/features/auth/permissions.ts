export const PERMISSIONS = {
  WORKSPACE_READ: "workspace.read",
  WORKSPACE_WRITE: "workspace.write",

  USER_MANAGE: "user.manage",

  AI_EXECUTE: "ai.execute",
  AI_CONFIGURE: "ai.configure",

  SETTINGS_MANAGE: "settings.manage",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
