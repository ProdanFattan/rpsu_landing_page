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
          Our Vision
        </div>
      </div>
      <div className="container mx-auto font-open_sans text-footer_back md:text-[20px] text-[16px] md:px-0 px-4">
        <p className=""></p>
        <ul>
          <li className="pb-4">EXCELLENCE - Pursue Excellence in all we do</li>
          <li className="pb-4">
            CARE - Care about our students, our teachers, our colleagues and
            Society
          </li>
          <li className="pb-4">
            RESPECT - Respect towards all regardless of Gender, Caste, Race or
            Creed
          </li>
        </ul>

        <p className="pb-16"></p>
      </div>
    </div>
  );
};

export default HistoryPage;
