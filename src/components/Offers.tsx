import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function Offers() {
  const promotions = [
    {
      title: "Weekend Residency",
      badge: "Friday & Saturday Evenings",
      subtitle: "A multi-course tasting journey curated from the royal clay-pot recipes of ancient Awadh and Old Delhi.",
      price: "₹1,299",
      priceSuffix: "per person",
      features: [
        "Welcome Earthen Matka Thandai / Jaljeera",
        "3 Wood-Fired Kebabs & Tikkas",
        "Slow-Simmered Handi Main Courses & Breads",
        "Signature Saffron Matka Kulfi",
      ],
      cta: "Reserve Seat",
    },
    {
      title: "Executive Chulha Thali",
      badge: "Mon – Fri • 12:00 – 3:30 PM",
      subtitle: "A quick, nourishing, wholesome spread prepared on our wood hearth for busy working professionals and business lunches.",
      price: "₹399",
      priceSuffix: "per person",
      features: [
        "Dal Chulha with Churned White Butter",
        "Paneer of the Day or Smoked Chicken Curry",
        "2 Hot Tandoori Rotis or Naan",
        "Steamed Basmati Rice & Burrani Raita",
      ],
      cta: "Book Lunch",
    },
    {
      title: "Maharaja Family Feast",
      badge: "Ideal for 4–5 Family Diners",
      subtitle: "The ultimate celebratory banquet served family-style with handi biryani, smoky platters, and clay-pot desserts.",
      price: "₹1,899",
      priceSuffix: "for 4–5 guests",
      features: [
        "2 Large Starters (Paneer / Murgh Tikka)",
        "Dal Chulha + Kadhai Curry / Butter Chicken",
        "Dum Handi Biryani + Raita",
        "Assorted Bread Basket (8 Fresh Rotis/Naans)",
      ],
      cta: "Book Feast",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#26140B] text-[#F6F3EC] relative border-b border-[#B79754]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B79754]" />
            <span>Curated Dining Experiences</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F3EC] mb-3 sm:mb-4">
            Curated <span className="italic font-normal text-[#FAE88A]">Family Feasts & Thalis</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#D1C7B7] leading-relaxed max-w-xl mx-auto">
            From quick corporate lunch thalis to slow-cooked royal weekend feasts, enjoy our best specialties packaged with extraordinary value.
          </p>
        </div>

        {/* 3-Column Promotions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promotions.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#190C06] border border-[#B79754]/30 rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-[#B79754] transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Badge */}
                <div className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#FAE88A] bg-[#26140B] px-2.5 sm:px-3 py-1 rounded-full border border-[#B79754]/40 mb-3 sm:mb-4">
                  {promo.badge}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F6F3EC] group-hover:text-[#FAE88A] transition-colors mb-2">
                  {promo.title}
                </h3>

                <p className="text-xs text-[#D1C7B7] leading-relaxed mb-5 sm:mb-6">
                  {promo.subtitle}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 text-[11px] sm:text-xs text-[#D1C7B7]/90 border-t border-[#B79754]/20 pt-3.5 sm:pt-4">
                  {promo.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B84A1B] font-bold">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="border-t border-[#B79754]/20 pt-4 sm:pt-5 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#FAE88A]">
                    {promo.price}
                  </span>
                  <span className="text-[10px] text-[#D1C7B7] block font-sans">
                    {promo.priceSuffix}
                  </span>
                </div>

                <a
                  href="#reserve-table"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#B84A1B] hover:bg-[#9A3B12] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow"
                >
                  <span>{promo.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
