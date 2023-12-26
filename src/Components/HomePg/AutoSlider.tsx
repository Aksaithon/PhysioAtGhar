import { useState } from "react";
import "./AutoSlider.css";

const AutoSlider: React.FC = () => {
  const [num, setNum] = useState<number>(1);

  setTimeout(() => {
    if (num < 7) {
      setNum(num + 1);
    } else {
      setNum(1);
    }
  }, 4000);

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
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 1 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 2 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 3 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 4 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 5 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 6 </p>
            </div>
          }
          {
            <div className={"main_frame"}>
              <img src="ImageSlider7.png" alt="" className="img" />
              <p className="pTag">Progress tracking 7 </p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default AutoSlider;
