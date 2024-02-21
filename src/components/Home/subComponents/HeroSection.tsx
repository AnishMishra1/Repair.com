// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { GiProgression } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";

// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection flex items-end ">
      <div className="p-[4rem] ">
        <h1 className="text-white font-sans  font-bold text-6xl">Plumbing Repair</h1>

        <div className="py-[0.5rem]">
          <div className="h-[0.2rem] w-[10rem] bg-yellow-600 "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
