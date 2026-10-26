import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    text: "Best momos in all of Bhagalpur! The pricing is unbelievable for the quality they provide. A regular weekend spot for our family.",
    name: "Animesh Raj",
    role: "Local Guide",
    initial: "A",
  },
  {
    text: "Celebrated my sister's birthday here. The staff managed everything so well and the Malai Kofta was divine. Pocket-friendly too!",
    name: "Priya Singh",
    role: "Frequent Diner",
    initial: "P",
  },
  {
    text: "Great quantity and great taste. The Manchow soup is a must-try. The service is fast even during peak dinner hours.",
    name: "Rohan Verma",
    role: "Food Blogger",
    initial: "R",
  },
  {
    text: "Absolutely loved the ambience and the food. The staff is very polite and the service is quick. Highly recommended!",
    name: "Sneha Gupta",
    role: "Foodie",
    initial: "S",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-espresso-textured text-[#F6F3EC] relative border-b border-[#B79754]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FAE88A] mb-2 sm:mb-3">
            <Heart className="w-3.5 h-3.5 text-[#B84A1B]" />
            <span>Community Love in Bhagalpur</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F3EC] mb-3 sm:mb-4">
            Words from Our <span className="italic font-normal text-[#FAE88A]">Valued Diners</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed max-w-lg mx-auto">
            Authentic guest experiences from families and local food lovers who dine at our hearth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#26140B] p-4 sm:p-6 rounded-2xl border border-[#B79754]/25 hover:border-[#B79754]/60 transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#B79754]/20 absolute top-4 right-4" />

              <div>
                {/* 5 Golden Stars */}
                <div className="flex text-[#FAE88A] mb-3 sm:mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#FAE88A]" />
                  ))}
                </div>

                <p className="font-serif text-xs sm:text-sm text-[#F6F3EC] italic leading-relaxed mb-5 sm:mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-[#B79754]/20 pt-3.5 sm:pt-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#B84A1B] text-[#FFFDF9] font-serif font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#F6F3EC]">
                    {t.name}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#B79754] uppercase tracking-wider font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
