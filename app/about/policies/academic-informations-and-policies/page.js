"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";

const academicInfo = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("application");

  // Tabs configuration
  const tabs = [
    {
      id: "application",
      title: "Application",
      content: (
        <div>
          <span className="font-bold">Application</span>
          <p className="pt-4 pb-8">
            A student interested in taking admission in RPSU should procure
            admission form from the admission office and return the filled in
            application form along with other documents to the admission office.
            Photocopies of all certificates, mark sheets, testimonials, two copy
            of passport size photo, students birth certificate & guardian NID
            are required to be submitted with the admission form. Students can
            also apply through online admission.rpsu.edu.bd.  After primary
            scrutiny, applicants will be called to sit for an admission test and
            interview. Admission tests are conducted for spring and fall
            semesters. Test dates are published in the university website
            at www.rpsu.edu.bd. 
          </p>
        </div>
      ),
    },
    {
      id: "admission-type-policies",
      title: "Admission type policies",
      content: (
        <div>
          <span className="font-bold">Admission on Credit Transfer</span>
          <p className="pt-4 pb-8">
            A student desiring to transfer his/her credits is expected to have
            at least a CGPA of 2.5 in all previous examinations to be considered
            for admission to the University. S/he must submit syllabus, official
            transcripts and no objection certificate from previously attended
            institutions along with the admission applications. Admission Test
            may be required for a student desiring transfer of credits.
            Individual department may have some additional requirements.
          </p>
          <span className="font-bold">Admission of Foreign Applicants</span>
          <p className="pt-4 pb-8">
            International applicants seeking admission to RPSU must meet the
            equivalent academic standards that are for admission for native
            students. International applicants are selected on the basis of
            their prior academic work, English proficiency and certification of
            adequate financial resources.
          </p>
          <span className="font-bold">Admission Cancellation</span>
          <p className="pt-4 pb-8">
            Admission of any student may be cancelled by RPSU authority for the
            following reason(s):
            <br /> - If a student does not continue 2 semesters consecutively.
            <br /> - If a student does not pay his/her dues in time.
            <br /> - If a student fails to produce necessary academic documents
            to the admission office.
            <br /> - If a student takes part in any activity that goes against
            discipline or RPSU rules & regulations.
          </p>
          <span className="font-bold">Provisional Admission</span>
          <p className="pt-4 pb-8">
            RPSU may provisionally accept applicants for admission who cannot
            produce official transcripts, certificates and other necessary
            documents at the time of admission. As a prerequisite all
            provisionally admitted students will be required to submit the
            appropriate credentials to continue. Required credentials must be
            submitted within the semester of initial enrollment.
          </p>
          <span className="font-bold">Readmission</span>
          <p className="pt-4 pb-8">
            A RPSU student whose admission has been cancelled must submit an
            application for readmission. If this student has attended other
            colleges and universities during his/her absence at RPSU s/he must
            submit official transcripts along with applications. Such a student
            will have to pay the readmission fees.
          </p>
        </div>
      ),
    },
    {
      id: "grade-requirement-for-degree",
      title: "Grade Requirement for Degree",
      content: (
        <div>
          <span className="font-bold">Grade Requirement for Degree</span>
          <p className="pt-4 pb-8">
            To earn an Undergraduate Degree from RPSU, a student must complete
            his degree requirements with a minimum CGPA of 2.50. The grading
            policies are,
          </p>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Numerical Grade
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Letter Grade
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Grade Point
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    80% and above
                  </td>
                  <td className="border border-gray-300 px-4 py-2">A+</td>
                  <td className="border border-gray-300 px-4 py-2">4.00</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Outstanding
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    75% to less than 80%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">A</td>
                  <td className="border border-gray-300 px-4 py-2">3.75</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Excellent
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    70% to less than 75%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">A-</td>
                  <td className="border border-gray-300 px-4 py-2">3.50</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Very Good
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    65% to less than 70%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">B+</td>
                  <td className="border border-gray-300 px-4 py-2">3.25</td>
                  <td className="border border-gray-300 px-4 py-2">Good</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    60% to less than 65%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">B</td>
                  <td className="border border-gray-300 px-4 py-2">3.00</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Satisfactory
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    55% to less than 60%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">B-</td>
                  <td className="border border-gray-300 px-4 py-2">2.75</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Above Average
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    50% to less than 55%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">C+</td>
                  <td className="border border-gray-300 px-4 py-2">2.50</td>
                  <td className="border border-gray-300 px-4 py-2">Average</td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    45% to less than 50%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">C</td>
                  <td className="border border-gray-300 px-4 py-2">2.25</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Below Average
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    40% to less than 45%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">D</td>
                  <td className="border border-gray-300 px-4 py-2">2.00</td>
                  <td className="border border-gray-300 px-4 py-2">Pass</td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    Less than 40%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">F</td>
                  <td className="border border-gray-300 px-4 py-2">0.00</td>
                  <td className="border border-gray-300 px-4 py-2">Fail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "class-attendance",
      title: "Class Attendance",
      content: (
        <div>
          <span className="font-bold">Class Attendance</span>
          <p className="pt-4 pb-8">
            A student is expected to attend reasonable portion (not less than
            80%) of the lectures, tutorials and practical classes for the
            respective course. It is the responsibility of the instructor to
            inform the student of the consequences of absence from class. It is
            the responsibility of the student to keep instructors informed
            regarding absences from classes. A student who knows of necessary
            class absences should consult instructors in advance. A student who
            misses a class is not excused from obligations to instructors.
            Instructors will determine the manner in which assignments and
            examinations missed may be made up. A student may be dropped from a
            course for absence in five consecutive classes.
          </p>
        </div>
      ),
    },
    {
      id: "probation-and-dismissal",
      title: "Probation and Dismissal",
      content: (
        <div>
          <span className="font-bold">Probation and Dismissal</span>
          <p className="pt-4 pb-8">
            A student whose CGPA falls below 2.50 after the first two semesters
            will be placed on probation for the next two semesters. Failure to
            raise their CGPA to at least 2.50 after the probation period will
            lead to dismissal from the university. If a student’s CGPA falls
            below 2.50 subsequently, s/he will again be placed on probation.
            Students who fail to achieve a GPA of 2.50 within three semesters
            will be dismissed from the university. A student dismissed on
            academic ground(s) may be allowed to be admitted in another program
            with permission of the university authority.
          </p>
        </div>
      ),
    },
    {
      id: "discontinuation",
      title: "Discontinuation",
      content: (
        <div>
          <span className="font-bold">Discontinuation</span>
          <p className="pt-4 pb-8">
            Discontinuance of studies results either in the issuance of transfer
            of credentials (honorable dismissal) issued by the Registrar's
            Office for responsible cause or upon petition of the student or an
            order of dismissal by the university after the commission of a major
            offense specified in the code of conduct for students. Should a
            student wish to leave the university temporarily, he must first
            secure permission from the office stating the definite period and
            reason for the leave. A student must obtain approval on the Leave of
            Absence form, which can be secured from the Registrar's Office;
            otherwise, the period of his/her absence shall be counted against
            him/her for purpose of the time limit or maximum residency. Prior
            permission is required from the Registrar’s Office for
            discontinuation of studies for any specific reason. The Leave of
            Absence Form must be filled out stating the specific reason.
            Otherwise, the period of absence shall be counted against the
            student and an absence of consecutive semesters without prior
            approval will account to cancellation of studentship from RPSU.   
          </p>
        </div>
      ),
    },
    {
      id: "adding-dropping-of-courses",
      title: "Adding/ Dropping of Courses",
      content: (
        <div>
          <span className="font-bold">Adding/ Dropping of Courses</span>
          <p className="pt-4 pb-8">
            A student who seeks to add or drop courses should consult his/her
            advisors and instructors of relevant courses. S/he may add/drop
            courses only within the date mentioned in the Academic Calendar and
            only with the approval of their academic advisors. All adding or
            dropping of course(s) must be done through the registration office
            of the university. However, the minimum load has to be ensured after
            dropping of course(s). The grade “Withdrawal” (W) is assigned when a
            student officially drops a course.
          </p>
        </div>
      ),
    },
    {
      id: "course-withdrawal",
      title: "Course Withdrawal",
      content: (
        <div>
          <span className="font-bold">Course Withdrawal</span>
          <p className="pt-4 pb-8">
            Students interested to withdraw from particular course must obtain a
            course withdrawal approval from the office of Registration. However,
            once a student receives ‘F’ grade in midterm Examinations he/she
            will no longer be eligible for withdrawal. A student who has dropped
            or withdrawn from a course (officially or unofficially) will not be
            eligible for any kind of Scholarship, Academic Honors or Awards.
          </p>
        </div>
      ),
    },
    {
      id: "course-retaking-repeating",
      title: "Course Retaking / Repeating",
      content: (
        <div>
          <span className="font-bold">Course Retaking / Repeating</span>
          <p className="pt-4 pb-8">
            Students receiving a grade of ‘C+’ or below may retake/repeat a
            course. If a student receives a grade like ‘F’, ‘I’, ‘ W’ or ‘UW’ in
            a particular course he retakes/repeats in the immediate semester
            under the following terms and conditions:
            <br /> - A Student is allowed to retake a course maximum three times
            <br /> - A Student is allowed to have a maximum of four ‘F’ grades
            <br /> - From 5th ‘F’ grade onward the grade ‘F’ will be taken into
            account while computing CGPA.
            <br /> - In any circumstances, the ‘F’ grade awarded by any
            disciplinary committee will not be replaced/ removed by a new grade.
            <br /> - The newly earned grade will be displayed alongside the ‘F’
            grade. However, for CGPA computation purposes the newly earned grade
            will be taken into account while computing the CGPA. Students must
            pay full tuition fees for retaking courses. 
          </p>
        </div>
      ),
    },
    {
      id: "disciplinary-policy",
      title: "Disciplinary Policy",
      content: (
        <div>
          <span className="font-bold">Disciplinary Policy</span>
          <p className="pt-4 pb-8">
            The RPSU administration reserves the right to show cause, suspend,
            put on probation or even terminate enrollment of any student under
            the following circumstances:
            <br /> - Failure to meet the financial obligations on schedule
            <br /> - Involving in any political activity in the university
            <br /> - Forming student organization without prior approval of the
            university authority
            <br /> - Any subversive act against the country or the university
            <br /> - Having any previous criminal records
            <br /> - Involving in any kind of verbal or physical act of violence
            towards any person of the university
            <br /> - Involvement in any kind of sexual harassment against anyone
            (student/ staff) related to the university 
            <br /> - Adopting any unfair means in any examination.
          </p>
        </div>
      ),
    },
    {
      id: "degree-completion",
      title: "Degree Completion",
      content: (
        <div>
          <span className="font-bold">Degree Completion</span>
          <p className="pt-4 pb-8">
            Degree must be completed by a student within an equivalent period of
            maximum 12 semesters which is prescribed for each undergraduate
            degree program.
          </p>
        </div>
      ),
    },
    {
      id: "academic-scholarship-for-student",
      title: "Academic Scholarship for Student",
      content: (
        <div>
          <span className="font-bold">Academic Scholarship for Student</span>
          <p className="pt-4 pb-8">
            A regular student may apply for Academic Scholarship under the
            following circumstances:
            <br /> - Regular Academic load of at least 15 credits.
            <br /> - Academic result should be at least GPA 3.00 (B) in each
            course to be eligible for Semester based Academic Scholarship.
            <br /> - No F/ I /W /UW grade
            <br /> - No Semester dropping
            <br /> - No Disciplinary Action taken.
            <br /> - Waiver will be applicable only on tuition fees. 
            <br /> - No waiver will be allowed in case of Improvement, re-take &
            Orientation/ internship/research/project/dissertation/viva.
            <br /> - Students shall ensure at least 80% attendance in each
            course to be eligible for Semester based Academic Scholarship.
            <br /> - Students who are already enjoying waiver benefit in any
            category are not eligible for further waiver benefit.
            <br /> - The terms and condition of waiver and scholarship may be
            changed as per requirements.
            <br /> - The number of recipients may vary from time to time and the
            Award of Scholarship depends on the availability of slots. The
            decision to extend scholarship to any individual student remains at
            the complete discretion of the RPSU Administration.
          </p>
        </div>
      ),
    },
    {
      id: "renewal-of-grant",
      title: "Renewal of Grant",
      content: (
        <div>
          <span className="font-bold">Renewal of Grant</span>
          <p className="pt-4 pb-8">
            For renewal of grant an applicant
            <br /> - Must be a ‘Regular Full Time Student’
            <br /> - Must be enrolled in all Academic courses during the
            preceding and subsequent trimesters
            <br /> - Must not have any disciplinary record
            <br /> - Must have a CGPA of 3.75 or above with no F/I/W/UW grade,
            no dropping or retake of course(s)
            <br /> - Must have an attendance of more than 80% at all times.
          </p>
        </div>
      ),
    },
    {
      id: "academic-honors",
      title: "Academic Honors",
      content: (
        <div>
          <span className="font-bold">Academic Honors</span>
          <p className="pt-4 pb-8">
            For Academic Honor an applicant must satisfy the following criteria:
            <br /> - Be a ‘Regular Full Time Student’
            <br /> - No grade lower than ‘B+’
            <br /> - No F/I/W/UW grade, no dropping or retake of any course
            <br /> - GPA of SSC/ HSC or equivalent examination must be more than
            or equal to 4.00.
            <br /> - Minimum credit earned at RPSU must be more than 60%.
          </p>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    CGPA
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Honor
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Award
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    3.75 to 3.84
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Cum Laude
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bronze Medal
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    3.85 t0 3.94
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Magna Cum Laude
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Silver Medal
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    3.95 to 4.00
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Summa Cum Laude
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Gold Medal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "registration-and-payment",
      title: "Registration and Payment",
      content: (
        <div>
          <span className="font-bold">Registration and Payment</span>
          <p className="pt-4 pb-8">
            A student will go to their respective advisor to register their
            courses. Most of the full-time faculty members are academic advisors
            of students. The academic advisors are required to be present at the
            respective offices during the registration period. The financial
            guarantor/guardian of the student may visit the academic advisors to
            be informed about the academic performance of his/her ward. The
            academic advisors and faculty members would extend their help to the
            financial guarantor/guardian of the student concerned. Registration
            must be confirmed 15 days ahead of start of the classes. There is no
            scope of registration at late. A student has options to clear the
            dues by maximum 2(two) installments. 1st installment must be cleared
            within specified days of Registration Confirmation during admission
            / regular student. 2nd installment must be cleared 7 days ahead of
            1st midterm examinations. Without clearing dues, the students will
            not be given admit cards for the examination.
          </p>
        </div>
      ),
    },
    {
      id: "refund-policy",
      title: "Refund Policy",
      content: (
        <div>
          <span className="font-bold">Refund Policy</span>
          <p className="pt-4 pb-8">
            Adjustment of fees due to withdrawal of enrolment may be granted
            upon written request of either of the parents or the guarantor. Only
            tuition fees will be refunded. Admission and other fees will not be
            refundable. Tuition fees will be refunded to a student who withdraws
            from a semester after registration within 15 (fifteen) days. No
            refund after 15 days.
          </p>
        </div>
      ),
    },
    {
      id: "awards",
      title: "Awards",
      content: (
        <div>
          <span className="font-bold">Chancellor’s Award</span>
          <p className="pt-4 pb-8">
            Chancellor’s Award is given in recognition of the academic
            performance and is awarded to undergraduates who achieve the highest
            academic award (Summa Cum Laude), excellent academic background,
            with proper manners, character and participation in extracurricular
            activities. Only one is chosen in each program.
          </p>
          <span className="font-bold">Vice Chancellor’s Award</span>
          <p className="pt-4 pb-8">
            The Vice Chancellor’s Award is for the meritorious effort for the
            successful completion of:
            <br /> - Best ‘Thesis’ of Undergraduate program
            <br /> - Best ‘Design Project’ of Undergraduate program
            <br /> - Best ‘Internship Report’ of Undergraduate program
          </p>
          <span className="font-bold">Chairman’s Award</span>
          <p className="pt-4 pb-8">
            This award is given in recognition of the outstanding voluntary
            efforts, achievements, contributions and the exemplary performance
            of deserving students. Must be a Regular Full Time Student and with
            a minimum CGPA is 3.20.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Academics Information and Policies
        </div>
      </div>
      <div className="">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar with Tabs */}
            <div className="text-black flex flex-col items-center py-6 md:py-10 md:w-[300px]">
              <ul className="font-raleway font-bold text-footer_back text-[18px] text-left hidden md:block">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`py-3 md:py-4 cursor-pointer ${
                      activeTab === tab.id ? "text-btn_clr" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-full md:p-6">
              {/* Mobile View: Show all sections */}
              <div className="block md:hidden">
                {tabs.map((tab) => (
                  <section key={tab.id} className="mb-6">
                    <h2 className="text-[18px]  font-bold font-raleway text-gray-800">
                      {tab.title}
                    </h2>
                    <div className="mt-2 font-open_sans text-[14px]  text-gray-600">
                      {tab.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Desktop View: Show only the active tab */}
              <div className="hidden md:block">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <section key={tab.id}>
                        <div className="mt-2 font-open_sans text-[18px] text-gray-600">
                          {tab.content}
                        </div>
                      </section>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default academicInfo;
