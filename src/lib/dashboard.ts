import { prisma } from "@/lib/prisma";

export interface DashboardMetrics {
  revenue: number;
  customers: number;
  orders: number;
  products: number;
  agents: number;
  tasks: number;
}

export interface DashboardActivity {
  id: string;
  type: "Order" | "Customer" | "Task";
  title: string;
  createdAt: Date;
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

export async function getDashboardActivity(): Promise<DashboardActivity[]> {
  const [orders, customers, tasks] = await Promise.all([
    prisma.order.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.customer.findMany({
      take: 5,
      orderBy: {
        id: "desc",
      },
    }),

    prisma.task.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  const activity: DashboardActivity[] = [
    ...orders.map((order) => ({
      id: order.id,
      type: "Order" as const,
      title: `Order ${order.id.slice(0, 8)}`,
      createdAt: order.createdAt,
    })),

    ...customers.map((customer) => ({
      id: customer.id,
      type: "Customer" as const,
      title: customer.name,
      createdAt: new Date(),
    })),

    ...tasks.map((task) => ({
      id: task.id,
      type: "Task" as const,
      title: task.title,
      createdAt: task.createdAt,
    })),
  ];

  return activity.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}
