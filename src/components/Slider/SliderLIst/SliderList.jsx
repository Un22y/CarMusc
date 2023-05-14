import React, { useEffect } from "react";
import { useState } from "react";
import SliderItem from "../SliderItem/SliderItem";
import classes from "./SliderList.module.css";

const SliderList = ({ array, count, itemWidth, gap }) => {
  const [number, setNumber] = useState(0);
  const length = array.length;

  const [displayStyle, setDisplaystyle] = useState({
    gap: `${gap}px`,
    width: `${count * itemWidth + gap * (count - 1)}px`,
    transform: `translateX(${-number * (itemWidth + gap)}px)`,
  });

  useEffect(() => {
    setDisplaystyle({
      gap: `${gap}px`,
      maxWidth: `${count * itemWidth + gap * (count - 1)}px`,
      transform: `translateX(${-number * (itemWidth + gap)}px)`,
    });
  }, [number, itemWidth, count, gap]);

  const moveSlide = (sliderNumber, direction) => {
    if (sliderNumber >= length - count && direction === 1) return setNumber(0);
    if (sliderNumber <= 0 && direction === -1) return setNumber(length - count);
    return setNumber(number + direction);
  };

  return (
    <div>
      <button
        onClick={() => moveSlide(number, 1)}
        className={classes.slider__next}
      >
        <p className={classes.next__button}></p>
      </button>
      <button
        onClick={() => moveSlide(number, -1)}
        className={classes.slider__prev}
      >
        <p className={classes.prev__button}></p>
      </button>
      <div style={displayStyle} className={classes.slider__display}>
        {array.map((item) => (
          <SliderItem key={item.id} image={item.source} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default SliderList;
