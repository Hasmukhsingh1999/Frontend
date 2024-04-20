import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen text-primary flex items-center md:px-24 px-5 mt-16">
      <div>
        <h1 className="md:text-7xl text-5xl font-neue-medium">
          The Space — Where We <br /> Passionately{' '}
          <span className="italic font-serif">
            Connect Artists
            <br /> <span className="font-neue-medium not-italic">And</span>{' '}
            Enthusiasts
          </span>
        </h1>
        <p className="mt-10 md:text-4xl text-2xl md:w-3/4">
          A devoted online platform that reveres the magnificence and influence
          of art.{' '}
          <span className="text-red-500 font-serif italic">
            Our profound passion lies in uniting artists with art enthusiasts,
            cultivating
          </span>{' '}
          a thriving community, and highlighting{' '}
          <span className="text-red-500 font-serif italic">exceptional</span>{' '}
          expressions of creativity globally.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
