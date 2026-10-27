import { motion } from "motion/react";
import { Flame, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: Flame,
      title: "Wood-Fired Clay 'Chulha' Cooking",
      desc: "Our earthen hearths and tandoors burn seasoned hardwood coals, infusing gravies and breads with a distinct smoky depth that modern gas ranges cannot replicate.",
    },
    {
      icon: Sparkles,
      title: "Hand-Pounded Heirloom Spices",
      desc: "We source whole coriander seeds, cumin, star anise, and Kashmiri chilies, pounding them daily in stone mortars to preserve their essential aromatic oils.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Veg & Non-Veg Zones",
      desc: "Strict culinary separation for our vegetarian patrons. Independent cookware, cutting stations, and tandoori skewers guarantee complete peace of mind.",
    },
    {
      icon: HeartHandshake,
      title: "Women-Led Warm Hospitality",
      desc: "Founded on the maternal philosophy of 'Affordable price me best taste dena'—generous portions, genuine smiles, and zero culinary shortcuts.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-espresso-textured text-[#F6F3EC] relative border-b border-[#B79754]/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#B84A1B]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left 5 Columns: Arch-Framed Craft Visuals */}
          <div className="lg:col-span-5 relative pb-4 sm:pb-8 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[260px] sm:max-w-sm mx-auto lg:max-w-none"
            >
              <div className="arch-frame aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#26140B] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                  alt="Traditional Indian Chef cooking over earthen fire"
                  loading="lazy"
                  className="w-full h-full object-cover filter saturate-[1.08] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote Badge - Bounded safely on mobile */}
              <div className="absolute -bottom-3 sm:-bottom-6 right-2 sm:-right-6 left-2 sm:left-auto max-w-full sm:max-w-xs bg-[#26140B] border border-[#B79754]/50 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md">
                <p className="font-serif italic text-xs sm:text-base md:text-lg text-[#FAE88A] leading-snug mb-0.5 sm:mb-1">
                  "Affordable price me best taste dena."
                </p>
                <p className="text-[9px] sm:text-[11px] text-[#D1C7B7] uppercase tracking-wider font-semibold">
                  — The Desi Chulha Promise
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right 7 Columns: Narrative & Pillars */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-8"
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-1.5 sm:mb-3">
                <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
                <span>Our Earthen Philosophy</span>
              </span>
              <h2 className="font-serif text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#F6F3EC] leading-[1.12] mb-2 sm:mb-5">
                The Sacred Hearth of <br />
                <span className="italic font-normal text-[#FAE88A]">Traditional Indian Cooking</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#D1C7B7] leading-relaxed max-w-2xl font-sans">
                In an era of microwave reheating and commercial flavor packets, Desi Chulha keeps the ancient soul of North Indian culinary tradition alive in Bhagalpur. Every handi is slow-cooked, every naan is slapped against red-hot clay, and every spice is ground with care.
              </p>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-5 pt-1.5 sm:pt-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#26140B]/80 border border-[#B79754]/25 p-3 sm:p-5 rounded-xl hover:border-[#B79754]/60 transition-colors"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#B84A1B]/20 border border-[#B84A1B] flex items-center justify-center text-[#FAE88A] mb-2 sm:mb-3.5">
                    <pillar.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-base font-bold text-[#F6F3EC] mb-0.5 sm:mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#D1C7B7] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 sm:mt-8 pt-3.5 sm:pt-6 border-t border-[#B79754]/20 flex flex-wrap items-center gap-3 sm:gap-6">
              <Link
                to="/about"
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FAE88A] hover:text-white underline underline-offset-4 transition-colors"
              >
                Read Our Story & Journey →
              </Link>
              <Link
                to="/menu"
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B79754] hover:text-[#FAE88A] transition-colors"
              >
                Explore the Chulha Menu
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
