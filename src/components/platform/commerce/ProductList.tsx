const products = [
  "No products created yet",
];

export default function ProductList() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6">
      <h2 className="text-xl font-semibold text-white">
        Products
      </h2>

      <ul className="mt-4 space-y-3">
        {products.map((product) => (
          <li
            key={product}
            className="text-neutral-300"
          >
            {product}
          </li>
        ))}
      </ul>
    </section>
  );
}
