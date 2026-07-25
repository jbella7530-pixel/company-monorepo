export default function UserPreferences() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        User Preferences
      </h2>

      <div className="mt-4 space-y-3">
        <p className="text-neutral-300">
          Theme: Dark
        </p>

        <p className="text-neutral-400">
          Manage personal preferences and interface settings.
        </p>
      </div>
    </section>
  );
}
