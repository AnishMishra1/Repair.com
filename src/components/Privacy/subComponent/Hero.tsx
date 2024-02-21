import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="h-[200px] bg-green-800">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px]  bg-black/40 flex flex-col items-center justify-center">
            <h1 className="px-4  text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ">
              Privacy & <span className="text-orange-500 ">Policy</span>
            </h1>
            <h1 className="px-4 mt-4 text-center text-1xl sm:text-1xl md:text-2xl lg:text-2xl font-serif">
              Join us at <span className="text-orange-500">InvestNow</span> , where your financial success is our top
              priority.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
