import React from "react";
import classes from "./MyInput.module.css"

const MyInput = ({labelText}) => {

    return (
        <div className={classes.postform__inputForm}>
            <input className={classes.postform__input} type="text" name="question" id="question" placeholder=" "/>
            <label className={classes.postform__label} >{labelText}</label>
        </div>
    )
}

export default MyInput;