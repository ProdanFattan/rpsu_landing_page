import React from "react";
import AcademySection from "../../../components/admissionSection";

const AdmissionRequirements = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Admission Requirements
        </div>
      </div>
      <div className="container mx-auto">
        <div className="font-open_sans font-light md:text-5xl text-footer_back justify-center flex mb-10 md:mb-20 text-3xl">
          Apply for Fall 2025{" "}
        </div>
        <div className="flex md:flex-row flex-col md:ml-8 my-4 ">
          <div className="font-open_sans md:w-1/2 flex flex-col ml-4 md:pl-20">
            <span className="text-btn_clr pb-4">Important Dates</span>
            <span className="text-footer_back pb-4">
              Last date to apply: <strong>19 June, 2025</strong>
            </span>
            <span className="text-footer_back pb-8">
              Admission Result Publish: <strong>18 July, 2025</strong>
            </span>
            <span className="text-footer_back pb-4">
              <span className="rounded-full px-[6px] bg-btn_clr text-white mr-2">{`>`}</span>
              {` `}Application Guidelines
            </span>
            <span className="text-footer_back pb-4">
              <span className="rounded-full px-[6px] bg-btn_clr text-white mr-2">{`>`}</span>
              {` `}Talk to an Admission Officer
            </span>
            <span className="text-footer_back pb-4">
              <span className="rounded-full px-[6px] bg-btn_clr text-white mr-2">{`>`}</span>
              {` `}Alumni network
            </span>
            <a href="/admissions/tuition-and-other-fees" className="pb-4">
              <span className="text-footer_back">
                <span className="rounded-full px-[6px] bg-btn_clr text-white mr-2">{`>`}</span>
                {` `} Tuition & Fees
              </span>
            </a>
            <a href="#explore">
              <button className="w-[150px] h-[52px] hover:bg-footer_back rounded-lg bg-btn_clr text-[20px] text-white">
                Apply now
              </button>
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ">
            <img
              src="/requirement.webp"
              alt="Requirement"
              className="md:rounded-[30px] h-[348px]"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-32 md:gap-10 gap-4 pb-10 md:mt-20 items-center justify-items-center">
          <a
            href="/admissions/admission-requirements/undergraduate-admission"
            className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 bg-btn_clr overflow-hidden text-white"
          >
            <div>
              <div className="relative z-50">
                <div className="p-4 font-raleway text-[36px] font-semibold">
                  Undergraduate Admission
                </div>
                <div className="pl-4 pb-4 md:mb-0">
                  Interested in a bachelor's degree? Learn more about the
                  undergraduate admission process here!
                </div>
              </div>
            </div>
          </a>
          <a
            href="/admissions/admission-requirements/graduate-admission"
            className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 bg-btn_clr overflow-hidden text-white"
          >
            <div>
              <div className="relative z-50">
                <div className="p-4 font-raleway text-[36px] font-semibold">
                  Graduate Admission
                </div>
                <div className="pl-4 pb-4 md:mb-0">
                  Interested in a master's degree? Learn more about the graduate
                  admission process here!
                </div>
              </div>
            </div>
          </a>
          <a
            href="/admissions/admission-requirements/international-admission"
            className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 bg-btn_clr overflow-hidden text-white"
          >
            <div>
              <div className="relative z-50">
                <div className="p-4 font-raleway text-[36px] font-semibold">
                  International Admission
                </div>
                <div className="pl-4 pb-4 md:mb-0">
                  Interested in a bachelor's or master's degree? Learn more
                  about the international admission process here!
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="font-open_sans font-light md:text-5xl text-footer_back justify-center flex my-10 md:my-20 text-3xl">
          Explore RPSU
        </div>
        <AcademySection />
      </div>
    </div>
  );
};

export default AdmissionRequirements;
