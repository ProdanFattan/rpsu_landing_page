"use client";
import Footer from "@/components/footer";
import React from "react";

const ProfilePage = () => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="text-black flex flex-col items-center py-6 md:py-10 md:w-[400px]">
              <img
                src="/vc.png" // Replace with actual image source
                alt="Professor"
                className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white mb-4"
              />
              <div className="font-raleway font-bold text-footer_back text-[14px] md:text-[16px] text-center md:text-left hidden md:block">
                <ul>
                  <li
                    className="py-3 md:py-6 cursor-pointer"
                    onClick={() => handleScrollTo("overview")}
                  >
                    Overview
                  </li>
                  <li
                    className="py-3 md:pb-6 cursor-pointer"
                    onClick={() => handleScrollTo("professional-summary")}
                  >
                    Professional Summary
                  </li>
                  <li
                    className="py-3 md:pb-6 cursor-pointer"
                    onClick={() => handleScrollTo("notable-achievements")}
                  >
                    Notable Achievements
                  </li>
                  <li
                    className="py-3 md:pb-6 cursor-pointer"
                    onClick={() => handleScrollTo("awards-and-honors")}
                  >
                    Awards and Honors
                  </li>
                  <li
                    className="py-3 md:pb-6 cursor-pointer"
                    onClick={() => handleScrollTo("education")}
                  >
                    Education
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-full md:p-6">
              {/* Sections */}
              {[
                {
                  id: "overview",
                  title: "Overview",
                  content:
                    "Dr. Manindra Kumar Roy, a distinguished academic and visionary leader, serves as the Vice-Chancellor of Ranada Prasad Shaha University (RPSU). With an illustrious career spanning over five decades, he has made remarkable contributions to academia, research, and institutional development in Bangladesh and abroad.",
                },
                {
                  id: "professional-summary",
                  title: "Professional Summary",
                  content: (
                    <ul className="list-disc pl-5">
                      <li>
                        <strong>Current Role</strong>: Vice-Chancellor, Ranada
                        Prasad Shaha University (since November 6, 2021)
                      </li>
                      <li>
                        <strong>Academic Expertise</strong>: Ph.D. in Economical
                        Cybernetics (Statistical Inference and Minimax
                        Estimation), Moscow State University, USSR.
                      </li>
                      <li>
                        <strong>Teaching and Leadership</strong>: Over 40 years
                        of experience, including roles as Professor, Department
                        Chair, and Provost at institutions like the University
                        of Chittagong and Mawlana Bhashani Science and
                        Technology University.
                      </li>
                      <li>
                        <strong>Publications</strong>: Author of 10 books and 56
                        research papers published in national and international
                        journals.
                      </li>
                      <li>
                        <strong>Awards</strong>: Recipient of the Ekushey Padak
                        and multiple government merit scholarships for
                        contributions to statistical science.
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
                          Spearheaded the growth of RPSU, ensuring academic
                          excellence and fostering innovation.
                        </li>
                        <li>
                          Established himself as a mentor for generations of
                          statisticians and academicians in Bangladesh.
                        </li>
                      </ul>
                      <strong>Research Contributions:</strong>
                      <ul className="list-disc pl-5 mt-2">
                        <li>
                          Renowned for his work in Bayesian and Minimax
                          estimation.
                        </li>
                        <li>
                          Presented at numerous national and international
                          conferences and supervised Ph.D. and M.Sc. theses.
                        </li>
                      </ul>
                      <strong>Institutional Development:</strong>
                      <ul className="list-disc pl-5 mt-2">
                        <li>
                          Played pivotal roles in curriculum design and academic
                          councils at leading universities in Bangladesh.
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
                        Government Merit Scholarship, Pakistan, 1964–1966 (on
                        the basis of SSC)
                      </li>
                      <li>
                        Government Merit Scholarship, Pakistan, 1966–1969 (on
                        the basis of HSC)
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
                        Ph.D. in Economical Cybernetics, Moscow State
                        University, USSR, 1978
                      </li>
                      <li>
                        M.Sc. in Statistics (First Class), University of Dhaka,
                        1970
                      </li>
                      <li>
                        B.Sc. in Statistics (Honours), University of Dhaka, 1969
                      </li>
                    </ul>
                  ),
                },
              ].map((section, index) => (
                <section className="mb-6" id={section.id} key={index}>
                  <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                    {section.title}
                  </h2>
                  <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
