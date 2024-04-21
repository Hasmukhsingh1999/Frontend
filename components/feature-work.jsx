'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FeaturesWork = () => {
  return (
    <div className="w-full min-h-screen text-primary ">
      <div className="flex flex-col items-center justify-center gap-9 pt-32 md:px-24 px-5">
        <h1 className="text-center  md:text-6xl text-3xl">
          <span className="italic font-serif">Featured</span>{' '}
          <span className="font-neue-medium">Work</span>
        </h1>
        <div>
          <img src="https://assets-global.website-files.com/64a466f88f23f57bfdd487cd/64a676c639b7be36f1e9fb62_arrow%20icon.svg" />
        </div>
        <div className="md:w-2/6 w-full text-center">
          <p className="text-xl">
            At the core of our efforts lies a profound reverence for the
            transformative influence of art. We ardently dedicate ourselves to
            curating extraordinary collections and fostering profound
            connections.
          </p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

const Projects = () => {
  // const projectRefs = useRef([]);
  // const handleOver = (index, isHovering) => {
  //   gsap.to(projectRefs.current[index], {
  //     duration: 0.5,
  //     width: isHovering ? '100%' : 'auto',
  //     ease: 'power3.inOut',
  //   });
  // };
  return (
    <div className="w-full mt-12 pb-20">
      <div className="w-full h-[60vh] relative">
        <div
          className="absolute w-0 h-full bg-red-600"
          // ref={(element) => (projectRefs.current[0] = element)}
          // onMouseEnter={() => handleOver(0, true)}
          // onMouseLeave={() => handleOver(0, false)}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[60vh] relative">
        <div className="absolute w-0 h-full bg-red-600"></div>

        <img
          src="https://images.unsplash.com/photo-1530615881343-afb282da8b17?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[60vh] relative">
        <div className="absolute w-0 h-full bg-red-600"></div>

        <img
          src="https://images.unsplash.com/photo-1536241455566-5709c3aefd3d?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full text-center mt-10 md:px-24 px-5">
        <button className="border-red-500 border rounded-full p-6 w-full text-2xl">
          View All Collection
        </button>
      </div>
    </div>
  );
};

export default FeaturesWork;
