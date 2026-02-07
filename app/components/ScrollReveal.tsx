"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  lines: string[];
};

export default function ScrollRevealText({ lines }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"], // longer scroll window = slower reveal
  });

  const allWords = lines.join(" ").split(" ");
  let wordIndex = 0;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-4 lg:gap-6"
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");

        return (
          <div
            key={lineIndex}
            className="flex justify-center flex-wrap"
          >
            {words.map((word, i) => {
              const start = wordIndex / allWords.length;
              const end = start + 0.4 / allWords.length; // 👈 slows reveal per word

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.15, 1]
              );

              wordIndex++;

              return (
                <motion.span
                  key={`${word}-${i}`}
                  style={{ opacity }}
                  className="
                    text-white
                    font-bold
                    lg:text-[7rem]
                    text-[4rem]
                    mr-4 lg:mr-6
                    leading-tight
                  "
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
