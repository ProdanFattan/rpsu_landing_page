import React from "react";

const Admission = () => {
  const menus = [
    { label: "Apply Now", href: "/admission/apply-now" },
      { label: "Academics Overview", href: "/academics" },
      { label: "Academic Calendar", href: "/admission/calendar" },
      { label: "Admission Requirements", href: "/admission/requirements" },
      { label: "Tuition & Other Fees", href: "/admission/tuition-fees" },
      { label: "Waiver/Scholarship", href: "/admission/scholarship" },
      { label: "International Admission", href: "/admission/international" },
      { label: "Result Verification", href: "/admission/international" },
  ];
  const menus2 = [
    { label: "School of Engineering", href: "/academics/school-of-engineering" },
    { label: "School of Business", href: "/academics/school-of-business" },
    { label: "School of Life Science & Health", href: "/academics/school-of-life-sciences-and-health" },
    { label: "School of Arts & Social Science", href: "/academics/school-of-arts-and-social-science" },
    { label: "Kumudini School of Fashion & Design", href: "/academics/kumudini-school-of-fashion-and-design" },
    { label: "Kumudini School of Public Health", href: "/academics/kumudini-school-of-public-health" },
  ];
  const menus3 = [
    { label: "Business Administration", href: "/admissions/faculty/business-administration" },
    {
      label: "Computer Science & Engineering",
      href: "/admissions/faculty/computer-science-and-engineering",
    },
    { label: "Electrical & Electronic Engineering", href: "/admissions/faculty/electrical-and-electronic-engineering" },
    {
      label: "Law",
      href: "/admissions/faculty/law",
    },
    { label: "English", href: "/admissions/faculty/english" },
    {
      label: "Pharmacy",
      href: "/admissions/faculty/pharmacy",
    },
    {
      label: "Fashion Design",
      href: "/admissions/faculty/fashion-design",
    },
    { label: "Public Health", href: "/admissions/faculty/public-health" },
    { label: "GED", href: "/admissions/faculty/ged" },
  ];

  return (
    <div className="w-[750px] h-[330px] bg-white grid grid-cols-3 text-footer_back font-raleway text-[14px] pt-6 px-2">
      <div>
        <ul
          key={menus}
          className="relative items-right  pt-8 pl-4"
        >
          <ul>
            {menus.map((item) => (
              <li key={item.label} className="pb-1 hover:text-btn_clr">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div className="pr-4">
        <p className="relative  items-right  pt-2 font-bold">
          Academics
        </p>
        <div className="border-t-2 border-footer_back mr-2 w-3/4"></div>
        <ul
          key={menus2}
          className="relative items-right pt-2"
        >
          <ul>
            {menus2.map((item) => (
              <li key={item.label} className="pb-1 hover:text-btn_clr">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div className="pr-4">
        <p className="relative items-right pt-2 font-bold">
        Faculty
        </p>
        <div className="border-t-2 border-footer_back mr-2 w-3/4"></div>
        <ul
          key={menus3}
          className="relative items-right pt-2"
        >
          <ul>
            {menus3.map((item) => (
              <li key={item.label} className="pb-1 hover:text-btn_clr">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Admission;
