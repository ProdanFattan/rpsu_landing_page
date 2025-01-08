"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";
import Admission from "@/components/admission";
import About from "@/components/about";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  //   {
  //     title: "Admission",
  //     subMenuHeading: ["","Authority","Administration"],
  //     subMenu:[
  //       { label: "Apply Now", name: "", href: "/admission/apply-now" },
  //       { label: "Academics Overview",name: "", href: "/admission/academics-overview" },
  //       { label: "Academic Calendar",name: "", href: "/admission/calendar" },
  //       { label: "Admission Requirements",name: "", href: "/admission/requirements" },
  //       { label: "Tuition & Other Fees",name: "", href: "/admission/tuition-fees" },
  //       { label: "Apply Online",name: "", href: "/admission/alumni" },
  //       { label: "Waiver/Scholarship",name: "", href: "/admission/scholarship" },
  //       { label: "International Admission",name: "", href: "/admission/international" },
  //       { label: "Result Verification",name: "", href: "/admission/international" },
  //       {label: "Board of Trustees",name:"Authority", href: "/admission/board-of-trustees"},
  //       {label: "Vice Chancellor",name:"Authority", href: "/admission/vice-chancellor"},
  //       {label: "Treasurer",name:"Authority", href: "/admission/treasurer"},
  //       {label: "Synidicate",name:"Authority", href: "/admission/synidicate"},
  //       {label: "Academic Council",name:"Authority", href: "/admission/academic-council"},
  //       {label: "IQAC",name:"Authority", href: "/admission/iqac"},
  //       {label: "Finance Committee",name:"Authority", href: "/admission/finance-committee"},
  //       {label: "Complaint Committee",name:"Authority", href: "/admission/complaint-committee"},
  //         {label: "Registrar's Office",name:"Administration", href: "/admission/registrar"},
  //         {label: "Controller of Examinations Office",name:"Administration", href: "/admission/controller"},
  //         {label: "Proctor's Office",name:"Administration", href: "/admission/proctor"},
  //         {label: "Software Development Office",name:"Administration", href: "/admission/software-development"},
  //         {label: "Finance & Accounts Office",name:"Administration", href: "/admission/finance-accounts"},
  //         {label: "Media & Public Relation Office",name:"Administration", href: "/admission/media-public-relation"},
  //         {label: "Vice Chancellor's Office",name:"Administration", href: "/admission/vice-chancellor-office"},
  //         {label: "Admissions Office",name:"Administration", href: "/admission/admissions"},
  //         {label: "Library Personnel",name:"Administration", href: "/admission/library"},
  //         {label: "HR Office",name:"Administration", href: "/admission/hr"},
  //         {label: "Supporting Members",name:"Administration", href: "/admission/supporting-members"},
  //     ],
  //     gridCols

  //   }
  // ];

  const menus: any = {
    admissions: [{ label: "Apply Now", href: "/admission/apply-now" },
      { label: "Academics Overview", href: "/admission/academics-overview" },
      { label: "Academic Calendar", href: "/admission/calendar" },
      { label: "Admission Requirements", href: "/admission/requirements" },
      { label: "Tuition & Other Fees", href: "/admission/tuition-fees" },
      { label: "Apply Online", href: "/admission/alumni" },
      { label: "Waiver/Scholarship", href: "/admission/scholarship" },
      { label: "International Admission", href: "/admission/international" },
      { label: "Result Verification", href: "/admission/international" },],
    research: [
      { label: "RPSU Journals", href: "/research/journals" },
      { label: "Funding", href: "/research/funding" },
      { label: "Blind Review", href: "/research/blind-review" },
      { label: "CRI", href: "/research/cri" },
    ],
    "Campus Life": [
      { label: "Events @ RPSU", href: "/news-events/events" },
      { label: "Campus Gallery", href: "/news-events/gallery" },
      { label: "Virtual Tour", href: "/news-events/virtual-tour" },
      { label: "Accommodation", href: "/news-events/accommodation" },
      // { label: "Life on Campus", href: "/news-events/life-on-campus" },
      { label: "Culture of Support", href: "/news-events/culture-of-support" },
      { label: "RPSU Policies", href: "/news-events/policies" },
    ],
    about: [{ label: "History", href: "/about/history" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "Vision", href: "/about/vision" },
      { label: "Our Goals", href: "/about/vision" },
      { label: "Mission", href: "/about/vision" },
      { label: "Our Values", href: "/about/vision" },
      { label: "Why Study at RPSU", href: "/about/why-study" },
      { label: "Chairman BOT", href: "/about/chairman-bot" },],
  };
  const classname: any = {
        "admission":"absolute left-[150px] transform -translate-x-1/2 top-12 bg-white text-black shadow-lg rounded-[30px] py-2 px-4",
        "about": "absolute left-1/2 transform -translate-x-1/2 top-12 bg-white text-black shadow-lg rounded-[30px] py-2 px-4 text-footer_back",
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: any) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="absolute md:top-8 left-1/2 transform -translate-x-1/2 bg-white backdrop-blur-lg bg-opacity-20 md:rounded-[30px] z-50 md:px-6 py-3 w-full xl:w-[1143px] xl:h-[78px] flex gap-4 font-raleway">
        <div className="w-[267px] h-[32px] md:w-[430px] md:h-[56px]">
         <a href="/"><img src="/logo.png" alt="Logo" /></a> 
        </div>


      <ul className="hidden md:flex space-x-6  text-slateblue items-center justify-center lg:pt-1">
        {Object.keys(menus).map((menu) => (
          <li
            key={menu}
            className="relative lg:w-[119px] lg:h-[45px] lg:pt-2 "
            onMouseEnter={() => toggleDropdown(menu)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <p className="hover:text-btn_clr capitalize text-center">
              {menu}
            </p>
            {activeDropdown === menu && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                style={{ translateX: "-70%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={menu === "admissions" ?`${classname.admission}`:`${classname.about}`}
              >
                {(menu !== "about" && menu !== "admissions") && (<div className="w-[234px] py-4"><ul>
                  {menus[menu].map((item: any) => (
                    <li key={item.label} className="py-1 hover:text-btn_clr text-center">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul></div>) }
                {menu === "about" && (<><About/></>) }
                {menu === "admissions" && (<><Admission/></>) }
                
              </motion.div>
            )}
          </li>
        ))}
        <li className="relative lg:w-[119px] lg:h-[45px] text-center items-center justify-center lg:pt-2 pr-14">
          <a
            href=""
            className="hover:text-btn_clr"
          >
            ERP
          </a>
        </li>
      </ul>
      <button
        className="block md:hidden text-purple-800 focus:outline-none pl-[150px]"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0 top-16 w-full bg-white text-footer_back shadow-lg rounded-lg py-4 px-6"
        >
          <ul>
            {Object.keys(menus).map((menu) => (
              <li key={menu} className="py-2">
                <button
                  className="w-full text-left hover:text-btn_clr capitalize"
                  onClick={() => toggleDropdown(menu)}
                >
                  {menu}
                </button>
                {activeDropdown === menu && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="pl-4 mt-2"
                  >
                    <ul>
                      {menus[menu].map((item: any) => (
                        <li key={item.label} className="py-1">
                          <a href={item.href} className="hover:text-btn_clr">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </li>
            ))}
            <li className="w-full text-left hover:text-btn_clr capitalize">
              <a href="">ERP</a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
