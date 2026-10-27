import { motion } from "motion/react";
import { MenuExplorer } from "../components/MenuExplorer";
import { Flame, ShieldCheck, Clock, Award } from "lucide-react";

export function Menu() {
  return (
    <div className="bg-parchment-textured min-h-screen text-[#190C06] pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-4 pb-3 sm:pt-8 sm:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#190C06] text-[#FAE88A] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-4"
        >
          <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
          <span>Authentic Clay-Oven & Handi Dining</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#190C06] mb-2 sm:mb-4"
        >
          The Complete <span className="italic font-normal text-[#B84A1B]">Chulha Menu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#58483E] text-xs sm:text-sm md:text-base font-sans max-w-2xl mx-auto leading-relaxed"
        >
          Every item is prepared with hand-pounded whole spices, pure mustard oil, and time-honored slow-cooking methods. 
          Use the filters below to instantly explore Pure Veg or Non-Veg specialties.
        </motion.p>

        {/* Quality Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-3 sm:mt-6 text-[10px] sm:text-xs text-[#58483E] border-t border-[#B79754]/25 pt-2.5 sm:pt-4">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#15803D]" />
            Separate Pure Veg & Non-Veg Kitchen Prep
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B84A1B]" />
            Cooked Fresh to Order
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B79754]" />
            Real INR (₹) Value • No Aggregator Markup
          </span>
        </div>
      </div>

      {/* Interactive Full Menu Explorer */}
      <MenuExplorer />

      {/* Reservation Banner */}
      <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-16 text-center">
        <div className="bg-[#190C06] text-[#F6F3EC] p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-[#B79754]/40 shadow-xl">
          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#FAE88A] block mb-1.5 sm:mb-2">
            Family Dining & Celebrations
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Planning a Dinner with Family or Friends?
          </h2>
          <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-lg mx-auto mb-4 sm:mb-6 leading-relaxed">
            Reserve our comfortable family booths or order in advance for hassle-free dining.
          </p>
          <a
            href="/contact#reserve-table"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3.5 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
          >
            Reserve Your Table Now
          </a>
        </div>
      </div>
    </div>
  );
}
