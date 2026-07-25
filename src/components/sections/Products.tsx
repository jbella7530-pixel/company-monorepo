"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Globe2, Sparkles } from "lucide-react";

const products = [
  {
    icon: Bot,
    title: "AI Assistants",
    description:
      "Production-ready AI assistants tailored to your business workflows.",
  },
  {
    icon: Globe2,
    title: "Premium Websites",
    description:
      "Fast, interactive websites built with Next.js, Three.js and modern UX.",
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    description:
      "Business automation platforms that eliminate repetitive manual work.",
  },
  {
    icon: Sparkles,
    title: "Digital Assets",
    description:
      "Templates, SaaS products and premium digital resources built to scale.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-20 text-center">
        <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400">
          Products
        </p>

        <h2 className="text-5xl font-black">
          Built for Modern Businesses
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
          Every product is designed to help businesses launch faster,
          automate operations and create long-term competitive advantages.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Icon className="text-cyan-400" size={30} />
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {product.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {product.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
