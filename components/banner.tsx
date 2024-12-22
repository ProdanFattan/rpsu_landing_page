// components/Banner.js
export default function Banner() {
    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/banner.webp')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R. P. Shaha University
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Explore Our Programs and Join the Journey of Excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="px-4 py-2 bg-white text-purple-800 font-semibold rounded-lg hover:bg-purple-100">
              Pharmacy
            </button>
            <button className="px-4 py-2 bg-white text-purple-800 font-semibold rounded-lg hover:bg-purple-100">
              Law & Human Rights
            </button>
            <button className="px-4 py-2 bg-white text-purple-800 font-semibold rounded-lg hover:bg-purple-100">
              Engineering
            </button>
            <button className="px-4 py-2 bg-white text-purple-800 font-semibold rounded-lg hover:bg-purple-100">
              Fashion & Design
            </button>
          </div>
          <a href="#explore" className="mt-8 text-white underline hover:text-purple-200">
            Explore More
          </a>
        </div>
      </div>
    );
  }
  