import type { Metadata } from "next";
import Home from "./Section/Home/Home";

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