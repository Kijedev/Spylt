"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

type Props = {
  lines: string[];
};

export default function ScrollRevealText({ lines }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const words = useMemo(
    () =>
      lines.flatMap((line, lineIndex) =>
        line.split(" ").map((word, wordIndex) => ({
          word,
          key: `${lineIndex}-${wordIndex}`,
        }))
      ),
    [lines]
  );

  const opacities = words.map((_, i) => {
    const start = i / words.length;
    const end = start + 0.4 / words.length;
    return useTransform(scrollYProgress, [start, end], [0.15, 1]);
  });

  let cursor = 0;

  return (
    <div
      ref={ref}
      className="text-center space-y-6"
    >
      {lines.map((line, lineIndex) => (
        <p
          key={lineIndex}
          className="text-[2rem] text-center lg:text-[7rem] text-[#FAEADE] font-extrabold uppercase leading-tight"
        >
          {line.split(" ").map((word, i) => {
            const opacity = opacities[cursor];
            cursor++;

            return (
              <motion.span
                key={`${word}-${i}`}
                style={{ opacity }}
                className="lg:mr-10 inline-block"
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
