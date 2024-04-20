import AboutUs from '@/components/about';
import ArtCollection from '@/components/art-collection';
import Landing from '@/components/landing';
import React from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  // const locomotive = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Landing />
      <AboutUs />
      <ArtCollection />
      <div className='h-screen w-full'></div>
    </div>
  );
};

export default page;
