"use client";

import { motion } from "framer-motion";

const text = "Frequently Asked";

export default function AnimatedTitle() {
  return (
    <motion.h1
      className="text-[#523122] lg:text-[7rem] text-[3rem] lg:mt-2 mt-10 font-bold flex justify-center lg:leading-48 leading-22"
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
      {text.split(",").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block goldman"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
