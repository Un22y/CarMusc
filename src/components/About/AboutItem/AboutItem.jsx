import React from "react"
import classes from "./AboutItem.module.css"

const AboutItem = ({image, title, text}) => {

    return (
        <div className={classes.news__item}>
            <div className={classes.news__header}>
                <img src={image} alt={title}/>
                <h2 className={classes.news__title}>{title}</h2>
            </div>
            <p className={classes.news__article}>{text}</p>
        </div>
    )
}

export default AboutItem;