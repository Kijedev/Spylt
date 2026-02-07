"use client";

import ScrollRevealText from "@/app/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StirUpSection() {
  const fuelRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: fuelRef,
    offset: ["start end", "center center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={fuelRef}
      className="relative h-screen bg-[#7A3A2A] overflow-hidden px-6"
    >
      {/* FUEL UP — centered in the entire viewport */}

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto h-full flex flex-col justify-center text-center">
        <ScrollRevealText
          lines={["STIR UP YOUR FEARLESS", "PAST AND YOUR FUTURE"]}
        />

        <motion.div
          style={{ scaleX, opacity, originX: 0.5 }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          rotate-[4deg]
          bg-[#E7A85A]
          px-8
          py-4
          border-[6px]
          border-[#7A3A2A]
          z-50
        "
        >
          <span className="lg:text-[7vw] text-[3rem] font-extrabold uppercase text-[#7A3A2A] whitespace-nowrap">
            FUEL UP
          </span>
        </motion.div>

        <ScrollRevealText lines={["WITH EVERY GULP OF PERFECT PROTEIN"]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-lg mx-auto mt-12"
        >
          <p className="text-white font-sans text-sm lg:text-lg">
            Rev up your rebel spirit and feed the adventure of life with SPYLT,
            where you’re one chug away from epic nostalgia and fearless fun.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
