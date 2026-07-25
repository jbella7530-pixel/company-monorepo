import ProductStats from "@/components/platform/commerce/ProductStats";
import ProductList from "@/components/platform/commerce/ProductList";
import CommerceActions from "@/components/platform/commerce/CommerceActions";

export default function CommercePage() {
  return (
    <main className="space-y-8 p-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          CommerceOS
        </h1>

        <p className="text-neutral-400">
          Manage products, revenue, and digital assets.
        </p>
      </section>

      <ProductStats />

      <section className="grid gap-6 lg:grid-cols-2">
        <ProductList />
        <CommerceActions />
      </section>
    </main>
  );
}
