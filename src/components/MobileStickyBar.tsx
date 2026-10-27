import { useCart } from "../context/CartContext";
import { ShoppingBag, UtensilsCrossed, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileStickyBar() {
  const { totalCount, subtotal, openCart } = useCart();
  const location = useLocation();

  return (
    <aside
      aria-label="Quick mobile navigation and order summary"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#190C06]/95 backdrop-blur-md border-t border-[#B79754]/30 px-2.5 py-1.5 pb-[max(0.45rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-1.5 max-w-lg mx-auto">
        {/* Menu shortcut */}
        <Link
          to="/menu"
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-md transition-colors text-center ${
            location.pathname === "/menu"
              ? "text-[#FAE88A] bg-[#26140B]"
              : "text-[#D1C7B7] hover:text-[#FFFDF9]"
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">
            Menu
          </span>
        </Link>

        {/* Book Table shortcut */}
        <a
          href="/#reserve-table"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-md transition-colors text-center text-[#D1C7B7] hover:text-[#FFFDF9]"
        >
          <Calendar className="w-3.5 h-3.5 mb-0.5 text-[#B79754]" />
          <span className="text-[9px] font-bold uppercase tracking-wider">
            Book Table
          </span>
        </a>

        {/* Order Tray Trigger */}
        <button
          onClick={openCart}
          className={`flex-[1.4] py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1.5 font-bold transition-all shadow-md cursor-pointer ${
            totalCount > 0
              ? "bg-[#B84A1B] text-[#FFFDF9]"
              : "bg-[#26140B] text-[#D1C7B7] border border-[#B79754]/30"
          }`}
        >
          <div className="relative">
            <ShoppingBag className="w-3.5 h-3.5" />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FAE88A] text-[#190C06] text-[8px] font-mono font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </div>
          <div className="text-left leading-tight">
            <span className="block text-[9px] uppercase tracking-wider">
              {totalCount > 0 ? "Order Tray" : "Tray (0)"}
            </span>
            {totalCount > 0 && (
              <span className="block text-[10px] font-mono font-bold text-[#FAE88A]">
                ₹{subtotal}
              </span>
            )}
          </div>
        </button>
      </div>
    </aside>
  );
}
