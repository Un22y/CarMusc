import React from "react";
import classes from "./SliderItem.module.css";

const SliderItem = ({ image, text }) => {
  const imgJsx = (
    <img
      //   style={{ width: `100%` }}
      className={classes.slider__image}
      src={image}
      alt={image}
    />
  );
  return (
    <div className={classes.slider__item}>
      {imgJsx}
      <p className={classes.slider__text}>{text}</p>
    </div>
  );
};

export default SliderItem;
