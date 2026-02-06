"use client";

import { motion } from "framer-motion";
import FrequentlyAsked from "@/app/Contact/FrequentlyAsked";
import Footer from "../components/Footer/Footer";
import FAQ from "@/app/Contact/FAQ";
import "@fontsource/bebas-neue";
// import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-[#FAEADE]">
      <section
        className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
        style={{ backgroundImage: "url('/Image/cornerbg.svg')" }}
      >
        {/* LEFT: Background Image */}
        <div
          className="relative flex items-end bg-cover bg-center"
          style={{
            backgroundImage: "url('/Screenshot 2026-02-06 231256.png')",
          }}
        >
          <div className="relative z-10 p-10 text-white max-w-lg lg:mt-0 mt-20">
            <h1 className="lg:text-[7rem] text-[4rem] font-extrabold leading-none mb-6 text-[#FAEADE]">
              GET IN
              <br />
              TOUCH
            </h1>

            <p className="text-sm font-sans text-[#FAEADE] mb-4">
              We love to hear from you. Reach out with comments, questions and
              feedback. Our lovely team will reply as quickly as we can.
            </p>

            <p className="text-sm font-sans text-[#FAEADE]">
              Feel free to shoot us an email{" "}
              <span className="underline">contact@SPYLT.com</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="flex items-center justify-center bg-[#f6dcc7] p-6 my-10 lg:mx-10 mx-6 rounded-4xl">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#4a2b1b]">
              DON’T BE SHY. <br />
              HIT US UP AND WE’LL GET BACK TO YOU!
            </h2>

            <form className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full name" className="input" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="input"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="input font-sans">
                  <option>Subject</option>
                  <option>Order issue</option>
                  <option>General enquiry</option>
                </select>
                <input
                  type="text"
                  placeholder="Order number (optional)"
                  className="input"
                />
              </div>

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Message"
                className="input resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#e4a85b] text-[#4a2b1b] font-semibold py-4 rounded-full hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="flex flex-col justify-center items-center">
          <FrequentlyAsked />

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
              QUESTIONS
            </h1>
          </motion.div>

          <FAQ />
          {/* <Image
            src="/Image/drip.svg"
            alt="FAQ Image"
            width={400}
            height={300}
            className="w-full"
          /> */}
        </div>
      </div>

      <Footer />
    </section>
  );
}
