import type { Metadata } from "next";
import Home from "./Section/Home/Home";
import '@fontsource/bebas-neue';

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return (
    <main>
      <Home />
    </main>
  );
}