// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Intro from "../../globalSubComponents/Intro";
import aboutImg from "./assets/RHAboutUs.jpg";
import Leadership from "./subComponents/Leadership";
import AboutUs from "./subComponents/AboutUs";
import Values from "./subComponents/Values";
import Hero from "./subComponents/Hero";
import { VerticalCards } from "./helpers/VerticalCards";
const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Hero />
      <Leadership />
      {/* <Values /> */}
      <VerticalCards/>
      <Specialization />
      {/* <Mission /> */}
      <FrequentQuestion />
    </div>
  );
};
//
export default About;
