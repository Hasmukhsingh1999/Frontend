import React from 'react';

const Articles = () => {
  return (
    <div className="w-full min-h-screen text-primary md:px-24 px-5">
      <h1 className="w-full text-center pt-32 text-6xl">
        <span className="font-neue-medium">Latest</span>{' '}
        <span className="italic font-serif">Articles</span>
      </h1>
      <ArticlesCards />
      <ArticlesCards />
      <ArticlesCards />
      <ArticlesCards />
    </div>
  );
};

const ArticlesCards = () => {
  return (
    <div className="w-full h-full  grid md:grid-cols-2 grid-cols-1  mt-5 pb-20 pt-10 border-b-zinc-600 border-b md:gap-0 gap-7 ">
      <div className="col-span-1">
        <div className="flex flex-col gap-5">
          <h1 className="md:text-4xl text-3xl">
            Delving into the Influence of Color: Unleashing Emotions on Canvas
          </h1>

          <p className="md:w-[35vw] w-full text-lg">
            Plunge into the profound significance of color in art and its
            remarkable capacity to evoke diverse emotions and moods.
          </p>
        </div>
        <div className="flex gap-5 mt-14">
          <button className="pt-3 pb-3 px-6 rounded-full border border-red-500">
            Design
          </button>
          <button className="pt-3 pb-3 px-6 rounded-full border border-red-500">
            Guide
          </button>
        </div>
      </div>
      <div className="col-span-1 ">
        <img
          src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[35vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Articles;
