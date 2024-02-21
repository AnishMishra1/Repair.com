// Local Files
import questions from "../assets/queries.json";
import QuestionAccordion from "../../../globalSubComponents/QuestionAccordion";

const FAQAccordion = () => {
  return (
    <div className="bg-white px-[2rem] md:px-[5rem] py-[5rem] flex flex-col justify-center items-center gap-[2rem]">
      
      <QuestionAccordion className="max-w-[60rem]" questions={questions} varient="light" />
    </div>
  );
};

export default FAQAccordion;
