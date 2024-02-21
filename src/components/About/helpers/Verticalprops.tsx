import React from "react";
import { IconType } from "react-icons";

type cardsProps = {
  photo: IconType;
  title: string;
  des: string;
};
//
export const Verticalprops = (props: cardsProps) => {
  return (
    <div className="bg-green-800 shadow-2xl  w-[22rem] h-[23rem] hover:scale-110 transition duration-150 ease-in-out">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center text-white text-6xl p-[3.5rem]">{<props.photo />}</div>
        <div className=" text-2xl font-medium text-center">
          <h1 className="text-white">{props.title}</h1>
        </div>
        <div className="px-[2rem]">
          <div className=" text-1xl font-light text-center ">
            <h2 className="text-white">{props.des}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};


