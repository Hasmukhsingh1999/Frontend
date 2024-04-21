import React from 'react';

const Testimonial = () => {
  return (
    <div className="w-full min-h-[80vh] bg-white flex items-center justify-center pt-10 pb-10 md:px-24 px-5">
      <div className=" w-full min-h-full border-l divide-x-2 border-red-500 ">
        <div className="px-10 p-6">
          <h2 className="md:text-5xl text-2xl">
            "We are dedicated to nurturing artists along their creative
            journeys.
            <span className="italic text-red-500">
              {' '}
              Our platform serves as a springboard for artists
            </span>{' '}
            to exhibit their work, connect with art enthusiasts, and{' '}
            <span className="italic text-red-500">
              expand their reach to a wider audience
            </span>
            ."
          </h2>
          <p className="flex flex-col mt-10">
            {' '}
            <span className="font-semibold text-xl">Maren Kenter</span>
            <span>Founder of Art®</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
