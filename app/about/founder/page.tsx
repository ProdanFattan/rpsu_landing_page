"use client";
import Footer from "@/components/footer";
import React from "react";
import Video from "@/components/video";

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
          <Video />
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-full px-8">
              <section className="mb-6 hidden md:block">
                <h2 className="text-[20px] md:text-[32px] font-bold font-raleway text-gray-800 text-center md:text-left">
                  Rai Bahadur Ranada Prasad Shaha
                </h2>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Entrepreneur | Philanthropist | Social worker | Soldier
                </p>
                <p className="mt-2 font-open_sans text-[14px] md:text-[16px] text-gray-600 text-center md:text-left">
                  Kumudini Welfare Trust of Bengal Ltd.
                </p>
              </section>
              <div className="border-t-2 border-btn_clr w-full mt-2 mb-4 md:mb-0 hidden md:block"></div>
              <div className="w-full h-[71px] bg-[#f6f6f6] text-footer_back hidden md:flex md:justify-right md:items-center">
                <ul className="flex space-x-24 pl-4 text-[16px] font-bold font-raleway">
                  <li className = "cursor-pointer" onClick={() => handleScrollTo("overview")}>Overview</li>
                  <li className = "cursor-pointer" onClick={() => handleScrollTo("early-life")}>
                    Early Life
                  </li>
                  <li className = "cursor-pointer" onClick={() => handleScrollTo("philanthropy")}>
                    Philanthropy
                  </li>
                  <li className = "cursor-pointer" onClick={() => handleScrollTo("abduction")}>Abduction</li>
                  <li className = "cursor-pointer" onClick={() => handleScrollTo("awards-honours")}>
                    Awards & Honours
                  </li>
                </ul>
              </div>
              <section className="pt-4 hidden md:block" id="overview">
                <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
                  Overview
                </h2>
                <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
                  Rai Bahadur Ranada Prasad Saha (Bengali: রণদা প্রসাদ সাহা),
                  also known as R. P. Saha, was a Bengali businessman,
                  entrepreneur, soldier, philanthropist, social worker, and
                  humanitarian. He founded educational institutes
                  like Bharateswari Homes, Kumudini College and Debendra
                  College. On 7 May 1971, the collaborators of Pakistani
                  occupation army abducted RP Saha and his son Bhavani Prasad
                  Saha from Mirzapur and no news about their whereabout has been
                  unearthed till now Shaha was born on 15 November
                  1896. Debendranath Podder, Shaha's father, originated
                  from Mirzapur in Tangail subdivision in Mymensingh District.
                  Shaha was born in his maternal uncle's house at Kachhur
                  in Savar, near Dhaka. At the age of seven, he lost his mother,
                  Kumudini Devi, who died of tetanus during childbirth. At the
                  age of sixteen, he fled to Kolkata and initially worked as a
                  canteen boy and hawker.
                </div>
              </section>
              <section className="pt-4 hidden md:block" id="early-life">
                <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
                  Early life
                </h2>
                <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
                  Shaha joined the Bengal Ambulance Corps as a medic and went to
                  the World War I. He left Kolkata in 1915 for Mesopotamia. He
                  earned a medal and citation from King George the Fifth for his
                  distinctive performance. Later he got commission as Vice Roy
                  Commissioned officer in the 49 Bengal Regiment. He got a job
                  in the Indian Railway department as a war veteran. He was
                  honored for saving some British officers from a camp fire.
                  After serving for about five years, Shaha retired from the
                  army and served British Railway as a ticket collector until
                  1931.[3] In 1932, he started his coal business. He later
                  acquired a dealership for coal business in Kolkata. In four
                  years, he became a well-established coal businessman in
                  Kolkata. He diversified his business in different sectors
                  including passenger launch, river transport, dockyard, food
                  grain, and jute. He bought a ship named Bengal River.[1] He
                  was appointed one of the agents to buy food grains for the
                  Government. He bought three powerhouses at Narayanganj,
                  Mymensingh and Comilla and owned the George Anderson
                  Company of Narayanganj that used to make jute bales.
                </div>
                <div className="mt-2 font-open_sans font-light text-[16px] md:text-[18px] text-gray-600">
                  “A poor man became a millionaire, and the millionaire
                  voluntarily became a poor man, spending his all in the service
                  of humanity, for the suffering and the distressed, for the
                  furtherance of education, for rendering a service to the
                  state, which the state itself has not undertaken. But is the
                  Rai Bahadur poor; he is rich in the esteem, in the affection,
                  in the love of a grateful people; having given all his worldly
                  possessions, he has obtained more than those who were his
                  compeers. May that state and the people he has served so well
                  give him that recognition which is his due, and not destroy
                  the great institution he has built with such love and
                  devotion. ”
                </div>
              </section>
            </div>

            {/* Right section */}
            <div className="text-black flex flex-col items-center md:mx-10  lg:pt-6 md:w-[400px] ">
              <div>
                <img
                  src="/founder_pic.jpg" // Replace with actual image source
                  alt="Founder"
                  className="w-[150px] h-[150px] md:w-[228px] md:h-[230px] rounded-[20px] md:rounded-[40px] border-4 border-white mb-4"
                />
              </div>
              <div className="font-open_sans  md:hidden block text-center">
                <ul>
                  <li className="text-[20px] font-raleway font-bold">
                    Rai Bahadur Ranada Prasad Shaha
                  </li>
                  <li className="text-[14px]">
                    Entrepreneur | Philanthropist | Social worker | Soldier
                  </li>
                  <li className="text-[14px] pb-4">
                    Kumudini Welfare Trust of Bengal Ltd.
                  </li>
                </ul>
              </div>
              <div className="font-open_sans  text-black text-[14px] md:text-[16px] text-center md:text-left ">
                <ul>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Other Names: </span>R.P.
                    Shaha
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Born: </span>15 November
                    1896
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Birth Place: </span> Savar,
                    Bengal, British India
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Abducted: </span> 7 May
                    1971 (aged 74)
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Abducted from: </span>
                    Mirzapur, Dhaka, Bangladesh{" "}
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Awards: </span>Independence
                    Award (1978), British War Medal (1919), Sword of Honour (1919)
                  </li>
                  <li className="py-3 md:py-3">
                    <span className="font-semibold">Battles/wars: </span>World
                    War I, Mesopotamian campaign
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-btn_clr w-full mt-2 mb-4 md:hidden block"></div>
            </div>
          </div>
          <section className="pt-4 md:hidden block">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Overview
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
              Rai Bahadur Ranada Prasad Saha (Bengali: রণদা প্রসাদ সাহা), also
              known as R. P. Saha, was a Bengali businessman, entrepreneur,
              soldier, philanthropist, social worker, and humanitarian. He
              founded educational institutes like Bharateswari Homes, Kumudini
              College and Debendra College. On 7 May 1971, the collaborators
              of Pakistani occupation army abducted RP Saha and his son Bhavani
              Prasad Saha from Mirzapur and no news about their whereabout has
              been unearthed till now Shaha was born on 15 November
              1896. Debendranath Podder, Shaha's father, originated
              from Mirzapur in Tangail subdivision in Mymensingh District. Shaha
              was born in his maternal uncle's house at Kachhur in Savar,
              near Dhaka. At the age of seven, he lost his mother, Kumudini
              Devi, who died of tetanus during childbirth. At the age of
              sixteen, he fled to Kolkata and initially worked as a canteen boy
              and hawker.
            </div>
          </section>
          <section className="pt-4 md:hidden block">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Early life
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
              Shaha joined the Bengal Ambulance Corps as a medic and went to
              the World War I. He left Kolkata in 1915 for Mesopotamia. He
              earned a medal and citation from King George the Fifth for his
              distinctive performance. Later he got commission as Vice Roy
              Commissioned officer in the 49 Bengal Regiment. He got a job in
              the Indian Railway department as a war veteran. He was honored for
              saving some British officers from a camp fire. After serving for
              about five years, Shaha retired from the army and served British
              Railway as a ticket collector until 1931.[3] In 1932, he started
              his coal business. He later acquired a dealership for coal
              business in Kolkata. In four years, he became a well-established
              coal businessman in Kolkata. He diversified his business in
              different sectors including passenger launch, river transport,
              dockyard, food grain, and jute. He bought a ship named Bengal
              River.[1] He was appointed one of the agents to buy food grains
              for the Government. He bought three powerhouses at Narayanganj,
              Mymensingh and Comilla and owned the George Anderson Company of
              Narayanganj that used to make jute bales.
            </div>
            <div className="mt-2 font-open_sans font-light text-[16px] md:text-[18px] text-gray-600">
              “A poor man became a millionaire, and the millionaire voluntarily
              became a poor man, spending his all in the service of humanity,
              for the suffering and the distressed, for the furtherance of
              education, for rendering a service to the state, which the state
              itself has not undertaken. But is the Rai Bahadur poor; he is rich
              in the esteem, in the affection, in the love of a grateful people;
              having given all his worldly possessions, he has obtained more
              than those who were his compeers. May that state and the people he
              has served so well give him that recognition which is his due, and
              not destroy the great institution he has built with such love and
              devotion. ”
            </div>
          </section>
          <section className="pt-4 md:pl-8" id="philanthropy">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Philanthropy
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
              In 1938, Shaha founded a charitable hospital at his native village
              Mirzapur on the river Lauhajang. On 27 July 1944 the hospital
              which had 20 beds was opened by Richard Casey, Baron Casey, the
              then Governor of Bengal.[4] Saha named it Kumudini Hospital, after
              his mother Kumudini whose suffering from lack of medical care
              inspired him to establish a hospital for the poor, so that people,
              especially women, would not suffer the way his mother had. During
              the famine of 1943–1944, he maintained 275 gruel houses to feed
              the hungry for 8 months. As of 2010, the hospital has 750 beds and
              continues to serve the poor, providing them with free beds, meals
              and treatment and charging only nominally for surgical procedures.
              If the hospital was flooded, Ranadaprasad made the doctor's treat
              the patients on the top floors. He didn't care about death rates
              as many hospitals did and made sure no one was ever turned back.
              The Maternity Wing of the Dhaka Combined Military Hospital was
              established with his financial support.[citation needed] To spread
              female education he founded in 1942 a fully residential school at
              Mirzapur and named it Bharateswari Bidyapith after Bharateswari
              Devi, his grandmother. In 1945, this institution was renamed
              to Bharateswari Homes. It has 1200 seats as of 2010 and is
              renowned for producing well-rounded, socially responsible students
              who have gone on to excel in their respective fields. Founded
              the Kumudini College at Tangail in 1943 and Debendra
              College at Manikganj District in 1944 to commemorate his mother
              and father respectively. He also set up the Mirzapur Pilot Boys'
              School, Mirzapur Pilot Girls' School, and Mirzapur Degree College.
              In 1947, Saha placed all his companies in a trust by the name of
              Kumudini Welfare Trust (KWT), with the earnings from the income
              generating activities such as jute baling press and a river
              transportation business, being used to run the welfare activities.
              The full extent of his philanthropic activities is not known even
              by his own family. In 1944, he donated BDT 250,000 to the Red
              Cross. His family often learns about them when they receive
              letters or calls from organizations informing them about some
              large donations he had made or some way in which he had helped
              them.
            </div>
          </section>
          <section className="pt-4 md:pl-8" id="abduction">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Abduction
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
              In April 1971, during the Liberation War of Bangladesh, despite a
              good working relationship with the Pakistani authorities as well
              as all preceding and successive governments, Saha, with his
              26-year-old son Bhavani Prasad Saha, was picked up by
              the Pakistani occupation army. They returned home after about a
              week, but were picked up again a day later on 7 May, after which
              they were never heard from again. Saha's daughter-in-law, Srimati
              Saha, was widowed at the age of 20, four years into her marriage.
              Her only child, son Rajiv, was three years old at the time. The
              death of Ranada Prasad Saha remained a mystery as his body was
              never found, and neither was his son's.
            </div>
          </section>
          <section className="pt-4 md:pl-8" id="awards-honours">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Awards & Honours
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-gray-600">
              In appreciation of his humanitarian work the British Government
              conferred on Saha the title of Rai Bahadur.[1] In 1978, he was
              posthumously awarded the Independence day award by the Government
              of Bangladesh as a recognition of his social works.
            </div>
          </section>
          <section className="pt-4 md:pl-8" id="links">
            <h2 className="font-raleway font-semibold md:text-[24px] text-[18px] text-gray-800">
              Links
            </h2>
            <div className="mt-2 font-open_sans text-[12px] md:text-[14px] text-footer_back">
              <ul>
                <li>
                  <a href="https://www.aljazeera.com/features/2021/12/16/1971-bangladesh-none-of-them-returned">
                    ‘1971 Bangladesh: ‘None of them returned’, Al-Jazeera,
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/Efpqa80pqJ0?si=qDHAAga7RWXfY33l">
                    'Short Documentary on Ranada Prasad Shaha', Youtube,
                  </a>
                </li>
                <li>
                  <a href="https://www.finevector.com/2023/11/ranada-prasad-shaha-rp-shaha.html">
                    'Philanthropist RP Shaha'
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
