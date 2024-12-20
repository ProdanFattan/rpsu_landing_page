"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Kumudini School of Public Health",
    description: "The Kumudini School of Public Health is a premier institution dedicated to cultivating tomorrow's leaders. With a focus on global perspectives and practical skills, we prepare students to thrive in dynamic environments.",
    bgColor: "bg-brown",
  },
  {
    title: "School of Computer Science",
    description: "The School of Computer Science offers cutting-edge programs designed to equip students with in-demand skills in AI, machine learning, and software development.",
    bgColor: "bg-blue-500",
  },
  {
    title: "Business Administration School",
    description: "Our Business Administration School nurtures innovative thinkers and business leaders through hands-on experience and global strategies.",
    bgColor: "bg-green-500",
  },
  {
    title: "School of Arts and Humanities",
    description: "Explore the world of creativity and critical thinking in our School of Arts and Humanities, fostering talent across diverse disciplines.",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Engineering School",
    description: "Join the Engineering School to delve into advanced technologies and practical problem-solving with industry-standard labs.",
    bgColor: "bg-red-500",
  },
  {
    title: "Medical Sciences School",
    description: "Pursue excellence in healthcare and medical research with our Medical Sciences School's comprehensive curriculum.",
    bgColor: "bg-purple-500",
  },
  {
    title: "School of Environmental Studies",
    description: "Address global environmental challenges through interdisciplinary studies and hands-on projects at the School of Environmental Studies.",
    bgColor: "bg-teal-500",
  },
];

const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="relative w-full h-[446px] overflow-hidden bg-black">
      <AnimatePresence>
        {Array.from({ length: 3 }).map((_, index) => {
          const slideIndex = (currentSlide + index) % slides.length;
          return (
            <motion.div
              key={slideIndex}
              className={`absolute gap-8 top-0 left-[${index * 450}px] w-[450px] h-full flex items-center justify-center p-4 rounded-31xl text-white font-raleway ${slides[slideIndex].bgColor}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="w-full h-[398px]">
                <b className="block text-2xl mb-4">{slides[slideIndex].title}</b>
                <p className="text-base font-open-sans">{slides[slideIndex].description}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider2;
