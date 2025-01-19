"use client";
import React from "react";
import AcademySection from "../../../../components/admissionSection";
import { useState } from "react";

const UndergraduateAdmissionPage = () => {
    const programs = {
        mba: {
          title: "Master of Business Administration Admission Requirements",
          requirements: [
            "(i) Minimum GPA 2.5 in SSC and HSC separately.",
            "(ii) For A level students, who have passed 5 subjects in 'O' level and 2 subjects in 'A' level may also apply for admission. Out of 7 subjects, the students must have B grade/GPA 4.00 in 4 subjects and C grade/GPA 3.50 in the rest 3 subjects.",
            "(iii) Students having minimum CGPA 2.50 / 2nd Division/Class in 3 or 4 years Graduation from any group may apply for admission.",
          ],
        },
        executiveMba: {
          title: "Executive Master of Business Administration Admission Requirements",
          requirements: [
            "(i) Minimum GPA 2.5 in SSC and HSC separately.",
            "(ii) For A level students, who have passed 5 subjects in 'O' level and 2 subjects in 'A' level may also apply for admission. Out of 7 subjects, the students must have B grade/GPA 4.00 in 4 subjects and C grade/GPA 3.50 in the rest 3 subjects.",
            "(iii) Students having minimum CGPA 2.50 / 2nd Division/Class in 3 or 4 years Graduation from any group may apply for admission.",
          ],
        },
        mph: {
          title: "Master of Public Health Admission Requirements",
          requirements: [
            "(i) Minimum GPA 2.5 in SSC and HSC separately.",
            "(ii) For A level students, who have passed 5 subjects in 'O' level and 2 subjects in 'A' level may also apply for admission. Out of 7 subjects, the students must have B grade/GPA 4.00 in 4 subjects and C grade/GPA 3.50 in the rest 3 subjects.",
            "(iii) MBBS, BDS or MD or equivalent professional degree in medical sciences (Homeopathy, Unani & Ayurvedic, Physiotherapy, BSc in Nursing etc), or Four-year undergraduate degree from a recognized university in life sciences, social sciences, anthropology, psychology, computer sciences & information technology.",
          ],
        },
        maEnglish: {
          title: "MA in English Admission Requirements",
          requirements: [
            "(i) Minimum GPA 2.5 in SSC and HSC separately.",
            "(ii) For A level students, who have passed 5 subjects in 'O' level and 2 subjects in 'A' level may also apply for admission. Out of 7 subjects, the students must have B grade/GPA 4.00 in 4 subjects and C grade/GPA 3.50 in the rest 3 subjects.",
            "(iii) Students completed BA (Hons) in English Program with CGPA at least 2.5 in a scale of 4 from any recognized university may apply for admission.",
          ],
        },
      };
      

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", requirements: [] });

  const handleOpenModal = (programKey) => {
    setModalData(programs[programKey]);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Graduate Admission
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
          <div
            className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 md:pb-8 bg-btn_clr overflow-hidden text-white"
            onClick={() => handleOpenModal("mba")}
          >
            <div className="relative z-50">
              <div className="p-4 font-raleway text-[30px] font-semibold">
                Requirements for Master of Business Administration
              </div>
            </div>
          </div>
          <div className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 md:pb-8 bg-btn_clr overflow-hidden text-white"
          onClick={() => handleOpenModal("executiveMba")}>
            <div className="relative z-50">
              <div className="p-4 font-raleway text-[30px] font-semibold">
                Requirements for Executive Master of Business Administration
              </div>
            </div>
          </div>
          <div className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 md:pb-8 bg-btn_clr overflow-hidden text-white"
          onClick={() => handleOpenModal("mph")}>
            <div className="relative z-50">
              <div className="p-4 font-raleway text-[30px] font-semibold">
                Requirements for Master of Public Health
              </div>
            </div>
          </div>
          <div className="rounded-2xl h-[277px] md:h-full md:w-full w-[350px] p-4 md:pb-[120px] bg-btn_clr overflow-hidden text-white "
          onClick={()=> handleOpenModal("maEnglish")}>
            <div className="relative z-50">
              <div className="p-4 font-raleway text-[30px] font-semibold">
                Requirements for MA in English
              </div>
            </div>
          </div>
        </div>
        {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[80%] md:w-[50%]">
            <h2 className="text-2xl font-semibold text-black mb-4">
              {modalData.title}
            </h2>
            <ul className="list-disc pl-6 text-black">
              {modalData.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-btn_clr text-white px-4 py-2 rounded-lg hover:bg-footer_back"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        <div className="font-open_sans font-light md:text-5xl text-footer_back justify-center flex my-10 md:my-20 text-3xl">
          Explore RPSU
        </div>
        <AcademySection />
      </div>
    </div>
  );
};

export default UndergraduateAdmissionPage;
