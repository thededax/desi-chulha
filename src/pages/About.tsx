import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Flame, Heart, ShieldCheck, Award } from "lucide-react";

export function About() {
  return (
    <div className="bg-espresso-textured text-[#F6F3EC] min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-24">
      {/* Editorial Hero */}
      <section className="pt-4 sm:pt-12 pb-8 sm:pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-2 sm:mb-4">
              <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
              <span>Our Culinary Roots</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F3EC] leading-[1.1] mb-3 sm:mb-6">
              The Soul of a <br />
              <span className="italic font-normal text-[#FAE88A]">Modern Earthen Kitchen</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#D1C7B7] leading-relaxed max-w-xl mb-4 sm:mb-8 font-sans">
              Desi Chulha was born in Bhagalpur out of a deep reverence for the traditional Indian clay hearth—the *chulha*. 
              As a proud women-owned culinary establishment, we set out to prove that slow-simmered, authentic heritage food and generous hospitality shouldn't carry an exorbitant price tag.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-4">
              <Link
                to="/menu"
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
              >
                Explore Menu
              </Link>
              <a
                href="/#reserve-table"
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 border border-[#B79754] text-[#F6F3EC] hover:bg-[#B79754]/20 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Book a Table
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="arch-frame aspect-[4/5] overflow-hidden bg-[#26140B] shadow-2xl max-w-[240px] sm:max-w-sm mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Desi Chulha dining room ambience"
                className="w-full h-full object-cover filter saturate-[1.06] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section on Parchment */}
      <section className="py-8 sm:py-20 bg-parchment-textured text-[#190C06] border-y border-[#B79754]/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B84A1B] block mb-1.5 sm:mb-3">
            Our Guiding Creed
          </span>
          <h2 className="font-serif italic text-xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#190C06] mb-2 sm:mb-6">
            "Affordable price me best taste dena."
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#58483E] leading-relaxed max-w-2xl mx-auto">
            This simple phrase drives our kitchen every single morning. We wake up before sunrise to begin simmering our 24-hour Dal Chulha, knead fresh dough for tandoori naans, and roast whole spices in iron kadhais. No pre-packaged mixes, no chemical food dyes—just pure culinary devotion.
          </p>
        </div>
      </section>

      {/* 3 Value Pillars */}
      <section className="py-8 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-8">
          <div className="bg-[#26140B] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#B79754]/25">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#B84A1B] mb-2.5 sm:mb-4" />
            <h3 className="font-serif text-base sm:text-xl font-bold text-[#F6F3EC] mb-1 sm:mb-2">
              Women-Led Hospitality
            </h3>
            <p className="text-xs text-[#D1C7B7] leading-relaxed">
              Every diner is hosted like an invited guest in our family home. Generous portions, gentle smiles, and respectful service are non-negotiable.
            </p>
          </div>

          <div className="bg-[#26140B] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#B79754]/25">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#15803D] mb-2.5 sm:mb-4" />
            <h3 className="font-serif text-base sm:text-xl font-bold text-[#F6F3EC] mb-1 sm:mb-2">
              Pure Kitchen Integrity
            </h3>
            <p className="text-xs text-[#D1C7B7] leading-relaxed">
              We maintain strictly separate Pure Vegetarian preparation areas and cookware alongside our tandoori meat stations, honoring everyone's faith and dietary choices.
            </p>
          </div>

          <div className="bg-[#26140B] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#B79754]/25 sm:col-span-2 md:col-span-1">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#B79754] mb-2.5 sm:mb-4" />
            <h3 className="font-serif text-base sm:text-xl font-bold text-[#F6F3EC] mb-1 sm:mb-2">
              Fair & Transparent Pricing
            </h3>
            <p className="text-xs text-[#D1C7B7] leading-relaxed">
              We refuse to inflate prices for dine-in patrons or add hidden service charges. High-quality food must remain accessible for everyday Bhagalpur families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
