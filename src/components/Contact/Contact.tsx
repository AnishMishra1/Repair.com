// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import ContactInfo from "./subComponents/ContactInfo";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Contactmap from "./subComponents/Contactmap";
import Intro from "../../globalSubComponents/Intro";
import contactImg from "./assets/RHcontactus.jpg"
import ContactUs from "./subComponents/ContactUs";
import HeroContact from "./subComponents/HeroContact";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
//
  return (
    <div>
      <HeroContact/>
      <ContactUs />
      <Contactmap />
      <FrequentQuestion />
    </div>
  );
};

export default Contact;
