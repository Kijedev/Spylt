"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGripLines } from "react-icons/fa";
import Image from "next/image";
import "@fontsource/lobster";

const menuItems = [
  { label: "SHOP", image: "/Image/shop.png" },
  { label: "FIND IN STORES", image: "/Image/4.png" },
  { label: "ABOUT US", image: "/Image/1.jpg" },
  { label: "TASTY TALKS", image: "/Image/3.jpg" },
  { label: "PROGRAMS", image: "/Image/6.jpg" },
  { label: "CONTACTS", image: "/Image/7.jpg" },
];

export default function FullscreenNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* TOP NAV BAR */}
      <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-8 py-6">
        <span className="cursor-pointer hover:scale-110 transition-transform duration-200">
          <Image
            src="/Image/logo.svg"
            width={100}
            height={100}
            alt="SPYLT Logo"
          />
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#7A3A2A] cursor-pointer"
        >
          <FaGripLines className="text-4xl" />
        </button>
        <span className="px-6 py-2 rounded-full bg-white text-[#7A3A2A] font-semibold">
          FIND IN STORES
        </span>
      </nav>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.3,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="fixed inset-0 z-50 flex bg-[#F6E6D8]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-xl font-bold bg-white text-[#7A3A2A] cursor-pointer z-50 h-12 w-12 rounded-full p-2"
            >
              ✕
            </button>

            {/* LEFT NAV */}
            <div className="w-1/2 flex flex-col justify-center pl-24">
              {menuItems.map((item, index) => (
                <motion.h2
                  key={item.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-[6vw] leading-none text-center font-extrabold uppercase text-[#4B2E1F] cursor-pointer"
                >
                  {item.label}
                </motion.h2>
              ))}

              {/* SOCIALS */}
              <div className="mt-12 font-sans flex justify-center gap-8 text-sm text-[#4B2E1F]">
                <span>YouTube</span>
                <span>Instagram</span>
                <span>TikTok</span>
              </div>
            </div>

            {/* RIGHT IMAGE PREVIEW */}
            <div className="w-1/2 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={menuItems[activeIndex].image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
