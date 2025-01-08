// components/Banner.js
export default function Banner() {
    return (
      <div className="relative md:h-screen md:bg-cover h-[290px] bg-cover bg-center" style={{ backgroundImage: "url('/banner.webp')" }}>
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full px-4 text-center">
          <h1 className="text-2xl lg:text-[64px] font-bold text-white lg:mb-10 lg:pl-2 font-montserrat">
            Admission
          </h1>
          <p className="text-white text-3xl lg:text-[96px] lg:mb-14 font-notable">
            SPRING
          </p>
          <p className="text-white text-3xl lg:text-[96px] lg:mb-8 lg:pb-6 font-Poiret">
            2025
          </p>
          
          <a href="#explore">
            <button className="lg:w-[190px] lg:h-[62px] hover:bg-btn_clr rounded-[50px] bg-white backdrop-blur-lg bg-opacity-30 text-white lg:text-[20px] w-[80px] h-6 text-[10px]">Apply now</button>
            
          </a>
        </div>
      </div>
    );
  }
  