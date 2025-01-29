import Footer from "@/components/footer";
import React from "react";
import dataset from "../[slug]/dataset";

const ProfilePage = async ({ params }: any) => {
  const { slug } = await params;

  // Find the matching profile
  const profile: any = dataset.find((item: any) => item.slug === slug);
  if (!profile) {
    return (
      <>
        <div className="w-screen h-screen font-raleway font-bold md:text-[48px] justify-center items-center text-footer_back bg-section_back flex text-[24px]">
          Data Will be Updated Soon...
        </div>
      </>
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
                src={profile.image}
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
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Email: {profile.email}
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
                      profile.current_research_works.map(
                        (item: any, index: any) => <li key={index}>{item}</li>
                      )}
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
                      profile.research_interests.map(
                        (item: any, index: any) => <li key={index}>{item}</li>
                      )}
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
                      profile.education.map((item: any, index: any) => (
                        <li key={index}>
                          <p>{item.degree}</p>
                          <p>{item.university_name}</p>
                          <p>{item.location}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </section>
              {/* work experience */}
              // ... (other imports remain same)
              {/* Work Experience */}
              <section className="mb-6">
                <h2 className="text-[18px] md:text-[20px] font-bold font-raleway text-gray-800">
                  Work Experience
                </h2>
                <div className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600">
                  <ul className="list-disc pl-5">
                    {profile.work_experience &&
                      profile.work_experience
                        .reduce((acc: any[], item: any, index: number) => {
                          // Group by organization
                          const existingOrgIndex = acc.findIndex(
                            (org) => org.organization === item.organization_name
                          );
                          if (existingOrgIndex !== -1) {
                            acc[existingOrgIndex].roles.push({
                              role: item.role,
                              start: item.start_date,
                              end: item.end_date,
                            });
                          } else {
                            acc.push({
                              organization: item.organization_name,
                              location: item.location,
                              website: item.website_link,
                              roles: [
                                {
                                  role: item.role,
                                  start: item.start_date,
                                  end: item.end_date,
                                },
                              ],
                            });
                          }
                          return acc;
                        }, [])
                        .map((orgGroup: any, index: number) => (
                          <li key={index} className="mb-4">
                            {/* Organization Name */}
                            <p className="font-semibold">
                              {orgGroup.organization}
                            </p>

                            {/* Roles List */}
                            <ul className="list-[circle] pl-5 mt-2">
                              {orgGroup.roles.map(
                                (role: any, roleIndex: number) => (
                                  <li key={roleIndex} className="mb-2">
                                    {/* Role & Duration */}
                                    <p>
                                      {role.role} ({role.start} to {role.end})
                                    </p>
                                  </li>
                                )
                              )}
                            </ul>

                            {/* Location & Website */}
                            <p className="mt-2">{orgGroup.location}</p>
                            {orgGroup.website && (
                              <p className="mt-1">
                                <a
                                  href={orgGroup.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  Visit Website
                                </a>
                              </p>
                            )}
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
                      profile.research_works.map((item: any, index: any) => (
                        <li key={index}>
                          <p>{item.title}</p>
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
