"use client"; // Add this if you’re using Next.js App Router

import { motion } from "framer-motion";

const cards = [
  { title: "Faculty Expertise", bg: "bg-gray-800", img: "/faculty.webp" },
  { title: "Career Development Services", bg: "bg-purple-700", img: "" },
  { title: "Global Perspectives", bg: "bg-gray-800", img: "/globe.webp" },
  { title: "Transport Facilities", bg: "bg-purple-700", img: "" },
  { title: "Enriched Library", bg: "bg-purple-700", img: "" },
  { title: "Extracurricular Activities", bg: "bg-gray-800", img: "/lantern.webp" },
  { title: "Technology & Innovation", bg: "bg-purple-700", img: "" },
  { title: "Student Support Services", bg: "bg-gray-800", img: "/support.webp" },
];

export default function AnimatedGrid() {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left/Right animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
            className={`${card.bg} rounded-lg flex items-center justify-center text-center h-48 shadow-lg relative`}
          >
            {/* Background Image (Optional) */}
            {card.img && (
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
              />
            )}
            <h3 className="z-10 text-lg font-bold px-4">{card.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
