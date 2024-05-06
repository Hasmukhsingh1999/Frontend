'use client';
import React from 'react';
import Landing from '@/components/Landing';
import NewArrivals from '@/components/new-arrivals';

// import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  // const locomotive = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Landing />
      <NewArrivals />
    </div>
  );
};

export default page;
