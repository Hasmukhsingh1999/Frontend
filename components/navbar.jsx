'use client';
import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const navbarClasses = `z-[99999] pt-[20px] pb-[20px] flex justify-between items-center lg:px-24 px-5 fixed w-full cursor-pointer `;

  return (
    <div className={navbarClasses}>
      <div className=" w-full grid lg:grid-cols-4 grid-cols-2 text-primary items-center ">
        <h1 className="col-span-1">
          <span className=" capitalize text-5xl  font-base-boom">A/S</span>
        </h1>
        <nav className="  pt-[12px] pb-[12px] rounded-full col-span-2  justify-center items-center relative overflow-hidden lg:flex hidden">
          <div
            className="absolute w-full h-full"
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: ' rgba(0, 0, 0, .3)',
            }}
          ></div>
          <div className="flex items-center justify-evenly w-full z-30">
            {['Shop', 'Collections', 'Explore', 'FAQs'].map(
              (navLinks, index) => (
                <span
                  key={index}
                  className=" font-grotesk-mono text-sm font-thin uppercase"
                >
                  {navLinks}
                </span>
              ),
            )}
          </div>
        </nav>
        <div className="col-span-1 text-end lg:flex hidden justify-end gap-7">
          <span className="pt-[12px] pb-[12px] rounded-full col-span-2  justify-center items-center relative  font-grotesk-mono">
            Login
          </span>
          <span className="pt-[12px] pb-[12px] rounded-full col-span-2  justify-center items-center relative  font-grotesk-mono">
            Bag/0
          </span>
          <span className="pt-[12px] pb-[12px] rounded-full col-span-2  justify-center items-center relative  font-grotesk-mono">
            Menu
          </span>
        </div>
        <div className="flex justify-end lg:hidden">
          <img src="https://assets-global.website-files.com/64a466f88f23f57bfdd487cd/64a548260e5452010820025a_menu%20btn%20white%20svg.svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
