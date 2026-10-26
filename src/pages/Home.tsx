import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { PopularDishes } from "../components/PopularDishes";
import { MenuExplorer } from "../components/MenuExplorer";
import { Offers } from "../components/Offers";
import { Testimonials } from "../components/Testimonials";
import { Gallery } from "../components/Gallery";
import { TableReservationHub } from "../components/TableReservationHub";
import { Flame } from "lucide-react";

export function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Signature Chulha Bestsellers */}
      <PopularDishes />

      {/* 3. The Desi Chulha Craft Story */}
      <WhyChooseUs />

      {/* 4. Interactive Full Menu Explorer on warm textured parchment */}
      <section className="bg-parchment-textured py-16 md:py-24 border-b border-[#B79754]/20" id="full-menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B84A1B] mb-2">
            <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
            <span>Interactive Culinary Explorer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#190C06]">
            Explore the <span className="italic font-normal text-[#B84A1B]">Full Menu</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#58483E] max-w-xl mx-auto mt-2">
            Filter instantly by Pure Veg or Non-Veg, search your favorite curry, and build your order tray.
          </p>
        </div>

        <MenuExplorer />
      </section>

      {/* 5. Curated Family Feasts & Combos */}
      <Offers />

      {/* 6. Table Reservation & Location Hub */}
      <TableReservationHub />

      {/* 7. Real Guest Testimonials */}
      <Testimonials />

      {/* 8. Visual Ambience Gallery */}
      <Gallery />
    </main>
  );
}
