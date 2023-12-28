import React from "react";
import "./Testimonial-Anim.css"

const TestimonialAnim = () => {
  return (
    <>
      <div className="testimonial">
        <div className="img" ></div>
        <div className="review" >
          <p className="dbl_quote" >"</p>
          <p className="review_text" >Has saved us thousands of hours of work.Design faster+smarter.</p>
        </div>
        <div className="details" >
          <p className="nam" >James Holand</p>
          <p className="designation" >Product designer, LA</p>
          <p className="company" >Product Company</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialAnim;
