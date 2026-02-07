"use client";

import { motion } from "framer-motion";

type AnimatedTitleProps = {
  text: string;
  color?: string; // Tailwind text color class
};

export default function AnimatedTitle({
  text,
  color = "text-[#523122]",
}: AnimatedTitleProps) {
  return (
    <motion.h1
      className={`lg:text-[7rem] text-[3rem] lg:mt-2 mt-10 font-bold flex lg:justify-center justify-left lg:leading-48 leading-16 ${color}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block goldman"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
