import Footer from "@/components/footer";
import React from "react";
import { dataset } from "./dataset";

const ProfilePage = ({ params }) => {
  const profile = dataset.find((item) => item.slug === params.slug);
  if (!profile) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Profile not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/*left side*/}
            <div className="text-black flex flex-col items-center py-6 md:py-10 md:w-[400px]">
              <img
                src={profile.image} // Replace with actual image source
                alt={profile.name}
                className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white mb-4"
              />
              <div className="font-raleway font-bold text-footer_back text-[14px] md:text-[16px] text-center md:text-left hidden md:block">
                <ul>
                  <li className="py-3 md:py-6">Overview</li>
                  <li className="py-3 md:pb-6">Current Research Work</li>
                  <li className="py-3 md:pb-6">Research Interest</li>
                  <li className="py-3 md:pb-6">Education</li>
                  <li className="py-3 md:pb-6">Work Experience</li>
                  <li className="py-3 md:pb-6">Research Works</li>
                </ul>
              </div>
            </div>
            {/*right side*/}
            <div className="md:w-full md:p-6">
              {/* Contact */}
              <section className="mb-6">
                <h2 className="text-[20px] md:text-[32px] font-light font-raleway text-gray-800 text-center md:text-left">
                  {profile.name}
                </h2>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  {profile.designation}
                </p>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  R. P. Shaha University
                </p>
              </section>
              <div className="border-t-2 border-btn_clr w-full mt-2 mb-4"></div>
              {/* Overview */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Overview
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  {profile.overview}
                </div>
              </section>
              {/* current research works */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Current Research Works
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.current_research_works &&
                      profile.current_research_works.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </section>
              {/* research interests */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Research Interests
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.research_interests &&
                      profile.research_interests.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </section>
              {/* education */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Education
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.education &&
                      profile.education.map((item, index) => (
                        <li key={index}>
                          <p>{item.degree}</p>
                          <p>{item.university_name}</p>
                          <p>{item.location}</p>
                          <p>{item.cgpa}</p>
                          <p>{item.achievement}</p>
                          <p>{item.graduation_year}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </section>
              {/* work experience */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Work Experience
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.work_experience &&
                      profile.work_experience.map((item, index) => (
                        <li key={index}>
                          <p>
                            {item.start_date} to {item.end_date}
                          </p>
                          <p>{item.role}</p>
                          <p>{item.organization_name}</p>
                          <p>{item.location}</p>
                          <p>{item.website_link}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </section>
              {/* research works */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Research Works
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.research_works &&
                      profile.research_works.map((item, index) => (
                        <li key={index}>
                          <p>{item.title}</p>
                          <p>{item.authors}</p>
                          <p>{item.year}</p>
                          <p>{item.journal_or_conference}</p>
                          <p>{item.volume}</p>
                          <p>{item.pages}</p>
                          <p>{item.indexed}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
