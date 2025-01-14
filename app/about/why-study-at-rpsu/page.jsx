import React from "react";

const HistoryPage = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Our Vision
        </div>
      </div>
      <div className="container mx-auto font-open_sans text-footer_back md:text-[20px] text-[16px] md:px-0 px-4">
        <p className="pb-8">
          <span className="font-bold">Our History : </span>We have a history
          providing education that goes back many decades. Bharateswari Homes, a
          fully residential Girls’ School established in 1945 is the recipient
          of the Independence Day Medal (Shadinota Padak), 2020. The Trust also
          established Kumudini Women’s Degree College (1st Women’s Degree
          College in East Bengal) in 1943. Kumudini Nursing School & College
          (KNS&C) is one of the most well-known Nursing Colleges in the country.
          We are the 1st private nursing college to provide B Sc. From July 2020
          we shall offer M Sc in Nursing. KNS&C nurses are serving in all the
          major hospitals and Nursing Institutes in Bangladesh.
        </p>
        <span className="font-bold">Our Faculty :</span>
        <ul>
          <li className="pb-4">
            - We have a rigorous process for faculty selection aiming to recruit
            the best available candidates. It is noteworthy that:
          </li>
          <li className="pb-4">
            - Most of our lecturers/Professors have studied mainly in Public
            Universities or Overseas Institutions.
          </li>
          <li className="pb-4">
            - We select the best available teachers – of the faculty we selected
            since inception, already 7 have received scholarships to study in
            the USA and Canada for Ph.D.
          </li>
        </ul>

        <p className="font-bold pb-4">
          - RPSU is recognized by and registered with the Government of
          Bangladesh, University Grants Commission (UGC) Bangladesh, Bangladesh
          Bar Council, and Pharmacy Council of Bangladesh.
        </p>
        <p className="font-bold pb-4">
          - RPSU has 8 Laboratories for Pharmacy, 2 Computer laboratories, 5 CSE
          / EEE Laboratories, 1 Textile Laboratory, 1 Fashion Design Laboratory.
        </p>
        <p className="font-bold pb-4">
          - RPSU has MoU with its sister concern Kumudini Pharma Limited (KPL)
          that enables RPSU pharmacy students to visit (with faculty) the plant
          for hands-on learning.
        </p>
        <p className="font-bold pb-4">
          - RPSU has a well-equipped library. Students also have access to an
          E-Library.
        </p>
        <p className="font-bold pb-4">- There is no session jam.</p>
        <p className="font-bold pb-4">- Green Campus & natural surroundings.</p>
        <p className="font-bold pb-4">- Transport to and from University.</p>
        <p className="font-bold pb-4">
          - Secure Campus monitored by CCTV cameras.
        </p>
        <p className="font-bold pb-4">
          - Scholarship Opportunities for meritorious students.
        </p>
        <p className="font-bold pb-4">- Continuous Improvement Policy.</p>
        <p className="font-bold pb-4">
          - Extracurricular Activities – Sports Club, Entrepreneurial Club,
          Cultural Club, Debating Club, etc.
        </p>
        <p className="font-bold pb-4">
          - Skills Building Initiatives – English Language, Salesmanship, Event
          Management
        </p>
        <p className="font-bold">
          - Seminars by Leaders in Multiple Sectors.
        </p>

        <p className="pb-16"></p>
      </div>
    </div>
  );
};

export default HistoryPage;
