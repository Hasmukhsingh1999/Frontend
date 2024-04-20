'use client';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `z-[999] pt-[20px] pb-[20px] flex justify-between items-center md:px-24 px-5 fixed w-full ${
    isScrolled
      ? 'transform translate-y-[-100%] transition-all duration-300'
      : ''
  }`;

  return (
    <div className={navbarClasses}>
      <div className="md:px-[15px] w-full grid md:grid-cols-4 grid-cols-2 text-primary items-center ">
        <h1 className="col-span-1">
          <span className="font-neue-medium capitalize text-2xl">
            sketch fab
          </span>
        </h1>
        <nav className="border border-zinc-400 pt-[12px] pb-[12px] rounded-full col-span-2  justify-center items-center relative overflow-hidden md:flex hidden">
          <div
            className="absolute w-full h-full"
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: ' rgba(0, 0, 0, .3)',
            }}
          ></div>
          <div className="flex items-center gap-10 z-30">
            {[
              'Demos',
              'About Us',
              'Collections',
              'Artists',
              'News',
              'All Pages',
            ].map((navLinks, index) => (
              <span key={index} className="text-lg">
                {navLinks}
              </span>
            ))}
          </div>
        </nav>
        <div className="col-span-1 text-end md:flex hidden justify-end">
          <span className=" pt-[10px] pb-[12px] px-10 rounded-full  text-xl hover:bg-white hover:text-black ease-linear transition duration-75 bg-[#FFFFFF33]">
            Contact
          </span>
        </div>
        <div className="flex justify-end md:hidden">
          <img src="https://assets-global.website-files.com/64a466f88f23f57bfdd487cd/64a548260e5452010820025a_menu%20btn%20white%20svg.svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
