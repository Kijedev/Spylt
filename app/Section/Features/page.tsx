"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center pb-20 lg:h-full">
      <p className="text-white font-sans max-w-sm text-center py-10 lg:px-5 px-2">
        Unlock the Advantages: Explore the Key Benefits of Choosing SPYLT
      </p>
      <section className="flex flex-col jutsify-center items-center gap-5 lg:mt-20">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block bg-[#C88E64] border-4 border-[#222123] relativ z-50 px-6 lg:-mt-12 rotate-2"
          //   style={{ transform: "rotate(-2deg)" }}
        >
          <h2 className="text-[3rem] lg:text-[9rem] text-[#E2D4BC] tracking-tight">
            SHELF STABLE
          </h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block bg-[#FAEADE] border-4 border-[#222123] px-6 lg:-mt-12 -mt-6 rotate-0"
          //   style={{ transform: "rotate(0deg)" }}
        >
          <h2 className="text-[3rem] lg:text-[9rem] text-[#222123] tracking-tight">
            PROTEIN + CAFFEINE
          </h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block bg-[#7F3B2D] border-4 border-[#222123] px-6 lg:-mt-12 -mt-6 rotate-4"
          //   style={{ transform: "rotate(-2deg)" }}
        >
          <h2 className="text-[3rem] lg:text-[9rem] text-[#FAEADE] tracking-tight">
            Infinitely recyclable
          </h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block bg-[#FED775] border-4 border-[#222123] px-6 lg:-mt-4 -mt-6 -rotate-4 relative -z-20"
          //   style={{ transform: "rotate(-2deg)" }}
        >
          <h2 className="text-[3rem] lg:text-[9rem] text-[#222123] tracking-tight">
            Lactose free
          </h2>
        </motion.div>
      </section>
    </main>
  );
}
