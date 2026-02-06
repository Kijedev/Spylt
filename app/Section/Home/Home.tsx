import Hero from "@/app/Section/Hero/page";
import Fearless from "@/app/Section/Fearless/page";
import Features from "@/app/Section/Features/page";
import BodyGood from "@/app/Section/BodyGood/page";
import Talking from "@/app/Section/Talking/page";
import Corner from "@/app/Section/Corner/page";
import Footer from "@/app/components/Footer/Footer";
import type { Metadata } from "next";
import { AppleCardsCarouselDemo } from "@/app/components/ui/AppleCardsCarouselDemo";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Fearless />
      <AppleCardsCarouselDemo />
      <BodyGood />
      <Features />
      <Talking />
      <Corner />
      <Footer />
    </main>
  );
}
