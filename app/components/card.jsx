"use client";
import Image from "next/image";
import React, { useId } from "react";
import {  motion } from "framer-motion";
import authorityData from "@/app/data/authorityData"

function ExpandableCardDemo() {
  const id = useId();
  const cards = authorityData?.[2]?.member.map((member) => ({
    title: member.name,
    description: member.title,
    content: member.History || "No history available",
    ctaText: "View",
    ctaLink: `/${member.slug}`,
    src: member.image,
  }));

  return (
    <>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            className="p-4 flex flex-col hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-contain object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-black text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-black text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export default ExpandableCardDemo;
