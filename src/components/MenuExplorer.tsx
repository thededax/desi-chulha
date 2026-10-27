import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Plus, Minus, Flame, Sparkles, Filter, X } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { MenuItem } from "../types/menu";
import { DietaryBadge } from "./DietaryBadge";
import { useCart } from "../context/CartContext";

interface MenuExplorerProps {
  initialCategory?: string;
  showTitle?: boolean;
}

export function MenuExplorer({
  initialCategory = "all",
  showTitle = true,
}: MenuExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg" | "spicy">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Dietary filter match
      if (dietaryFilter === "veg" && !item.isVeg) return false;
      if (dietaryFilter === "non-veg" && item.isVeg) return false;
      if (dietaryFilter === "spicy" && (!item.spiceLevel || item.spiceLevel === "Mild")) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.desc.toLowerCase().includes(query);
        const matchesCat = item.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <div className="w-full">
      {/* Sticky Controls Bar */}
      <div className="sticky top-[48px] sm:top-[56px] md:top-[76px] z-30 bg-[#F6F3EC]/95 backdrop-blur-md border-y border-[#B79754]/30 py-1.5 sm:py-2.5 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 flex flex-col gap-1.5 sm:gap-2.5">
          
          {/* Top row: Search input & Dietary filter pills */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-1.5 sm:gap-3">
            {/* Instant Search Input */}
            <div className="relative flex-1 max-w-full md:max-w-md">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#58483E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search paneer, biryani, naan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#B79754]/40 rounded-full pl-8 sm:pl-10 pr-8 py-1.5 sm:py-2 text-xs sm:text-sm text-[#190C06] placeholder-[#58483E]/60 focus:outline-none focus:border-[#B84A1B] focus:ring-1 focus:ring-[#B84A1B] shadow-inner transition-colors"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#58483E] hover:text-[#190C06] p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Instant Pure Veg / Non-Veg / Spicy Filter Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 shrink-0 py-0.5">
              <button
                onClick={() => setDietaryFilter("all")}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  dietaryFilter === "all"
                    ? "bg-[#190C06] text-[#FFFDF9] shadow"
                    : "bg-[#FFFDF9] text-[#58483E] border border-[#B79754]/30 hover:border-[#190C06]"
                }`}
              >
                All Dishes
              </button>

              <button
                onClick={() => setDietaryFilter("veg")}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  dietaryFilter === "veg"
                    ? "bg-[#15803D] text-[#FFFDF9] shadow"
                    : "bg-[#FFFDF9] text-[#15803D] border border-[#15803D]/40 hover:border-[#15803D]"
                }`}
              >
                <DietaryBadge isVeg={true} size="sm" />
                <span>Pure Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter("non-veg")}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  dietaryFilter === "non-veg"
                    ? "bg-[#B91C1C] text-[#FFFDF9] shadow"
                    : "bg-[#FFFDF9] text-[#B91C1C] border border-[#B91C1C]/40 hover:border-[#B91C1C]"
                }`}
              >
                <DietaryBadge isVeg={false} size="sm" />
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter("spicy")}
                className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  dietaryFilter === "spicy"
                    ? "bg-[#B84A1B] text-[#FFFDF9] shadow"
                    : "bg-[#FFFDF9] text-[#B84A1B] border border-[#B84A1B]/40 hover:border-[#B84A1B]"
                }`}
              >
                <span>🌶️ Spicy</span>
              </button>
            </div>
          </div>

          {/* Bottom row: Course Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 pt-0.5 pb-0.5">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap rounded-md cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#B84A1B] text-[#FFFDF9] shadow-sm"
                    : "text-[#58483E] hover:text-[#190C06] hover:bg-[#190C06]/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main Dishes Listing */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-4 sm:py-8">
        {/* Count indicator */}
        <div className="flex items-center justify-between mb-3 sm:mb-6 text-xs text-[#58483E]">
          <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
            Showing {filteredDishes.length} {filteredDishes.length === 1 ? "dish" : "dishes"}
          </span>
          {(dietaryFilter !== "all" || searchQuery || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="text-[#B84A1B] hover:underline font-semibold text-xs"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredDishes.length === 0 ? (
          <div className="bg-[#FFFDF9] border border-[#B79754]/30 rounded-2xl p-8 sm:p-12 text-center my-6">
            <Flame className="w-10 h-10 text-[#B84A1B] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#190C06] mb-2">
              No dishes found
            </h3>
            <p className="text-xs sm:text-sm text-[#58483E] max-w-sm mx-auto mb-5">
              No menu items match your current filter criteria. Try choosing another category or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="px-5 py-2 bg-[#B84A1B] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Grid (>= 768px): 2-Column Editorial Cards */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredDishes.map((dish) => {
                const qty = getItemQuantity(dish.id);

                return (
                  <motion.article
                    key={dish.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#FFFDF9] rounded-xl border border-[#B79754]/30 hover:border-[#B79754] p-4 flex gap-4 transition-all duration-300 hover:shadow-md group"
                  >
                    {/* Dish Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Badges row */}
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <DietaryBadge isVeg={dish.isVeg} size="sm" showLabel={true} />
                          {dish.highlight && (
                            <span className="text-[9px] uppercase font-bold tracking-widest text-[#B84A1B] bg-[#B84A1B]/10 px-2 py-0.5 rounded">
                              Signature
                            </span>
                          )}
                          {dish.spiceLevel && (
                            <span className="text-[9px] font-mono font-medium text-[#58483E]">
                              🌶️ {dish.spiceLevel}
                            </span>
                          )}
                        </div>

                        {/* Title & Desc */}
                        <h3 className="font-serif text-lg font-bold text-[#190C06] group-hover:text-[#B84A1B] transition-colors leading-snug mb-1">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-[#58483E] line-clamp-2 leading-relaxed">
                          {dish.desc}
                        </p>
                      </div>

                      {/* Price & Add Stepper */}
                      <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#B79754]/20">
                        <span className="font-mono text-base font-bold text-[#190C06] tabular-nums">
                          {dish.price}
                        </span>

                        {qty > 0 ? (
                          <div className="flex items-center gap-2 bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(dish.id, -1)}
                              className="w-7 h-7 flex items-center justify-center text-[#190C06] hover:bg-[#B84A1B] hover:text-white rounded transition-colors"
                              aria-label={`Decrease ${dish.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-xs font-bold w-5 text-center text-[#190C06]">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(dish.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#190C06] hover:bg-[#B84A1B] hover:text-white rounded transition-colors"
                              aria-label={`Increase ${dish.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(dish)}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Dish Image Thumbnail */}
                    <div className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-[#F6F3EC] border border-[#B79754]/20 self-center">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Mobile Layout (< 768px): Compact Horizontal Row Cards (fits 4-5 items per screen) */}
            <div className="md:hidden flex flex-col divide-y divide-[#B79754]/25 bg-[#FFFDF9] rounded-lg sm:rounded-xl border border-[#B79754]/30 shadow-sm overflow-hidden">
              {filteredDishes.map((dish) => {
                const qty = getItemQuantity(dish.id);

                return (
                  <motion.div
                    key={dish.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-3 flex items-center justify-between gap-2 sm:gap-3 hover:bg-[#F6F3EC]/50 transition-colors"
                  >
                    {/* Left Info */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                        <DietaryBadge isVeg={dish.isVeg} size="sm" />
                        {dish.highlight && (
                          <span className="text-[8px] uppercase font-bold tracking-wider text-[#B84A1B] bg-[#B84A1B]/10 px-1 py-0.2 rounded">
                            Signature
                          </span>
                        )}
                        {dish.spiceLevel && (
                          <span className="text-[8px] sm:text-[9px] text-[#58483E]">
                            🌶️ {dish.spiceLevel}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-[14px] sm:text-base font-bold text-[#190C06] leading-tight truncate">
                        {dish.name}
                      </h3>

                      <p className="text-[10px] sm:text-[11px] text-[#58483E] line-clamp-1 leading-snug mt-0.5">
                        {dish.desc}
                      </p>

                      <div className="mt-0.5 sm:mt-1">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#190C06] tabular-nums">
                          {dish.price}
                        </span>
                      </div>
                    </div>

                    {/* Right Thumbnail & Stepper */}
                    <div className="flex flex-col items-center shrink-0 w-[68px] sm:w-20">
                      <div className="w-[68px] sm:w-20 h-13 sm:h-16 rounded-md sm:rounded-lg overflow-hidden bg-[#F6F3EC] border border-[#B79754]/30 relative mb-1">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {qty > 0 ? (
                        <div className="w-full flex items-center justify-between bg-[#190C06] text-white rounded-md px-1 py-0.5 border border-[#B79754]/50 shadow-sm">
                          <button
                            onClick={() => updateQuantity(dish.id, -1)}
                            className="text-white hover:text-[#FAE88A] p-0.5 cursor-pointer"
                            aria-label={`Decrease ${dish.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#FAE88A]">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity(dish.id, 1)}
                            className="text-white hover:text-[#FAE88A] p-0.5 cursor-pointer"
                            aria-label={`Increase ${dish.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(dish)}
                          className="w-full py-1 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded shadow flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
