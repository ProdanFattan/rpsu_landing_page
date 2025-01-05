"use client"
import Footer from "@/components/footer";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProfilePage = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index: any) => {
      setOpenDropdown(openDropdown === index ? null : index);
    };
  return (
    <>
    <div className="md:pt-32 pt-6">
      {/* Main Section */}
      <div className="bg-section_back rounded-lg container mx-auto hidden md:block">
        <div className="flex flex-row">
          {/* Left Section */}
          <div className="w-[400px] h-[1319px] text-black flex flex-col items-center py-10">
            <img
              src="/vc.png" // Replace with actual image source
              alt="Professor"
              className="w-[228px] h-[230px] rounded-[40px] border-4 border-white mb-4"
            />
            <div className="font-raleway font-bold text-footer_back text-[16px]">
                <ul>
                    <li className="py-6">Overview</li>
                    <li className="pb-6">Professional Summary</li>
                    <li className="pb-6">Notable Achievements</li>
                    <li className="pb-6">Awards and Honors</li>
                    <li className="pb-6">Education</li>
                </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 p-6">
            {/* Overview */}
            <section className="mb-6">
              <h2 className="text-[32px] font-light font-raleway text-gray-800">Professor Dr. Manindra Kumar Roy</h2>
              <p className="mt-2 font-open_sans text-[16px] text-gray-600">
              Entrepreneur | Educational Leader | Social worker 
              </p>
              <p className="mt-2 font-open_sans text-[16px] text-gray-600">
              Kumudini Welfare Trust of Bengal Ltd.
              </p>
            </section>
            <div className="border-t-2 border-btn_clr w-full mt-2 mb-4"></div>

            <section className="mb-6">
              <h2 className="text-[20px] font-semibold font-raleway text-gray-800">Overview</h2>
              <p className="mt-2 font-open_sans text-[16px] text-gray-600">
                Dr. Manindra Kumar Roy, a distinguished academic and visionary
                leader, serves as the Vice-Chancellor of Ranada Prasad Shaha
                University (RPSU). With an illustrious career spanning over five
                decades, he has made remarkable contributions to academia,
                research, and institutional development in Bangladesh and
                abroad.
              </p>
            </section>

            {/* Professional Summary */}
            <section className="mb-6">
              <h2 className="text-[20px] font-semibold font-raleway text-gray-800">
                Professional Summary
              </h2>
              <ul className="mt-2 font-open_sans text-[16px] text-gray-600">
                <li>
                  <span className="text-gray-800 font-semibold">Current Role</span>: Vice-Chancellor, Ranada Prasad Shaha University
                  (since November 6, 2021)
                </li>
                <li>
                  <span className="text-gray-800 font-semibold">Academic Expertise</span>: Ph.D. in Economical Cybernetics
                  (Statistical Inference and Minimax Estimation), Moscow State
                  University, USSR.
                </li>
                <li>
                  <span className="text-gray-800 font-semibold">Teaching and Leadership</span>: Over 40 years of experience,
                  including roles as Professor, Department Chair, and Provost at
                  institutions like the University of Chittagong and Mawlana
                  Bhashani Science and Technology University.
                </li>
                <li>
                  <span className="text-gray-800 font-semibold">Publications</span>: Author of 10 books and 56 research papers
                  published in national and international journals.
                </li>
                <li>
                  <span className="text-gray-800 font-semibold">Awards</span>: Recipient of the Ekushey Padak and multiple government
                  merit scholarships for contributions to statistical science.
                </li>
              </ul>
            </section>

            {/* Notable Achievements */}
            <section className="mb-6">
              <h2 className="text-[20px] font-bold text-gray-800 font-raleway pb-2">
                Notable Achievements
              </h2>
              <span className="text-gray-800 font-semibold text-[16px] font-open_sans">Educational Leadership:</span>
              <ul className="my-2 text-[16px] text-gray-600 list-disc pl-5 font-open_sans">
                <li>
                Spearheaded the growth of RPSU, ensuring academic excellence and fostering innovation.
                </li>
                <li>
                Established himself as a mentor for generations of statisticians and academicians in Bangladesh.
                </li>
              </ul>
              <span className="text-gray-800 font-semibold text-[16px] font-open_sans">Research Contributions:</span>
              <ul className="my-2 text-[16px] text-gray-600 list-disc pl-5 font-open_sans">
                <li>
                Renowned for his work in Bayesian and Minimax estimation.
                </li>
                <li>
                Presented at numerous national and international conferences and supervised Ph.D. and M.Sc. theses.
                </li>
              </ul>
              <span className="text-gray-800 font-semibold text-[16px] font-open_sans">Institutional Development:</span>
              <ul className="my-2 text-[16px] text-gray-600 list-disc pl-5 font-open_sans">
                <li>
                Played pivotal roles in curriculum design and academic councils at leading universities in Bangladesh.
                </li>
              </ul>
            </section>

            {/* Awards and Honors */}
            <section className="mb-6">
              <h2 className="text-[20px] font-bold text-gray-800 font-raleway pb-2">
                Awards and Honors
              </h2>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Government Scholar, USSR, 1973–78 (For Ph.D.)</li>
                <li>
                  Government Merit Scholarship, Pakistan, 1964–1966 (on the
                  basis of SSC)
                </li>
                <li>
                  Government Merit Scholarship, Pakistan, 1966–1969 (on the
                  basis of HSC)
                </li>
                <li>Ekushey Padak, University of Chittagong, 1998</li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-[20px] font-bold text-gray-800 font-raleway pb-2">Education</h2>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>
                  Ph.D. in Economical Cybernetics, Moscow State University,
                  USSR, 1978
                </li>
                <li>
                  M.Sc. in Statistics (First Class), University of Dhaka, 1970
                </li>
                <li>
                  B.Sc. in Statistics (Honours), University of Dhaka, 1969
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile View: Another Profile Example */}
      <div className="mt-10 bg-section_back rounded-lg p-4 md:hidden">
      <div className="text-center flex flex-row items-center justify-center">
        <div className="w-1/2">
          <img
            src="/faculty.png" // Replace with actual image source
            alt="Dr. Kingkar Prosad Ghosh"
            className="w-[125px] rounded-full mx-auto border-2 border-gray-300"
          />
        </div>

        <div className="text-left pl-2">
          <h2 className="text-[16px] font-open_sans text-footer_back">
            Dr. Kingkar Prosad Ghosh
          </h2>
          <p className="text-sm text-gray-600">Associate Professor</p>
          <p className="text-xs text-gray-600">
            Ph.D., M.Sc., B.Sc (Volgograd St. Tec. University) Russia
          </p>
        </div>
      </div>

      <div className="mt-4 text-open_sans font-bold">
        {[
          { title: "Biography", content: "Detailed biography content goes here." },
          { title: "Academic Details", content: "Academic details content goes here." },
          { title: "Publications", content: "Publications list or content goes here." },
          { title: "Experiences", content: "Experience details go here." },
          { title: "Affiliations", content: "Affiliations and memberships listed here." },
          { title: "Others", content: "Additional information goes here." },
        ].map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-2 text-footer_back"
              onClick={() => toggleDropdown(index)}
            >
              {item.title}
              {openDropdown === index ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openDropdown === index && (
              <div className="mt-2 text-sm text-gray-600">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
