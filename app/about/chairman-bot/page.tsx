"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("message");

  const sections = [
    {
      id: "message",
      title: "Chairman’s Message",
      content: (
        <p>
          RPSU is an institution of the Kumudini Welfare Trust (KWT). To
          understand RPSU one must turn the folders of history and look back at
          how KWT came into being and what it stands for. <br/><br/>It all began in the
          early 1930s when the great philanthropist, R P Shaha set up a
          dispensary at his village home in Mirzapur at Tangail which in 1944
          was transformed into a 750 bed free modern hospital named Kumudini
          Hospital. This was followed by establishment of Bharateswari Homes,
          Kumudini Girls College and Debendra College. <br/><br/>The desire of providing
          free health care to the poor as well as education stemmed from the
          very fact that R P Shaha himself as a very young boy saw his mother
          dying for lack of medical care and he not being able to pursue
          education beyond grade three. Through hard work, sincerity and a bit
          of good luck R P Shaha turned into a rich man. Huseyn Shaheed
          Suhrawardy, the then Prime Minister of Pakistan on a visit to Kumudini
          Complex at Mirzapur in the mid-fifties wrote in the visitor's book: <br/><br/>"A
          poor man became a millionaire, and the millionaire voluntarily became
          a poor man, spending hisall in the service of humanity, fort he
          suffering and the distressed, for the furtherance of education, for
          rendering a service to the State, which the state itself has not
          undertaken. But is the Rai Bahadurpoor; he is rich in the esteem, in
          the affection, in the love of a grateful people; having given all his
          worldly possessions, he has obtained more than those who were his
          compeers.May that state and the people he has served so well give him
          that recognition which is his due, and not destroy the great
          institution he has built with such love and devotion". <br/><br/>Unfortunately,
          this great man was abducted by the Pakistan Army during our war of
          liberation and was never seen again. <br/><br/>Post 1971 the Trust has been able
          to set up a Women's Medical College along with a Dental Unit as well
          as a Nursing Institute and a Nursing College. Having the long
          experience in the field of education, the Trust considered it to be an
          obligation to move into the arena of higher education and that is how
          RPSU has come into being. <br/><br/>The underlying philosophy of RPSU is to
          bring out self renewing community of graduates, who are inspired by
          the commitment, passion and hard work characteristic of Kumudini way
          of life, in establishing justice, fairness and caring at all levels of
          society. The courses and curricula of RPSU have been developed by
          renowned professors who are specialists in their respective field
          keeping those abreast with the latest in the field of study. <br/><br/>RPSU is
          one of the very few universities which started functioning on its own
          campus right from the very first day. The campus is on 15 acres of
          serene land on the bank of river Shitalakhya. It is in a lush green
          environment conducive to the pursuit of learning. In addition it has
          all the facilities that make a modern university. <br/><br/>Finally to our
          prospective students; I am sure those of you who have decided to study
          at RPSU have made the most important and right decision of your
          career. Whether you want to study literature or design machinery,
          engineer robots or run a bank, train to be a teacher or lawyer, RPSU
          is the place to unleash your potential and achieve your best. We are
          here to transform your dream into reality!
          <br />
          <br />
          I wish you all a successful and satisfying time at RPSU.
          <br />
          <br />
          Rajiv Prasad Shaha
          <br />
          Chairman
          <br />
          Board of Trustees
          <br/>
          R. P. Shaha University (RPSU)
        </p>
      ),
    },
    {
      id: "overview",
      title: "Overview",
      content:
        "Rajiv Prasad Shaha is a prominent educational leader, and entrepreneur from Bangladesh, dedicated to advancing education and social welfare in the country. As the grandson of the esteemed Ranada Prasad Shaha, Managing Director of the Kumudini Welfare Trust, Mr. Rajiv carries forward a rich legacy of philanthropy and service to humanity. His commitment to providing accessible education and healthcare has significantly impacted the lives of countless individuals and communities in Bangladesh.",
    },
    {
      id: "early-life",
      title: "Early Life",
      content:
        "Rajiv Prasad Shaha was born into a family deeply rooted in values of compassion, service, and philanthropy. Growing up as the grandson of Ranada Prasad Shaha, he was inspired by his family's dedication to social welfare. Despite the tragedies faced by his family during the Bangladesh Liberation War, including the abduction of his grandfather and father, Mr. Rajiv developed a strong resolve to continue their legacy of humanitarian work.",
    },
    {
      id: "career",
      title: "Career",
      content:
        "Rajiv Prasad Shaha has played a pivotal role in the operations and management of the Kumudini Welfare Trust, which oversees several educational and healthcare institutions in Bangladesh. His career has been marked by significant contributions to the development and expansion of these institutions, focusing on providing quality education and healthcare to underserved populations. Rajiv has been instrumental in establishing and managing R. P. Shaha University, which aims to provide high-quality higher education in various disciplines.",
    },
  ];

  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="flex text-black flex-col items-center py-6 md:py-10 md:w-[300px]">
              <img
                src="/chairman.png" // Replace with actual image source
                alt="Chairman"
                className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white"
              />
              <ul className="hidden md:block font-raleway font-bold text-footer_back text-[14px] md:text-[16px] text-center md:text-left">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`py-3 md:py-4 cursor-pointer ${
                      activeSection === section.id ? "text-btn_clr" : ""
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-full md:py-6 md:pl-16">
              {/* Header Section */}
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

              {/* Sections */}
              {/* Mobile View: Show all sections */}
              <div className="block md:hidden">
                {sections.map((tab) => (
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
                {sections.map(
                  (tab) =>
                    activeSection === tab.id && (
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
