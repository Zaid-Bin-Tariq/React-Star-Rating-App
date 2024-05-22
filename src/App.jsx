import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";

function App({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
      console.log();
  }
  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <div>
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => {
                handleClick(index);
              }}
              key={index}
              onMouseMove={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              size={40}
            />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
