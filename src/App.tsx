// import React from "react";
import AutoSlider from "./Components/HomePg/AutoSlider";
import IntroPart from "./Components/HomePg/IntroPart";
import VerticalAccordian from "./Components/HomePg/Vertical-Accordian";

import "./App.css"
import Dots from "./Components/HomePg/Dots";
import ProblemCard from "./Components/HomePg/ProblemCard";
import TestimonialAnim from "./Components/HomePg/Testimonial-Anim";

const App = () => {
  return (
    <>
      <div className="homePg" >
        
        <IntroPart />
        <AutoSlider />
        <VerticalAccordian />
        <ProblemCard/>
        <ProblemCard/>
        <ProblemCard/>
        <ProblemCard/>
        <TestimonialAnim/>
      </div>
    </>
  );
};

export default App;
