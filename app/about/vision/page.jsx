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
        <p className="pb-8">
          RPSU seeks to be a nationally and internationally renowned center of
          excellence in higher education providing accessible yet high quality
          education, aimed at equipping students to compete successfully in the
          workplace, contribute to our economy and emerge as humane, skilled and
          successful individuals who can change our society, our country and the
          world for the better.
        </p>
        <p className="pb-16"></p>
      </div>
    </div>
  );
};

export default HistoryPage;
