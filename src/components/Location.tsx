import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";

export function Location() {
  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <div className="relative group" style={{ perspective: "1000px" }}>
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-surface-container p-2 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                alt="Map view of Bhagalpur"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating pin */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-xl"
            >
              <MapPin className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <span className="text-secondary font-body font-bold uppercase tracking-[0.2em] mb-4 block text-sm">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">
            Find Your Seat at the{" "}
            <span className="text-primary italic font-serif">Hearth</span>
          </h2>

          <div className="space-y-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl brass-gradient flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold mb-1">RB Surya Prasad Rd, Chowk, Badi Khanjarpur</p>
                <p className="text-on-surface-variant text-sm">Near the historical central marketplace, easy to find and park.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl brass-gradient flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold mb-1">11:00 AM – 11:00 PM</p>
                <p className="text-on-surface-variant text-sm">Open everyday including Sundays and Holidays.</p>
              </div>
            </motion.div>
          </div>

          <Link to="/contact">
            <MagneticButton strength={0.2}>
              <motion.button
                whileHover={{ boxShadow: "0 0 30px rgba(244,196,48,0.3)" }}
                className="brass-gradient text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </motion.button>
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
