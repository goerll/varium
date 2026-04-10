import { VariantPicker } from "varium";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { variants } from "@/components/Testimonials.variants";

export default function App() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <Hero />
      <Logos />

      {/* VARIUM:START slot="testimonials" */}
      <VariantPicker variants={variants} slot="testimonials" />
      {/* VARIUM:END */}

      <Footer />
    </main>
  );
}
