import { useState } from "react";

import "./ProblemCard.css";

const ProblemCard = () => {
  const [startRotation1, setStartRotation1] = useState<boolean>(false);
  const [startRotation2, setStartRotation2] = useState<boolean>(false);
  const [startRotation3, setStartRotation3] = useState<boolean>(false);
  const [startRotation4, setStartRotation4] = useState<boolean>(false);

  const [rotate1, setRotate1] = useState<boolean>(false);
  const [rotate2, setRotate2] = useState<boolean>(false);
  const [rotate3, setRotate3] = useState<boolean>(false);
  const [rotate4, setRotate4] = useState<boolean>(false);

  const rotateCard1 = () => {
    setStartRotation1(true);
    setRotate1(!rotate1);
  };
  const rotateCard2 = () => {
    setStartRotation2(true);
    setRotate2(!rotate2);
  };
  const rotateCard3 = () => {
    setStartRotation3(true);
    setRotate3(!rotate3);
  };
  const rotateCard4 = () => {
    setStartRotation4(true);
    setRotate4(!rotate4);
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
