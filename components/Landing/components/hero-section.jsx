'use client';
import { useRef } from 'react';
import Collection from './collection';

const Hero = ({ data }) => {
  const boxRef = useRef();
  data.ref = boxRef;

  return (
    <div className="absolute w-full h-0 z-30 bottom-0" ref={boxRef}>
      <img src={data.imgUrl} alt="" className="w-full h-full object-cover" />
      <div className="w-full h-[40vh] absolute left-0 right-0 top-[60%] flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 text-primary font-times-now-semilight text-center lg:text-5xl text-4xl uppercase">
          <span>{data.title}:</span>
          <span className="font-times-now-semilight italic">
            {data.subtitle}
          </span>
        </div>
        <Collection />
      </div>
    </div>
  );
};
export default Hero;
