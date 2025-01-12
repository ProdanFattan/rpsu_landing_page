import React from "react";

const About = () => {
  const menus = [
    { label: "History", href: "/about/history" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "Vision", href: "/about/vision" },
      { label: "Our Goals", href: "/about/vision" },
      { label: "Mission", href: "/about/vision" },
      { label: "Our Values", href: "/about/vision" },
      { label: "Why Study at RPSU", href: "/about/why-study" },
      { label: "Chairman BOT", href: "/about/chairman-bot" },
  ];
  const menus2 = [
    { label: "Board of Trustees", href: "/about/authority/board-of-trustees" },
    { label: "Vice Chancellor", href: "/about/vice-chancellor" },
    { label: "Treasurer", href: "/about/authority/treasurer" },
    { label: "Syndicate", href: "/about/authority/syndicate" },
    { label: "Academic Council", href: "/about/authority/academic-council" },
    { label: "IQAC", href: "https://iqac.rpsu.edu.bd/" },
    { label: "Finance Committee", href: "/about/authority/finance-committee" },
    { label: "Disciplinary Committee", href: "/about/authority/disciplinary-committee" },
    { label: "Complaint Committee", href: "/about/authority/complaint-committee" },
  ];
  const menus3 = [
    { label: "Registrar's Office", href: "/about/registrar" },
    {
      label: "Controller of Examinations Office",
      href: "/about/controller",
    },
    { label: "Proctor's Office", href: "/about/proctor" },
    {
      label: "Software Development Office",
      href: "/about/software-development",
    },
    { label: "Finance & Accounts Office", href: "/about/finance-accounts" },
    {
      label: "Media & Public Relation Office",
      href: "/about/media-public-relation",
    },
    {
      label: "Vice Chancellor's Office",
      href: "/about/vice-chancellor-office",
    },
    { label: "Admissions Office", href: "/about/admissions" },
    { label: "Library Personnel", href: "/about/library" },
    { label: "HR Office", href: "/about/hr" },
    { label: "Supporting Members", href: "/about/supporting-members" },
  ];

  return (
    <div className="w-[750px] h-[350px] bg-section_back grid grid-cols-3 text-footer_back font-raleway text-[14px] pt-6 px-2">
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
        Authority
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
        Administration
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

export default About;
