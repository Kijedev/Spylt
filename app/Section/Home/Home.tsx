import Footer from "@/app/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Footer />
    </main>
  );
}