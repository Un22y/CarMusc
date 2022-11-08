import React from "react";
import Navigation from "../UI/Navigation/Navigation";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <span className={classes.footer__copyright}>2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.</span>
            <Navigation/>
        </div>
    )
}

export default Footer;