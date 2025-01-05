import Footer from "@/components/footer";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="text-black flex flex-col items-center py-6 md:py-10 md:w-[400px]">
              <img
                src="/chairman.png" // Replace with actual image source
                alt="Chairman"
                className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white mb-4"
              />
              <div className="font-raleway font-bold text-footer_back text-[14px] md:text-[16px] text-center md:text-left hidden md:block pr-24">
                <ul>
                  <li className="py-3 md:py-6">Overview</li>
                  <li className="py-3 md:pb-6">Early life</li>
                  <li className="py-3 md:pb-6">Career</li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-full md:p-6">
              {/* Overview */}
              <section className="mb-6">
                <h2 className="text-[20px] md:text-[32px] font-light font-raleway text-gray-800 text-center md:text-left">
                  Rajiv Prasad Shaha
                </h2>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Entrepreneur | Educational Leader | Social worker
                </p>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Kumudini Welfare Trust of Bengal Ltd.
                </p>
              </section>
              <div className="border-t-2 border-btn_clr w-full mt-2 mb-4"></div>

              {/* Other Sections */}
              {[
                {
                  title: "Overview",
                  content:
                    "Rajiv Prasad Shaha is a prominent educational leader, and entrepreneur from Bangladesh, dedicated to advancing education and social welfare in the country. As the grandson of the esteemed Ranada Prasad Shaha, Managing Director of the Kumudini Welfare Trust, Mr. Rajiv carries forward a rich legacy of philanthropy and service to humanity. His commitment to providing accessible education and healthcare has significantly impacted the lives of countless individuals and communities in Bangladesh.",
                },
                {
                  title: "Early Life",
                  content: "Rajiv Prasad Shaha was born into a family deeply rooted in values of compassion, service, and philanthropy. Growing up as the grandson of Ranada Prasad Shaha, he was inspired by his family's dedication to social welfare. Despite the tragedies faced by his family during the Bangladesh Liberation War, including the abduction of his grandfather and father, Mr. Rajiv developed a strong resolve to continue their legacy of humanitarian work.",
                },
                {
                  title: "Career",
                  content: "Rajiv Prasad Shaha has played a pivotal role in the operations and management of the Kumudini Welfare Trust, which oversees several educational and healthcare institutions in Bangladesh. His career has been marked by significant contributions to the development and expansion of these institutions, focusing on providing quality education and healthcare to underserved populations. Rajiv has been instrumental in establishing and managing R. P. Shaha University, which aims to provide high-quality higher education in various disciplines.",
                },
                
              ].map((section, index) => (
                <section className="mb-6" key={index}>
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
