import type { Metadata } from "next";
import Home from "./Section/Home/Home";
import "@fontsource/bebas-neue";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPYLT MILK",
  description: "Drink up",
};

export default function page() {
  return (
    <main>
      <Home />
    </main>
  );
}
