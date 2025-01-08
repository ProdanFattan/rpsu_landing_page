export default function FounderSection() {
    return (
      <div className="relative w-[430px] h-[248px] md:w-full md:h-screen overflow-hidden lg:mt-10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-video_hover flex flex-col items-start justify-center text-white text-center transition-opacity duration-500 opacity-0 hover:opacity-100 px-6 ">
          <h1 className="text-[20px] lg:text-5xl mt-10 md:mb-4 md:px-28 font-raleway">Our Founder</h1>
          <h2 className="text-[11px] lg:text-3xl md:mb-6 md:pl-28 font-raleway">
            Rai Bahadur Ranada Prasad Shaha
          </h2>
          <p className="text-[8px] lg:text-lg text-start md:mb-8 md:px-28 font-open_sans mr-8 md:mr-0">
            Rai Bahadur Ranada Prasad Shaha as a true son of this soil, a man
            extraordinaire, whose life's work and achievements are beyond
            comparison. Not only did he sacrifice his life for his beloved
            country but his legacy - Kumudini Welfare Trust of Bengal (KWT) -
            stands as the highest form of philanthropy. The Trust was founded in
            June 1947 with the mission of providing exclusive service to the
            suffering humanity.
          </p>
          <div className="md:px-28">
          <button className="md:px-6 md:py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 w-[81px] h-[22px] text-[10px] md:w-[181px] md:h-[51px] md:text-[16px]">
            <a href="/about/founder">See more</a>
          </button>
          </div>
        </div>
      </div>
    );
  }
  