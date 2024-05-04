'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from './components/hero-section';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const main = useRef();
  const boxes = [
    {
      imgUrl:
        'https://image.lexica.art/full_webp/3320fd79-7a83-4957-9313-ef58aa51a1c7',
      title: 'Radiant Beginnings',
      subtitle: 'Welcome to Blissville',
    },
    {
      imgUrl:
        'https://image.lexica.art/full_webp/4afe9cce-4467-461e-9bec-3fe258996fef',
      title: 'Exploring the Enchanting',
      subtitle: 'Lands Between',
    },
  ];

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          pin: true,
          scrub: 1,
          markers: true,
        },
      });

      boxes.forEach((box, index) => {
        tl.to(box.ref.current, {
          height: '100%',
          stagger: 4.5,
          delay: index === 1 ? 1 : 0, // Adding delay for the second box
          ease: 'circ.out',
        });
      });
    },
    { scope: main },
  );

  return (
    <div className="w-full h-[100vh] relative overflow-hidden" ref={main}>
      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <img
          src="https://image.lexica.art/full_webp/1bb1821d-6412-4ae9-9041-842e7d09fd3a"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="text-primary font-times-now-semilight lg:text-5xl text-4xl uppercase z-20 absolute bottom-0 pb-36 text-center">
          Into the Night: <br />{' '}
          <span className="font-times-now-semilight italic">Chapter 1</span>
        </div>
      </div>
      {boxes.map((box, index) => (
        <Hero key={index} data={box} />
      ))}
    </div>
  );
};

export default Landing;
