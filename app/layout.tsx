"use client";

import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/page";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Preloader from "@/app/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && children}
      </body>
    </html>
  );
}
