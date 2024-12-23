"use client";
import { motion } from "framer-motion";
import { FadeUp } from "@/utils/fadeup";
export default function CompusLife() {
  return (
    <>
      <section className="container mx-auto bg-section_back mt-20 font-open_sans">
        <div className="flex justify-center items-center  text-2xl md:text-3xl lg:text-5xl text-slateblue py-6 font-raleway">
          Campus Life
        </div>
        <div className="py-8 lg:py-20 grid grid-cols-1 md:grid-cols-2 md:gap-12 space-y-6 md:space-y-0 md:px-16 lg:px-28">
          <div className="flex justify-center items-center transform transition duration-500 md:hover:scale-110">
            <motion.img
              initial={{ opacity: 0, x: -100 }} // Start hidden and shifted left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into view
              viewport={{ once: true }} // Animate only once when in the viewport
              transition={{
                duration: 0.8, // Shorter duration for smooth motion
                ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing for natural feel
                type: "spring", // Adds spring-like motion
                stiffness: 70, // Spring stiffness for smooth acceleration
                damping: 20, // Reduces bounce and oscillation
              }}
              src={"/computerClub.webp"}
              alt=""
              loading="lazy"
              className="w-[330px] md:w-[711px] object-cover drop-shadow rounded-[20px] shadow-xl"
            />
          </div>
          <div className="flex justify-center items-left flex-col">
            <div className="text-left md:text-left">
              <motion.h1
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[20px] lg:text-[32px] pl-8 md:pl-0 text-slateblue pb-4 text-justify"
              >
                Computer Club
              </motion.h1>
              <motion.p
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-black text-justify pb-4"
              >
                The Computer Club at RPSU provides a platform for students to
                explore and engage with technology through workshops, coding
                sessions, and networking events. Join us to enhance your tech
                skills and connect with like-minded individuals.
              </motion.p>
              <motion.p
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-slateblue text-justify font-semibold"
              >
                <a href="#">Learn More</a>
              </motion.p>
            </div>
          </div>
        </div>
        <div className="hidden py-8 lg:py-20 md:grid grid-cols-1 md:grid-cols-2 md:gap-12 space-y-6 md:space-y-0 md:px-16 lg:px-28">
          <div className="flex justify-center items-left flex-col">
            <div className="text-left md:text-left">
              <motion.h1
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[20px] lg:text-[32px] pl-8 md:pl-0 text-slateblue pb-4 text-justify"
              >
                Sports Club
              </motion.h1>
              <motion.p
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-black text-justify pb-4"
              >
                The Sports Club at RPSU offers a dynamic platform for students
                to engage in various athletic activities, promoting physical
                fitness, teamwork, and sportsmanship. Join us for an active and
                energetic community experience.
              </motion.p>
              <motion.p
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-slateblue text-justify font-semibold"
              >
                <a href="#">Learn More</a>
              </motion.p>
            </div>
          </div>
          <div className="flex justify-center items-center transform transition duration-500 md:hover:scale-110">
            <motion.img
              initial={{ opacity: 0, x: 100 }} // Start hidden and shifted left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into view
              viewport={{ once: true }} // Animate only once when in the viewport
              transition={{
                duration: 0.8, // Shorter duration for smooth motion
                ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing for natural feel
                type: "spring", // Adds spring-like motion
                stiffness: 70, // Spring stiffness for smooth acceleration
                damping: 20, // Reduces bounce and oscillation
              }}
              loading="lazy"
              src={"/sports.webp"}
              alt=""
              className="w-[330px] md:w-[711px] object-cover drop-shadow rounded-[20px] shadow-xl"
            />
          </div>
        </div>
        <div className="md:hidden py-8 lg:py-20 grid grid-cols-1 md:grid-cols-2 md:gap-12 space-y-6 md:space-y-0 md:px-16 lg:px-28">
          <div className="flex justify-center items-center transform transition duration-500 md:hover:scale-110">
            <motion.img
              initial={{ opacity: 0, x: 100 }} // Start hidden and shifted left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into view
              viewport={{ once: true }} // Animate only once when in the viewport
              transition={{
                duration: 0.8, // Shorter duration for smooth motion
                ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing for natural feel
                type: "spring", // Adds spring-like motion
                stiffness: 70, // Spring stiffness for smooth acceleration
                damping: 20, // Reduces bounce and oscillation
              }}
              src={"/sports.webp"}
              alt=""
              loading="lazy"
              className="w-[330px] md:w-[711px] object-cover drop-shadow rounded-[20px] shadow-xl"
            />
          </div>
          <div className="flex justify-center items-left flex-col">
            <div className="text-left md:text-left">
              <motion.h1
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[20px] lg:text-[32px] pl-8 md:pl-0 text-slateblue pb-4 text-justify"
              >
                Sports Club
              </motion.h1>
              <motion.p
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-black text-justify pb-4"
              >
                The Sports Club at RPSU offers a dynamic platform for students
                to engage in various athletic activities, promoting physical
                fitness, teamwork, and sportsmanship. Join us for an active and
                energetic community experience.
              </motion.p>
              <motion.p
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-slateblue text-justify font-semibold"
              >
                <a href="#">Learn More</a>
              </motion.p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-20 grid grid-cols-1 md:grid-cols-2 md:gap-12 space-y-6 md:space-y-0 md:px-16 lg:px-28">
          <div className="flex justify-center items-center transform transition duration-500 md:hover:scale-110">
            <motion.img
              initial={{ opacity: 0, x: -100 }} // Start hidden and shifted left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into view
              viewport={{ once: true }} // Animate only once when in the viewport
              transition={{
                duration: 0.8, // Shorter duration for smooth motion
                ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing for natural feel
                type: "spring", // Adds spring-like motion
                stiffness: 70, // Spring stiffness for smooth acceleration
                damping: 20, // Reduces bounce and oscillation
              }}
              src={"/cultural.webp"}
              alt=""
              loading="lazy"
              className="w-[330px] md:w-[711px] object-cover drop-shadow rounded-[20px] shadow-xl"
            />
          </div>
          <div className="flex justify-center items-left flex-col">
            <div className="text-left md:text-left">
              <motion.h1
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[20px] lg:text-[32px] pl-8 md:pl-0 text-slateblue pb-4 text-justify"
              >
                Cultural Club
              </motion.h1>
              <motion.p
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-black text-justify pb-4"
              >
                The Cultural Club at RPSU fosters cross-cultural understanding
                and appreciation through diverse events and activities,
                welcoming students of all backgrounds to celebrate and share
                their cultural heritage. Join us for a vibrant and inclusive
                community experience.
              </motion.p>
              <motion.p
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8, // Smoother, slightly slower animation
                  ease: [0.25, 0.8, 0.5, 1], // Custom cubic-bezier easing for a polished effect
                }}
                className="text-[10px] lg:text-[20px] px-8 md:pl-0 text-slateblue text-justify font-semibold"
              >
                <a href="#">Learn More</a>
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
