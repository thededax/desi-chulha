import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Calendar, Users, Send, CheckCircle2, MessageCircle, Navigation, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export function TableReservationHub() {
  const [guests, setGuests] = useState<string>("4");
  const [serviceSlot, setServiceSlot] = useState<"Lunch" | "Dinner">("Dinner");
  const [date, setDate] = useState<string>(() => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  });
  const [time, setTime] = useState<string>("19:30");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [preference, setPreference] = useState<string[]>(["Family Booth"]);
  const [notes, setNotes] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const guestOptions = [
    { label: "2 Guests", val: "2" },
    { label: "4 Guests", val: "4" },
    { label: "6 Family", val: "6" },
    { label: "8+ Banquet", val: "8+" },
  ];

  const preferenceTags = [
    "Family Booth",
    "Birthday / Anniversary",
    "Pure Veg Prep Focus",
    "High Chair for Toddler",
    "Quiet Corner Table",
  ];

  const togglePreference = (tag: string) => {
    setPreference((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    setIsSubmitted(true);
    toast.success("Table Reservation Received!", {
      description: `Table for ${guests} guests on ${date} (${serviceSlot}) recorded.`,
    });
  };

  const handleWhatsAppBooking = () => {
    let msg = `🔥 *TABLE RESERVATION INQUIRY - DESI CHULHA* 🔥\n`;
    msg += `• Guests: ${guests} Diners\n`;
    msg += `• Service: ${serviceSlot}\n`;
    msg += `• Date: ${date} at ${time}\n`;
    msg += `• Name: ${name || "Valued Guest"}\n`;
    if (phone) msg += `• Phone: ${phone}\n`;
    if (preference.length > 0) msg += `• Preferences: ${preference.join(", ")}\n`;
    if (notes) msg += `• Notes: ${notes}\n`;
    msg += `\nPlease confirm table availability for our visit. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  return (
    <section id="reserve-table" className="py-16 sm:py-24 md:py-32 bg-parchment-textured text-[#190C06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B84A1B] mb-2 sm:mb-3">
            <Users className="w-3.5 h-3.5 text-[#B84A1B]" />
            <span>Family Dining & Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#190C06] mb-3 sm:mb-4">
            Reserve a Table at the <span className="italic font-normal text-[#B84A1B]">Hearth</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#58483E] leading-relaxed max-w-xl mx-auto">
            Whether an intimate dinner for two, a weekend family gathering, or a birthday party, we reserve your seats in advance with authentic hospitality.
          </p>
        </div>

        {/* 6/6 Split Hub */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left 6 Columns: Reservation Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#B79754]/30 rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 sm:py-10 space-y-4 sm:space-y-5"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#15803D]/15 border border-[#15803D] flex items-center justify-center text-[#15803D] mx-auto">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#190C06]">
                  Table Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-[#58483E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#190C06]">{name}</strong>. We have allocated seating for <strong>{guests} guests</strong> on <strong>{date}</strong> ({serviceSlot} slot around {time}).
                </p>
                <div className="bg-[#F6F3EC] p-3.5 sm:p-4 rounded-xl border border-[#B79754]/30 text-xs text-[#58483E] max-w-sm mx-auto text-left space-y-1">
                  <p><strong>Hotline:</strong> +91 98765 43210</p>
                  <p><strong>Location:</strong> Chowk, Badi Khanjarpur, Bhagalpur</p>
                  <p><strong>Preferences:</strong> {preference.join(", ") || "Standard Seating"}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center pt-2">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="px-5 py-3 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3 bg-[#190C06] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Guest Count Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-2">
                    1. Select Number of Guests
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {guestOptions.map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setGuests(opt.val)}
                        className={`py-2 sm:py-2.5 px-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer text-center truncate ${
                          guests === opt.val
                            ? "bg-[#B84A1B] text-[#FFFDF9] shadow"
                            : "bg-[#F6F3EC] text-[#58483E] border border-[#B79754]/30 hover:border-[#B84A1B]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Slot Switcher */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-2">
                    2. Service Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setServiceSlot("Lunch");
                        setTime("13:00");
                      }}
                      className={`p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        serviceSlot === "Lunch"
                          ? "bg-[#26140B] text-[#FAE88A] border-[#B79754] shadow"
                          : "bg-[#F6F3EC] text-[#58483E] border-[#B79754]/30 hover:border-[#190C06]"
                      }`}
                    >
                      <span className="block font-bold text-xs uppercase tracking-wider">
                        ☀️ Lunch Service
                      </span>
                      <span className="block text-[10px] sm:text-[11px] opacity-80 mt-0.5">
                        11:30 AM – 3:30 PM
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setServiceSlot("Dinner");
                        setTime("19:30");
                      }}
                      className={`p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        serviceSlot === "Dinner"
                          ? "bg-[#26140B] text-[#FAE88A] border-[#B79754] shadow"
                          : "bg-[#F6F3EC] text-[#58483E] border-[#B79754]/30 hover:border-[#190C06]"
                      }`}
                    >
                      <span className="block font-bold text-xs uppercase tracking-wider">
                        🌙 Dinner Service
                      </span>
                      <span className="block text-[10px] sm:text-[11px] opacity-80 mt-0.5">
                        7:00 PM – 11:00 PM
                      </span>
                    </button>
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-2.5 text-base sm:text-xs md:text-sm text-[#190C06] focus:outline-none focus:border-[#B84A1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-2.5 text-base sm:text-xs md:text-sm text-[#190C06] focus:outline-none focus:border-[#B84A1B]"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-2.5 text-base sm:text-xs md:text-sm text-[#190C06] focus:outline-none focus:border-[#B84A1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-2.5 text-base sm:text-xs md:text-sm text-[#190C06] focus:outline-none focus:border-[#B84A1B]"
                    />
                  </div>
                </div>

                {/* Special Requests Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                    Special Seating & Culinary Preferences
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {preferenceTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => togglePreference(tag)}
                        className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border transition-all cursor-pointer ${
                          preference.includes(tag)
                            ? "bg-[#26140B] text-[#FAE88A] border-[#B79754]"
                            : "bg-[#F6F3EC] text-[#58483E] border-[#B79754]/30 hover:border-[#58483E]"
                        }`}
                      >
                        {preference.includes(tag) ? "✓ " : "+ "}
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58483E] mb-1.5">
                    Additional Occasion Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Allergies, birthday cakes, or special seating requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#F6F3EC] border border-[#B79754]/40 rounded-lg p-2.5 text-base sm:text-xs md:text-sm text-[#190C06] focus:outline-none focus:border-[#B84A1B] resize-none"
                  />
                </div>

                {/* Dual Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 sm:py-3.5 px-5 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg cursor-pointer text-center"
                  >
                    Confirm Table Reservation
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="py-3 sm:py-3.5 px-5 bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-widest rounded transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Columns: Restaurant Location, Direct Contact & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Address Card */}
            <div className="bg-[#FFFDF9] border border-[#B79754]/30 rounded-2xl p-5 sm:p-8 shadow-md space-y-5 sm:space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#190C06]">
                Visit & Contact Information
              </h3>

              <div className="space-y-3.5 sm:space-y-4 text-xs text-[#58483E]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#B84A1B]/15 border border-[#B84A1B] flex items-center justify-center text-[#B84A1B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#190C06] uppercase tracking-wider text-[11px] mb-0.5">
                      Restaurant Location
                    </h4>
                    <p className="leading-relaxed">
                      RB Surya Prasad Rd, Chowk, Badi Khanjarpur, Bhagalpur, Bihar 812001
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#58483E]/80 mt-0.5">
                      (Near the central marketplace; easy car & 2-wheeler parking)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#B79754]/20 pt-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#15803D]/15 border border-[#15803D] flex items-center justify-center text-[#15803D] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#190C06] uppercase tracking-wider text-[11px] mb-0.5">
                      Kitchen & Dine-In Hours
                    </h4>
                    <p className="leading-relaxed">
                      Monday to Sunday: <strong>11:00 AM – 11:00 PM</strong>
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#15803D] font-medium mt-0.5">
                      Open all 7 days including holidays & festival evenings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#B79754]/20 pt-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#B79754]/20 border border-[#B79754] flex items-center justify-center text-[#190C06] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#190C06] uppercase tracking-wider text-[11px] mb-0.5">
                      Hotline & Enquiries
                    </h4>
                    <p className="font-mono text-sm font-bold text-[#190C06]">
                      <a href="tel:+919876543210" className="hover:text-[#B84A1B]">
                        +91 98765 43210
                      </a>
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#58483E]/80 mt-0.5">
                      hello@desichulha.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2 border-t border-[#B79754]/20">
                <a
                  href="tel:+919876543210"
                  className="py-2.5 sm:py-3 px-2 rounded bg-[#190C06] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider text-center hover:bg-[#B84A1B] transition-colors"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 sm:py-3 px-2 rounded bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-[#166534] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Visual / Directions Frame */}
            <div className="arch-frame aspect-[16/9] overflow-hidden bg-[#26140B] shadow-md relative group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Map View Badi Khanjarpur Bhagalpur"
                loading="lazy"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190C06] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#FAE88A] block">
                    Bhagalpur City Landmark
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold">
                    Badi Khanjarpur Chowk
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Badi+Khanjarpur+Bhagalpur+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 bg-[#B84A1B] text-[#FFFDF9] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded shadow flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
