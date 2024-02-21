// Dependencies
import { Avatar } from "@nextui-org/react";

// Local Files//
// Local Files//
import Emilie from "../assets/RHceo.jpg";
import John from "../assets/RhCoFounder.jpg";







 
const Leaders = 
  {
    name: "Michael Anderson",
    designation: "Co-Founder & Managing Director",
    bio: "Michael Anderson, co-founder and MD of InvestNow, is a visionary leader with a rich background in financial innovation. With over a decade of experience in investment strategy, he has led transformative initiatives for investors worldwide. Michael's strategic foresight and dedication to financial excellence define InvestNow. His achievements include steering the company to industry recognition and a 25% growth in client portfolios within the first year.",
    thumbnail: John,
  }


const Leadership = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#e9ecef] h-auto     ">
      <div className="lg:p-[4rem] md:p-[3rem] p-[2rem]">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
          Meet Our <span className="text-yellow-600">Leadership</span>
        </h1>
      </div>
      <div className="h-[10rem] w-[10rem] text-center bg-cover bg-center  ">
        <Avatar src={Leaders.thumbnail} className="w-[10rem] h-[10rem]" />
      </div>
      <div className="md:p-[1rem] p-[2rem]">
        <h2 className="text-2xl text-center md:text-3xl font-semibold text-gray-500">{Leaders.name}</h2>
        <h3 className=" text-center text-1xl font-semibold text-gray-500">{Leaders.designation}</h3>
        <div className="lg:px-[12rem] md:px-[8rem] lg:py-[3rem] p-[2rem]">
          <p className="font-serif text-center text-1xl text-gray-500">{Leaders.bio}</p>
        </div>
      </div>
      
    </div>
    //
  );
};

export default Leadership;
