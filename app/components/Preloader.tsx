"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 100], ["0%", "100%"]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2.4,
      ease: [0.77, 0, 0.175, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => {
        setTimeout(() => {
          onComplete?.();
        }, 300);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#5A3522]"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {/* LOGO */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/Image/logo.svg"
          alt="Spylt"
          width={260}
          height={120}
          priority
        />
      </motion.div>

      <div className="absolute bottom-24 flex flex-col items-center gap-4 w-65">
        <span className="text-[#F6E6D8] font-semibold tracking-wide text-4xl">
          {display} %
        </span>

        <div className="w-full h-1 bg-[#F6E6D8]/30 overflow-hidden">
          <motion.div
            style={{ width }}
            className="h-full bg-[#F6E6D8]"
          />
        </div>
      </div>
    </motion.div>
  );
}
