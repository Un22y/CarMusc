import React from "react";
import classes from "./GalleryItem.module.css"

const GalleryItem = ({source, text}) => {
    
    
    return (
        <div className={classes.list__item}>
            <img src={source} alt={text} />
            <p className={classes.item__text}>{text}</p>
        </div>
    )
}

export default GalleryItem