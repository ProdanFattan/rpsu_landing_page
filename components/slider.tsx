"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    buttons: [
      { text: "Visit Campus", position: "top-20 right-5" },
      { text: "Apply Now", position: "top-[185px] right-20" },
      { text: "ERP", position: "top-[285px] right-5" },
      { text: "Tuition & Fees", position: "top-[390px] right-28" },
    ],
  },
  {
    image: "https://picsum.photos/id/237/200/300",
    buttons: [
      { text: "Academics", position: "top-20 right-5" },
      { text: "Visit Campus", position: "top-5 left-[200px]" },
      { text: "Apply Now", position: "top-[105px] left" },
    ],
  },
];

const Slider = () => {
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

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, scale: 0.8, x: 0, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <motion.div
        key={currentSlide}
        className="absolute inset-0 flex items-center justify-center"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {slides[currentSlide].buttons.map((button) => (
          <motion.div
            key={button.text}
            className={`absolute ${button.position} flex items-center justify-center bg-white pointer-events-auto w-[300px] h-[90px] rounded-[50px]`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            <button className="w-[282px] h-[79px] rounded-[50px] bg-btn_clr text-white">
              {button.text}
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
