"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import "@fontsource/bebas-neue";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slide values
  const slideLeft = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
  const slideRight = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  return (
    <main>
      <section ref={ref} className="flex flex-col justify-between overflow-hidden">
        <div className="bg-[#FAEADE] flex flex-col lg:gap-20 px-4 lg:px-0 py-12 lg:py-0">

          {/* WHATS */}
          <motion.h1
            style={{ x: slideLeft }}
            className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-end text-[#222123] lg:h-56 h-20"
          >
            WHAT'S
          </motion.h1>

          {/* EVERYONE */}
          <motion.h1
            style={{ x: slideRight }}
            className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-end text-[#E3A458] lg:h-56 h-20 lg:pr-20"
          >
            EVERYONE
          </motion.h1>

          {/* TALKING */}
          <motion.h1
            style={{ x: slideLeft }}
            className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-start text-[#222123]"
          >
            TALKING
          </motion.h1>

          {/* BUTTON */}
          <button
            className="
              text-[#523122]
              bg-[#E3A458]
              rounded-full
              px-12
              py-4
              text-lg
              cursor-pointer
              block
              mx-auto
              hover:scale-105
              transition
              mt-8
              lg:-mt-56
            "
          >
            EXPLORE ALL
          </button>
        </div>

        <Image
          src="/Image/drip.svg"
          alt="FAQ Image"
          width={400}
          height={300}
          className="w-full"
        />
      </section>
    </main>
  );
}
