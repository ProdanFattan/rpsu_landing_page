import React from "react";
import academicDataSet from "../../data/academicdata";
const AcademicsPage = ({params}) => {
  const {slug} = params;
  const school = academicDataSet.find((item) => item.slug === slug);
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] bg-cover bg-center"
        style={{ backgroundImage: `url('${school.image}')` }}
      >
        <span className="h-[290px] md:h-screen justify-center items-center text-center flex font-raleway text-[30px] md:text-[90px] font-bold text-white">
          {school.name}
        </span>
      </div>
      <div className="bg-section_back container mx-auto ">
        <div className="md:pt-16 md:pl-8 pt-8 pl-4 flex flex-col pr-1 md:pr-0">
          <span className="font-raleway md:text-[40px] text-footer_back font-light text-[24px] md:pb-6 pb-3">
            Welcome to {school.name} at RPSU
          </span>
          <span className="font-open_sans md:text-[20px] text-black">
            At R. P. Shaha University (RPSU), we believe education is about more
            than just textbooks and classrooms—it's about inspiring students to
            grow, think big, and make a difference. With passionate faculty, a
            supportive environment, and a focus on real-world learning, we’re
            dedicated to helping our students achieve their goals and excel in
            life.
          </span>
        </div>
        <div className="md:pt-16 pt-8">
          <span className="md:text-[40px] text-[24px] font-open_sans text-footer_back md:pl-8 pl-4 font-light">
            Programs
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:pt-8 md:pl-8 pt-4 pb-20 ">
        {(school.department || school.programs)?.map((item, itemIndex) => (
            <a
              key={itemIndex}
              href={`/about/programs/${item.slug}`}
              className="px-2 2xl:text-start text-center pb-8 block"
            >
              <div className="pb-2">
                <img
                  className="rounded-[20px] md:w-96 md:h-60 h-[230px] transform transition duration-500 md:hover:scale-110"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <span className="font-raleway font-normal md:font-semibold md:text-[18px] text-[18px] text-footer_back">
                {item.name}
              </span>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default AcademicsPage;
