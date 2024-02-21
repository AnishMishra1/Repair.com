// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Hero from "./subComponent/Hero";
import Main from "./subComponent/Main";

const Privacy = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Privacy"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Hero />
      <Main/>
      <FrequentQuestion/>
      
    </div>
  );
};

export default Privacy;
