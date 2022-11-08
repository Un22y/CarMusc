import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./ServisesItem.module.css"


const ServisesItem = ({image,title,text}) => {

    return (
        <div className={classes.servises__item}>
            <img className={classes.image} src={image} alt={title}/>
            <h3 className={classes.servises__title}>{title}</h3>
            <p className={classes.servises__text}>{text}</p>
            <Button padding={[10,20]} text={'Подробнее'}/>
        </div>
    )
}

export default ServisesItem;