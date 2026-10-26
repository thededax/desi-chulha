import { motion } from "motion/react";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    caption: "Warm Family Dining Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
    caption: "The Earthen Hearth & Chef Prep",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
    caption: "Smoky Tandoor Starters",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    caption: "Warm Evening Ambience",
  },
];

export function Gallery() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-espresso-textured text-[#F6F3EC] border-b border-[#B79754]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-1.5 sm:mb-2">
              <Camera className="w-3.5 h-3.5 text-[#B84A1B]" />
              <span>Ambience & Kitchen Glimpses</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Visual <span className="italic font-normal text-[#FAE88A]">Culinary Journey</span>
            </h2>
          </div>
          <p className="text-xs text-[#D1C7B7] max-w-xs leading-relaxed">
            Step into an inviting world of dim amber lighting, clay pot aromas, and joyous celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-[#26140B] border border-[#B79754]/25 shadow-md"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter saturate-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190C06] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="font-serif text-xs sm:text-sm font-bold text-[#FAE88A]">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
