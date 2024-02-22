import React from "react";

const Card = () => {
  return (
    <div className="flex md:flex-row h-auto flex-col items-center justify-center lg:gap-[4rem] gap-[1rem] p-[3rem] bg-[#0077B9] ">
      <div className="flex flex-col items-center h-auto justify-center bg-white drop-shadow-2xl rounded-xl">
        <div className="p-[1rem]">
          <img
            className="xl:w-[17rem] md:w-[16rem] w-auto "
            src="https://img.freepik.com/free-photo/closeup-shot-worker-protective-gloves-painting-wooden-details_181624-56454.jpg?w=996&t=st=1708588766~exp=1708589366~hmac=5a3f6a5b72def412d5f722ff42800e950cd65b1d07c1a4dcb841bbc7af66944f"
            alt=""
          />
        </div>

        <div className="py-[1rem]">
          <h1 className="text-center text-black text-2xl font-bold"> Hydro Jetting</h1>
        </div>
        <div className="py-[0.5rem] px-[2rem]">
          <button className="bg-red-600 px-[1rem] py-[0.5rem] text-white">Learn More</button>
        </div>
      </div>

      <div className="flex flex-col items-center h-auto justify-center bg-white drop-shadow-2xl rounded-xl">
        <div className="p-[1rem]">
          <img
            className="xl:w-[17rem] md:w-[16rem] w-auto "
            src="https://img.freepik.com/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?w=900&t=st=1708588854~exp=1708589454~hmac=443cbf4e93b0dffa1c2d07822a072bb6f0e63ec02fa77edb5a09bbf893619133"
            alt=""
          />
        </div>

        <div className="py-[1rem]">
          <h1 className="text-center text-black text-2xl font-bold"> Drain Cleaning</h1>
        </div>
        <div className="py-[0.5rem] px-[2rem]">
          <button className="bg-red-600 px-[1rem] py-[0.5rem] text-white">Learn More</button>
        </div>
      </div>

      <div className="flex flex-col items-center h-auto justify-center bg-white drop-shadow-2xl rounded-xl">
        <div className="p-[1rem]">
          <img
            className="xl:w-[17rem] md:w-[16rem] w-auto "
            src="https://img.freepik.com/free-photo/cheerful-asian-plumber-sitting-floor-repairing-kitchen-sink_1098-17780.jpg?t=st=1708588946~exp=1708592546~hmac=ad275127e58e23019cf45b51dd921a4365353123815c42d15d92c7571a68d721&w=740"
            alt=""
          />
        </div>

        <div className="py-[1rem]">
          <h1 className="text-center text-black text-2xl font-bold"> Pipe Repair</h1>
        </div>
        <div className="py-[0.5rem] px-[2rem]">
          <button className="bg-red-600 px-[1rem] py-[0.5rem] text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
