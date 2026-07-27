import { prisma } from "@/lib/prisma";

export interface DashboardMetrics {
  revenue: number;
  customers: number;
  orders: number;
  products: number;
  agents: number;
  tasks: number;
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const [
    revenue,
    customers,
    orders,
    products,
    agents,
    tasks,
  ] = await Promise.all([
    prisma.order.aggregate({
      _sum: {
        total: true,
      },
    }),

    prisma.customer.count(),

    prisma.order.count(),

    prisma.product.count(),

    prisma.agent.count(),

    prisma.task.count(),
  ]);

  return {
    revenue: revenue._sum.total ?? 0,
    customers,
    orders,
    products,
    agents,
    tasks,
  };
}
