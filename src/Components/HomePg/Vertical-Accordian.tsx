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
            <div
              className={
                bigSmall1
                  ? "item1 item1_Anim_toBig "
                  : "item1 item1_Anim_toSmall "
              }
            >
              <p
                className={
                  bigSmall1
                    ? "accdHeadLine accHeadline_Anim_toBig "
                    : "accdHeadLine accHeadline_Anim_toSmall "
                }
              >
                Electric Cupping
              </p>
              <img
                className={
                  bigSmall1 ? "dropBtn rotate_img" : "dropBtn again_rotate_img "
                }
                src={dropBtn}
                alt=""
              />
            </div>
            <div className="item2">
              {!bigSmall1 && (
                <p className="small_item2_defination">
                  Some concise lines to explain this service.
                  <span> Read more...</span>
                </p>
              )}

              {bigSmall1 && (
                <div className="alternate_item2">
                  <p className="big_item2_defination">machine1</p>
                  <p className="big_item2_defination">machine2</p>
                  <p className="big_item2_defination">machine3</p>
                </div>
              )}
            </div>
          </div>
          {bigSmall1 && (
            <div className="top_line_and_main_text">
              <hr />
              <p className="main_text">
                Electric Cupping Therapy is a non-invasive treatment that uses
                specially designed cups and gentle suction to promote blood
                circulation, reduce muscle tension, and alleviate pain.
              </p>
              <p className="main_text">
                It works by creating a mild vacuum effect, which helps stimulate
                natural healing processes in your body.
              </p>
              <p className="main_text">
                This therapy can be soothing and provide relief for various
                musculoskeletal issues, such as muscle pain and stiffness.
              </p>
            </div>
          )}

          <div className="item3">
            <div className="prblmBtns">
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
            </div>
            {!bigSmall1 && <button className="iNeedBtn">I need</button>}
          </div>
          {bigSmall1 && (
            <div className="bottom_line_and_cta_btns ">
              <hr />
              <div className="cta_Btns">
                <button className="cta_btn contact_me_btn">Contact me</button>
                <button className="cta_btn book_video_session_btn ">
                  Book video session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={
          interact2
            ? bigSmall2
              ? "small toBig mainContainer "
              : "big toSmall mainContainer"
            : "small mainContainer"
        }
        onClick={() => {
          changeAccord2();
        }}
      >
        <div className="container">
          <div className="item1_and_item2">
            <div
              className={
                bigSmall2
                  ? "item1 item1_Anim_toBig "
                  : "item1 item1_Anim_toSmall "
              }
            >
              <p
                className={
                  bigSmall2
                    ? "accdHeadLine accHeadline_Anim_toBig "
                    : "accdHeadLine accHeadline_Anim_toSmall "
                }
              >
                Electric Cupping
              </p>
              <img
                className={
                  bigSmall2 ? "dropBtn rotate_img" : "dropBtn again_rotate_img "
                }
                src={dropBtn}
                alt=""
              />
            </div>
            <div className="item2">
              {!bigSmall2 && (
                <p className="small_item2_defination">
                  Some concise lines to explain this service.
                  <span> Read more...</span>
                </p>
              )}

              {bigSmall2 && (
                <div className="alternate_item2">
                  <p className="big_item2_defination">machine1</p>
                  <p className="big_item2_defination">machine2</p>
                  <p className="big_item2_defination">machine3</p>
                </div>
              )}
            </div>
          </div>
          {bigSmall2 && (
            <div className="top_line_and_main_text">
              <hr />
              <p className="main_text">
                Electric Cupping Therapy is a non-invasive treatment that uses
                specially designed cups and gentle suction to promote blood
                circulation, reduce muscle tension, and alleviate pain.
              </p>
              <p className="main_text">
                It works by creating a mild vacuum effect, which helps stimulate
                natural healing processes in your body.
              </p>
              <p className="main_text">
                This therapy can be soothing and provide relief for various
                musculoskeletal issues, such as muscle pain and stiffness.
              </p>
            </div>
          )}

          <div className="item3">
            <div className="prblmBtns">
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
            </div>
            {!bigSmall2 && <button className="iNeedBtn">I need</button>}
          </div>
          {bigSmall2 && (
            <div className="bottom_line_and_cta_btns ">
              <hr />
              <div className="cta_Btns">
                <button className="cta_btn contact_me_btn">Contact me</button>
                <button className="cta_btn book_video_session_btn ">
                  Book video session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={
          interact3
            ? bigSmall3
              ? "small toBig mainContainer "
              : "big toSmall mainContainer"
            : "small mainContainer"
        }
        onClick={() => {
          changeAccord3();
        }}
      >
        <div className="container">
          <div className="item1_and_item2">
            <div
              className={
                bigSmall3
                  ? "item1 item1_Anim_toBig "
                  : "item1 item1_Anim_toSmall "
              }
            >
              <p
                className={
                  bigSmall3
                    ? "accdHeadLine accHeadline_Anim_toBig "
                    : "accdHeadLine accHeadline_Anim_toSmall "
                }
              >
                Electric Cupping
              </p>
              <img
                className={
                  bigSmall3 ? "dropBtn rotate_img" : "dropBtn again_rotate_img "
                }
                src={dropBtn}
                alt=""
              />
            </div>
            <div className="item2">
              {!bigSmall3 && (
                <p className="small_item2_defination">
                  Some concise lines to explain this service.
                  <span> Read more...</span>
                </p>
              )}

              {bigSmall3 && (
                <div className="alternate_item2">
                  <p className="big_item2_defination">machine1</p>
                  <p className="big_item2_defination">machine2</p>
                  <p className="big_item2_defination">machine3</p>
                </div>
              )}
            </div>
          </div>
          {bigSmall3 && (
            <div className="top_line_and_main_text">
              <hr />
              <p className="main_text">
                Electric Cupping Therapy is a non-invasive treatment that uses
                specially designed cups and gentle suction to promote blood
                circulation, reduce muscle tension, and alleviate pain.
              </p>
              <p className="main_text">
                It works by creating a mild vacuum effect, which helps stimulate
                natural healing processes in your body.
              </p>
              <p className="main_text">
                This therapy can be soothing and provide relief for various
                musculoskeletal issues, such as muscle pain and stiffness.
              </p>
            </div>
          )}

          <div className="item3">
            <div className="prblmBtns">
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
            </div>
            {!bigSmall3 && <button className="iNeedBtn">I need</button>}
          </div>
          {bigSmall3 && (
            <div className="bottom_line_and_cta_btns ">
              <hr />
              <div className="cta_Btns">
                <button className="cta_btn contact_me_btn">Contact me</button>
                <button className="cta_btn book_video_session_btn ">
                  Book video session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={
          interact4
            ? bigSmall4
              ? "small toBig mainContainer "
              : "big toSmall mainContainer"
            : "small mainContainer"
        }
        onClick={() => {
          changeAccord4();
        }}
      >
        <div className="container">
          <div className="item1_and_item2">
            <div
              className={
                bigSmall4
                  ? "item1 item1_Anim_toBig "
                  : "item1 item1_Anim_toSmall "
              }
            >
              <p
                className={
                  bigSmall4
                    ? "accdHeadLine accHeadline_Anim_toBig "
                    : "accdHeadLine accHeadline_Anim_toSmall "
                }
              >
                Electric Cupping
              </p>
              <img
                className={
                  bigSmall4 ? "dropBtn rotate_img" : "dropBtn again_rotate_img "
                }
                src={dropBtn}
                alt=""
              />
            </div>
            <div className="item2">
              {!bigSmall4 && (
                <p className="small_item2_defination">
                  Some concise lines to explain this service.
                  <span> Read more...</span>
                </p>
              )}

              {bigSmall4 && (
                <div className="alternate_item2">
                  <p className="big_item2_defination">machine1</p>
                  <p className="big_item2_defination">machine2</p>
                  <p className="big_item2_defination">machine3</p>
                </div>
              )}
            </div>
          </div>
          {bigSmall4 && (
            <div className="top_line_and_main_text">
              <hr />
              <p className="main_text">
                Electric Cupping Therapy is a non-invasive treatment that uses
                specially designed cups and gentle suction to promote blood
                circulation, reduce muscle tension, and alleviate pain.
              </p>
              <p className="main_text">
                It works by creating a mild vacuum effect, which helps stimulate
                natural healing processes in your body.
              </p>
              <p className="main_text">
                This therapy can be soothing and provide relief for various
                musculoskeletal issues, such as muscle pain and stiffness.
              </p>
            </div>
          )}

          <div className="item3">
            <div className="prblmBtns">
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
              <button className="prBtn">
                Prblm
                <img
                  src={rightBtn}
                  alt=""
                  style={{ width: "5.06px", height: "6.74px" }}
                />
              </button>
            </div>
            {!bigSmall4 && <button className="iNeedBtn">I need</button>}
          </div>
          {bigSmall4 && (
            <div className="bottom_line_and_cta_btns ">
              <hr />
              <div className="cta_Btns">
                <button className="cta_btn contact_me_btn">Contact me</button>
                <button className="cta_btn book_video_session_btn ">
                  Book video session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerticalAccordian;
