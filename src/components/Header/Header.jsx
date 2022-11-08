import React from "react";
import Dots from "../Decoration/Dots/Dots";
import Button from "../UI/Button/Button";
import FlexSection from "../UI/GridSection/FlexSection";
import Navigation from "../UI/Navigation/Navigation";
import classes from "./Header.module.css"


const Header = () => {
    return (
        <div className={classes.header}>
            <Navigation/>
            <div className={classes.header__logo}>
                <h1 className={classes.header__title}>car musc</h1>
                <Dots/>
                <p className={classes.header__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.
                </p>
                <Button size={24} className={classes.button} padding={[10,20]} text="Наши услуги"/>
            </div>
        </div>
    )
}

export default Header;