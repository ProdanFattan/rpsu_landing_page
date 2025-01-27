"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";

const UnfairMeansAndOthers = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("plagiarism");

  // Tabs configuration
  const tabs = [
    {
      id: "plagiarism",
      title: "Plagiarism",
      content: (
        <div>
          <span className="font-bold">Definition of Plagiarism</span>
          <p className="pt-4 pb-8">
            Plagiarism is presenting someone else’s work or ideas as your own,
            with or without their consent, by incorporating it into your work
            without full acknowledgement. 
          </p>
          <span className="font-bold">
            Plagiarism shall arise under the following circumstances: 
          </span>
          <p className="pt-4 pb-8">
            Plagiarism arises when someone fails to acknowledge that the ideas
            or work of others are being used without citing and referencing the
            original source, which includes: 
            <br />
            a. Paraphrasing and presenting the work or ideas of another
            (including the work of another student) as one’s own. This could
            involve:
            <br /> <span className="pl-4"></span>1. copying work either in whole
            or in part 
            <br /> <span className="pl-4"></span>2. fabricating references or
            using incorrect references 
            <br />
            b. Using statistics, figures, tables, diagrams. questionnaires,
            designs, computer codes or images as their own work (i.e., without
            crediting the original source) 
            <br />
            c. Phrases and passages are used verbatim without quotation marks
            and/or without a reference to the author or a web page 
            <br />
            d. Reproducing lecture notes without proper acknowledgement. 
          </p>
        </div>
      ),
    },
    {
      id: "unfair-means",
      title: "Unfair Means",
      content: (
        <div>
          <span className="font-bold">Definitions</span>
          <p className="pt-4 pb-8">
            a. Unfair Means” is an illegal act and indulge in disorderly conduct
            at or in connection with examinations by students. 
            <br />
            b. Candidate” means an examinee sitting in examination. 
            <br />
            c. Examination” means any examination, admission test, midterm,
            final, quizzes, assignments, dissertations or thesis practical,
            which are considered as part of assessment/evaluation by the
            instructor while awarding grades or pass in a subject.
            <br />
            d. Committee” means Disciplinary committee.
            <br />
            e. Student” means RPSU students or applicant for RPSU
          </p>
          <span className="font-bold">
            Unfair means shall include the following:
          </span>
          <p className="pt-4 pb-8">
            1. During examination time having any or all of the following in
            possession or access to-
            <br />
            <span className="pl-4">
              a. Any paper, book, note or any other unauthorized material which
              has relevance to the syllabus of the examination paper concerned.
            </span>
            <br />
            <span className="pl-4">
              b. Mobile Phones or any electronic gadget other than calculator,
              even in switched off mode, which can potentially be used for
              communication or copying.
            </span>
            <br />
            <span className="pl-4">
              c. Anything written on any other instrument or any kind of
              furniture or any other substance which may have relevance to the
              syllabus of the examination paper concerned.
            </span>
            <br />
            <span className="pl-4">
              d. Anything written or signs made on the body of the candidate or
              his/her clothes/garments, handkerchief etc. which may have
              relevance to the syllabus of the examination paper concerned.
            </span>
            <br />
            <span className="pl-4">
              e. Anything written on the question paper which may have relevance
              to the syllabus of the examination paper concerned.
            </span>
            <br />
            2. Giving or receiving assistance in answering the question papers
            to or from any other candidate/person in the examination hall or
            outside during the examination hours. 
            <br />
            3. Talking to another candidate or any unauthorized person inside or
            outside the examination room during the examination hours without
            the permission of the invigilating staff. 
            <br />
            4. Swallowing or attempting to swallow or destroying or attempting
            to destroy a note or paper or any other material. 
            <br />
            5. Impersonating any candidate or getting impersonated by any person
            for taking the examination. 
          </p>
        </div>
      ),
    },
    {
      id: "exam-rules",
      title: "Exam Rules",
      content: (
        <div>
          <span className="font-bold">Examination Hall Rules </span>
          <p className="pt-4 pb-8">
            1. Students must bring with them both their Identity Card and the
            valid Admit Card when entering the examination hall. Without these,
            students will not be allowed to sit for the examination.
            <br />
            2. Students will be allowed to the Examination Hall/Room 15 minutes
            before the commencement of an examination. The seating position will
            be allocated and students are required to comply with instructions
            given by the invigilators. 
            <br />
            3. No communication between students is allowed once the students
            enter the Examination Hall/Room.
            <br />
            4. Students may place their bags and belongings (including mobile
            phones and wallets) in the area designated by the invigilator
            (usually in the front of the Examination Hall/Room). No belongings
            should be left outside the Examination Hall/Room. 
            <br />
            5. Students will be allowed into the Examination Hall/Room up to one
            (1) hour after the start of the final examination and half (½) an
            hour of the midterm examination. No extra time will be given to
            latecomers for any reason. 
            <br />
            6. Students who arrive after 1 Hours of the appointed /published
            time will not be allowed to enter the examination hall. 
            <br />
            7. Mobile phone, books, sheets of paper, handouts, notes, correction
            fluid, programmable calculators or those with storage capabilities,
            etc. cannot be carried into the examination hall. 
            <br />
            8. During examination students can use simple or scientific
            calculator except programmable calculators or those with text,
            symbolic or graphic capabilities.
            <br />
            9. Each student should bring his/her own writing stationery as
            students are not allowed to share their stationery. 
            <br />
            10. Students can, if necessary, use a transparent pencil box/pouch
            to carry pencils, pens, erasers or any other geometrical
            instruments.
            <br />
            11. Students who are not in proper attire will not be allowed to
            attend the examination 
            <br />
            12. As the invigilator collects the dockets, the invigilator will
            request each student to initial against their names on the Student
            Exam Attendance Sheet. 
            <br />
            13. Students are not allowed to leave the Examination Hall/Room for
            going to the washroom during the first hour and the final half an
            hour before the end of the examination. Students who need to go to
            the washroom must obtain the permission from the invigilator on duty
            and only one student at a time is permitted to go to the washroom.
            Students are not allowed to carry any writing materials and personal
            belonging including mobile phone and wallet to the washroom. 
            <br />
            14. Students are allowed to leave if they finish early, but not
            during the first one (1) hour of the Final examination and half (½)
            an hour of the midterm examination. 
            <br />
            15. When the invigilator announces that time is up (based on the
            clock in the examination   hall), no further work by the student is
            permitted. 
            <br />
            16. Students must fill-in the relevant details on the front cover of
            the Examination Answer Booklets, and tie any additional answer
            sheets (used to write answers on) to the Examination Answer
            Booklets. Students must fill in their docket numbers, title of
            examination and question numbers clearly on the Examination Answer
            Booklets and additional answer sheets. 
            <br />
            17. Students must remain in their seats until the invigilator has
            completely collected all the examination material. Students may
            leave the Examination Hall/Room quietly when instructed by the
            invigilator.
            <br />
            18. At the end of the examination, the invigilators will collect the
            Examination Answer Scripts, Question Papers and all used and unused
            papers. Examinees will not be allowed to remove or taken with any
            type of exam related papers from the exam hall until they are
            allowed to leave while invigilators complete collecting all the
            Answer Scripts and Question Papers. 
          </p>
        </div>
      ),
    },
    {
      id: "disciplinary-action",
      title: "Disciplinary Action",
      content: (
        <div>
          <span className="font-bold">DISCIPLINARY PROCEEDINGS</span>
          <p className="font-bold pt-8">Disciplinary Committee</p>
          <p className="pt-4 pb-8">
            Composition and Accountability of Committee: According to the
            Private University Act 2010 under section -28.
          </p>
          <span className="font-bold">Rules of Procedure at Meetings</span>
          <p className="pt-4 pb-8">
            The Committee Chairman shall run meetings in his/her discretion,
            with reference to the following principles:
            <br />
            a. The Chairman will prepare and circulate an agenda in advance of
            each meeting. 
            <br />
            b.Committee decisions will be arrived at among those present at the
            meeting.  
            <br />
            c. Committee will keep record of meetings and relevant documents.
            <br />
            d. All such cases shall be reported to the Academic Council through
            Vice chancellor in its subsequent meeting.
          </p>
          <span className="font-bold">Consequences of Plagiarism</span>
          <p className="pt-4 pb-8">
            Plagiarism is a serious academic offence. If students caught
            plagiarizing may face either academic or disciplinary consequences
            like unfair means.  If found guilty of plagiarism, it may result in
            the following: 
            <br />
            a. A failing grade of an assignment or course 
            <br />
            b. Suspension from the university for a period of time
            <br />
            c. Permanent expulsion from the university
            <br />
            d. Any other punishment deems suitable by the committee.
          </p>
          <span className="font-bold">Norms of Punishment</span>
          <p className="pt-4 pb-8">
            If students caught unfair means and break any examinations rules,
            any punishments may be awarded according to the gravity of the
            offence as think fit by the Committee. Implementation of punishments
            related to unfair means and serious examination offences during
            exams as decided by the Disciplinary Committee should be
            expeditiously carried out. Jurisdictions for various levels are
            determined for different levels of offences during examinations.
          </p>
          <span className="font-bold">
            Standardization in punishments will be made as detailed below:
          </span>
          <p className="pt-4 pb-8">
            I. Level 1 to be implemented by the invigilator,
            <br />
            II. Decisions, on Levels 2 and 3 can only be taken by the
            Disciplinary Committee on report of invigilator.
          </p>
          <span className="font-bold">
            Examination Offences and Disciplinary Actions
          </span>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Levels
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Offences
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Disciplinary Action
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Authority
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Level-1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1. Communication with one another (whispering / talking,
                    glancing / looking / staring / responding to others'
                    whispers and assisting others in looking at answer script)
                    <br />
                    2. Talking while outside the examination hall/room when
                    allowed to go to washroom
                    <br />
                    3. Exchanging of personal items like calculators etc.
                    without the permission of the invigilator
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Verbal warning, change of positions
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Invigilator
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Level-2</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1. Possession of examination-related matters including
                    various devices meant for resorting to unfair means
                    <br />
                    2. Writing on any other place other than the answer script
                    provided
                    <br />
                    3. Using mobile phones / electronic devices with the
                    intention of unfair means
                    <br />
                    4. Substituting or addition to answer script without lawful
                    authority
                    <br />
                    5. Exchanging answer scripts during examination
                    <br />
                    6. Replacing the cover or any page of the answer script
                    <br />
                    7. Replacing answer script with other scripts not
                    distributed for the exam (e.g. prepared at home / in class)
                    <br />
                    8. Smuggling of script into or out of the examination
                    hall/room
                    <br />
                    9. Creating obstruction or disturbance inside the
                    examination hall/room
                    <br />
                    10. Any unfair means done by students
                    <br />
                    11. Any examinations rules break by students
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    1. Cancellation of the concerned examination / ("F" grade
                    shall be given)
                    <br />
                    2. Suspension for the next trimester/semester
                    <br />
                    3. Not allowed to use any facility of the university during
                    this time or
                    <br />
                    4. Expulsion from the University
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Disciplinary Committee
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Level-3</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1. Assault or attempt to assault the invigilator or anyone
                    in the examination hall/room
                    <br />
                    2. Using abusive language, or holding threats to the
                    invigilator(s) or any person in the examination hall/room
                    <br />
                    3. Impersonation at the examination
                    <br />
                    4. Damaging furniture / equipment etc. in the examination
                    hall/room/university premises or trying to set fire on such
                    valuables in the examination hall/room/university premises
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Expulsion from the University
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Disciplinary Committee
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
          Policy On Plagiarism, Unfair Means, Exam Rules & Disciplinary Action
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
                    <h2 className="text-[18px] font-bold font-raleway text-gray-800">
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

export default UnfairMeansAndOthers;
