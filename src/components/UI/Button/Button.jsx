import React from "react";
import classes from "./Button.module.css";

const Button = ({ size, uppercase = true, text, padding, callback }) => {
  const textPadding = {
    padding: `${padding[0]}px ${padding[1]}px`,
    textTransform: uppercase ? "uppercase" : "none",
    fontSize: `${size}px`,
  };
  return (
    <button onClick={callback} className={classes.button__box}>
      <p style={textPadding} className={classes.button__text}>
        {text}
      </p>
    </button>
  );
};

export default Button;
