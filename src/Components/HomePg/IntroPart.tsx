// import React from 'react'
import "./IntroPart.css";

const IntroPart = () => {
  return (
    <header
      className="intro_part"
      style={{
        background:
          "linear-gradient(0deg,rgba(0, 0, 0, 0.73) 0%,rgba(0, 0, 0, 0.73) 100%),url(corrected-bg-image.png),lightgray 50% / cover no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="main_headline">Path to recovery starts at home.</p>
      <button className="contact_btn">Contact me</button>
      <button className="book_btn">Book session</button>
    </header>
  );
};

export default IntroPart;
