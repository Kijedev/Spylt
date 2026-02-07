"use client";

import "@fontsource/bebas-neue";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchFadeIn from "@/app/Stores/SearchFadeIn";
import Footer from "../components/Footer/Footer";

export default function Page() {
  return (
    <section className="bg-[#FAEADE]">
      {/* HERO */}
      <div className="relative z-10 h-full flex flex-col lg:gap-16 gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <SearchFadeIn text="SEARCH FOR SPYLT" />

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex bg-[#A26833] px-2 -rotate-3 lg:-mt-12 -mt-6 border-6 border-[#FCE1CD]"
          >
            <h1 className="text-[3rem] lg:text-[7rem] text-[#FCE1CD]">
              NEAR YOU
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#222123]">
        <section className="bg-[#FAEADE]">
          <h1 className="text-center py-6 lg:text-[4rem] text-[2rem] text-[#523122]">
            SPYLT IN REAL LIFE
          </h1>
          <div className="flex flex-col lg:gap-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center">
              <Image
                src="/Image/albertsons.svg"
                width={200}
                height={200}
                alt="albertsons"
              />
              <Image
                src="/Image/kroger.svg"
                width={200}
                height={200}
                alt="kroger"
              />
              <Image src="/Image/heb.svg" width={200} height={200} alt="heb" />
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:mt-0 mt-10 lg:gap-20 justify-center items-center">
              <Image
                src="/Image/quiktrip.svg"
                width={200}
                height={200}
                alt="quiktrip"
              />
              <Image
                src="/Image/circlek.svg"
                width={200}
                height={200}
                alt="circlek"
              />
              <Image
                src="/Image/extramile.svg"
                width={200}
                height={200}
                alt="extramile"
              />
            </div>
          </div>

          <h1 className="text-center py-6 lg:text-[4rem] text-[2rem] text-[#523122] mt-20">
            SPYLT DELIVERED BY
          </h1>
          <div className="flex flex-col gap-10 lg:py-20 py-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center">
              <Image
                src="/Image/tiktokshop.svg"
                width={200}
                height={200}
                alt="tiktokshop"
              />
              <Image
                src="/Image/amazon.svg"
                width={200}
                height={200}
                alt="amazon"
              />
              <Image
                src="/Image/walmart.svg"
                width={200}
                height={200}
                alt="walmart"
              />
            </div>
          </div>
        </section>

        <Image
          src="/Image/drip.svg"
          alt="FAQ Image"
          width={400}
          height={300}
          className="w-full"
        />
      </div>

      {/* CAN'T FIND SPYLT SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/Image/searchbg.webp" // 👈 replace with your cans image
          alt="SPYLT cans"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 py-20">
          <div className="flex flex-col justify-center items-center">
            <SearchFadeIn text="CAN'T FIND SPYLT" color="text-[#FAEADE]"/>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex bg-[#FED775] px-2 -rotate-3 lg:-mt-12 -mt-6 border-6 border-[#FCE1CD]"
            >
              <h1 className="text-[3rem] lg:text-[7rem] text-[#7A3A2A]">
                NEAR YOU
              </h1>
            </motion.div>
          </div>

          <p className="max-w-xl text-white text-sm md:text-2xl mt-4 opacity-90 font-sans">
            Spylt is now available at thousands of grocery stores around the
            country, but there are thousands more that we’d love to be in.
          </p>

          <button className="cursor-pointer bg-white/80 backdrop-blur-2xl mt-10 px-10 py-4 rounded-full border border-white text-[#FAEADE] text-2xl">
            CONTACT US
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
}
