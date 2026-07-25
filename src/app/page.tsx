import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Products from "@/components/sections/Products";
import CTA from "@/components/sections/CTA";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <Products />

      <CTA />

      <Footer />
    </main>
  );
}
