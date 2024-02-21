// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import trading from "../assets/trading.jpg";

const FAQTailCard = () => {
  return (
    <div
      className="bg-green-800 h-[30rem] bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center gap-[1rem]"
    >
      <div className="flex flex-col items-center">
        <p className="text-white font-[Roboto] text-[3rem] leading-[3rem] text-center">
          Growing Your <span className="text-[#F5A524]">Fortune</span>
        </p>
        <p className="text-white font-[Roboto] text-[3rem] leading-[3rem] text-center">
          While You Grow Your <span className="text-[#F5A524] rounded-none">Dreams</span>
        </p>
      </div>
      <p className="text-default-300">Join InvestNow Today !</p>
      <Button
        
        color="warning"
        radius="none"
        endContent={<FaArrowCircleRight className="mt-[0.1rem] rounded-none" />}
      >
        Join Now
      </Button>
    </div>
  );
};

export default FAQTailCard;
