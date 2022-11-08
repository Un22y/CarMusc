import React from "react";
import AboutItem from "./AboutItem/AboutItem";
import classes from "./About.module.css"
import Dots from "../Decoration/Dots/Dots";

const About = ({data}) => {
    return (
        <div className={classes.news__description}>
            {data.map(item => 
                item.id === (data.length)
                ? 
                <AboutItem key={item.id} image={item.image} title={item.title} text={item.text}/>
                : 
                <div className={classes.news__description} key={item.id}>
                    <AboutItem image={item.image} title={item.title} text={item.text}/>
                    <Dots/>
                </div>
            )}
        </div>
    )
}

export default About;