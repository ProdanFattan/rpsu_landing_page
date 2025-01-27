"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";

const ProfilePage = () => {
  // State to track the currently active tab (for desktop view)
  const [activeTab, setActiveTab] = useState<string>("message");

  // Tabs configuration
  const tabs = [
    {
      id: "message",
      title: "Vice Chancellor’s Message",
      content: (
        <p>
          We are a team comprising teachers, students and staff all dedicated to
          its mission to nurture scholars who will contribute to the society.
          Ours will be a centre of blending eastern and western knowledge thus
          helping individuals transform into complete man. In a world where
          change is the norm, however, one thing will remain the same -
          knowledge will be a key resource and will be highly sought after
          around the globe. The role of the universities will be defined by the
          rapid changes that the society is going through; Unlike Europe and
          North America the 21st century will see, a rapid growth in the number
          of people seeking higher education in Bangladesh while there will be a
          decline in the number of people of working age in the developed world.
          Under the changing circumstances RPSU will generate the intellectual
          property which will create new jobs, educate and train people to work
          in fields where they will be valued both for their specialized
          knowledge, and for their ability to research, communicate and solve
          problems. <br/><br/>In order to meet these challenges RPSU intends to build on
          collaborative partnerships with business, industry, government, and
          other research institutions. The serene 15 acre green campus of RPSU
          is an ideal place for those seeking knowledge. In keeping with the
          tradition of Kumudini Welfare Trust the parent organization of which
          RPSU is an institution; we wish to excel in the field of education
          where we have a long history of almost 80 years. <br/><br/>I am sure, the young
          men and women who choose to pursue courses at RPSU will have had made
          one of the most momentous and right decisions of their career.
          <br/>Thank you.<br/>
          <br/>Prof Dr Manindra Kumar Roy<br/>Vice Chancellor<br/>R. P. Shaha University (RPSU)
        </p>
      ),
    },
    {
      id: "overview",
      title: "Overview",
      content: (
        <p>
          Dr. Manindra Kumar Roy, a distinguished academic and visionary leader,
          serves as the Vice-Chancellor of Ranada Prasad Shaha University
          (RPSU). With an illustrious career spanning over five decades, he has
          made remarkable contributions to academia, research, and institutional
          development in Bangladesh and abroad.
        </p>
      ),
    },
    {
      id: "professional-summary",
      title: "Professional Summary",
      content: (
        <ul className="list-disc pl-5">
          <li>
            <strong>Current Role:</strong> Vice-Chancellor, Ranada Prasad Shaha
            University (since November 6, 2021)
          </li>
          <li>
            <strong>Academic Expertise:</strong> Ph.D. in Economical Cybernetics
            (Statistical Inference and Minimax Estimation), Moscow State
            University, USSR.
          </li>
          <li>
            <strong>Teaching and Leadership:</strong> Over 40 years of
            experience, including roles as Professor, Department Chair, and
            Provost at institutions like the University of Chittagong and
            Mawlana Bhashani Science and Technology University.
          </li>
          <li>
            <strong>Publications:</strong> Author of 10 books and 56 research
            papers published in national and international journals.
          </li>
          <li>
            <strong>Awards:</strong> Recipient of the Ekushey Padak and multiple
            government merit scholarships for contributions to statistical
            science.
          </li>
        </ul>
      ),
    },
    {
      id: "notable-achievements",
      title: "Notable Achievements",
      content: (
        <>
          <strong>Educational Leadership:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Spearheaded the growth of RPSU, ensuring academic excellence and
              fostering innovation.
            </li>
            <li>
              Established himself as a mentor for generations of statisticians
              and academicians in Bangladesh.
            </li>
          </ul>
          <strong>Research Contributions:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>Renowned for his work in Bayesian and Minimax estimation.</li>
            <li>
              Presented at numerous national and international conferences and
              supervised Ph.D. and M.Sc. theses.
            </li>
          </ul>
          <strong>Institutional Development:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Played pivotal roles in curriculum design and academic councils at
              leading universities in Bangladesh.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "awards-and-honors",
      title: "Awards and Honors",
      content: (
        <ul className="list-disc pl-5">
          <li>Government Scholar, USSR, 1973–78 (For Ph.D.)</li>
          <li>
            Government Merit Scholarship, Pakistan, 1964–1966 (on the basis of
            SSC)
          </li>
          <li>
            Government Merit Scholarship, Pakistan, 1966–1969 (on the basis of
            HSC)
          </li>
          <li>Ekushey Padak, University of Chittagong, 1998</li>
        </ul>
      ),
    },
    {
      id: "education",
      title: "Education",
      content: (
        <ul className="list-disc pl-5">
          <li>
            Ph.D. in Economical Cybernetics, Moscow State University, USSR, 1978
          </li>
          <li>M.Sc. in Statistics (First Class), University of Dhaka, 1970</li>
          <li>B.Sc. in Statistics (Honours), University of Dhaka, 1969</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar (only visible on desktop) */}
            <div className="flex text-black flex-col items-center py-6 md:py-10 md:w-[300px]">
              <img
                src="/vc.png" // Replace with actual image source
                alt="Professor"
                className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white md:mb-4"
              />
              <ul className="hidden md:block font-raleway font-bold text-footer_back text-[14px] md:text-[16px] text-center md:text-left">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`py-3 md:py-4 cursor-pointer ${
                      activeTab === tab.id ? "text-btn_clr" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-full md:py-6 md:pl-16">
              <section className="mb-6">
                <h2 className="text-[20px] md:text-[32px] font-light font-raleway text-gray-800 text-center md:text-left">
                  Professor Dr. Manindra Kumar Roy
                </h2>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Vice Chencellor
                </p>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  R. P. Shaha University
                </p>
              </section>
              <div className="border-t-2 border-btn_clr w-full mt-2 mb-4"></div>
              {/* Mobile View: Show all sections */}
              <div className="block md:hidden">
                {tabs.map((tab) => (
                  <section key={tab.id} className="mb-6">
                    <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                      {tab.title}
                    </h2>
                    <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                      {tab.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Desktop View: Show only the active tab */}
              <div className="hidden md:block">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <section key={tab.id}>
                        <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                          {tab.title}
                        </h2>
                        <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                          {tab.content}
                        </div>
                      </section>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
