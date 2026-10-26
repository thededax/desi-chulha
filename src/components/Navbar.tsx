import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, Phone, X, ShoppingBag, Clock } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalCount, subtotal, openCart } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Full Menu" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Reservations" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
      isActive
        ? "text-[#FAE88A] font-bold"
        : "text-[#F6F3EC]/80 hover:text-[#FAE88A]"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-serif font-bold tracking-wide transition-all duration-300 ${
      isActive ? "text-[#FAE88A]" : "text-[#F6F3EC] hover:text-[#FAE88A]"
    }`;

  return (
    <>
      {/* Top Live Announcement & Utility Strip */}
      <div className="bg-[#190C06] border-b border-[#B79754]/25 text-[#D1C7B7] text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FAE88A]">
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#15803D] -ml-3.5" />
              Kitchen Live: 11:00 AM – 11:00 PM
            </span>
            <span className="text-[#D1C7B7]/50">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B79754]" />
              Authentic Wood-Fired & Clay-Oven Dining in Bhagalpur
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#FAE88A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B84A1B]" />
              <span>Direct Hotline: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <motion.header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#190C06]/95 backdrop-blur-md shadow-xl border-b border-[#B79754]/30 py-2.5 sm:py-3"
            : "bg-[#190C06]/85 backdrop-blur-sm border-b border-[#B79754]/15 py-3 sm:py-4"
        }`}
      >
        <nav className="flex justify-between items-center px-3 sm:px-6 lg:px-12 w-full max-w-7xl mx-auto">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0 pr-1">
            <div className="relative shrink-0">
              <img
                src={logoImg}
                alt="Desi Chulha Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#B79754]/50 object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 text-[10px] sm:text-xs">🔥</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#F6F3EC] leading-none group-hover:text-[#FAE88A] transition-colors truncate">
                Desi Chulha
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B79754] font-medium mt-0.5 hidden xs:block truncate">
                The Modern Earthen Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
              >
                {({ isActive }) => (
                  <span className="relative py-1">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B84A1B]"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Table Reservation Button (Desktop/Tablet) */}
            <a
              href="#reserve-table"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-[#F6F3EC] border border-[#B79754]/60 hover:bg-[#B79754]/20 transition-all rounded-none"
            >
              <span>Book Table</span>
            </a>

            {/* Order Tray Trigger */}
            <button
              onClick={openCart}
              className={`flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-all cursor-pointer ${
                totalCount > 0
                  ? "bg-[#B84A1B] text-[#FFFDF9] shadow-lg hover:bg-[#9A3B12]"
                  : "bg-[#26140B] text-[#F6F3EC] border border-[#B79754]/40 hover:border-[#B79754]"
              }`}
              aria-label={`Open Order Tray, ${totalCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {totalCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-[#FAE88A] text-[#190C06] text-[9px] sm:text-[10px] font-mono font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono font-bold sm:hidden">
                {totalCount > 0 ? `₹${subtotal}` : "Tray"}
              </span>
              <span className="hidden sm:inline">
                {totalCount > 0 ? `Tray (₹${subtotal})` : "Order Tray"}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-[#F6F3EC] hover:text-[#FAE88A] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-[70] bg-[#190C06] text-[#F6F3EC] flex flex-col justify-between p-5 sm:p-8 md:p-12 overflow-y-auto"
          >
            {/* Top Close */}
            <div className="flex items-center justify-between border-b border-[#B79754]/20 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="Desi Chulha"
                  className="w-10 h-10 rounded-full border border-[#B79754]"
                />
                <span className="font-serif text-xl font-bold">Desi Chulha</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#D1C7B7] hover:text-[#FFFDF9]"
                aria-label="Close Mobile Navigation"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-6 my-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={mobileLinkClass}
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="#reserve-table"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-bold tracking-wide text-[#B79754]"
                >
                  Book a Table ✦
                </a>
              </motion.div>
            </div>

            {/* Bottom Contact Details */}
            <div className="border-t border-[#B79754]/20 pt-5 space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full py-3.5 bg-[#B84A1B] text-[#FFFDF9] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Open Order Tray ({totalCount} items)</span>
              </button>

              <div className="text-xs text-[#D1C7B7] space-y-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B84A1B]" />
                  <a href="tel:+919876543210" className="hover:text-[#FAE88A]">
                    +91 98765 43210
                  </a>
                </p>
                <p className="text-[11px] text-[#D1C7B7]/70">
                  RB Surya Prasad Rd, Chowk, Badi Khanjarpur, Bhagalpur
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
