//dependices
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GrAssistListening } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";


// Local Files
import { Verticalprops } from "./Verticalprops";


// Define your data as a JSON object
const servicesData = [
  {
    photo: AiFillSafetyCertificate,
    title: "Prioritizing Safety Always",
    description:
      "We implement robust measures and strategies to safeguard against potential risks, providing peace of mind and confidence in every financial endeavor.",
  },
  {
    photo: GrAssistListening,
    title: "Engagement",
    description:
      "we empower individuals to take charge of their financial goals, fostering a meaningful and impactful partnership.",
  },
  {
    photo: FaPeopleGroup,
    title: "Different Customer Focus",
    description: "By prioritizing your needs, preferences, and satisfaction, we create an exceptional experience",
  },
  {
    photo: IoAnalyticsOutline,
    title: "Innovative Analysis",
    description:
      "Our approach goes beyond traditional analysis, leveraging innovation to extract deeper, more nuanced perspectives from fundamental data.",
  },
];

export const VerticalCards= () => {
  return (
    <div className="bg-white md:h-[50rem] h-auto w-full mt-[2rem] flex flex-col items-center">
      <div className="bg-white h-full text-black  rounded-sm ">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
          {servicesData.map((service, index) => (
            <Verticalprops key={index} photo={service.photo} title={service.title} des={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
//


