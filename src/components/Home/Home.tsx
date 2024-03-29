// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Achievement from "./subComponents/Achievement";
import Help from "./subComponents/Help";
import Youtube from "./subComponents/Youtube";
import Testimonials from "./subComponents/Testimonials";
import Protection from "./subComponents/Protection";
import Join from "./subComponents/Join";
import Card from "./subComponents/Card";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <HeroSection />
      <Card/>
      <Help />
      <Join />
      <Protection />
      <Youtube />
      <Testimonials />
      <Achievement />
    </div>
  );
};

export default Home;
