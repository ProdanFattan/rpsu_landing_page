import Footer from "@/components/footer";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="md:pt-32 pt-6">
        <div className="bg-section_back rounded-lg container mx-auto px-4 py-6 md:py-10">
       <div className="h-[280px] xl:h-[700px] md:h-[450px] w-full">
       <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full object-cover pt-16 md:pt-0"
        >
          <source src="/founder_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       </div>
       <p className="text-black">hello</p>
        
        </div>
      </div>
      <Footer />

    </>
  );
};

export default ProfilePage;
