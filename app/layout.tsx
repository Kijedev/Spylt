"use client";

import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/page";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Preloader from "@/app/components/Preloader";
import SmoothScroll from "@/app/Provider/page";

// export const metadata: Metadata = {
//   title: "Spylt",
//   description: "Discover the best lactose-free milk alternatives.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <AnimatePresence>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
          </AnimatePresence>

          {!loading && children}
        </SmoothScroll>
      </body>
    </html>
  );
}
