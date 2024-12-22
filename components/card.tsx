"use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
//     title: "School of Engineeering",
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

// export default function CardSlider() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 300, // Autoplay interval
//     pauseOnHover: true,
//   };
  
//   return (
//     <>
//       <div className=" container mx-auto px-28 py-20 bg-[url('/bg.png')] bg-center bg-cover">
//         <div className="w-full h-fit p-8">
//           <Slider {...settings}>
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="h-[398px] px-8 pt-8 rounded-[50px] shadow-lg bg-btn_clr text-white"
//               >
//                 <h2 className="text-[32px] font-bold mb-4">{slide.title}</h2>
//                 <p className="text-[15px]">{slide.description}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }



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
// components/CardCarousel.js
// components/CardCarousel.js
import { useEffect, useRef, useState } from "react";

export default function CardCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "School of Engineering",
      description:
        "The School of Engineering is a pioneering institution dedicated to shaping future innovators and problem solvers.",
    },
    {
      title: "School of Business Administration",
      description:
        "The School of Business is a premier institution dedicated to cultivating tomorrow's leaders in entrepreneurship and management.",
    },
    {
      title: "School of Law & Human Rights",
      description:
        "The School of Law and Human Rights empowers students to explore the intricacies of life sciences and cultivate the skills.",
    },
    {
      title: "School of Arts",
      description:
        "The School of Arts inspires creativity and provides a platform for students to explore artistic endeavors.",
    },
    {
      title: "School of Science",
      description:
        "The School of Science fosters innovation and research across various scientific disciplines.",
    },
  ];

  const slideTo = (index: any) => {
    const carousel: any = carouselRef.current;
    const cardWidth = carousel.children[0].offsetWidth + 15; // Adjust for spacing
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % cards.length;
    slideTo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    slideTo(newIndex);
  };

  useEffect(() => {
    slideTo(currentIndex); // Initial slide
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <div className="relative w-[1120px] max-w-full overflow-hidden">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-out"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[360px] max-w-[360px] bg-green-200 rounded-lg p-6 mx-2 text-center shadow-lg"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
