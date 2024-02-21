// Dependencies
import { Image, Button, Progress } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import leadership from "../assets/leadership.jpg";
import { Cards } from "../helpers/Cards";
import RevCards from "../helpers/RevCards";

const progressData1 = {
  label: "A more human way to learn",
  description:
    "We're reshaping the way finance is learned—offering educational resources designed for the contemporary learner.",
  pic: "https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?size=626&ext=jpg",
};
const progressData2 = {
  label: "Easily understandable updates on financial matters",
  description:
    "Revolutionizing market discussions for today's investors. Sherwood Snacks brings you cutting-edge investing news tailored for the modern era.",
  pic: "https://img.freepik.com/free-vector/financial-benefit-businessman-cartoon-character-with-big-briefcase-earning-money-getting-revenue-profit-income-earnings-capital-gain-process-vector-isolated-concept-metaphor-illustration_335657-2797.jpg?size=626&ext=jpg",
};

const progressData3 = {
  label: "Explore the inner workings and understand the process",
  description:
    "We uphold the belief that transparency is a right for everyone. Discover how our business operates by revealing the true cost of each trade.",

  pic: "https://img.freepik.com/free-vector/indian-rupee-investment-concept_23-2148008184.jpg?w=740&t=st=1706620725~exp=1706621325~hmac=fcfdc376fd189dbe9095a336efb5b8ddac3416f40b5851bca21c7acf3453f3d4",
};
const progressData4 = {
  label: "Exemplary performance with each transaction",
  description: "Explore the metrics and benchmarks driving our commitment to achieving excellence with every order.",
  pic: "https://img.freepik.com/free-vector/financial-benefit-businessman-cartoon-character-with-big-briefcase-earning-money-getting-revenue-profit-income-earnings-capital-gain-process-vector-isolated-concept-metaphor-illustration_335657-2797.jpg?size=626&ext=jpg",
};

//


const Specialization = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-between mt-[4rem] gap-4 sm:p-[7rem] lg:p-[3rem]">
      <Cards title={progressData1.label} des={progressData1.description} photo={progressData1.pic} />
      <RevCards title={progressData2.label} des={progressData2.description} photo={progressData2.pic} />
      <Cards title={progressData3.label} des={progressData4.description} photo={progressData3.pic} />
      <RevCards title={progressData4.label} des={progressData4.description} photo={progressData4.pic} />
    </div>
  );
};

export default Specialization;
