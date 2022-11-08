import React from "react";
import classes from "./Dots.module.css"


const Dots = () => {

    return (
        <div className={classes.decor__dots}>
            <span className={classes.decor__dot}></span>
            <span className={classes.decor__dot}></span>
            <span className={classes.decor__dot}></span>
            <span className={classes.decor__dot}></span>
        </div>
    )
}

export default Dots;