import { useState } from "react";
import "./Vetical-Accordian.css";
import dropBtn from "./dropBtn.svg";
import rightBtn from "./rightBtn.svg";

const VerticalAccordian = () => {
  const [bigSmall1, setBigSmall1] = useState(false);
  const [bigSmall2, setBigSmall2] = useState(false);
  const [bigSmall3, setBigSmall3] = useState(false);
  const [bigSmall4, setBigSmall4] = useState(false);

  const [interact1, setInteract1] = useState(false);
  const [interact2, setInteract2] = useState(false);
  const [interact3, setInteract3] = useState(false);
  const [interact4, setInteract4] = useState(false);

  const changeAccord1 = () => {
    setBigSmall1(!bigSmall1);
    setInteract1(true);

    setBigSmall2(false);
    setBigSmall3(false);
    setBigSmall4(false);
  };
  const changeAccord2 = () => {
    setBigSmall2(!bigSmall2);
    setInteract2(true);

    setBigSmall1(false);
    setBigSmall3(false);
    setBigSmall4(false);
  };
  const changeAccord3 = () => {
    setBigSmall3(!bigSmall3);
    setInteract3(true);

    setBigSmall1(false);
    setBigSmall2(false);
    setBigSmall4(false);
  };
  const changeAccord4 = () => {
    setBigSmall4(!bigSmall4);
    setInteract4(true);

    setBigSmall1(false);
    setBigSmall2(false);
    setBigSmall3(false);
  };

  return (
    <>
      <div
        className={
          interact1
            ? bigSmall1
              ? "small toBig mainContainer "
              : "big toSmall mainContainer"
            : "small mainContainer"
        }
        onClick={() => {
          changeAccord1();
        }}
      >
        <div className="container">
          <div className="item1_and_item2">
            <div className="item1">
              <p className="accdHeadLine">Electric Cupping</p>
              <img className="dropBtn" src={dropBtn} alt="" />
            </div>
            <div className="item2">
              <p className="smallDefine">
                Some concise lines to explain this service.
                <span> Read more...</span>
              </p>
            </div>
          </div>
          <div className="item3">
            <div className="prblmBtns">
              <button className="prBtn">Prblm <img src={rightBtn} alt=""  style={{"width" : "5.06px", "height" : "6.74px"}} /> </button>
              <button className="prBtn">Prblm <img src={rightBtn} alt=""  style={{"width" : "5.06px", "height" : "6.74px"}} /> </button>
              <button className="prBtn">Prblm <img src={rightBtn} alt=""  style={{"width" : "5.06px", "height" : "6.74px"}} /> </button>
              <button className="prBtn">Prblm <img src={rightBtn} alt=""  style={{"width" : "5.06px", "height" : "6.74px"}} /> </button>
            </div>
            <button className="iNeedBtn">I need</button>
          </div>
        </div>
      </div>
      <div
        className={
          interact2 ? (bigSmall2 ? "small toBig" : "big toSmall") : "small"
        }
        onClick={() => {
          changeAccord2();
        }}
      ></div>
      <div
        className={
          interact3 ? (bigSmall3 ? "small toBig" : "big toSmall") : "small"
        }
        onClick={() => {
          changeAccord3();
        }}
      ></div>
      <div
        className={
          interact4 ? (bigSmall4 ? "small toBig" : "big toSmall") : "small"
        }
        onClick={() => {
          changeAccord4();
        }}
      ></div>
    </>
  );
};

export default VerticalAccordian;
