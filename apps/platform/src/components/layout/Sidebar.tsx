import {
  LayoutDashboard,
  Bot,
  Database,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Workforce",
    icon: Bot,
  },
  {
    name: "Knowledge Vault",
    icon: Database,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-card md:flex md:flex-col">
      <div className="border-b px-6 py-5">
        <h1 className="text-xl font-bold">
          Platform
        </h1>

        <p className="text-sm text-muted-foreground">
          Enterprise OS
        </p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              <Icon size={18} />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
