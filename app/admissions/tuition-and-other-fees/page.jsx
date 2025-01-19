"use client";
import React, { useState } from "react";

const TuitionFees = () => {
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const feeData = [
    {
      SL: 1,
      Program: "BBA",
      Years: 4,
      TotalSemester: 8,
      Credits: 140,
      TotalCost: "4,92,000",
      GPA5: "3,35,200",
      GPA4_90to4_99: "3,94,000",
      GPA4_80to4_89: "4,13,600",
      GPA4_50to4_79: "4,33,200",
      GPA4_00to4_49: "4,52,800",
      GPA3_00to3_99: "4,92,000",
    },
    {
      SL: 2,
      Program: "Law",
      Years: 4,
      TotalSemester: 8,
      Credits: 141,
      TotalCost: "6,07,600",
      GPA5: "4,04,560",
      GPA4_90to4_99: "4,80,700",
      GPA4_80to4_89: "5,06,080",
      GPA4_50to4_79: "5,31,460",
      GPA4_00to4_49: "5,56,840",
      GPA3_00to3_99: "6,07,600",
    },
    {
      SL: 3,
      Program: "English",
      Years: 4,
      TotalSemester: 8,
      Credits: 141,
      TotalCost: "3,96,100",
      GPA5: "2,77,660",
      GPA4_90to4_99: "3,22,075",
      GPA4_80to4_89: "3,36,880",
      GPA4_50to4_79: "3,51,685",
      GPA4_00to4_49: "3,66,490",
      GPA3_00to3_99: "3,96,100",
    },
    {
      SL: 4,
      Program: "CSE",
      Years: 4,
      TotalSemester: 8,
      Credits: 160,
      TotalCost: "6,92,000",
      GPA5: "4,87,200",
      GPA4_90to4_99: "5,64,000",
      GPA4_80to4_89: "5,89,600",
      GPA4_50to4_79: "6,15,200",
      GPA4_00to4_49: "6,40,800",
      GPA3_00to3_99: "6,92,000",
    },
    {
      SL: 5,
      Program: "Pharmacy",
      Years: 4,
      TotalSemester: 8,
      Credits: 165,
      TotalCost: "7,48,000",
      GPA5: "5,36,800",
      GPA4_90to4_99: "6,16,000",
      GPA4_80to4_89: "6,42,400",
      GPA4_50to4_79: "6,68,800",
      GPA4_00to4_49: "6,95,200",
      GPA3_00to3_99: "7,48,000",
    },
    {
      SL: 6,
      Program: "Fashion & Design",
      Years: 4,
      TotalSemester: 8,
      Credits: 158,
      TotalCost: "4,08,600",
      GPA5: "3,01,160",
      GPA4_90to4_99: "3,41,450",
      GPA4_80to4_89: "3,54,880",
      GPA4_50to4_79: "3,68,310",
      GPA4_00to4_49: "3,81,740",
      GPA3_00to3_99: "4,08,600",
    },
  ];
  const graduateFeeData = [
    {
      SL: 1,
      Program: "MBA",
      Month: 12,
      TotalSemester: 2,
      Credits: 40,
      TotalCost: "1,05,000",
      RPSU_SisterConcerns: "75,000",
      Others: "87,000",
    },
    {
      SL: 2,
      Program: "EMBA",
      Month: 18,
      TotalSemester: 3,
      Credits: 52,
      TotalCost: "1,38,000",
      RPSU_SisterConcerns: "99,000",
      Others: "1,14,600",
    },
    {
      SL: 3,
      Program: "MBA",
      Month: 24,
      TotalSemester: 4,
      Credits: 64,
      TotalCost: "1,71,000",
      RPSU_SisterConcerns: "1,23,000",
      Others: "1,42,200",
    },
    {
      SL: 4,
      Program: "LL.M",
      Month: 12,
      TotalSemester: 2,
      Credits: 40,
      TotalCost: "1,05,000",
      RPSU_SisterConcerns: "75,000",
      Others: "87,000",
    },
    {
      SL: 5,
      Program: "MA ENG",
      Month: 12,
      TotalSemester: 2,
      Credits: 42,
      TotalCost: "1,08,000",
      RPSU_SisterConcerns: "76,500",
      Others: "89,100",
    },
    {
      SL: 6,
      Program: "MPH",
      Month: 18,
      TotalSemester: 3,
      Credits: 52,
      TotalCost: "1,90,000",
      RPSU_SisterConcerns: "99,000",
      Others: "99,000",
    },
    {
      SL: 7,
      Program: "MSc in CSE",
      Month: 12,
      TotalSemester: 2,
      Credits: 42,
      TotalCost: "1,08,000",
      RPSU_SisterConcerns: "76,500",
      Others: "89,100",
    },
  ];
  const feeDetails = [
    {
      FeeType: "Midterm Make-up Exam",
      Service:
        "An alternative exam for students who missed their scheduled midterm due to valid reasons",
      Frequency: "Per course",
      Amount: 2500,
    },
    {
      FeeType: "Final Make-up Exam",
      Service:
        "A second chance for students to sit for their final exam if they couldn’t attend the original session.",
      Frequency: "Per course",
      Amount: 3500,
    },
    {
      FeeType: "Special Consideration Examination",
      Service:
        "An exam offered to students with exceptional circumstances, such as health issues, who missed the scheduled exam.",
      Frequency: "Per course",
      Amount: 5000,
    },
    {
      FeeType: "Exam Script Review",
      Service:
        "A process allowing students to review their graded exam papers for clarity and possible re-evaluation.",
      Frequency: "Per course",
      Amount: 2000,
    },
    {
      FeeType: "Non-Collegiate",
      Service:
        "A fee charged to students with attendance 50%-79%, indicating they are not meeting the university’s required attendance percentage but are still allowed to sit for exams.",
      Frequency: "Per course",
      Amount: 2000,
    },
    {
      FeeType: "Department Change",
      Service:
        "The formal procedure for students seeking to switch their academic department within the university.",
      Frequency: "-",
      Amount: 5000,
    },
    {
      FeeType: "NOC/MOI/Studentship Certificate",
      Service:
        "A certificate issued for various purposes, such as applying for study permits, visas, or proving enrollment.",
      Frequency: "-",
      Amount: 500,
    },
    {
      FeeType: "Grade Report",
      Service:
        "A detailed statement of the grades achieved by a student in their courses over a term or year.",
      Frequency: "-",
      Amount: 500,
    },
    {
      FeeType: "Provisional Certificate",
      Service:
        "A temporary certificate given before the final degree is awarded, verifying that a student has completed their program requirements.",
      Frequency: "-",
      Amount: 1500,
    },
    {
      FeeType: "Academic Transcript",
      Service:
        "An official document listing a student’s courses, grades, and overall academic performance during their study.",
      Frequency: "-",
      Amount: 1000,
    },
    {
      FeeType: "Duplicate Provisional Certificate",
      Service:
        "A reissue of the provisional certificate in case the original was lost or damaged.",
      Frequency: "-",
      Amount: 1500,
    },
    {
      FeeType: "Duplicate Academic Transcript",
      Service:
        "A reissue of the academic transcript, provided when the original is lost or damaged.",
      Frequency: "-",
      Amount: 1000,
    },
    {
      FeeType: "Original Certificate",
      Service:
        "The final certificate awarded upon successful completion of a degree program.",
      Frequency: "-",
      Amount: 3000,
    },
    {
      FeeType: "Sealed Envelope",
      Service:
        "A service where official documents like transcripts or certificates are sealed for secure submission to other institutions.",
      Frequency: "-",
      Amount: 500,
    },
    {
      FeeType: "ID Card & Cover",
      Service:
        "The official university identification card issued to students, along with its protective cover.",
      Frequency: "-",
      Amount: 200,
    },
    {
      FeeType: "ID Ribbon",
      Service: "A lanyard provided for carrying the student ID card.",
      Frequency: "-",
      Amount: 100,
    },
    {
      FeeType: "SMS",
      Service:
        "A service to send important updates or notifications to students via text messages.",
      Frequency: "Per Semester",
      Amount: 300,
    },
    {
      FeeType: "Transportation",
      Service:
        "University-provided transport services for students to commute to and from campus.",
      Frequency: "-",
      Amount: 0,
    },
    {
      FeeType: "Credit Acceptance",
      Service:
        "The process by which previous coursework from other institutions is recognized and counted toward a student’s current degree.",
      Frequency: "-",
      Amount: "One-Third of total tuition fees",
    },
    {
      FeeType: "Late Payment Fine",
      Service:
        "A penalty fee applied when tuition or other payments are made past the due date.",
      Frequency: "Per Day",
      Amount: 50,
    },
    {
      FeeType: "Plagiarism Test Software",
      Service:
        "Software provided by the university to detect and prevent plagiarism in student assignments and research papers.",
      Frequency: "-",
      Amount: 100,
    },
    {
      FeeType: "Library",
      Service:
        "Access to the university’s library facilities, including books, digital resources, and study spaces.",
      Frequency: "Per Year",
      Amount: 1000,
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
          Tuition & Fees
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <div className="bg-back flex md:w-[1100px] text-black mx-auto font-raleway flex-col md:rounded-[30px] w-full">
          <span className="font-light md:text-[32px] text-[20px] md:py-4 py-2 md:pl-6 pl-4">
            Understand Your Fees
          </span>
          <span className="md:text-[16px] text-[14px] md:pt-4 pb-2 md:pl-10 pl-6">
            Understanding your tuition fees is crucial for planning your
            academic journey.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Admission Fee is a one-time fee that you will pay at the time of
            your admission.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Fee per credit is the cost per credit hour by the course.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Lab Fee is only for students enrolled in CSE, Pharmacy, EEE and
            Fashion & Design courses. You will have to pay library fee once per
            year.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Semester Fee is charged at the beginning of each semester.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Basic Fee is the sum of Admission fee and Semester fee.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Total Tuition Fee is the cost of total number of credits.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Total Cost is the overall estimated cost for the entire program,
            including all fees.
          </span>
          <span className="md:text-[16px] text-[14px] pb-2 md:pl-10 pl-7">
            - Miscellaneous fees are additional charges that can occur outside
            of the standard tuition and fees. These fees cover various services,
            activities, or materials required for enhancing your experience at
            RPSU.
          </span>
        </div>
        {/* Undergraduate Tuition Fee Section */}
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 py-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Undergraduate Tuition Fee
            </span>
            <button
              className="md:ml-[500px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[30px] w-[80px] h-[30px]"
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
            <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">SL</th>
                    <th className="border border-gray-300 p-2">Program</th>
                    <th className="border border-gray-300 p-2">Years</th>
                    <th className="border border-gray-300 p-2">
                      Total Semester
                    </th>
                    <th className="border border-gray-300 p-2">Credits</th>
                    <th className="border border-gray-300 p-2">Total Cost</th>
                    <th className="border border-gray-300 p-2">GPA 5 (40%)</th>
                    <th className="border border-gray-300 p-2">
                      GPA 4.90 to 4.99 (25%)
                    </th>
                    <th className="border border-gray-300 p-2">
                      GPA 4.80 to 4.89 (20%)
                    </th>
                    <th className="border border-gray-300 p-2">
                      GPA 4.50 to 4.79 (15%)
                    </th>
                    <th className="border border-gray-300 p-2">
                      GPA 4.00 to 4.49 (10%)
                    </th>
                    <th className="border border-gray-300 p-2">
                      GPA 3.00 to 3.99 (0%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                      <td className="border border-gray-300 p-2">{row.SL}</td>
                      <td className="border border-gray-300 p-2">
                        {row.Program}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.Years}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.TotalSemester}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.Credits}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.TotalCost}
                      </td>
                      <td className="border border-gray-300 p-2">{row.GPA5}</td>
                      <td className="border border-gray-300 p-2">
                        {row.GPA4_90to4_99}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.GPA4_80to4_89}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.GPA4_50to4_79}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.GPA4_00to4_49}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.GPA3_00to3_99}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 pb-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Graduate Tuition Fee
            </span>
            <button
              className="md:ml-[588px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[80px] w-[80px] h-[30px]"
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
            <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      SL
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Program
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Month
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Total Semester
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Credits
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Total Cost
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      RPSU & Sister Concerns
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {graduateFeeData.map((item) => (
                    <tr key={item.SL} className="odd:bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {item.SL}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.Program}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.Month}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.TotalSemester}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.Credits}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.TotalCost}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.RPSU_SisterConcerns}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.Others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] bg-back">
          <div className="md:py-8 pb-4">
            <span className="font-raleway font-light md:text-[32px]  text-[18px] pl-6">
              Miscellaneous Fees
            </span>
            <button
              className="md:ml-[600px] bg-btn_clr md:w-[140px] md:h-[48px] rounded-[10px] text-white ml-[88px] w-[80px] h-[30px]"
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
            <div className="p-4 border border-gray-300 border-t-0 rounded-b-md overflow-x-auto md:overflow-x-hidden">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Fee Type
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Service
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Frequency
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {feeDetails.map((fee, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {fee.FeeType}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {fee.Service}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {fee.Frequency}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {fee.Amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Add similar sections for Graduate Tuition Fee and Miscellaneous Fees */}
      </div>
    </>
  );
};

export default TuitionFees;
