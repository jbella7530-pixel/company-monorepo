interface ServiceCardProps {
  name: string;
  description?: string | null;
  price: number;
  active: boolean;
}

export default function ServiceCard({
  name,
  description,
  price,
  active,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            {name}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-zinc-400">
              {description}
            </p>
          )}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            active
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {active ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-sm text-zinc-500">
          Price
        </p>

        <p className="text-2xl font-black text-white">
          R{price.toLocaleString("en-GB")}
        </p>
      </div>
    </div>
  );
}
