import React from 'react';

const Landing = () => {
  return (
    <div className="w-full h-screen  relative">
        <div className="absolute w-full h-full background-overlay " style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(233, 0, 38, 0.3), black)',
      }}></div>
      <video
        src="https://assets-global.website-files.com/64a466f88f23f57bfdd487cd/64a57bf0ef680a13e9340f22_banner%20video%20background-transcode.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Landing;
