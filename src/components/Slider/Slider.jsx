import React from "react";
import { useState } from "react";
import classes from "./Slider.module.css"
import SliderList from "./SliderLIst/SliderList";


const Slider = ({count, itemWidth, list}) => {
    const [slides, setSlides] = useState(list)
    const gap = 30;

    //
    //
    //
    //
    //
    //
    //
    
    function moveList(direction) {
        setSlides(slides.splice(direction).concat(slides))
    }

    return (
        <section  className={classes.slider}>
            <div className={classes.slider__container}>
                <SliderList
                    array={slides}
                    count={count}
                    itemWidth={itemWidth}
                    gap={gap}
                />
            </div>
        </section>
    )
}

export default Slider;