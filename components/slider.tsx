// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "/slide1.webp",
//     buttons: [
//       { text: "Visit Campus", position: "left-0 bottom-0" },
//       { text: "Apply Now", position: "left-[100px] bottom-0" },
//       { text: "Tuition & Fees", position: "right-0 bottom-0" },
//     ],
//   },
//   {
//     image: "/slide2.webp",
//     buttons: [
//       { text: "Academics", position: "top-10 right-10 lg:top-20 lg:right-[130px]" },
//       { text: "Visit Campus", position: "top-5 left-5 lg:top-5 lg:left-[360px]" },
//       { text: "Apply Now", position: "top-20 left-5 lg:top-[110px] lg:left-[130px]" },
//     ],
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const slideVariants = {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 100 },
//   };

//   const buttonVariants = {
//     initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     exit: { opacity: 0, scale: 0.8, x: 0, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <>
//       <div className="w-full h-[249px] lg:w-full lg:h-[762px] bg-section_back flex justify-center items-center relative overflow-hidden py-8">
//         <motion.div
//           key={currentSlide}
//           className="w-[407px] h-[247px] lg:w-[1240px] lg:h-[760px] rounded-[20px] lg:rounded-[50px] overflow-hidden"
//           variants={slideVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//         >
//           <img
//             src={slides[currentSlide].image}
//             alt={`Slide ${currentSlide + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <AnimatePresence>
//           {slides[currentSlide].buttons.map((button) => (
//             <motion.div
//               key={button.text}
//               className={`absolute ${button.position} flex items-center justify-center bg-section_back pointer-events-auto w-[100px] h-[30px] lg:w-[310px] lg:h-[100px] rounded-[30px] lg:rounded-[50px]`}
//               variants={buttonVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               layout
//             >
//               <button className="w-[90%] h-[80%] rounded-[30px] lg:rounded-[50px] bg-btn_clr text-white text-[10px] lg:text-lg font-semibold">
//                 {button.text}
//               </button>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Slider;

"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { log } from "console";

const slides = [
  {
    image: "/slide1.webp",
    buttons: [
      { text: "Visit Campus", position: { x: 0.95, y: 0.2 } },
      { text: "Apply Now", position: { x: 0.95, y: 0.33 } },
      { text: "ERP", position: { x: 0.95, y: 0.46 } },
      { text: "Tuition & Fees", position: { x: 0.85, y: 0.57 } },
    ],
  },
  {
    image: "/slide2.webp",
    buttons: [
      { text: "Academics", position: { x: 0.82, y: 0.2 } },
      { text: "Visit Campus", position: { x: 0.13, y: 0.2 } },
      { text: "Apply Now", position: { x: 0.23, y: 0.305 } },
    ],
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  console.log(containerRef);

  useEffect(() => {
    // Update the container size dynamically
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { width, height } = (
          containerRef.current as HTMLDivElement
        ).getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    // Initial size calculation
    updateContainerSize();

    // Update size on window resize
    window.addEventListener("resize", updateContainerSize);
    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto w-full h-[249px] md:w-full md:h-[850px] bg-section_back flex justify-center items-center relative overflow-hidden py-16">
      <motion.div
        key={currentSlide}
        ref={containerRef}
        className="w-[409] h-[249px]  md:w-[1242] md:h-[762px]  overflow-hidden px-8 "
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-[407] h-[249px]  md:w-[1240] md:h-[760px] rounded-[20px] md:rounded-[50px] "
        />
      </motion.div>

      <AnimatePresence>
        {slides[currentSlide].buttons.map((button, index) => {
          const xPosition = button.position.x * containerSize.width;
          const yPosition = button.position.y * containerSize.height;

          return (
            <motion.div
              key={index}
              className="absolute ${button.position} flex items-center justify-center bg-section_back pointer-events-auto w-[80px] h-[25px] md:w-[195px] md:h-[90px] rounded-[30px] lg:rounded-[50px]"
              style={{
                left: `${xPosition}px`,
                top: `${yPosition}px`,
              }}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
            >
              <button className="w-[90%] h-[80%] rounded-[30px] lg:rounded-[50px] bg-btn_clr text-white text-[10px] lg:text-lg font-semibold">
                {button.text}
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider;

// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "/slide1.webp",
//     buttons: ["Visit Campus", "Apply Now", "ERP", "Tuition & Fees"],
//   },
//   {
//     image: "/slide2.webp",
//     buttons: ["Academics", "Visit Campus", "Apply Now"],
//   },
// ];

// const generateRandomPosition = (containerWidth: number, containerHeight: number) => {
//   // Generate random positions within a safe area (e.g., avoid edges)
//   const safeMargin = 0.1;
//   const x = Math.random() * (1 - safeMargin * 2) + safeMargin; // Relative x (0 to 1)
//   const y = Math.random() * (1 - safeMargin * 2) + safeMargin; // Relative y (0 to 1)
//   return { x, y };
// };

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
//   const [buttonPositions, setButtonPositions] = useState<{ x: number; y: number }[]>([]);

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Update container size dynamically
//     const updateContainerSize = () => {
//       if (containerRef.current) {
//         const { width, height } = containerRef.current.getBoundingClientRect();
//         setContainerSize({ width, height });
//       }
//     };

//     updateContainerSize();
//     window.addEventListener("resize", updateContainerSize);
//     return () => window.removeEventListener("resize", updateContainerSize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Generate new random positions when the slide changes
//     if (containerSize.width && containerSize.height) {
//       const newPositions = slides[currentSlide].buttons.map(() =>
//         generateRandomPosition(containerSize.width, containerSize.height)
//       );
//       setButtonPositions(newPositions);
//     }
//   }, [currentSlide, containerSize]);

//   const slideVariants = {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 100 },
//   };

//   const buttonVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-[300px] md:h-[850px] bg-section_back flex justify-center items-center relative overflow-hidden py-16"
//     >
//       <motion.div
//         key={currentSlide}
//         className="w-[90%] h-[80%] overflow-hidden"
//         variants={slideVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//       >
//         <img
//           src={slides[currentSlide].image}
//           alt={`Slide ${currentSlide + 1}`}
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </motion.div>

//       <AnimatePresence>
//         {slides[currentSlide].buttons.map((buttonText, index) => {
//           const { x, y } = buttonPositions[index] || { x: 0.5, y: 0.5 }; // Default center

//           const xPosition = x * containerSize.width;
//           const yPosition = y * containerSize.height;

//           return (
//             <motion.div
//               key={index}
//               className="absolute flex items-center justify-center bg-btn_clr text-white rounded-full shadow-md pointer-events-auto"
//               style={{
//                 left: `${xPosition}px`,
//                 top: `${yPosition}px`,
//                 width: containerSize.width > 768 ? "150px" : "90px",
//                 height: containerSize.width > 768 ? "50px" : "30px",
//                 transform: "translate(-50%, -50%)", // Center the buttons
//               }}
//               variants={buttonVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <button className="w-full h-full text-xs md:text-lg font-semibold">
//                 {buttonText}
//               </button>
//             </motion.div>
//           );
//         })}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Slider;
