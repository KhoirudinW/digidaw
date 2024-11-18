// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[440px] flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/path/to/banner-image.jpg')" }}>
      <div className="flex justify-between w-[60%] space-x-4 mt-4">
        <h1 className="text-7xl w-1/2 font-bold text-white text-start my-auto">Game Offline Online Terbaik</h1>
        <img src="/assets/karakter.png" alt="Character 1" className="h-[420px]" />
      </div>
    </div>
  );
};

export default Banner;
