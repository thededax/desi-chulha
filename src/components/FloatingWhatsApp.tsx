import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

export function FloatingWhatsApp() {
  const { openCart, totalCount } = useCart();

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Namaste Desi Chulha! 🔥 I would like to inquire about dine-in table reservations and food delivery."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-16 sm:bottom-20 md:bottom-8 right-3 sm:right-4 md:right-8 flex flex-col gap-2.5 sm:gap-3 items-end z-40">
      {/* Call Button - Desktop/Tablet */}
      <a
        href="tel:+919876543210"
        title="Call Desi Chulha"
        className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-[#26140B] border border-[#B79754] text-[#FAE88A] hover:bg-[#B84A1B] hover:text-white rounded-full items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5" />
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        title="Chat on WhatsApp"
        className="w-11 h-11 md:w-14 md:h-14 bg-[#15803D] hover:bg-[#166534] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer relative"
      >
        <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FAE88A] rounded-full border-2 border-[#190C06] animate-pulse" />
      </button>
    </div>
  );
}
