import {
  Bot,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
 CheckSquare,
} from "lucide-react";

import { getDashboardMetrics } from "@/lib/dashboard";
import RevenueCard from "./RevenueCard";

export default async function RevenueGrid() {
  const metrics = await getDashboardMetrics();

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <RevenueCard
        title="Total Revenue"
        value={`R${metrics.revenue.toLocaleString()}`}
        change="Live database total"
        icon={DollarSign}
      />

      <RevenueCard
        title="Customers"
        value={metrics.customers.toString()}
        change="Registered customers"
        icon={Users}
      />

      <RevenueCard
        title="Orders"
        value={metrics.orders.toString()}
        change="Total orders"
        icon={ShoppingCart}
      />

      <RevenueCard
        title="Products"
        value={metrics.products.toString()}
        change="Published products"
        icon={Package}
      />

      <RevenueCard
        title="AI Agents"
        value={metrics.agents.toString()}
        change="Configured agents"
        icon={Bot}
      />

      <RevenueCard
        title="Tasks"
        value={metrics.tasks.toString()}
        change="Tracked tasks"
        icon={CheckSquare}
      />
    </section>
  );
}
