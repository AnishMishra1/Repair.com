// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Achievement from "./subComponents/Achievement";
import Help from "./subComponents/Help";
import Popover from "./subComponents/Popover";
import Youtube from "./subComponents/Youtube";
import Testimonials from "./subComponents/Testimonials";
import Protection from "./subComponents/Protection";
import Join from "./subComponents/Join";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      {/* <Popover /> */}
      <HeroSection />
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
