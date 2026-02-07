"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGripLines } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/lobster";

const menuItems = [
  { label: "SHOP", link: "/shop", image: "/Image/shop.png" },
  { label: "FIND IN STORES", link: "/Stores", image: "/Image/4.png" },
  { label: "ABOUT US", link: "/about", image: "/Image/1.jpg" },
  { label: "TASTY TALKS", link: "/tasty-talks", image: "/Image/3.jpg" },
  { label: "PROGRAMS", link: "/programs", image: "/Image/6.jpg" },
  { label: "CONTACTS", link: "/Contact", image: "/Image/7.jpg" },
];

export default function FullscreenNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-8 py-6 overflow-hidden">
        <Link
          href="/"
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/Image/logo.svg"
            width={80}
            height={80}
            alt="SPYLT Logo"
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#7A3A2A] cursor-pointer lg:flex hidden"
        >
          <FaGripLines className="text-4xl" />
        </button>
        <span className="px-6 py-2 rounded-full bg-white text-[#7A3A2A]">
          FIND IN STORES
        </span>
      </nav>

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
            className="fixed inset-0 z-999 flex bg-[#F6E6D8]"
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
                <Link
                  key={item.label}
                  href={item.link}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setIsOpen(false)} 
                  className="text-[6vw] text-[#4B2E1F] hover:text-[#4B2E1F]/50 leading-none text-center font-extrabold uppercase cursor-pointer transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-12 font-sans flex justify-center gap-8 text-lg text-[#4B2E1F]">
                <span>YouTube</span>
                <span>Instagram</span>
                <span>TikTok</span>
              </div>
            </div>

            <div className="w-1/2 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={menuItems[activeIndex ?? 0].image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
