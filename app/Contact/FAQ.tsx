import { useState } from "react";

const faqs = {
  orders: [
    {
      q: "Where do you deliver?",
      a: "We currently deliver across the United States. International shipping is coming soon.",
    },
    {
      q: "Does SPYLT need to ship cold?",
      a: "Nope! SPYLT is shelf-stable and does not require cold shipping.",
    },
    {
      q: "My SPYLT arrived damaged, now what?",
      a: "Please reach out to our support team with your order number and photos of the damage.",
    },
  ],
  products: [
    {
      q: "Can I order SPYLT in Canada?",
      a: "Not yet, but we’re actively working on expanding to Canada.",
    },
    {
      q: "I need SPYLT and I'm not in the US",
      a: "Sign up for updates—we’ll notify you as soon as we launch in your country.",
    },
    {
      q: "Can I buy SPYLT in person?",
      a: "Yes! Select retailers carry SPYLT. Store locator coming soon.",
    },
  ],
};

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<"orders" | "products">("orders");

  return (
    <section className="bg-[#faecdf] py-24">
      <div className="px-6">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          {["orders", "products"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "orders" | "products")}
              className={`px-10 py-4 rounded-full border text-xl font-semibold transition cursor-pointer
                  ${
                    activeTab === tab
                      ? "border-[#7a3b1c] text-[#7a3b1c]"
                      : "border-[#e0c3ae] text-[#c19a82]"
                  }`}
            >
              {tab === "orders" ? "ORDERS" : "PRODUCT QUESTIONS"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {faqs[activeTab].map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#f3d9c4] rounded-full w-full text-center p-10 overflow-hidden cursor-pointer"
            >
              <p className="text-2xl text-[#4a2b1b] transition group-hover:opacity-0 duration-300">
                {item.q}
              </p>

              <p className="absolute inset-0 flex items-center justify-center px-10 text-center bg-[#EDC8AD] text-[#4a2b1b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
