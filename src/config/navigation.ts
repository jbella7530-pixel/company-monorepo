import {
  LayoutDashboard,
  ShoppingCart,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Commerce",
    href: "/commerce",
    icon: ShoppingCart,
  },
  {
    name: "AI",
    href: "/ai",
    icon: Bot,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
