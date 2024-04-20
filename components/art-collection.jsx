import React from 'react';

const ArtCollection = () => {
  return (
    <div className="w-full   text-primary md:px-24 px-5 mt-16">
      <div className="w-full h-[80vh] flex md:flex-row flex-col gap-5">
        <div className="md:w-1/2 w-full flex  flex-col justify-between">
          <div>
            <p className="text-4xl md:w-4/6  w-full">
              Through our artist profiles, we provide a glimpse into the sources
              of inspiration of these gifted individuals.
            </p>
            <p className="mt-10 md:w-4/5 w-full text-xl">
              Embark on a journey through their portfolios, where you will
              encounter a captivating array of artworks, each infused with their
              distinct vision.
            </p>
          </div>
          <div>
            <button className="p-6  md:w-4/6 w-full border-red-500 border rounded-full mt-5">
              Discover Art Collection
            </button>
          </div>
        </div>
        <div className="md:w-1/2 h-full flex  justify-start">
          <video
            src="https://assets-global.website-files.com/64a466f88f23f57bfdd487cd/64a670d2d2e8cb8b1bb3974d_art%20video%20-transcode.mp4"
            autoPlay
            muted
            loop
            className="md:w-3/4  w-full   h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ArtCollection;
