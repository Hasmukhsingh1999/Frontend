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

  const navbarClasses = `z-[999] h-[122px] flex justify-between items-center px-24 fixed w-full ${
    isScrolled
      ? 'transform translate-y-[-100%] transition-all duration-300'
      : ''
  }`;

  return (
    <div className={navbarClasses}>
      <h1>
        <span className="font-neue-medium uppercase text-xl">Art</span>
      </h1>
      <div>
        <span className="uppercase text-xl">menu</span>
      </div>
    </div>
  );
};

export default Navbar;
