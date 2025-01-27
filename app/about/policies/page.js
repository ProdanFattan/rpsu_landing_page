import React from "react";

const PoliciesPage = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Policies
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-32 md:gap-10 gap-4 pb-16 md:mt-20 items-center justify-items-center">
          <a
            href="/about/policies/unfair-means-and-others"
            className="rounded-[40px] h-[277px] md:h-full md:w-full w-[350px] p-4 bg-[#8A82A5] overflow-hidden text-white"
          >
            <div>
              <div className="flex justify-center items-center text-center  z-50">
                <div className="p-16 font-raleway text-[16px] font-semibold">
                  Policy On Plagiarism, Unfair Means, Exam Rules & Disciplinary
                  Action
                </div>
              </div>
            </div>
          </a>
          <a
            href="/about/policies/sexual-harassment"
            className="rounded-[40px] h-[277px] md:h-full md:w-full w-[350px] p-4 bg-[#8A82A5] overflow-hidden text-white"
          >
            <div>
              <div className="flex justify-center items-center text-center  z-50">
                <div className="p-16 font-raleway text-[20px] font-semibold">
                  Policy Against Sexual Harassment
                </div>
              </div>
            </div>
          </a>
          <a
            href="/about/policies/academic-informations-and-policies"
            className="rounded-[40px] h-[277px] md:h-full md:w-full w-[350px] p-4 bg-[#8A82A5] overflow-hidden text-white"
          >
            <div>
              <div className="flex justify-center items-center text-center  z-50">
                <div className="p-16 font-raleway text-[20px] font-semibold">
                  Academics Information and Policies
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
