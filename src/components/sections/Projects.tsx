"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Genesis",
    category: "AI Operating System",
    description:
      "An intelligent operating system that unifies AI, automation and knowledge into a single execution platform.",
  },
  {
    name: "VELTROVE OS",
    category: "Business Platform",
    description:
      "A business operating system for launching, managing and scaling modern companies with AI.",
  },
  {
    name: "Agent Office",
    category: "AI Workspace",
    description:
      "Multi-agent collaboration environment for research, engineering and business automation.",
  },
  {
    name: "Cosmic Puddings",
    category: "Digital Collectibles",
    description:
      "A premium digital collectible universe powered by modern web technologies and AI.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-20 text-center">
        <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400">
          Portfolio
        </p>

        <h2 className="text-5xl font-black">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
          Products and platforms designed for long-term growth,
          intelligent automation and exceptional user experiences.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              {project.category}
            </p>

            <h3 className="mb-6 text-3xl font-black">
              {project.name}
            </h3>

            <p className="mb-10 leading-8 text-zinc-400">
              {project.description}
            </p>

            <button className="flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:translate-x-2">
              View Project
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
