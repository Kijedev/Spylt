"use client";

import { motion, cubicBezier } from "framer-motion";
import CornerFadeIn from "@/app/components/CornerFadeIn"

export default function RightAroundCorner() {
    return (
        <section
            className="relative min-h-screen flex items-center px-6 md:px-20 text-white"
            style={{
                backgroundImage: "url('/Image/cornerbg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Content */}
            <div className="max-w-2xl">
                <CornerFadeIn />

                <motion.div
                    initial={{ opacity: 0, x: -80, rotate: -4 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block bg-[#E9AA56] px-6 -mt-12 rotate-[5deg]"
                >
                    <h2 className="text-3xl lg:text-[7rem] font-extrabold text-[#523122] tracking-tight">
                        THE CORNER
                    </h2>
                </motion.div>


                {/* Subtitle */}
                <p className="mt-6 text-sm md:text-base max-w-sm opacity-90 font-sans">
                    Buy our drinks at your local store or get them delivered (to your
                    door).
                </p>

                {/* Button */}
                <button className="mt-8 bg-[#222123] text-white px-16 py-4 rounded-full hover:scale-105 transition">
                    FIND IN STORES
                </button>
            </div>
        </section>
    );
}
