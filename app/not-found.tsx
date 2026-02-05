"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import '@fontsource/bebas-neue';
import "./globals.css";
import Footer from "./components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-[#FAEADE]">
      <div className="flex items-center overflow-hidden mt-32 lg:mt-0">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="mx-16 text-[20vw] font-bold text-[#523122]"
            >
              404 NOT FOUND
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 text-center flex flex-col justify-center items-center pb-10">
        <Image
          src="/Image/404.png"
          className="w-96 h-72 lg:-mt-56"
          height={100}
          width={100}
          alt="404 Image"
        />
        <p className="mt-4 text-[#523122] max-w-lg font-sans py-4">
          This is a 404 error, which means youve clicked on a bad link or
          entered an invalid URL. Maybe what you arelooking for can be found in
          the homepage
        </p>

        <Link
          href="/"
          className="text-[#523122] bg-[#E3A458] rounded-full px-10 py-5 cursor-pointer text-xl font-fontSpylt"
        >
          CHUG A SPYLT
        </Link>
      </div>

      <Footer />
    </div>
  );
}
