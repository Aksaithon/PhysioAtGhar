import { useState } from "react";
import "./Dots.css";
const Dots = () => {
  // texts for dots:  ◉○   ●• ● ◯

  const [num, setNum] = useState<number>(2);

  setTimeout(() => {
    if (num < 7) {
      setNum(num + 1);
    } else {
      setNum(1);
    }
  }, 4000);

  return (
    <div className="dots_container">
      <p className="dot">{num == 1 ? "◉" : "○"}</p>
      <p className="dot">{num == 2 ? "◉" : "○"}</p>
      <p className="dot">{num == 3 ? "◉" : "○"}</p>
      <p className="dot">{num == 4 ? "◉" : "○"}</p>
      <p className="dot">{num == 5 ? "◉" : "○"}</p>
      <p className="dot">{num == 6 ? "◉" : "○"}</p>
      <p className="dot">{num == 7 ? "◉" : "○"}</p>
    </div>
  );
};

export default Dots;
