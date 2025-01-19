"use client";
import { useState } from "react";
import React from "react";
import courseData from "../../../data/courseData";
import reviews from "../../../data/reviewData";
import ReviewCard from "../../../../components/reviewCard";
import { useParams } from "next/navigation";
const ProgramPage = () => {
  const [activeTab, setActiveTab] = useState("course-details");
  const params = useParams(); // Directly call useParams
  const slug = params?.slug || "";
  const program = courseData.find((item) => item.slug === slug);
  const tabData = program.tabData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next review
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Navigate to the previous review
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  // Function to render course tables for each semester
  const renderSemesterTable = (semesterKey, yearKey) => (
    <div className="bg-footer_back text-footer_color_s rounded-[30px] md:mr-16 py-12 md:ml-4">
      <div className="md:px-4 px-2 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="text-footer_color_s font-raleway">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Course Code</th>
              <th className="border border-gray-300 px-4 py-2">Course Title</th>
              <th className="border border-gray-300 px-4 py-2">
                Pre-Requisite
              </th>
              <th className="border border-gray-300 px-4 py-2">Co-Requisite</th>
              <th className="border border-gray-300 px-4 py-2">Credit</th>
              <th className="border border-gray-300 px-4 py-2">Hours/week</th>
            </tr>
          </thead>
          <tbody>
            {tabData[yearKey][semesterKey]?.map((course, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {course.number}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.courseCode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.courseTitle}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.preRequisite}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.coRequisite}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.credit}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.hoursPerWeek}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const content = {
    "course-details": (
      <div className="bg-footer_back text-footer_color_s rounded-[30px] md:mr-20 py-12 md:ml-4 px-6 mx-2 md:mx-0">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-16">
          {Object.entries(tabData["course-details"]).map(
            ([label, value], index) => (
              <div key={index}>
                <h3 className="font-bold">{label}</h3>
                <p>{value}</p>
              </div>
            )
          )}
        </div>
      </div>
    ),
    career: (
      <div className="bg-footer_back text-footer_color_s rounded-[30px] md:mr-20 py-12 md:ml-4 mx-2 md:mx-0">
        <div className="flex-1 md:pl-8 px-3">
          <h3 className="font-bold">Career Opportunities</h3>
          <ul className="list-disc ml-4">
            {tabData.career.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  };

  // Tabs excluding year tabs for static content
  const staticTabs = ["course-details", "career"];

  // Dynamically generate year tabs
  const yearTabs = ["year-1", "year-2", "year-3", "year-4"];
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] bg-cover bg-center"
        style={{ backgroundImage: `url('${program.image}')` }}
      >
        <span className="h-[290px] md:h-screen justify-center items-center pl-4 md:pl-16 flex font-raleway text-[20px] md:text-[80px] font-bold text-white">
          {program.name}
        </span>
      </div>
      <div className="container mx-auto ">
        <div className="md:py-20 py-10 text-[12px] md:text-[18px] md:px-12">
          <div className="md:flex justify-between hidden">
            {[...staticTabs, ...yearTabs].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? "text-btn_clr border-b-4 border-btn_clr"
                    : "text-footer_back font-raleway font-bold"
                }`}
              >
                {tab.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>

          <div className="md:hidden border-gray-700">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700"
            >
              {[...staticTabs, ...yearTabs].map((tab) => (
                <option key={tab} value={tab}>
                  {tab.replace("-", " ").toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            {staticTabs.includes(activeTab)
              ? content[activeTab]
              : Object.keys(tabData[activeTab] || {}).map(
                  (semesterKey, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-footer_back text-xl mt-6">
                        {semesterKey}
                      </h3>
                      {renderSemesterTable(semesterKey, activeTab)}
                    </div>
                  )
                )}
          </div>
        </div>
        <div className="font-open_sans font-light md:text-5xl text-footer_back justify-center flex mb-10 md:mb-20 text-3xl">
          Hear from our Alumni
        </div>
        <div className="relative flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-10 bg-footer_back text-white rounded-full p-2 hover:bg-purple-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Current Review */}
          <ReviewCard review={reviews[currentIndex]} />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-10 bg-footer_back text-white rounded-full p-2 hover:bg-purple-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2 mb-20">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-footer_back" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <div className="mx-16">
        <div className="bg-card_bg w-full flex flex-row  rounded-[50px] items-center mb-20">
          <div className="py-8 pl-32 font-raleway text-white flex flex-col w-2/3 pr-24">
            <span className="font-bold text-[36px] pb-4">{program.head.name}</span>
            <span className="font-bold text-[24px] pb-4">{program.head.title}</span>
            <span className="font-open_sans text-[18px] pb-4">"{program.head.message}"</span>
            <a href={`/faculty/${program.head.slug}`} className="text-[14px] font-semibold">View More</a>
          </div>
          <div className="w-1/3">
            <img src = {program.head.image} alt="" className="w-full h-full object-cover rounded-[50px]"/>
          </div>
        </div>
        </div>
        <div className="font-open_sans font-light md:text-5xl text-footer_back justify-center flex mb-10 md:mb-20 text-3xl">
          Faculty of CSE 
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
