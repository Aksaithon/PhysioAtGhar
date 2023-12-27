// import React from "react";
import AutoSlider from "./Components/HomePg/AutoSlider";
import IntroPart from "./Components/HomePg/IntroPart";
import VerticalAccordian from "./Components/HomePg/Vertical-Accordian";

import "./App.css"
import Dots from "./Components/HomePg/Dots";

const App = () => {
  return (
    <>
      <div className="homePg" >
        <IntroPart />
        <AutoSlider />
        <VerticalAccordian />
      </div>
    </>
  );
};

export default App;
