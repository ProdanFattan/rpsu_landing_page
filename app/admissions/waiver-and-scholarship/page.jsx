"use client";
import React from "react";
import { useState } from "react";

const WaiverAndScholarshipPage = () => {
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const meritWaiverData = [
    {
      Sl: 1,
      HSC_GPA: "GPA 5",
      O_A_Level: "7A's",
      Fixed_Waiver_Per_Semester: "40%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "40%",
      Required_CGPA_3: 4,
    },
    {
      Sl: 2,
      HSC_GPA: "GPA 4.90 - 4.99",
      O_A_Level: "6A's",
      Fixed_Waiver_Per_Semester: "25%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "20%",
      Required_CGPA_3: 4,
    },
    {
      Sl: 3,
      HSC_GPA: "GPA 4.80 - 4.89",
      O_A_Level: "-",
      Fixed_Waiver_Per_Semester: "20%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "20%",
      Required_CGPA_3: 4,
    },
    {
      Sl: 4,
      HSC_GPA: "GPA 4.50 - 4.79",
      O_A_Level: "5A's",
      Fixed_Waiver_Per_Semester: "15%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "20%",
      Required_CGPA_3: 4,
    },
    {
      Sl: 5,
      HSC_GPA: "GPA 4.00 - 4.49",
      O_A_Level: "4A's",
      Fixed_Waiver_Per_Semester: "10%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "20%",
      Required_CGPA_3: 4,
    },
    {
      Sl: 6,
      HSC_GPA: "GPA 3.00 - 3.99",
      O_A_Level: "3A's",
      Fixed_Waiver_Per_Semester: "0%",
      Merit_Waiver_1: "10%",
      Required_CGPA_1: 3.5,
      Merit_Waiver_2: "10%",
      Required_CGPA_2: 3.75,
      Merit_Waiver_3: "20%",
      Required_CGPA_3: 4,
    },
  ];
  const programs = [
    {
      Sl: 1,
      Program: "MBA (40 credits)",
      RegularCost: 105000,
      RPSUAndSisterConcerns: 75000,
      Others: 87000,
    },
    {
      Sl: 2,
      Program: "MBA (64 credits)",
      RegularCost: 171000,
      RPSUAndSisterConcerns: 123000,
      Others: 142200,
    },
    {
      Sl: 3,
      Program: "EMBA (52 credits)",
      RegularCost: 138000,
      RPSUAndSisterConcerns: 99000,
      Others: 114600,
    },
    {
      Sl: 4,
      Program: "LL.M (40 credits)",
      RegularCost: 105000,
      RPSUAndSisterConcerns: 75000,
      Others: 87000,
    },
    {
      Sl: 5,
      Program: "MA ENG (42 credits)",
      RegularCost: 108000,
      RPSUAndSisterConcerns: 76500,
      Others: 89100,
    },
    {
      Sl: 6,
      Program: "MPH (52 credits)",
      RegularCost: 190000,
      RPSUAndSisterConcerns: 99000,
      Others: 99000,
    },
    {
      Sl: 7,
      Program: "MSc in CSE (42 credits)",
      RegularCost: 108000,
      RPSUAndSisterConcerns: 76500,
      Others: 89100,
    },
  ];

  const waivers = [
    {
      Sl: 1,
      WaiverPercentage: 50,
      RequiredGPA: 3.5,
    },
  ];

  return (
    <>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Waiver/Scholarship
        </div>
      </div>
      <div className="container mx-auto mb-24">
        {/* Undergraduate Tuition Fee Section */}
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 py-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Merit Based Scholarship for Undergraduate
            </span>
            <button
              className="md:ml-[258px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[30px] w-[80px] h-[30px] mt-2 md:mt-0"
              onClick={() => {
                setShowUndergraduate(!showUndergraduate);
                setShowGraduate(false);
                setShowCost(false);
              }}
              
            >
              View
            </button>
          </div>
          {showUndergraduate && (
            <>
              <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Sl</th>
                      <th className="border border-gray-300 px-4 py-2">
                        HSC GPA
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        O/A Level
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Fixed Waiver Per Semester
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Merit Waiver 1
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Required CGPA 1
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Merit Waiver 2
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Required CGPA 2
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Merit Waiver 3
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Required CGPA 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meritWaiverData.map((item) => (
                      <tr key={item.Sl} className="even:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Sl}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-start">
                          {item.HSC_GPA}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.O_A_Level}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Fixed_Waiver_Per_Semester}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Merit_Waiver_1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Required_CGPA_1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Merit_Waiver_2}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Required_CGPA_2}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Merit_Waiver_3}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {item.Required_CGPA_3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-back flex md:w-[1100px] text-black mx-auto font-raleway flex-col md:rounded-[30px] w-full md:mt-4">
                <span className="font-light md:text-[32px] text-[20px] md:py-4 py-2 md:pl-6 pl-4">
                  Rules and Regulations
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Regular Academic load of at least 15 credits.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Academic result should be at least GPA 3.00 (B) in each
                  course to be eligible for Scholarship.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No F/ I /W /UW grade.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No Semester dropping.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No Disciplinary Action taken.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Waiver will be applicable only on tuition fees.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No waiver will be allowed in case of Improvement & re-take.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students shall ensure at least 80% attendance in each course
                  to be eligible for Scholarship.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students who are already enjoying waiver benefit in any
                  category are not eligible for further waiver benefit.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - The terms and conditions of waiver and scholarship may be
                  changed as per requirements.
                </span>
              </div>
            </>
          )}
        </div>
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 pb-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Special waiver for Masters program
            </span>
            <button
              className="md:ml-[375px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[35px] w-[80px] h-[30px] mt-2 md:mt-0"
              onClick={() => {
                setShowUndergraduate(false);
                setShowGraduate(!showGraduate);
                setShowCost(false);
              }}
              
            >
              View
            </button>
          </div>
          {showGraduate && (
            <>
              <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
                <table className="min-w-full border border-gray-300 text-center">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-4 py-2">Sl</th>
                      <th className="px-4 py-2">Program</th>
                      <th className="px-4 py-2">Regular Cost</th>
                      <th className="px-4 py-2">RPSU & Sister Concerns</th>
                      <th className="px-4 py-2">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } border-b border-gray-300`}
                      >
                        <td className="px-4 py-2">{program.Sl}</td>
                        <td className="px-4 py-2">{program.Program}</td>
                        <td className="px-4 py-2">
                          {program.RegularCost.toLocaleString()}
                        </td>
                        <td className="px-4 py-2">
                          {program.RPSUAndSisterConcerns.toLocaleString()}
                        </td>
                        <td className="px-4 py-2">
                          {program.Others.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-back flex md:w-[1100px] text-black mx-auto font-raleway flex-col md:rounded-[30px] w-full md:mt-4">
                <span className="font-light md:text-[32px] text-[20px] md:py-4 py-2 md:pl-6 pl-4">
                  Rules and Regulations
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Regular Academic load of at least 9 credits.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No Disciplinary Action taken.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Waiver will be applicable only on tuition fees.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No waiver will be allowed in case of Improvement & re-take.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students shall ensure at least 60% attendance in each
                  course.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students who are already enjoying waiver benefit in any
                  category are not eligible for further waiver benefit.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - The terms and conditions of waiver and scholarship may be
                  changed as per requirements.
                </span>
              </div>
            </>
          )}
        </div>
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 pb-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Waiver for Employee (RPSU or Sister Concerns)
            </span>
            <button
              className="md:ml-[200px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[38px] w-[80px] h-[30px] mt-2 md:mt-0"
              onClick={() => {
                setShowUndergraduate(false);
                setShowGraduate(false);
                setShowCost(!showCost);
              }}
              
            >
              View
            </button>
          </div>
          {showCost && (
            <>
              <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
                <table className="min-w-full border border-gray-300 text-center">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-4 py-2">Sl</th>
                      <th className="px-4 py-2">
                        Waiver Percentage on Tuition Fees
                      </th>
                      <th className="px-4 py-2">
                        Required GPA for Getting Waiver
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {waivers.map((waiver, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } border-b border-gray-300`}
                      >
                        <td className="px-4 py-2">{waiver.Sl}</td>
                        <td className="px-4 py-2">
                          {waiver.WaiverPercentage}%
                        </td>
                        <td className="px-4 py-2">{waiver.RequiredGPA}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-back flex md:w-[1100px] text-black mx-auto font-raleway flex-col md:rounded-[30px] w-full md:mt-4">
                <span className="font-light md:text-[32px] text-[20px] md:py-4 py-2 md:pl-6 pl-4">
                  Rules and Regulations
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Regular Academic load of at least 15 credits.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Academic result should be at least GPA 3.00 (B) in each
                  course to be eligible for Scholarship.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No F/ I /W /UW grade.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No Semester dropping.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No Disciplinary Action taken.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Waiver will be applicable only on tuition fees.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - No waiver will be allowed in case of Improvement & re-take.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students shall ensure at least 80% attendance in each course
                  to be eligible for Scholarship.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - Students who are already enjoying waiver benefit in any
                  category are not eligible for further waiver benefit.
                </span>
                <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
                  - The terms and conditions of waiver and scholarship may be
                  changed as per requirements.
                </span>
              </div>
            </>
          )}
        </div>

        {/* Add similar sections for Graduate Tuition Fee and Miscellaneous Fees */}
      </div>
    </>
  );
};

export default WaiverAndScholarshipPage;
