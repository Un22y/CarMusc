import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import SliderList from "./SliderLIst/SliderList";

const Slider = ({ count, itemWidth, list }) => {
  const [Count, setCount] = useState(count);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      console.log(windowSize);
      setWindowSize(window.innerWidth);
      if (windowSize > 1472) return setCount(count === 1 ? 1 : 3);
      if (windowSize <= 1472 && windowSize > 990)
        return setCount(count === 1 ? 1 : 2);
      if (windowSize <= 990) return setCount(count === 1 ? 1 : 1);
    };

    window.addEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return (
    <section className={classes.slider}>
      <div className={classes.slider__container}>
        <SliderList array={list} count={Count} itemWidth={itemWidth} gap={30} />
      </div>
    </section>
  );
};

export default Slider;
