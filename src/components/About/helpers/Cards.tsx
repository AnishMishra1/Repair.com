import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import p1 from "../assets/RHceo.jpg";

type cardsProps = {
  title?: string;
  des?: string;
  photo?: string;
};

export function Cards(props: cardsProps) {
  return (
    <>
      <div className="bg-green-800 h-[28rem] sm:h-auto md:h-[30rem] w-[70rem] flex flex-col md:flex-row gap-5 items-center justify-between  sm:p-[8rem] md:p-[10rem] lg:p-[5rem] sm:mx-[8rem] ">
        <div className="md:h-full md:w-[40rem] h-[15rem] w-[20rem] bg-cover bg-center  px-[3rem] mt-[2rem]">
          <img className="h-full w-full" src={props.photo} />
        </div>
        <div className="flex flex-col gap-4 md:py-[2rem]  md:px-[0.2rem] h-full">
          <div className="lg:px-[0.3rem] sm:px-[2rem] px-[15rem]">
            <h1 className="text-[1rem] sm:text-2xl md:text-2xl text-center md:px-[0.5rem] px-[12rem] lg:text-4xl font-bold font-serif text-yellow-500">
              {props.title}
            </h1>
          </div>
          <div className="lg:px-[0.3rem] sm:px-[2rem] px-[15rem]">
            <p className="text-[0.8rem] sm:text-[1.3rem] md:text-[1rem] font-serif md:px-[0.5rem] px-[12rem] text-center  text-white">
              {props.des}
            </p>
          </div>
        </div>
      </div>
    </>
    //
  );
}
