'use client';
import React from 'react';

import { Card } from 'antd';
const { Meta } = Card;

const NewArrivals = () => {
  return (
    <div className="lg:px-24 px-5 pt-20 min-h-screen">
      <div>
        <h1 className="text-3xl font-grotesk-mono uppercase">New Arrivals</h1>
      </div>
      <div className="mt-10 grid lg:grid-cols-5 grid-cols-1 gap-5">
        <>
          <Card
            className="lg:w-[240px] w-full "
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="lg:w-[240px] w-full"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </>
      </div>
    </div>
  );
};

export default NewArrivals;
