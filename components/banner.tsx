// components/Banner.js
export default function Banner() {
    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/banner.webp')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full px-4 text-center">
          <h1 className="text-2xl md:text-[64px] font-bold text-white md:mb-14 md:pl-2">
            Admission
          </h1>
          <p className="text-white text-3xl md:text-[96px] md:mb-14">
            SPRING
          </p>
          <p className="text-white text-3xl md:text-[96px] mb-2 pl-6 md:pl-16">
            2025
          </p>
          
          <a href="#explore" className="mt-8 text-white underline hover:text-purple-200">
            Explore More
          </a>
        </div>
      </div>
    );
  }
  