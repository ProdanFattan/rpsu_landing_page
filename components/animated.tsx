"use client"; // Add this if you’re using Next.js App Router

import { FadeUp } from "@/utils/fadeup";
import { motion } from "framer-motion";

const cards = [
  { title: "Faculty Expertise", bg: "bg-gray-800", img: "/faculty.webp" },
  { title: "Career Development Services", bg: "bg-purple-700", img: "" },
  { title: "Global Perspectives", bg: "bg-gray-800", img: "/globe.webp" },
  { title: "Transport Facilities", bg: "bg-purple-700", img: "" },
  { title: "Enriched Library", bg: "bg-purple-700", img: "" },
  {
    title: "Extracurricular Activities",
    bg: "bg-gray-800",
    img: "/lantern.webp",
  },
  { title: "Technology & Innovation", bg: "bg-purple-700", img: "" },
  {
    title: "Student Support Services",
    bg: "bg-gray-800",
    img: "/support.webp",
  },
];

export default function AnimatedGrid() {
  return (
    <section className="container mx-auto px-4 md:px-16 lg:px-28 pt-6 bg-section_back text-white p-8">
      <motion.h1
        variants={FadeUp(0.4)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{
          duration: 0.8, // Smoother, slightly slower animation
          ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
        }}
        className="text-slateblue text-center justify-center pb-16 md:pb-24 text-[24px] md:text-[48px]"
      >
        Why Choose RPSU
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left/Right animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8, // Slightly longer duration for smoothness
              ease: [0.22, 1, 0.36, 1], // Use a custom cubic-bezier easing for smooth acceleration and deceleration
              type: "spring", // Add spring animation for a natural feel
              stiffness: 50, // Controls spring tightness
              damping: 20, // Reduces oscillation
            }}
            className={`${card.bg} rounded-[20px] flex items-center justify-center text-center h-48 shadow-lg relative`}
          >
            {/* Background Image (Optional) */}
            {card.img && (
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-80 rounded-[20px]"
              />
            )}
            <h3 className="z-10 text-lg font-bold px-4">{card.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
