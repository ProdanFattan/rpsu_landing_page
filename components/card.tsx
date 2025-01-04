"use client";
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
    carousel.style.transition = "transform 0.5s ease-out";
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTransitionEnd = () => {
    const carousel: any = carouselRef.current;
    if (currentIndex === cards.length) {
      carousel.style.transition = "none"; // Disable transition temporarily
      carousel.style.transform = "translateX(0)";
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = setInterval(nextSlide, 3000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentIndex]);

  useEffect(() => {
    slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <div className="mx-auto flex flex-col items-center lg:bg-card_bg py-10 w-full h-[350px] lg:w-[1240px] lg:h-[595px] lg:rounded-[50px]  text-white justify-center my-10">
      <div
        className="relative w-[1020px] max-w-full overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex"
          style={{
            transition: "transform 0.5s ease-out",
            width: `${(cards.length + 1) * 100}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="lg:w-[322px] lg:h-[424px] bg-section_back rounded-lg p-6 mx-2 text-center shadow-lg lg:rounded-[50px] w-[178px] h-[183px]"
            >
              <h3 className="font-semibold text-card_bg lg:w-[253px] lg:h-[180px] lg:text-[36px] text-center pt-4 font-raleway">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center pt-4 font-open_sans">
                {card.description}
              </p>
            </div>
          ))}
          {/* Duplicate the first card for seamless looping */}
          <div
            className="lg:w-[322px] lg:h-[424px] bg-section_back rounded-lg p-6 mx-2 text-center shadow-lg lg:rounded-[50px] w-[178px] h-[183px]"
          >
            <h3 className="font-semibold text-card_bg lg:w-[253px] lg:h-[180px] lg:text-[36px] text-center font-raleway">
              {cards[0].title}
            </h3>
            <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center mt-6 font-open_sans">
              {cards[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}