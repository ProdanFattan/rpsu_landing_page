import React from "react";

const HistoryPage = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Our Mission
        </div>
      </div>
      <div className="container mx-auto font-open_sans text-footer_back md:text-[20px] text-[16px] md:px-0 px-4">
        <ul>
          <li className="pb-4">
            - To provide world class education & develop skilled and qualified
            people who will contribute towards a more prosperous and equal
            society, thereby laying the foundation for a great nation.
          </li>
          <li className="pb-4">
            - To provide both hard (i.e. domain related knowledge/skills) and
            soft skills (Communication, Presentation, Public Speaking, etc.) to
            prepare students for the modern-day workplace.
          </li>
          <li className="pb-4">
            - To teach “How to think” rather than “What to think” i.e. to
            develop Analytical and Problem-Solving skills.
          </li>
          <li className="pb-4">
            - To teach the ethical values that will enable our students develop
            into well-rounded, confident human beings (Honesty, Respect, Caring)
          </li>
          <li className="">
            - To work in the area of Female Education targeted at building young
            women of courage, confidence, and character who will make the world
            a better place.
          </li>
        </ul>
        <p className="pb-16"></p>
      </div>
    </div>
  );
};

export default HistoryPage;
