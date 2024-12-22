"use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Kumudini School of Public Health",
//     description:
//       "The Kumudini School of Public Health is a premier institution dedicated to cultivating tomorrow's leaders. With a focus on global perspectives and practical skills, we prepare students to thrive in dynamic environments.",
//   },
//   {
//     title: "School of Computer Science",
//     description:
//       "The School of Computer Science offers cutting-edge programs designed to equip students with in-demand skills in AI, machine learning, and software development.",
//   },
//   {
//     title: "Business Administration School",
//     description:
//       "Our Business Administration School nurtures innovative thinkers and business leaders through hands-on experience and global strategies.",
//   },
//   {
//     title: "School of Arts and Humanities",
//     description:
//       "Explore the world of creativity and critical thinking in our School of Arts and Humanities, fostering talent across diverse disciplines.",
//   },
//   {
//     title: "Engineering School",
//     description:
//       "Join the Engineering School to delve into advanced technologies and practical problem-solving with industry-standard labs.",
//   },
//   {
//     title: "Medical Sciences School",
//     description:
//       "Pursue excellence in healthcare and medical research with our Medical Sciences School's comprehensive curriculum.",
//   },
//   {
//     title: "School of Environmental Studies",
//     description:
//       "Address global environmental challenges through interdisciplinary studies and hands-on projects at the School of Environmental Studies.",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Clone slides for infinite effect
//   const extendedSlides = [
//     slides[slides.length - 1], // Last slide (clone for seamless looping)
//     ...slides,
//     slides[0], // First slide (clone for seamless looping)
//   ];

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev - 1);
//   };

//   useEffect(() => {
//     // Handle infinite transition
//     if (currentIndex === 0) {
//       // Transition to the last real slide
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(slides.length);
//       }, 500);
//     } else if (currentIndex === slides.length + 1) {
//       // Transition to the first real slide
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(1);
//       }, 500);
//     } else {
//       setIsTransitioning(false);
//     }
//   }, [currentIndex]);

//   return (
//     <div className="relative w-[1240px] mx-auto overflow-hidden">
//       {/* Carousel */}
//       <div className="relative flex items-center">


//         {/* Carousel Track */}
//         <div className="w-[1240px] flex items-center justify-between">
//           <motion.div
//             className="flex animate-slide gap-10"
//             style={{
//               transform: `translateX(-${(currentIndex - 1) * 33.33}%)`,
//               transition: isTransitioning
//                 ? "transform 0.5s ease-in-out"
//                 : "none",
//             }}
//           >
//             {extendedSlides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 w-[292] h-[398px] px-10 py-8 rounded-[50px] shadow-lg bg-btn_clr text-white`}
//               >
//                 <h2 className="text-[32px] font-bold mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-[15px]">{slide.description}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Carousel;

export default function CardSlider() {
  return (
    <>
      <div>
        
      </div>
    </>
  )
}