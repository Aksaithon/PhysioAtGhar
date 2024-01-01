import { useState } from "react";
import React from "react";

import "./AutoSlider.css";
import Dots from "./Dots";

const AutoSlider: React.FC = () => {
  const [num, setNum] = useState<number>(1);

  setTimeout(() => {
    if (num < 7) {
      setNum(num + 1);
    } else {
      setNum(1);
    }
  }, 20000);

  return (
    <>
      <div className="main_slider">
        <div
          className={
            num == 1
              ? "strip fstShift"
              : num == 2
              ? "strip scndShift"
              : num == 3
              ? "strip thrdShift"
              : num == 4
              ? "strip frthShift"
              : num == 5
              ? "strip fthShift"
              : num == 6
              ? "strip sixthShift"
              : num == 7
              ? "strip svnthShift"
              : "strip"
          }
        >
          {
            <div className={"main_frame slide1 "}>
              <img src="ImageSlider1.png" alt="" className="img" />
              <p className="pTag">Personalized attention </p>
            </div>
          }
          {
            <div className={"main_frame slide2 "}>
              <img src="ImageSlider2.png" alt="" className="img" />
              <p className="pTag">Comprehensive assessment </p>
            </div>
          }
          {
            <div className={"main_frame slide3 "}>
              <img src="ImageSlider3.png" alt="" className="img" />
              <p className="pTag">Tailored-treatment plane </p>
            </div>
          }
          {
            <div className={"main_frame slide4 "}>
              <img src="ImageSlider4.png" alt="" className="img" />
              <p className="pTag">Hands-on techniques </p>
            </div>
          }
          {
            <div className={"main_frame slide5 "}>
              <img src="ImageSlider5.png" alt="" className="img" />
              <p className="pTag">Targeted exercises </p>
            </div>
          }
          {
            <div className={"main_frame slide6 "}>
              <img src="ImageSlider6.png" alt="" className="img" />
              <p className="pTag">Education and guidance </p>
            </div>
          }
          {
            <div className={"main_frame slide7 "}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking </p>
            </div>
          }
        </div>
        <div className="dots_component">
          {/* <Dots /> */}
        </div>
      </div>
    </>
  );
};

export default AutoSlider;
