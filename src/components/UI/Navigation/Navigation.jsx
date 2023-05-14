import React from "react";
import Button from "../Button/Button";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link to={"/main"}>
        <Button size={24} uppercase={false} padding={[0, 0]} text="Главная" />
      </Link>
      <HashLink to={"/services#servicelist"}>
        <Button
          size={24}
          uppercase={false}
          padding={[0, 0]}
          text="Оклейка автомобилей"
        />
      </HashLink>
      <HashLink to={"/services#servicelist"}>
        <Button
          size={24}
          uppercase={false}
          padding={[0, 0]}
          text="Детейлинг автомобилей"
        />
      </HashLink>
      <Link to={"/gallery"}>
        <Button
          size={24}
          uppercase={false}
          padding={[0, 0]}
          text="Галерея работ"
        />
      </Link>
    </nav>
  );
};

export default Navigation;
