import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 28 + 14;
      });
    }, 60);

    const timer = setTimeout(() => {
      onComplete();
    }, 1100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const tagline = "The Modern Earthen Kitchen";
  const tagChars = tagline.split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#190C06] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.35, delay: 0.85, ease: "easeInOut" }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184, 74, 27, 0.25) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute w-44 h-44 rounded-full border border-[#B79754]/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-60 h-60 rounded-full border border-[#B79754]/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center z-10"
      >
        <div className="relative">
          <motion.img
            src={logoImg}
            alt="Desi Chulha Logo"
            className="w-24 h-24 rounded-full mb-4 shadow-2xl border-2 border-[#B79754]"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute -bottom-1 -right-1 text-base">🔥</span>
        </div>

        {/* Brand Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold text-[#F6F3EC] tracking-tight mb-2"
        >
          Desi Chulha
        </motion.h1>

        {/* Tagline with char reveal */}
        <div className="flex mt-2 overflow-hidden">
          {tagChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.03,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="text-[#D1C7B7] text-xs md:text-sm tracking-[0.25em] uppercase font-sans font-medium"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-52"
      >
        <div className="h-[2px] bg-[#26140B] rounded-full overflow-hidden border border-[#B79754]/20">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B84A1B] to-[#FAE88A] rounded-full"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <span className="block text-center text-[#B79754] text-[10px] mt-3 font-sans tracking-[0.2em] uppercase font-bold">
          Stoking the Chulha Hearth...
        </span>
      </motion.div>

      {/* Corner decorations */}
      {[
        "top-8 left-8",
        "top-8 right-8 rotate-90",
        "bottom-8 left-8 -rotate-90",
        "bottom-8 right-8 rotate-180",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} opacity-30`}>
          <div className="w-8 h-[1px] bg-[#B79754]" />
          <div className="w-[1px] h-8 bg-[#B79754]" />
        </div>
      ))}
    </motion.div>
  );
}
