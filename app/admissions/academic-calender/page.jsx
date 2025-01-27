const Calender = () => {
  return (
    <>
      <div
        className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/rpsu.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center font-raleway font-bold md:text-7xl text-3xl">
          Academic Calender
        </div>
      </div>
      <div className="container mx-auto mb-24">
        {/* Undergraduate Tuition Fee Section */}
        <div className="mt-6 felx md:w-[1100px] justify-center mx-auto text-black rounded-[30px] w-full bg-back">
          <div className="md:py-8">
            <span className="font-raleway font-light md:text-[32px] text-[20px] md:pl-6 pl-3">
              Events of 2025
            </span>
            <button className="md:ml-[700px] bg-btn_clr md:w-[140px] md:h-[48px] w-[80px] h-[30px] rounded-[10px] text-white ml-40">
              <a href="/Events_of_2025.pdf" target="_blank" rel="noopener noreferrer">
                View
              </a>
            </button>
          </div>
        </div>

        {/* Add similar sections for Graduate Tuition Fee and Miscellaneous Fees */}
      </div>
    </>
  );
};

export default Calender;
