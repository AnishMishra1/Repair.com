// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import Footer from "./globalSubComponents/Footer";
import { RootState } from "./store/store";
import Robinhood from "./components/Robinhood/Robinhood";


function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      {curTab === "Auth" || curTab === "Robinhood" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Robinhood" element={<Robinhood />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      {curTab === "Auth" || curTab === "Robinhood" ? null : <Footer />}
    </>
  );
}

export default App;
