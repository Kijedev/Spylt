"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BodyGoodFadeIn from "@/app/Section/BodyGood/BodyGoodFadeIn";

export default function BodyGood() {
  return (
    <main
      className="overflow-x-hidden"
      style={{
        backgroundImage: "url('/Image/bodygoodtop.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#E4D8C2",
      }}
    >
      <section
        className="relative min-h-screen px-6 md:px-20 text-white"
        style={{
          backgroundImage: "url('/Image/bodygoodbg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between items-center pt-32">
          {/* Content */}
          <div className="max-w-2xl">
            <BodyGoodFadeIn />

            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -4 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block bg-[#A26833] border-4 border-[#E2D4BC] px-6 -mt-12"
              style={{ transform: "rotate(-2deg)" }}
            >
              <h2 className="text-3xl lg:text-[8rem] text-[#E2D4BC] tracking-tight">
                BODY GOOD
              </h2>
            </motion.div>
          </div>

          <div>
            <h1 className="text-[#523122] font-sans text-right max-w-sm mx-auto">
              Milk contains a wide array of nutrients, including vitamin,
              minerals, and protein, and thtis is lactose free
            </h1>
          </div>
        </div>

        <section className="text-6xl bg-[#FDEBD2] mt-20 border-6 border-[#E5D9C4] rounded-full flex justify-around px-8 py-4">
          <div className="text-[#A26833] border-r border-[#A26833] px-10">
            <p className=" text-[#A26833] font-sans text-xl">Potassium </p>
            <p className="text-sm text-[#A26833] mt-4 font-sans">up to</p>
            <h1 className="text-4xl">245mg</h1>
          </div>
          <div className="text-[#A26833] border-r border-[#A26833] px-10">
            <p className=" text-[#A26833] font-sans text-xl">Calcium </p>
            <p className="text-sm text-[#A26833] mt-4 font-sans">up to</p>
            <h1 className="text-4xl">500mg</h1>
          </div>
          <div className="text-[#A26833] border-r border-[#A26833] px-10">
            <p className=" text-[#A26833] font-sans text-xl">Vitamin A </p>
            <p className="text-sm text-[#A26833] mt-4 font-sans">up to</p>
            <h1 className="text-4xl">176mcg</h1>
          </div>
          <div className="text-[#A26833] border-r border-[#A26833] px-10">
            <p className=" text-[#A26833] font-sans text-xl">Vitamin D</p>
            <p className="text-sm text-[#A26833] mt-4 font-sans">up to</p>
            <h1 className="text-4xl">5mcg</h1>
          </div>
          <div className="text-[#A26833] px-10">
            <p className=" text-[#A26833] font-sans text-xl">Iron</p>
            <p className="text-sm text-[#A26833] mt-4 font-sans">up to</p>
            <h1 className="text-4xl">1mg</h1>
          </div>
        </section>
      </section>
    </main>
  );
}
