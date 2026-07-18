import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Search size={18} />
        <span className="text-sm">
          Search workspace...
        </span>
      </div>

      <button className="rounded-full p-2 hover:bg-muted">
        <Bell size={20} />
      </button>
    </header>
  );
}
