import React from 'react';
import { Card } from 'antd';


const Categories = () => {


  return (
    <div className="w-full min-h-screen text-black  md:px-24 px-5 mt-28">
      <div className="w-full flex justify-between  flex-row md:flex-col">
        <h1 className="font-neue-regular md:text-4xl text-2xl">
          Explored by Categories
        </h1>
        <div className="flex items-center gap-4">
          <p className="">VIEW MORE</p>
          <span>
            <img
              src="https://assets-global.website-files.com/645a69e5ff9a553155774bec/645cc2d6c44939979db7e577_right-arrow-medium.svg"
              alt=""
              srcset=""
            />
          </span>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

const CategoryCard = () => {
  return (
    <div>
      <Card className="md:w-[300px] w-full md:h-[140px] h-[200px] overflow-hidden relative">
        <div className="absolute w-full h-full bg-black opacity-25"></div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="flex gap-4 items-center text-white">
            Women's Clothing{' '}
            <span>
              {' '}
              <img
                src="https://assets-global.website-files.com/645a69e5ff9a553155774bec/6464e2bad7cb911c0fdc093a_right-arrow-medium-w.svg"
                alt=""
                srcset=""
                className=""
              />
            </span>
          </h1>
        </div>
        <img
          src="https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645e27caa48dd0809eeaaebb_image%20862-p-800.jpg"
          className="w-full h-full object-contain"
        />
      </Card>
    </div>
  );
};

export default Categories;
