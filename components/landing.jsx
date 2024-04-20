import React from 'react';

const Landing = () => {
  return (
    <div className="w-full h-screen  relative">
      <div className="absolute w-full h-full flex items-center justify-center text-primary z-20 flex-col ">
        <h1 className="grid grid-cols-1 justify-center items-center md:text-[6vw] text-5xl font-medium font-neue-medium leading-[.99] md:mt-44 mt-12">
          <span className=" text-center">Plunge into a Captivating</span>{' '}
          <span className="font-sans italic text-center">
            Gallery Experience
          </span>
        </h1>
        <p className="text-lg  text-center font-neue-light pt-10">
          Discover the extraordinary abilities and creative manifestations of
          both established and up-and-coming artists hailing from various
          corners of the world.
        </p>
        <div className="mt-10 flex md:flex-row flex-col md:gap-6 gap-4">
          <button className="md:w-[15vw]  md:p-6 px-12 py-4 bg-white text-black rounded-full font-semibold text-xl hover:border-white hover:border hover:bg-transparent hover:text-white">
            Discover Art
          </button>
          <button className="md:p-6 md:w-[15vw] px-12 py-4 border-white border hover:bg-white hover:text-black  text-white rounded-full font-semibold text-xl">
            Contact Us
          </button>
        </div>
      </div>
      <div
        className="absolute w-full h-full background-overlay "
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(233, 0, 38, 0.3), black)',
        }}
      ></div>
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
