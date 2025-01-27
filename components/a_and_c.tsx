import Image from "next/image";

export default function Collaborations() {
  return (
    <>
      <section className="container mx-auto bg-section_back px-4 md:px-16 lg:px-28 pt-16 font-open_sans">
        <h1 className="text-slateblue lg:text-5xl text-2xl flex justify-center items-center font-raleway">
          Accreditation & Collaboration
        </h1>
        <div className="flex justify-center items-center lg:py-14 py-8 font-raleway">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6">
            <div>
              <ul>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://www.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/rob.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Government of People's Republic of Bangladesh
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://ugc.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/ugc.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      University Grants Commission
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://kumudinihospital.org.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/kumudini.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Kumudini Hospital
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://kumudinipharma.com.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/kumudini.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Kumudini Pharma Limited
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-0">
                  <a
                    href="https://ekumudini.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/kumudini.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Kumudini Handicrafts
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:pl-14">
              <ul>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://www.simmons.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/Simmons.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Simmons University
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://technoindiauniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/Techno.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Techno India University
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://en.cdtc.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/chengdu.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Chengdu Textile College
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-6">
                  <a
                    href="https://pcb.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/pharma.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Bangladesh Pharmacy Council
                    </span>
                  </a>
                </li>
                <li className="flex items-center pl-6 pb-8">
                  <a
                    href="https://www.barcouncil.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img
                      src="/bar.png"
                      alt=""
                      className="lg:h-14 lg:w-14 h-10 w-10"
                    />
                    <span className="pl-2 text-xs md:text-xl text-black">
                      Bangladesh Bar Council
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
