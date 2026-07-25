import WorkspaceSettings from "@/components/platform/settings/WorkspaceSettings";
import UserPreferences from "@/components/platform/settings/UserPreferences";
import SystemSettings from "@/components/platform/settings/SystemSettings";

export default function SettingsPage() {
  return (
    <main className="space-y-8 p-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="text-neutral-400">
          Configure your VELTROVE workspace.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <WorkspaceSettings />
        <UserPreferences />
      </section>

      <SystemSettings />
    </main>
  );
}
