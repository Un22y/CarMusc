import React from "react";
import Dots from "../Decoration/Dots/Dots";
import Button from "../UI/Button/Button";
import Navigation from "../UI/Navigation/Navigation";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const renderHeaderButton = (path) => {
    switch (path) {
      case "/main":
        return (
          <Link to={"/services"} style={{ textDecoration: `none` }}>
            <Button
              size={24}
              className={classes.button}
              padding={[10, 20]}
              text="Наши услуги"
            />
          </Link>
        );
      case "/services":
        return (
          <Link to={"/price"} style={{ textDecoration: `none` }}>
            <Button
              size={24}
              className={classes.button}
              padding={[10, 20]}
              text="Цены"
            />
          </Link>
        );
      case "/price":
        return (
          <Link to={"/main"} style={{ textDecoration: `none` }}>
            <Button
              size={24}
              className={classes.button}
              padding={[10, 20]}
              text="На главную"
            />
          </Link>
        );

      default:
        break;
    }
  };
  return (
    <div className={classes.header}>
      <Navigation />
      <div className={classes.header__logo}>
        {location.pathname === "/main" && (
          <h1 className={classes.header_main__title}>car musc</h1>
        )}
        {location.pathname === "/services" && (
          <h1 className={classes.header__title}>
            Оклейка автомобиля защитными пленками
          </h1>
        )}
        {location.pathname === "/price" && (
          <h1 className={classes.header__title}>Стоимость наших услуг</h1>
        )}
        <Dots />
        <p className={classes.header__description}>
          {location.pathname === "/main" &&
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orciurna amet penatibus.`}
          {location.pathname === "/services" &&
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orciurna amet penatibus.`}
        </p>
        {renderHeaderButton(location.pathname)}
        {/* <Link to={"/services"} style={{ textDecoration: `none` }}>
          <Button
            size={24}
            className={classes.button}
            padding={[10, 20]}
            text="Наши услуги"
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
