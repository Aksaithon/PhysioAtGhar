import { useState } from "react";
import "./Vetical-Accordian.css";
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

  return (   <>
      <div
        className={
          interact1 ? (bigSmall1 ? "small toBig" : "big toSmall") : "small"
        }
        onClick={() => {
          changeAccord1();
        }}
      ></div>
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
