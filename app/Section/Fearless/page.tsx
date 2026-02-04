"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StirUpSection() {
  const fuelRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: fuelRef,
    offset: ["start end", "center center"],
  });

  // Center-out animation
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <section className="relative min-h-screen bg-[#7A3A2A] flex items-center justify-center overflow-hidden px-6">
      {/* FOREGROUND TEXT */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-[7vw] leading-[0.95] font-extrabold uppercase text-[#F6E6D8]">
          STIR UP YOUR
          <br />
          FEARLESS PAST AND
        </h1>
        <motion.div
      ref={fuelRef}
      style={{
        scaleX,
        opacity,
        originX: 0.5,
      }}
      className="inline-block bg-[#E7A85A] px-6 rotate-[4deg] border-6 border-[#7A3A2A] -mt-10"
    >
      <span className="text-[7vw] font-extrabold uppercase text-[#7A3A2A] whitespace-nowrap">
        FUEL UP
      </span>
    </motion.div>

        <h1 className="text-[7vw] leading-[0.95] font-extrabold uppercase text-[#F6E6D8] -mt-6">
          YOUR FUTURE WITH EVERY GULP OF PERFECT PROTEIN
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-sm mx-auto flex justify-center items-center text-center mt-6"
        >
          <p className="text-white font-sans">
            Rev up your rebel spirit and feed the adventure of life with SPYLT,
            where you’re one chug away from epic nostalgia and fearless fun.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
