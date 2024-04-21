"use client"
import AboutUs from '@/components/about';
import ArtCollection from '@/components/art-collection';
import Articles from '@/components/articles';
import CTA from '@/components/cta';
import FeaturesWork from '@/components/feature-work';
import Footer from '@/components/footer';
import Landing from '@/components/landing';
import Testimonial from '@/components/testimonial';
import React from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  // const locomotive = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Landing />
      <AboutUs />
      <ArtCollection />
      <Testimonial />
      <FeaturesWork />
      <Articles />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
