// Dependencies
import { Image, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { Divider } from "@nextui-org/react";



const Help = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-200 h-auto ">
      <div className="md:px-[5rem] px-[1rem] py-[2rem]">
        <div className="py-[1rem]">
          <h1 className="text-blue-500 text-3xl font-sans font-semibold">
            Plumbing Repair Services in Upland, CA & the Surrounding Areas
          </h1>
        </div>
        <div className="py-[0.5rem] md:px-[0rem] ">
          <p className="text-black font-serif">
            Are your faucets starting to leak? Do you notice problems as your toilet flushes or with your sink drains?
            It might be time to reach out to your local plumbing repair company. For Upland, CA, residents, the AYS
            Plumbing & Rooter team is here to help fix all your plumbing problems.
          </p>
          <p className="text-black font-serif py-[0.5rem]">
            Have you thought about what a good plumber can do for you? Our team maximizes all the benefits of a good
            plumber without any downsides. Instead of waiting days for your repairs, we’re ready and on call at a
            moment’s notice. Everything else takes a backseat when your appliances need fixing, and we’ll show you what
            genuine customer care and attention to detail look like.
          </p>
          <p className="text-black font-serif py-[0.5rem]">
            Contact us today for plumbing repair services in Upland, CA, and the surrounding areas, and get back to
            enjoying the convenience of all the plumbing appliances in your home. Check out our service areas below!
            We’re pleased to serve residents all over CA, including the following locations:
          </p>
          <div className="flex flex-row justify-start items-center gap-4 text-black font-serif py-[0.5rem]">
            <div className="px-[1rem]">
              <ul className="list-disc">
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
              </ul>
            </div>
            <div className="px-[5rem]">
              <ul className="list-disc">
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
                <li>San Bernardino</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 w-[80rem] lg:inline-block hidden">
        <img
          src="https://img.freepik.com/free-photo/man-kneeling-down-touching-sink-inspecting-pipes_259150-58251.jpg?w=360&t=st=1708517429~exp=1708518029~hmac=4520fec27ca6ea8675914803979b610f81e3855b260cbbd4433bb8101a2b5137"
          alt=""
        />
      </div>
    </div>
  );
};

export default Help;
