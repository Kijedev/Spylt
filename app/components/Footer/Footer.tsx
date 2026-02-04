import ChugFadeIn from "@/app/components/Footer/ChugFadeIn"
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative w-full h-screen overflow-hidden bg-[#222123]">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/Video/footer.webm"
                autoPlay
                muted
                playsInline
                preload="auto"
            />
            <div className="absolute inset-0" />

            {/* Content on top */}
            <div className="relative z-10 h-full flex flex-col justify-between px-6 py-10 text-white">
                {/* Top Text */}
                {/* <h1 className="text-4xl md:text-[6rem] font-bold tracking-tight text-[#FAEADE] text-center">
                    #CHUGRESPONSIBLY
                </h1> */}
                <ChugFadeIn />

                <div>
                    <div className="flex justify-center gap-5 text-[#FAEADE]">
                        <FaYoutube className="border border-[#FAEADE]/20 text-4xl w-20 h-20 rounded-full p-6 hover:bg-white/5 cursor-pointer" />
                        <AiFillInstagram className="border border-[#FAEADE]/20 text-4xl w-20 h-20 rounded-full p-6 hover:bg-white/5 cursor-pointer" />
                        <FaTiktok className="border border-[#FAEADE]/20 text-4xl w-20 h-20 rounded-full p-6 hover:bg-white/5 cursor-pointer" />
                    </div>
                </div>

                {/* Footer content */}
                <div className="flex lg:flex-row flex-col justify-between text-[#FAEADE] text-sm">
                    <div className="flex lg:flex-row flex-col lg:gap-20 gap-10">
                        <p className="mb-2 text-lg">SPYLT Flavors</p>
                        <div className="text-lg">
                            <ul className="space-y-1 opacity-80">
                                <li>Chug Club</li>
                                <li>Student Marketing</li>
                                <li>Dairy Dealers</li>
                            </ul>
                        </div>

                        <div className="text-lg">
                            <p className="mb-2">Company</p>
                            <ul className="space-y-1 opacity-80">
                                <li>Contacts</li>
                                <li>Tasty Talk</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <p className="mb-3 text-lg max-w-lg text-[#FAEADE]">
                            Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
                        </p>
                        <div className="flex items-center border-b border-white/40 max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none py-2  text-4xl flex-1 placeholder-white/60"
                            />
                            <span className="text-4xl text-[#FAEADE]">→</span>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-4 justify-between text-[#FAEADE]">
                    <span>
                        Copyright © 2025 Spylt - All Rights Reserved
                    </span>
                    <span className="flex gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </span>
                </div>
            </div>
        </footer>
    );
}
