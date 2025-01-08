"use client";
import { useEffect, useRef, useState } from "react";

export default function CardCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "School of Engineering",
      description:
        "The School of Engineering is a pioneering institution dedicated to shaping future innovators and problem solvers. Our graduates emerge as leaders poised to make meaningful contributions to society.",
    },
    {
      title: "School of Business Administration",
      description:
        "The School of Business is a premier institution dedicated to cultivating tomorrow's leaders. With a focus global perspectives, and practical skills, we prepare students to thrive in dynamic and competitive business environments.",
    },
    {
      title: "School of Arts  & Social Sciences",
      description:
        "The School of Arts  & Social Sciences is a dynamic academic center focused on  healthcare, and wellness. We empower students to explore the intricacies of life sciences and cultivate the skills.",
    },
    {
      title: "School of Life Sciences & Health",
      description:
        "The School of Life Sciences & Health is a dynamic academic center focused on  healthcare, and wellness. We empower students to explore the intricacies of life sciences and cultivate the skills.",
    },
    {
      title: "Kumudini School of Public Health",
      description:
        "The Kumudini School of Public Health is a premier institution dedicated to cultivating tomorrow's leaders. With a focus global perspectives, and practical skills, we prepare students to thrive in dynamic environments.",
    },
    {
      title: "Kumudini School of Fashion & Design",
      description:
        "The School of Textiles is a dynamic academic center focused on fashion, and design. We empower students to explore the intricacies of fashion and cultivate the skills.",
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
    <div className="mx-auto flex flex-col items-center lg:bg-card_bg pb-12 w-full h-[px] lg:w-[1240px] lg:h-[595px] lg:rounded-[50px]  text-white justify-center">
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
              className="lg:w-[322px] lg:h-[424px] bg-section_back rounded-lg p-6 mx-2 text-center shadow-lg lg:rounded-[50px] w-[159px] h-[153px]"
            >
              <h3 className="font-semibold text-card_bg lg:w-[253px] lg:h-[180px] lg:text-[30px] text-center pt-4 font-raleway hidden md:block">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center pt-4 font-open_sans hidden md:block">
                {card.description}
              </p>
              <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center pt-4 font-open_sans block md:hidden">
                {card.title}
              </p>
            </div>
          ))}
          {/* Duplicate the first card for seamless looping */}
          <div
            className="lg:w-[322px] lg:h-[424px] bg-section_back rounded-lg p-6 mx-2 text-center shadow-lg lg:rounded-[50px] w-[159px] h-[153px]"
          >
            <h3 className="font-semibold text-card_bg lg:w-[253px] lg:h-[180px] lg:text-[36px] text-center font-raleway hidden md:block">
              {cards[0].title}
            </h3>
            <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center mt-6 font-open_sans hidden md:block">
              {cards[0].description}
            </p>
            <p className="text-sm text-gray-700 lg:w-[249px] lg:h-[158px] lg:text-[16px] text-center pt-4 font-open_sans block md:hidden">
                {cards[0].title}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}