import { motion } from "motion/react";
import { Instagram, Facebook, Phone, MapPin, Mail, Clock, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#140904] text-[#D1C7B7] w-full overflow-hidden border-t border-[#B79754]/30 pb-24 sm:pb-20 md:pb-12">
      {/* Decorative top brass hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B79754]/60 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#B84A1B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-[#B79754]/20">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3">
              <img
                src={logoImg}
                alt="Desi Chulha"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#B79754] object-cover shadow-lg"
              />
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#F6F3EC] tracking-tight">
                Desi Chulha 🔥
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed max-w-sm font-sans">
              Bhagalpur's celebrated destination for authentic wood-fired clay oven delicacies, slow-simmered handi curries, and family hospitality. Proudly women-owned, community cherished since 2024.
            </p>

            <div className="flex gap-2.5 pt-1 sm:pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#26140B] border border-[#B79754]/40 flex items-center justify-center text-[#FAE88A] hover:bg-[#B84A1B] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#26140B] border border-[#B79754]/40 flex items-center justify-center text-[#FAE88A] hover:bg-[#B84A1B] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#26140B] border border-[#B79754]/40 flex items-center justify-center text-[#FAE88A] hover:bg-[#B84A1B] hover:text-white transition-colors"
                aria-label="Call Restaurant"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#F6F3EC] uppercase tracking-wider">
              Explore Our Hearth
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/menu" className="hover:text-[#FAE88A] transition-colors inline-block">
                  ✦ Complete Chulha Menu
                </Link>
              </li>
              <li>
                <a href="#reserve-table" className="hover:text-[#FAE88A] transition-colors inline-block">
                  ✦ Reserve a Family Table
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAE88A] transition-colors inline-block">
                  ✦ Our Earthen Cooking Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FAE88A] transition-colors inline-block">
                  ✦ Catering & Banquets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#F6F3EC] uppercase tracking-wider">
              Visit & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B84A1B] shrink-0 mt-0.5" />
                <span>RB Surya Prasad Rd, Chowk, Badi Khanjarpur, Bhagalpur, Bihar 812001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B79754] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#FAE88A] font-mono">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B79754] shrink-0" />
                <a href="mailto:hello@desichulha.com" className="hover:text-[#FAE88A]">
                  hello@desichulha.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#15803D]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon – Sun: 11:00 AM – 11:00 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-[#D1C7B7]/60 text-center sm:text-left">
          <p className="flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Desi Chulha. Women-Led with</span>
            <Heart className="w-3.5 h-3.5 text-[#B84A1B] fill-current" />
            <span>in Bhagalpur.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#FAE88A] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
