import {
  DollarSign,
  Users,
  ShoppingCart,
  Package,
  Briefcase,
  TrendingUp,
} from "lucide-react";

import RevenueCard from "./RevenueCard";

export default function RevenueGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <RevenueCard
        title="Total Revenue"
        value="R0"
        change="+0% this month"
        icon={DollarSign}
      />

      <RevenueCard
        title="Customers"
        value="0"
        change="+0 new customers"
        icon={Users}
      />

      <RevenueCard
        title="Orders"
        value="0"
        change="No active orders"
        icon={ShoppingCart}
      />

      <RevenueCard
        title="Products"
        value="0"
        change="No published products"
        icon={Package}
      />

      <RevenueCard
        title="Services"
        value="0"
        change="No active services"
        icon={Briefcase}
      />

      <RevenueCard
        title="Growth"
        value="0%"
        change="Awaiting business activity"
        icon={TrendingUp}
      />
    </section>
  );
}
