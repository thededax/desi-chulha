import { motion } from "motion/react";
import { ArrowRight, Flame, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroFeastImg from "../assets/hero-feast.jpg";
import { useCart } from "../context/CartContext";
import { DietaryBadge } from "./DietaryBadge";

export function Hero() {
  const { addToCart } = useCart();

  const featuredDish = {
    id: "dal-chulha",
    name: "Slow-Cooked Dal Chulha",
    category: "main-course" as const,
    categoryName: "The Main Course",
    desc: "Black urad lentils simmered for 24 hours on slow wood fire, finished with churned white butter.",
    price: "₹425",
    priceNum: 425,
    isVeg: true,
    spiceLevel: "Mild" as const,
    highlight: true,
    chulhaSpecial: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <section className="relative bg-[#190C06] text-[#F6F3EC] overflow-hidden min-h-0 sm:min-h-[520px] lg:min-h-[640px] flex items-center border-b border-[#B79754]/20">
      {/* 1. Immersive Culinary Photography Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFeastImg}
          alt="Desi Chulha Authentic Indian Feast with Handi Curries and Tandoori Breads"
          className="w-full h-full object-cover object-[78%_center] lg:object-[82%_center] filter saturate-[1.1] contrast-[1.05]"
        />

        {/* Directional Vignettes for Perfect Legibility & Seamless Blending */}
        {/* Left-to-right dark espresso mask for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#190C06] via-[#190C06]/92 md:via-[#190C06]/85 to-transparent to-75% md:to-70%" />

        {/* Mobile vertical gradient scrim so text is sharp over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#190C06]/85 via-transparent to-[#190C06] md:hidden" />

        {/* Top edge seamless fade with Navbar */}
        <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#190C06] to-transparent pointer-events-none" />

        {/* Bottom edge seamless fade with adjacent PopularDishes section */}
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-36 bg-gradient-to-t from-[#190C06] via-[#190C06]/80 to-transparent pointer-events-none" />

        {/* Subtle warm ember radial warmth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 45%, rgba(184, 74, 27, 0.45) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(183, 151, 84, 0.25) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-10 sm:pt-14 sm:pb-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column (Negative Space): Minimal, Punchy Headlines & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left max-w-2xl">
            {/* Saffron & Terracotta Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#26140B]/90 border border-[#B79754]/40 text-[#FAE88A] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-5 shadow-lg backdrop-blur-md"
            >
              <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B84A1B]" />
              <span>Authentic Wood-Fired Clay Oven</span>
            </motion.div>

            {/* Display Headline in Cormorant Garamond */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[4.15rem] leading-[1.1] tracking-tight text-[#F6F3EC] mb-2.5 sm:mb-5 drop-shadow-md"
            >
              Pure Heritage.{" "}
              <span className="text-[#FAE88A] italic font-normal block sm:inline">
                Slow-Simmered
              </span>{" "}
              on the Chulha.
            </motion.h1>

            {/* Appetizing Subheading (Tight & Purposeful) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#D1C7B7] text-xs sm:text-base md:text-lg font-sans leading-relaxed max-w-lg mb-4 sm:mb-8 drop-shadow-sm"
            >
              Hand-pounded heirloom spices, slow-fired handi curries, and smoky tandoori breads — 
              crafted with traditional patience in Bhagalpur.
            </motion.p>

            {/* Dual High-Conversion Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-10"
            >
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(184,74,27,0.55)] cursor-pointer text-center rounded-sm"
              >
                <span>Explore Menu & Order</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              <a
                href="/#reserve-table"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-[#26140B]/80 hover:bg-[#B79754]/20 text-[#F6F3EC] border border-[#B79754] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer text-center backdrop-blur-sm rounded-sm"
              >
                <span>Reserve a Table</span>
              </a>
            </motion.div>

            {/* 3 Core Trust Badges (Fills blank space harmoniously) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-3.5 sm:pt-6 border-t border-[#B79754]/25 w-full max-w-lg"
            >
              <div className="flex flex-col gap-0.5">
                <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-[#FAE88A]">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B84A1B] shrink-0" />
                  <span>Wood Coals</span>
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#D1C7B7]/80 leading-tight">
                  Clay Tandoors
                </span>
              </div>

              <div className="flex flex-col gap-0.5 border-x border-[#B79754]/25 px-1.5 sm:px-4">
                <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-[#FAE88A]">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#15803D] shrink-0" />
                  <span>Pure Zones</span>
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#D1C7B7]/80 leading-tight">
                  Veg & Non-Veg
                </span>
              </div>

              <div className="flex flex-col gap-0.5 pl-1">
                <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-[#FAE88A]">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B79754] shrink-0" />
                  <span>Fresh & Fast</span>
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#D1C7B7]/80 leading-tight">
                  Direct Delivery
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Visual Anchor): Floating Spotlight Card docked neatly */}
          <div className="lg:col-span-5 xl:col-span-6 relative hidden md:flex flex-col items-end justify-end self-end pt-12">
            {/* Top Spice Pill over feast */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4 bg-[#190C06]/90 border border-[#B79754]/70 text-[#FAE88A] px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 text-xs font-semibold backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B79754]" />
              <span>100% Hand-Pounded Heirloom Spices</span>
            </motion.div>

            {/* Quick 1-Tap Order Card for the Signature Dish */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#26140B]/95 border border-[#B79754]/50 p-4 rounded-xl shadow-2xl w-full max-w-xs backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5">
                  <DietaryBadge isVeg={true} size="sm" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAE88A]">
                    Chef's Daily Chulha Special
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-[#FAE88A]">
                  {featuredDish.price}
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#F6F3EC] leading-snug mb-1">
                {featuredDish.name}
              </h3>
              <p className="text-[11px] text-[#D1C7B7] line-clamp-2 leading-relaxed mb-3">
                {featuredDish.desc}
              </p>
              <button
                onClick={() => addToCart(featuredDish)}
                className="w-full py-2 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md hover:shadow-[0_0_15px_rgba(184,74,27,0.4)] cursor-pointer"
              >
                <span>+ Add to Order Tray</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
