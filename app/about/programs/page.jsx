"use client"
import { useState } from 'react';
import courseData from '../../data/courseData';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('course-details');
  const course = courseData.find((item) => item.slug === "bachelor-of-science-in-electrical-and-electronic-engineering");
  const tabData = course.tabData;
  console.log(tabData)
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
              <th className="border border-gray-300 px-4 py-2">Pre-Requisite</th>
              <th className="border border-gray-300 px-4 py-2">Co-Requisite</th>
              <th className="border border-gray-300 px-4 py-2">Credit</th>
              <th className="border border-gray-300 px-4 py-2">Hours/week</th>
            </tr>
          </thead>
          <tbody>
            {tabData[yearKey][semesterKey]?.map((course, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{course.number}</td>
                <td className="border border-gray-300 px-4 py-2">{course.courseCode}</td>
                <td className="border border-gray-300 px-4 py-2">{course.courseTitle}</td>
                <td className="border border-gray-300 px-4 py-2">{course.preRequisite}</td>
                <td className="border border-gray-300 px-4 py-2">{course.coRequisite}</td>
                <td className="border border-gray-300 px-4 py-2">{course.credit}</td>
                <td className="border border-gray-300 px-4 py-2">{course.hoursPerWeek}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const content = {
    'course-details': (
      <div className="bg-footer_back text-footer_color_s rounded-[30px] md:mr-20 py-12 md:ml-4 px-6 mx-2 md:mx-0">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-16">
          {Object.entries(tabData['course-details']).map(([label, value], index) => (
            <div key={index}>
              <h3 className="font-bold">{label}</h3>
              <p>{value}</p>
            </div>
          ))}
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
  const staticTabs = ['course-details', 'career'];

  // Dynamically generate year tabs
  const yearTabs = ['year-1', 'year-2', 'year-3', 'year-4'];

  return (
    <div className="container mx-auto py-40 text-[12px] md:text-[18px] md:px-12">
      <div className="md:flex justify-between hidden">
        {[...staticTabs, ...yearTabs].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab ? 'text-btn_clr border-b-4 border-btn_clr' : 'text-footer_back font-raleway font-bold'
            }`}
          >
            {tab.replace('-', ' ').toUpperCase()}
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
              {tab.replace('-', ' ').toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        {staticTabs.includes(activeTab)
          ? content[activeTab]
          : Object.keys(tabData[activeTab] || {}).map((semesterKey, index) => (
              <div key={index}>
                <h3 className="font-bold text-footer_back text-xl mt-6">
                  {semesterKey}
                </h3>
                {renderSemesterTable(semesterKey, activeTab)}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Tabs;
