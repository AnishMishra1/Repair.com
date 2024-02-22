// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { GiProgression } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";

// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection flex items-center justify-center ">
      <div className="p-[4rem] ">
        <h1 className="text-white font-sans  text-center font-bold text-6xl">PLUMBING AND REPAIR</h1>

        {/* <div className="py-[0.5rem]">
          <div className="h-[0.2rem] w-[10rem] bg-yellow-600 "></div>
        </div> */}

        <div className="font-sans py-[1rem]">
          <h3 className="text-yellow-500 text-center text-2xl font-bold">Serving Southern California</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
