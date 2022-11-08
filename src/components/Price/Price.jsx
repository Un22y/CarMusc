import React from "react";
import Dots from "../Decoration/Dots/Dots";
import classes from "./Price.module.css";

const Price = () => {

    return (
        <section className={classes.price}>
            <h2 className={classes.price__title}>Стоимость полной оклейки автомобиля</h2>
            <Dots/>
            <table className={classes.price__table}>
                <thead>
                    <tr className={classes.table__row}>
                        <th className={classes.table__head}>авто/материал</th>
                        <th className={classes.table__head}>пленка spectroll</th>
                        <th className={classes.table__head}>Пленка Hexis</th>
                        <th className={classes.table__head}>Пленка SunTek</th>
                        <th className={classes.table__head}>Пленка LLumar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={classes.table__row}>
                        <td className={classes.table__cell}>1 класс <br/>(Mini cooper, Fiat 500)</td>
                        <td className={classes.table__cell}>53 000 ₽</td>
                        <td className={classes.table__cell}>64 000 ₽</td>
                        <td className={classes.table__cell}>69 000 ₽</td>
                        <td className={classes.table__cell}>72 000 ₽</td>
                    </tr>
                    <tr className={classes.table__row}>
                        <td className={classes.table__cell}>2 класс <br/>(BMW 3, Mercedes)</td>
                        <td className={classes.table__cell}>53 000 ₽</td>
                        <td className={classes.table__cell}>64 000 ₽</td>
                        <td className={classes.table__cell}>69 000 ₽</td>
                        <td className={classes.table__cell}>72 000 ₽</td>
                    </tr>
                    <tr className={classes.table__row}>
                        <td className={classes.table__cell}>4 класс <br/>(BMW 7, Mercedes S)</td>
                        <td className={classes.table__cell}>53 000 ₽</td>
                        <td className={classes.table__cell}>64 000 ₽</td>
                        <td className={classes.table__cell}>69 000 ₽</td>
                        <td className={classes.table__cell}>72 000 ₽</td>
                    </tr>
                    <tr className={classes.table__row}>
                        <td className={classes.table__cell}>5 класс <br/>(BMW X3,X4, Mercedes)</td>
                        <td className={classes.table__cell}>53 000 ₽</td>
                        <td className={classes.table__cell}>64 000 ₽</td>
                        <td className={classes.table__cell}>69 000 ₽</td>
                        <td className={classes.table__cell}>72 000 ₽</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Price;
