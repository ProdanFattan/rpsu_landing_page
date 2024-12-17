import Image from "next/image";
export default function Collabrations() {
  return (
    <>
      <section className="bg-section_back px-4 md:px-16 lg:px-28 pt-6">
        <h1 className=" text-slateblue lg:text-5xl text-2xl flex justify-center items-center">
          Accrediatation & Collaboration
        </h1>
        <div className="flex justify-center items-center lg:py-14 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6">
          <div>
            <ul>
              <li className="flex items-center pl-6 pb-6">
                <img src="/rob.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                  Government of People's Republic of Bangladesh
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/ugc.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                University Grants Commission
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/kumudini.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Kumudini Hospital
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/kumudini.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Kumudini Pharma Limited
                </span>
              </li>
              <li className="flex items-center pl-6 pb-0">
                <img src="/kumudini.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Kumudini Handicrafts
                </span>
              </li>

            </ul>
          </div>
          <div className="lg:pl-14">
            <ul>
              <li className="flex items-center pl-6 pb-6">
                <img src="/Simmons.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Simmons University
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/Techno.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Techno India University
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/chengdu.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Chengdu Textile College
                </span>
              </li>
              <li className="flex items-center pl-6 pb-6">
                <img src="/pharma.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Bangladesh Pharmacy Council
                </span>
              </li>
              <li className="flex items-center pl-6 pb-8">
                <img src="/bar.png" alt="" className="lg:h-14 lg:w-14 h-10 w-10" />
                <span className="pl-2 text-xs md:text-xl">
                Bangladesh Bar Council
                </span>
              </li>

            </ul>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
