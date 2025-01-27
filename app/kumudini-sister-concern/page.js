import React from "react";
import schools from "../data/kumudiniData";
const KumudiniSisterConcernPage = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Kumudini Sister Concerns
        </div>
      </div>
      <div className="bg-section_back container mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 md:pt-8 md:pl-8 pt-4 pb-20">
          {schools.map((school, index) => (
            <a
              key={index}
              href={school.href}
              className="px-2 2xl:text-start text-center pb-8 block"
            >
              <div className="pb-2">
                <img
                  className="rounded-[20px] md:w-96 md:h-60 h-[230px] transform transition duration-500 md:hover:scale-110"
                  src={school.image}
                  alt={school.name}
                />
              </div>
              <span className="font-raleway font-normal md:font-semibold  text-[18px] text-footer_back">
                {school.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KumudiniSisterConcernPage;
