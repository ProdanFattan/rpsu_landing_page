import React from "react";

const AcademySection = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 pb-8 font-raleway md:text-[36px] h-[800px] text-[24px] text-white font-bold ">
        <div className="md:row-span-2">
          <img
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            src="/mba.webp"
            alt="Group of students"
          />
        </div>
        <a href="/academics" className="bg-footer_back  text-center md:pt-[150px] pt-[100px] order-3 md:order-none">
        <div>
          <span className="">
            Explore Schools
          </span>
        </div>
        </a>
        <div className=" bg-btn_clr  text-center md:pt-[150px] pt-[120px] order-2 md:order-none ">
          <span className="">
            Transport Facilities
          </span>
        </div>
        <div className=" bg-btn_clr  text-center md:pt-[150px] pt-[100px] order-3 md:order-none">
          <span className="">
          Life at RPSU
          </span>
        </div>
        <a href="/admissions/waiver-and-scholarship" className="bg-footer_back  text-center md:pt-[150px] pt-[80px] order-6 md:order-none md:col-span-1 col-span-2">
        <div className="">
          <span className="">
          Scholarships
          </span>
        </div>
        </a>
      </div>
    </>
  );
};

export default AcademySection;
