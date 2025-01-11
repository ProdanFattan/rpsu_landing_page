import React from "react";
import schools from "../data/academicdata";
const AcademicsPage = () => {
  return (
    <div>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] bg-cover bg-center"
        style={{ backgroundImage: "url('/academics.webp')" }}
      >
        <span className="h-[290px] md:h-screen justify-center items-center text-center flex font-raleway text-[30px] md:text-[90px] font-bold text-white">
          Academics
        </span>
      </div>
      <div className="bg-section_back container mx-auto ">
        <div className="md:pt-16 md:pl-8 pt-8 pl-4 flex flex-col pr-1 md:pr-0">
          <span className="font-raleway md:text-[40px] text-footer_back font-light text-[24px] md:pb-6 pb-3">
            Excellence in Education
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
            Schools
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:pt-8 md:pl-8 pt-4 pb-20">
  {schools.map((school, index) => (
    <a 
      key={index} 
      href={`/academics/${school.slug}`} 
      className="px-2 text-center pb-8 block"
    >
      <div className="pb-2">
        <img
          className="rounded-[20px] md:w-96 md:h-60 h-[230px] transform transition duration-500 md:hover:scale-110"
          src="/academics.webp"
          alt={school.name}
        />
      </div>
      <span className="font-raleway font-normal md:font-semibold md:text-[24px] text-[18px] text-footer_back">
        {school.name}
      </span>
    </a>
  ))}
</div>

        <div className="grid md:grid-cols-3 grid-cols-2 pb-8 font-raleway md:text-[36px] h-[800px] text-[24px] text-white font-bold ">
          <div className=" order-1 md:order-none">
            <img
              className="w-full h-full object-cover"
              src="/academics.webp"
              alt="Group of students"
            />
          </div>
          <div className=" bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[120px] order-2 md:order-none ">
            <span className="">Admission <br />Requirments </span>
          </div>
          <div className="order-3 md:order-none">
            <img
              className="w-full h-full object-cover"
              src="/academics.webp"
              alt="Group of students"
            />
          </div>
          <div className=" bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[100px] order-4 md:order-none">
            <span className="">Tuition <br />Fees </span>
          </div>
          <div className="order-5 md:order-none">
            <img
              className="w-full h-full object-cover"
              src="/academics.webp"
              alt="Group of students"
            />
          </div>
          <div className="bg-btn_clr hover:bg-footer_back text-center md:pt-[150px] pt-[80px] order- md:order-none">
            <span className="">Campus <br />Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
