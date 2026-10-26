import { motion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  as: Tag = "h2",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: -80, opacity: 0 }}
            whileInView={{ y: "0%", rotateX: 0, opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 0.7,
              delay: delay + i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function CharReveal({
  text,
  className = "",
  delay = 0,
  once = true,
}: CharRevealProps) {
  const chars = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.02,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
