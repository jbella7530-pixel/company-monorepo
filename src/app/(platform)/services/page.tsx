import { getServices } from "@/lib/services";
import ServiceCard from "@/components/platform/founder/services/ServiceCard";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Founder
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Services
          </h1>

          <p className="mt-3 text-zinc-400">
            Manage your service catalogue and pricing.
          </p>
        </div>

        <button className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black">
          New Service
        </button>
      </div>

      {services.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-12 text-center">
          <h2 className="text-2xl font-bold">
            No services yet
          </h2>

          <p className="mt-4 text-zinc-400">
            Create your first service to begin selling through VELTROVE.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
              active={service.active}
            />
          ))}
        </div>
      )}
    </div>
  );
}
