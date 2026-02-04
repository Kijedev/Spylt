"use client";
import { motion } from "framer-motion";
import ChugFadeIn from "@/app/components/Footer/ChugFadeIn";

export default function Hero() {
  return (
    <footer className="relative w-full h-screen overflow-hidden bg-[#222123]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video/header.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        {/* <ChugFadeIn /> */}
          <h1 className="text-[#523122] lg:text-[8rem]">
            FREAKING DELICIOUS
          </h1>
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex bg-[#A26833] px-2 -rotate-1 -mt-12 border-6 border-[#FCE1CD]"
          >
            <h1 className="text-3xl lg:text-[8rem] text-[#FCE1CD]">
              PREOTEIN + CAFFEIN
            </h1>
          </motion.div>
        </div>

        <p className="text-[#523122] max-w-md text-center font-sans">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>

        <button className="text-[#523122] bg-[#E3A458] rounded-full px-16 py-5">
          CHUG A SPYLT
        </button>
      </div>
    </footer>
  );
}
