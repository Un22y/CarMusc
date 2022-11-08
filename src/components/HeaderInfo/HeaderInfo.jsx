import React from "react";
import FlexSection from "../UI/GridSection/FlexSection";
import classes from "./HeaderInfo.module.css";


const HeaderInfo = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.header__info_section}>
                <h2 className={classes.header__info_title} >адрес:</h2>
                <p className={classes.header__info_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className={classes.header__info_section}>
                <h2 className={classes.header__info_title} >телефон:</h2>
                <div className={classes.header__info_box}>
                    <a className={classes.header__info_text} href="">8 (812) 123-45-67</a>
                    <a className={classes.header__info_text} href="">8-911-123-45-67</a>
                </div>
            </div>
            <div className={classes.header__info_section}>
                <h2 className={classes.header__info_title} >Режим работы:</h2>
                <div className={classes.header__info_box}>
                    <p className={classes.header__info_text}>пн-пт : 10:00 - 20:00</p>
                    <p className={classes.header__info_text}>сб-вск : 12:00 - 20:00</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo