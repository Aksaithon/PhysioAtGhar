import { useState } from "react";
import Testimonial from "./Testimonial";
import TestimonialImgs from "./TestimonialImgs";

const TestimonialAnim = () => {
  const [num, setNum] = useState<number>(1);

  setTimeout(() => {
    if (num == 5) {
      setNum(1);
    } else {
      setNum(num + 1);
    }
  }, 5000);

  return (
    <>
      <div className="tstmnl_anim">
        { num == 1  && (<Testimonial
          thisImg={TestimonialImgs[1]}
          thisReview_text={
            "Has saved us thousands of hours of work.Design faster+smarter."
          }
          thisNam={"James Holand"}
          thisDesignation={"Product designer, LA"}
          thisCompany={"Product Company"}
        />)}
        { num ==  2 && (<Testimonial
          thisImg={TestimonialImgs[2]}
          thisReview_text={
            "Has saved us thousands of hours of work.Design faster+smarter."
          }
          thisNam={"James Holand"}
          thisDesignation={"Product designer, LA"}
          thisCompany={"Product Company"}
        />)}
        { num == 3  && (<Testimonial
          thisImg={TestimonialImgs[3]}
          thisReview_text={
            "Has saved us thousands of hours of work.Design faster+smarter."
          }
          thisNam={"James Holand"}
          thisDesignation={"Product designer, LA"}
          thisCompany={"Product Company"}
        />)}
        { num == 4  && (<Testimonial
          thisImg={TestimonialImgs[4]}
          thisReview_text={
            "Has saved us thousands of hours of work.Design faster+smarter."
          }
          thisNam={"James Holand"}
          thisDesignation={"Product designer, LA"}
          thisCompany={"Product Company"}
        />)}
        { num == 5  && (<Testimonial
          thisImg={TestimonialImgs[5]}
          thisReview_text={
            "Has saved us thousands of hours of work.Design faster+smarter."
          }
          thisNam={"James Holand"}
          thisDesignation={"Product designer, LA"}
          thisCompany={"Product Company"}
        />)}
      </div>
    </>
  );
};

export default TestimonialAnim;
