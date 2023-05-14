import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ labelText, value, callback, type = "text" }) => {
  return (
    <div className={classes.postform__inputForm}>
      <input
        className={classes.postform__input}
        type={type}
        value={value}
        onChange={(event) => callback(event.target.value)}
      />
      <label className={classes.postform__label}>{labelText}</label>
    </div>
  );
};

export default MyInput;
