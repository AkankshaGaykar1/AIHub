import React from 'react';

const VideoBackground = ({ videoUrl, fallbackColor = 'bg-slate-50', overlayOpacity = 0.6 }) => {
  return (
    <>
      <div className={`absolute inset-0 w-full h-full ${fallbackColor} -z-20 overflow-hidden`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Dark overlay to ensure text readability */}
      <div
        className="absolute inset-0 w-full h-full bg-slate-50 -z-10"
        style={{ opacity: overlayOpacity }}
      />
    </>
  );
};

export default VideoBackground;
