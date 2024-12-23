export default function FounderSection() {
    return (
      <div className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-video_hover flex flex-col items-start justify-center text-white text-center transition-opacity duration-500 opacity-0 hover:opacity-35 px-6 ">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 px-28">Our Founder</h1>
          <h2 className="text-xl lg:text-3xl mb-6 pl-28">
            Rai Bahadur Ranada Prasad Shaha
          </h2>
          <p className="text-sm lg:text-lg text-start mb-8 px-28">
            Rai Bahadur Ranada Prasad Shaha as a true son of this soil, a man
            extraordinaire, whose life's work and achievements are beyond
            comparison. Not only did he sacrifice his life for his beloved
            country but his legacy - Kumudini Welfare Trust of Bengal (KWT) -
            stands as the highest form of philanthropy. The Trust was founded in
            June 1947 with the mission of providing exclusive service to the
            suffering humanity.
          </p>
          <div className="px-28">
          <button className="px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200">
            See more
          </button>
          </div>
        </div>
      </div>
    );
  }
  