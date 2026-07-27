import { prisma } from "@/lib/prisma";

export async function getServices() {
  return prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getServiceCount() {
  return prisma.service.count();
}

export async function getActiveServiceCount() {
  return prisma.service.count({
    where: {
      active: true,
    },
  });
}
