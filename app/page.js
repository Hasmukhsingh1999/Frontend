import AboutUs from '@/components/about';
import Landing from '@/components/landing';
import React from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  // const locomotive = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Landing />
      <AboutUs />
    </div>
  );
};

export default page;
