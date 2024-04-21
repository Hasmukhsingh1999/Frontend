import React from 'react';

const CTA = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center text-primary md:px-24 px-5 pb-20 mt-10 pt-20">
      <div className="text-center w-full container flex flex-col justify-center items-center">
        <h1 className="md:text-7xl text-5xl z-20">
          Indulge in a{' '}
          <span className="italic font-serif text-red-600">
            realm of artistic inspiration
          </span>
          . Embark on a captivating exploration of our gallery, immerse in its
          beauty.{' '}
          <span className="italic font-serif text-red-600">
            Start your journey now.
          </span>
        </h1>
        <div className="md:w-[12vw] md:h-[12vw] w-[30vw] h-[30vw] bg-white rounded-full flex items-center justify-center ">
          <h4 className="text-black md:text-xl text-lg">Start Now</h4>
        </div>
      </div>
    </div>
  );
};

export default CTA;
