import { useState } from "react";

import "./ProblemCard.css";

const ProblemCard = () => {
  const [startRotation1, setStartRotation1] = useState<boolean>(false);

  const [rotate1, setRotate1] = useState<boolean>(false);

  const rotateCard1 = () => {
    setStartRotation1(true);
    setRotate1(!rotate1);
  };
  return (
    <>
      <div className="Problem_Card">
        <div
          className={
            startRotation1
              ? rotate1
                ? "front rotateFront"
                : "front rotateFrontAgain"
              : "front"
          }
          onClick={() => rotateCard1()}
        >
          <p className="problem_title_front">Problem name</p>
        </div>
        <div
          className={
            startRotation1
              ? rotate1
                ? "back rotateBack"
                : "back rotateBackAgain"
              : "back"
          }
          onClick={() => rotateCard1()}
        >
          <div className="blur_frame">
            <p className="prblm_para">
              kslskslkslss sslskls sslsklsssm smssmmd sfsmf ds,mmfdmf ds,mf sd,f
              sdf sdf sd,mf sjfnewnf,mfe,mf ,msd fmds fd fdsf sdfsd fds f,sd
              fsdf dsf sdf,sdf sdf,ds .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemCard;
