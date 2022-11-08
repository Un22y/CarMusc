import React from "react";
import classes from "./PostFormInfo.module.css";

const PostFormInfo = ({text,refa,image}) => {

    return (
        <div className={classes.postform__info}>
            <img src={image} alt={text}/>
            <a className={classes.postform__info_link} href={refa}>{text}</a>
        </div>
    )
}

export default PostFormInfo;