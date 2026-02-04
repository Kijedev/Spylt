"use client";

import { motion } from "framer-motion";

const text = "Right Around";

export default function AnimatedTitle() {
  return (
    <motion.h1
      className="text-[#FAEADE] lg:text-[8rem] text-[7rem] lg:mt-0 -mt-32 font-bold flex tracking-wide lg:leading-48 leading-22"
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
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
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
