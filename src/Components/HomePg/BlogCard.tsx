import React from "react";
import "./BlogCard.css";

interface blogImg {
  thisImg: string;
  thisCaption: string;
  thisTime: string;
}

const BlogCard: React.FC<blogImg> = ({ thisImg, thisCaption, thisTime }) => {
  return (
    <>
      <div className="main_card_container">
        <img src={thisImg} alt="" />
        <div className="caption_and_time">
          <p>{thisCaption}</p>
          <p className="time">{thisTime} ago</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
