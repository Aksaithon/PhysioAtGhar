import React from "react";
import "./Testimonial.css";

interface textProps {
  thisImg: string;
  thisReview_text: string;
  thisNam: string;
  thisDesignation: string;
  thisCompany: string;
}

const Testimonial: React.FC<textProps> = ({
  thisImg,
  thisReview_text,
  thisNam,
  thisDesignation,
  thisCompany,
}) => {
  return (
    <>
      <div className="testimonial">
        <div
          className="img"
          style={{
            background: `linear-gradient(312deg,rgba(0, 0, 0, 0.53) 0.04%, rgba(0, 0, 0, 0) 28.89%),linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),  url(${thisImg})`,
            backgroundColor: "lightgray",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          }}
        ></div>
        <div className="review">
          <p className="dbl_quote">"</p>
          <p className="review_text">{thisReview_text}</p>
        </div>
        <div className="details">
          <p className="nam">{thisNam}</p>
          <p className="designation">{thisDesignation}</p>
          <p className="company">{thisCompany}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
