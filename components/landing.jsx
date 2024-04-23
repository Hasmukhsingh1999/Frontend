import React from 'react';

const Landing = () => {
  return (
    <div className="w-full h-full  relative grid md:grid-cols-2 grid-cols-1">
      <div className="w-full h-[100vh] relative">
        <div className="absolute w-full h-full bg-black opacity-30 "></div>
        <div className="absolute w-full h-full  z-10 flex items-center justify-center flex-col text-primary">
          <h1 className="md:text-7xl text-5xl">Wedding</h1>
          <p className='md:px-24 px-5 text-center'>
            We are dedicated to curating a wide range of high-quality, stylish
            products
          </p>
          <div className="mt-6">
            <button className="p-5 border border-zinc-100 rounded-full">
              Shop now
            </button>
          </div>
        </div>

        <img
          src="https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d39d8da4f2744fa9134b0_image%20872-p-800.jpg"
          alt=""
          srcset=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[100vh] relative">
        <div className="absolute w-full h-full bg-black opacity-30"></div>
        <div className="absolute w-full h-full  z-10 flex items-center justify-center flex-col text-primary">
          <h1 className="md:text-7xl text-5xl">New Arrivals</h1>
          <p className='md:px-24 px-5 text-center'>
            We are dedicated to curating a wide range of high-quality, stylish
            products
          </p>
          <div className="mt-6">
            <button className="p-5 border border-zinc-100 rounded-full">
              Shop now
            </button>
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645e27a2a712b0144adc27fa_image%20860-p-800.jpg"
          alt=""
          srcset=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
