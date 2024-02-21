import { Button } from "@nextui-org/react";

const Join = () => {
  return (
    <div className="bg-[#0077B9] h-auto md:p-[5rem] p-[2rem] flex-col">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="p-[1rem]">
            <h1 className="text-center text-4xl font-sans font-semibold text-white">
              Our Team Can Help You With All Your Bathroom & Kitchen Plumbing Repair Needs
            </h1>
          </div>
          <div className="py-[0.5rem]">
            <p className="text-center text-[1rem] text-white font-serif text-1xl">
              There’s no point in a plumbing service if they don’t service your kitchens and bathrooms. These are the
              two most common locations for plumbing problems, so why not get them serviced by a top-tier repair team?
              At AYS Plumbing & Rooter, homeowners can fix major and minor plumbing problems with all appliances in
              their kitchens and bathrooms. What does that include? Check out some of the biggest bathroom plumbing
              repair needs we can solve:
            </p>
          </div>
        </div>
      </div>
      <div className="text-white font-serif text-[1rem] py-[2rem] px-[2rem]">
        <ul className="list-disc">
          <li>Dripping Bathroom Faucets</li>
          <li>Dripping Bathroom Faucets</li>
          <li>Dripping Bathroom Faucets</li>
          <li>Dripping Bathroom Faucets</li>
          <li>Dripping Bathroom Faucets</li>
          <li>Dripping Bathroom Faucets</li>
        </ul>
      </div>

      <div className="flex justify-center items-center  px-[2rem]">
        <button className="bg-[#AD3840] py-[0.8rem] text-[1rem] px-[2rem] text-white">Contact Us Today</button>
      </div>
    </div>
  );
};

export default Join;
