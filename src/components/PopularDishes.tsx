import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { DietaryBadge } from "./DietaryBadge";
import { MENU_ITEMS } from "../data/menuData";

export function PopularDishes() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  // Signature Dishes
  const signatureDishes = MENU_ITEMS.filter((item) => item.highlight).slice(0, 6);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-espresso-textured text-[#F6F3EC] relative border-b border-[#B79754]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-3 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-1.5 sm:mb-3">
              <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
              <span>Wood-Fired Specialties</span>
            </div>
            <h2 className="font-serif text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Signature <span className="italic font-normal text-[#FAE88A]">Chulha Bestsellers</span>
            </h2>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-widest text-[#B79754] hover:text-[#FAE88A] transition-colors border-b border-[#B79754]/40 pb-0.5 sm:pb-1 self-start md:self-auto"
          >
            <span>Explore All 20+ Dishes</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        {/* 3-Column Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {signatureDishes.map((dish, index) => {
            const qty = getItemQuantity(dish.id);

            return (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-[#26140B] rounded-xl sm:rounded-2xl overflow-hidden border border-[#B79754]/25 hover:border-[#B79754]/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Dish Image with Compact Aspect Ratio on Mobile */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#190C06]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#26140B] via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between">
                      <div className="bg-[#190C06]/85 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#B79754]/40 flex items-center gap-1.5">
                        <DietaryBadge isVeg={dish.isVeg} size="sm" />
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F6F3EC]">
                          {dish.isVeg ? "Pure Veg" : "Non-Veg"}
                        </span>
                      </div>

                      {dish.spiceLevel && (
                        <span className="bg-[#190C06]/85 backdrop-blur-sm text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#FAE88A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#B79754]/30">
                          🌶️ {dish.spiceLevel}
                        </span>
                      )}
                    </div>

                    {/* Signature Tag */}
                    <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 bg-[#B84A1B] text-[#FFFDF9] text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                      Chulha Signature
                    </div>
                  </div>

                  {/* Dish Content */}
                  <div className="p-3.5 sm:p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1 sm:mb-2">
                      <h3 className="font-serif text-base sm:text-xl font-bold text-[#F6F3EC] group-hover:text-[#FAE88A] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-mono text-sm sm:text-lg font-bold text-[#FAE88A] shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#D1C7B7] line-clamp-2 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-3.5 sm:p-5 pt-0 border-t border-[#B79754]/15 mt-1 sm:mt-2 flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#B79754]">
                    {dish.categoryName}
                  </span>

                  {qty > 0 ? (
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-[#190C06] border border-[#B79754]/50 rounded-lg p-0.5 sm:p-1">
                      <button
                        onClick={() => updateQuantity(dish.id, -1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center text-[#D1C7B7] hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`Decrease ${dish.name}`}
                      >
                        <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                      <span className="font-mono text-xs font-bold w-5 text-center text-[#FAE88A]">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(dish.id, 1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center text-[#D1C7B7] hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`Increase ${dish.name}`}
                      >
                        <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(dish)}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow cursor-pointer"
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Add</span>
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
