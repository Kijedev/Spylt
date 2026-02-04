import Hero from "@/app/Section/Hero/page";
import Corner from "@/app/Section/Corner/page";
import Footer from "@/app/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Corner />
      <Footer />
    </main>
  );
}
