import React /*useRef*/ from "react";

// import { useState, useCallback } from "react";
// import { useSwipeable } from "react-swipeable";
// import { useTransition, animated } from "react-spring";

import BlogCard from "./BlogCard";
import "./BlogCarousal.css";

// interface CardData {
//   thisImg: string;
//   thisCaption: string;
//   thisTime: string;
// }

// const cards: CardData[] = [
//   {
//     thisImg: "blog-Img1.png",
//     thisCaption: "A good forward stroke is your key",
//     thisTime: "8 hours",
//   },
//   {
//     thisImg: "blog-Img2.jpg",
//     thisCaption: "No matter what it takes you’ll get it",
//     thisTime: "12 hours",
//   },
//   {
//     thisImg: "blog-Img3.png",
//     thisCaption: "Push yourself through every pain",
//     thisTime: "1 day",
//   },
//   {
//     thisImg: "blog-Img4.jpg",
//     thisCaption: "Push yourself through every pain",
//     thisTime: "1 day",
//   },
//   {
//     thisImg: "blog-Img5.jpg",
//     thisCaption: "Push yourself through every pain",
//     thisTime: "3 days",
//   },
// ];

const BlogCarousel: React.FC = () => {
  // const [index, setIndex] = useState<number>(0);
  // const prevIndex = useRef(0);

  // const updateIndex = useCallback(
  //   (newIndex: number) => {
  //     if (newIndex < 0) {
  //       newIndex = 0;
  //     } else if (newIndex >= cards.length) {
  //       newIndex = cards.length - 1;
  //     }

  //     prevIndex.current = newIndex;
  //     setIndex(newIndex);
  //   },
  //   [cards.length]
  // );

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(index + 1),
  //   onSwipedRight: () => updateIndex(index - 1),
  // });

  // let newCardTransform, oldCardTransform;

  // if (index > Number(prevIndex)) {
  //   // Swiped right
  //   newCardTransform = "translateX(-100%)";
  //   oldCardTransform = "translateX(100%)";
  // } else {
  //   // Swiped left
  //   newCardTransform = "translateX(100%)";
  //   oldCardTransform = "translateX(-100%)";
  // }

  // const transitions = useTransition(index, {
  //   reverse: index < Number(prevIndex),
  //   enter: { transform: newCardTransform },
  //   leave: { transform: oldCardTransform },
  // });

  return (
    <>
      <div className="carousal">
        <div className="all_Blog_Cards">
          <BlogCard
            thisImg={"blog-Img1.png"}
            thisCaption={"A good forward stroke is your key"}
            thisTime={" hours"}
          />
          <BlogCard
            thisImg={"blog-Img2.jpg"}
            thisCaption={"No matter what it takes you’ll get it"}
            thisTime={"12 hours"}
          />
          <BlogCard
            thisImg={"blog-Img3.png"}
            thisCaption={"Push yourself through every pain"}
            thisTime={"1 day"}
          />
          <BlogCard
            thisImg={"blog-Img4.jpg"}
            thisCaption={"Push yourself through every pain"}
            thisTime={"1 day"}
          />
          <BlogCard
            thisImg={"blog-Img5.jpg"}
            thisCaption={"Push yourself through every pain"}
            thisTime={"3 days"}
          />
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;

// <div className="carousel" {...handlers}>
//   {transitions((style, i) => (
//     <animated.div style={style}>
//       <BlogCard {...cards[i]} />
//     </animated.div>
//   ))}
// </div>
