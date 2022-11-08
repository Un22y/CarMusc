import React from "react";
import Button from "../Button/Button";
import classes from "./Navigation.module.css"


const Navigation = () => {

    return (
        <nav className={classes.navigation}>
            <Button size={24} uppercase={false} padding={[0,0]} text="Главная"/>
            <Button size={24} uppercase={false} padding={[0,0]} text="Оклейка автомобилей"/>
            <Button size={24} uppercase={false} padding={[0,0]} text="Детейлинг автомобилей"/>
            <Button size={24} uppercase={false} padding={[0,0]} text="Галерея работ"/>
        </nav>
    )
}

export default Navigation;