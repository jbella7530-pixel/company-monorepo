"use client";

import { BrainCircuit, Globe, Boxes, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Systems",
    description:
      "Custom AI assistants, copilots and intelligent business workflows.",
  },
  {
    icon: Globe,
    title: "3D Websites",
    description:
      "Modern interactive websites built with React, Three.js and Next.js.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Automate operations using AI agents, APIs and enterprise workflows.",
  },
  {
    icon: Boxes,
    title: "Digital Products",
    description:
      "Premium SaaS products, templates and scalable software solutions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-20 text-center">
        <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400">
          Services
        </p>

        <h2 className="text-5xl font-black">
          What We Build
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
          VELTROVE designs premium AI software,
          intelligent automation and modern digital
          experiences for ambitious companies.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Icon
                  className="text-cyan-400"
                  size={30}
                />
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-cyan-400 transition group-hover:translate-x-2">
                Learn More →
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
