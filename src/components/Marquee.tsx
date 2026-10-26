import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
  direction?: "left" | "right";
}

export function Marquee({
  items,
  speed = 30,
  separator = "✦",
  className = "",
  direction = "left",
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;
  const doubled = content + content + content;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block font-headline text-lg md:text-xl tracking-wider">
          {doubled}
        </span>
      </motion.div>
    </div>
  );
}
