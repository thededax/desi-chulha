import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, Trash2, ShoppingBag, Send, CheckCircle2, MapPin, Phone, User, MessageSquare } from "lucide-react";
import { useCart } from "../context/CartContext";
import { DietaryBadge } from "./DietaryBadge";
import { toast } from "sonner";

export function OrderDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
    sendWhatsAppOrder,
  } = useCart();

  const [orderType, setOrderType] = useState<"Delivery" | "Takeaway" | "Dine-In">("Delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsSuccessModal(true);
    toast.success("Order Placed Successfully!", {
      description: "Our kitchen has received your ticket.",
    });
  };

  const handleWhatsAppClick = () => {
    sendWhatsAppOrder({
      name: name || "Valued Diner",
      phone,
      address: address || (orderType === "Dine-In" ? "Table Pre-Order" : "Local Bhagalpur Area"),
      orderType,
      notes,
    });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[80] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full sm:max-w-md bg-[#190C06] text-[#F6F3EC] h-full shadow-2xl flex flex-col z-10 border-l border-[#B79754]/30"
            role="dialog"
            aria-modal="true"
            aria-label="Order Tray"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-6 border-b border-[#B79754]/20 flex items-center justify-between bg-[#26140B] shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#B84A1B]/20 border border-[#B84A1B] flex items-center justify-center text-[#FAE88A] shrink-0">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-base sm:text-xl font-bold tracking-wide text-[#F6F3EC]">
                    Your Order Tray
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#D1C7B7] font-sans">
                    {totalCount} {totalCount === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-[10px] sm:text-xs text-[#D1C7B7] hover:text-[#B84A1B] underline transition-colors px-1 py-0.5"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#F6F3EC] transition-colors cursor-pointer"
                  aria-label="Close Order Tray"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-3 sm:space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#26140B] border border-[#B79754]/30 flex items-center justify-center mb-4 sm:mb-6 text-[#B79754]">
                    <ShoppingBag className="w-8 h-8 sm:w-9 sm:h-9 opacity-60" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F6F3EC] mb-2">
                    Your tray is empty
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-xs mb-6 sm:mb-8 leading-relaxed">
                    Explore our hand-pounded tandoori starters, slow-cooked clay pot curries, and aromatic handi biryanis!
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-xs font-bold uppercase tracking-widest transition-colors rounded-none shadow-lg"
                  >
                    Browse Full Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Order Mode Switcher */}
                  <div className="bg-[#26140B] p-1.5 rounded-lg border border-[#B79754]/20 flex gap-1">
                    {(["Delivery", "Takeaway", "Dine-In"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setOrderType(mode)}
                        className={`flex-1 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all rounded ${
                          orderType === mode
                            ? "bg-[#B84A1B] text-[#FFFDF9] shadow"
                            : "text-[#D1C7B7] hover:text-white"
                        }`}
                      >
                        {mode === "Delivery" ? "🛵 Delivery" : mode === "Takeaway" ? "🛍️ Takeaway" : "🍽️ Dine-In"}
                      </button>
                    ))}
                  </div>

                  {/* List of items */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#B79754]">
                      Selected Dishes
                    </p>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#26140B] p-3 sm:p-3.5 rounded-xl border border-[#B79754]/20 flex items-center justify-between gap-2.5 sm:gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <DietaryBadge isVeg={item.isVeg} size="sm" />
                          <div className="min-w-0">
                            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#F6F3EC] truncate">
                              {item.name}
                            </h4>
                            <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#FAE88A]">
                              ₹{item.priceNum} each
                            </span>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#190C06] px-1.5 sm:px-2 py-1 rounded-lg border border-[#B79754]/30 shrink-0">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#D1C7B7] hover:text-white transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold w-4 text-center text-[#F6F3EC]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#D1C7B7] hover:text-white transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right flex flex-col items-end shrink-0 min-w-[50px] sm:min-w-[55px]">
                          <span className="font-mono text-xs sm:text-sm font-bold text-[#FFFDF9]">
                            ₹{item.priceNum * item.quantity}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#D1C7B7] hover:text-[#B91C1C] p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Details Form */}
                  <div className="bg-[#26140B] p-3.5 sm:p-4 rounded-xl border border-[#B79754]/20 space-y-2.5 sm:space-y-3">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#B79754]">
                      Order Details (Optional for WhatsApp)
                    </p>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#B79754] absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#190C06] border border-[#B79754]/30 rounded-lg pl-9 pr-3 py-2 text-base sm:text-xs md:text-sm text-[#F6F3EC] placeholder-[#D1C7B7]/50 focus:outline-none focus:border-[#B84A1B]"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#B79754] absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="Contact Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#190C06] border border-[#B79754]/30 rounded-lg pl-9 pr-3 py-2 text-base sm:text-xs md:text-sm text-[#F6F3EC] placeholder-[#D1C7B7]/50 focus:outline-none focus:border-[#B84A1B]"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#B79754] absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder={orderType === "Dine-In" ? "Table Number / Booth" : "Delivery Address in Bhagalpur"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-[#190C06] border border-[#B79754]/30 rounded-lg pl-9 pr-3 py-2 text-base sm:text-xs md:text-sm text-[#F6F3EC] placeholder-[#D1C7B7]/50 focus:outline-none focus:border-[#B84A1B]"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#B79754] absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Special instructions (e.g. less spicy, extra chutney)"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-[#190C06] border border-[#B79754]/30 rounded-lg pl-9 pr-3 py-2 text-base sm:text-xs md:text-sm text-[#F6F3EC] placeholder-[#D1C7B7]/50 focus:outline-none focus:border-[#B84A1B]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & CTAs with Safe Area Padding */}
            {cartItems.length > 0 && (
              <div className="p-3.5 sm:p-6 pb-[max(0.65rem,env(safe-area-inset-bottom))] border-t border-[#B79754]/20 bg-[#26140B] space-y-2.5 sm:space-y-4 shrink-0">
                <div className="space-y-1 text-xs text-[#D1C7B7]">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-mono font-semibold text-[#F6F3EC]">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-[#15803D]">
                    <span>Packaging & Clay Prep</span>
                    <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">Free</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base font-bold text-[#F6F3EC] pt-1.5 border-t border-[#B79754]/20">
                    <span className="font-serif">Total Payable</span>
                    <span className="font-mono text-[#FAE88A]">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  {/* WhatsApp Order Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 sm:py-3.5 px-4 bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-widest transition-all rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Order via WhatsApp Direct</span>
                  </button>

                  {/* Direct Checkout Button */}
                  <button
                    onClick={handleDirectSubmit}
                    className="w-full py-2.5 sm:py-3 px-4 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] font-bold text-xs uppercase tracking-widest transition-all rounded shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Instant Kitchen Ticket</span>
                  </button>
                </div>

                <p className="text-[9px] sm:text-[10px] text-center text-[#D1C7B7]/70">
                  Kitchen Hours: 11:00 AM – 11:00 PM • Live Hotline: +91 98765 43210
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModal && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#26140B] border border-[#B79754] p-6 sm:p-8 max-w-md w-full rounded-2xl text-center space-y-4 sm:space-y-6 shadow-2xl"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#15803D]/20 border border-[#15803D] flex items-center justify-center text-[#15803D] mx-auto">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F6F3EC] mb-1.5">
                Order Ticket Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
                Thank you, <span className="text-[#FAE88A] font-semibold">{name || "Valued Diner"}</span>! Our earthen chulha kitchen has received your order of {totalCount} items worth ₹{subtotal}.
              </p>
            </div>

            <div className="bg-[#190C06] p-3.5 sm:p-4 rounded-xl border border-[#B79754]/30 text-xs text-left space-y-1.5 text-[#D1C7B7]">
              <div className="flex justify-between">
                <span>Estimated Prep Time:</span>
                <span className="text-[#FAE88A] font-bold">25–35 Mins</span>
              </div>
              <div className="flex justify-between">
                <span>Restaurant Contact:</span>
                <span className="text-[#F6F3EC] font-mono">+91 98765 43210</span>
              </div>
              <div className="flex justify-between">
                <span>Order Mode:</span>
                <span className="text-[#F6F3EC] font-semibold">{orderType}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsSuccessModal(false);
                  clearCart();
                  closeCart();
                }}
                className="flex-1 py-3 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Send via WhatsApp
              </button>
              <button
                onClick={() => {
                  setIsSuccessModal(false);
                  clearCart();
                  closeCart();
                }}
                className="flex-1 py-3 bg-[#B84A1B] hover:bg-[#9A3B12] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Close & Return
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
