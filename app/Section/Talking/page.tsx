import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Page() {
  return (
    <main>
      <section className="flex flex-col justify-between">
        <div className="bg-[#FAEADE] flex flex-col lg:gap-20 px-4 lg:px-0 py-12 lg:py-0">
          {/* WHATS */}
          <h1 className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-end text-[#222123] lg:h-56">
            WHATS
          </h1>

          {/* EVERYONE */}
          <h1 className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-end text-[#E3A458] lg:h-56 lg:pr-20">
            EVERYONE
          </h1>

          {/* TALKING */}
          <h1 className="text-[5rem] lg:text-[25rem] flex justify-center lg:justify-start text-[#222123]">
            TALKING
          </h1>

          {/* BUTTON */}
          <button
            className="
              text-[#523122]
              bg-[#E3A458]
              rounded-full
              px-12
              py-4
              text-lg
              cursor-pointer
              block
              mx-auto
              hover:scale-105
              transition
              mt-8
              lg:-mt-56
            "
          >
            EXPLORE ALL
          </button>
        </div>

        <Image
          src="/Image/drip.svg"
          alt="FAQ Image"
          width={400}
          height={300}
          className="w-full"
        />
      </section>
    </main>
  );
}
