"use client"
import React from 'react';
import { useState } from "react";

const AcademySection = () => {
    
  const [imageSrc, setImageSrc] = useState("/academics.webp");
    return (
        <>
        <div className="grid md:grid-cols-3 grid-cols-2 pb-8 font-raleway md:text-[36px] h-[800px] text-[24px] text-white font-bold ">
        <div 
      className="order-1 md:order-none"
      onMouseEnter={() => setImageSrc("/cultural.webp")}
      onMouseLeave={() => setImageSrc("/academics.webp")}
    >
      <img
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        src={imageSrc}
        alt="Group of students"
      />
    </div>
          <div className=" bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[120px] order-2 md:order-none ">
            <span className="">
              Admission <br />
              Requirments{" "}
            </span>
          </div>
          <div className="order-4 md:order-none">
            <img
              className="w-full h-full object-cover"
              src="/academics.webp"
              alt="Group of students"
            />
          </div>
          <div className=" bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[100px] order-3 md:order-none">
            <span className="">
              Tuition <br />
              Fees{" "}
            </span>
          </div>
          <div className="order-5 md:order-none">
            <img
              className="w-full h-full object-cover"
              src="/academics.webp"
              alt="Group of students"
            />
          </div>
          <div className="bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[80px] order-6 md:order-none">
            <span className="">
              Campus <br />
              Events
            </span>
          </div>
        </div>
        </>
    );
};

export default AcademySection;