import React from 'react';

const Video: React.FC = () => {
    return (
        <div className="h-[280px] md:h-screen w-full md:mb-8">
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
    );
};

export default Video;