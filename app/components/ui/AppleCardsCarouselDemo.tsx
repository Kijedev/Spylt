"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Carousel, Card } from "@/app/components/ui/appleCardsCarousel";
import { section } from "framer-motion/client";
import SearchFadeIn from "@/app/Stores/SearchFadeIn";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const fuelRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: fuelRef,
    offset: ["start end", "center center"],
  });

  // Center-out animation
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="w-full min-h-screen bg-[#FAEADE]">
      <div className="flex items-center">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-10">
          {/* TEXT SECTION */}
          <section className="relative flex justify-center">
            <div className="relative z-10 text-center flex flex-col items-center lg:mt-0 mt-20">
              <div>
                <SearchFadeIn text="WE HAVE 6" />
              </div>
              {/* <h1 className="lg:text-[7vw] text-[3rem] leading-[0.95] font-extrabold uppercase text-[#523122]">
                WE HAVE 6
              </h1> */}

              <motion.div
                ref={fuelRef}
                style={{ scaleX, opacity, originX: 0.5 }}
                className="inline-block bg-[#A26833] px-8 rotate-[-4deg] border-6 border-[#FAEADE] relative z-50 lg:mt-0 -mt-2"
              >
                <span className="lg:text-[6vw] text-[3rem] font-extrabold uppercase text-[#FAEADE] whitespace-nowrap">
                  FREAKING
                </span>
              </motion.div>
              <div>
                <SearchFadeIn text="DELICIOUS FLAVORS" />
              </div>
              {/* <h1 className="lg:text-[7vw] text-[3rem] leading-[0.95] font-extrabold uppercase text-[#523122] lg:-mt-4">
                DELICIOUS FLAVORS
              </h1> */}
            </div>
          </section>

          {/* CAROUSEL */}
          <div className="relative flex justify-center">
            <Carousel items={cards} />
          </div>
        </div>
      </div>

      <div className="pb-20 flex justify-center items-center">
        <button className="text-[#523122] bg-[#E3A458] rounded-full px-16 py-5 cursor-pointer text-xl">
          GET IT NOW
        </button>
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "CHOCOLATE MILK",
    bg: "/Image/chocolatebg.svg",
    toppins: "Image/chocolatetoppins.webp",
    src: "/Image/chocolate.webp",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "STRAWBERRY MILK.",
    bg: "/Image/strawberrybg.svg",
    toppins: "Image/strawberrytoppins.webp",
    src: "/Image/strawberry.webp",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "COOKIES & CREAM",
    bg: "/Image/cookiesbg.svg",
    toppins: "Image/cookiestoppins.webp",
    src: "/Image/cookies.webp",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "PEANUT BUTTER CHOCOLATE",
    bg: "/Image/peanutbg.svg",
    toppins: "Image/peanuttoppins.webp",
    src: "/Image/peanut.webp",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "VANILLA MILKSHAKE",
    bg: "/Image/vanillabg.svg",
    toppins: "Image/vanillatoppins.webp",
    src: "/Image/vanilla.webp",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "MAX CHOCOLATE MILK",
    bg: "/Image/maxchocobg.svg",
    toppins: "Image/chococookies.webp",
    src: "/Image/maxchocolate.webp",
    content: <DummyContent />,
  },
];
