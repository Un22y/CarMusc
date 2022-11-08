import React from "react";
import { useState } from "react";
import SliderItem from "../SliderItem/SliderItem";
import classes from "./SliderList.module.css"

const SliderList = ({array, count, itemWidth,gap}) => {
    const [number, setNumber] = useState(0);    
    const length = array.length;
    
    
    const [displayStyle, setDisplaystyle] = useState({
        gap: `${gap}px`,
        maxWidth: `${count*itemWidth+gap*(count-1)}px`,
        transform: `translateX(${-number*(itemWidth+gap)}px)`,
    });
    
    
    function moveLeft() {
        number >= length-count ? setNumber(0) : setNumber(number+1);
        setDisplaystyle({
            gap: `${gap}px`,
            maxWidth: `${count*itemWidth+gap*(count-1)}px`,
            transform: `translateX(${-number*(itemWidth+gap)}px)`,
        })
        console.log(number)
    }
    
    function moveRight() {
        number <= 0 ? setNumber(length-count) : setNumber(number-1);
        setDisplaystyle({
            gap: `${gap}px`,
            maxWidth: `${count*itemWidth+gap*(count-1)}px`,
            transform: `translateX(${-number*(itemWidth+gap)}px)`,
        })
        console.log(number)
    }

    console.log(classes)


    return (
        <div>
            <button onClick={moveLeft} className={classes.slider__next}>
                <p  className={classes.next__button}></p>
            </button>
            <button onClick={moveRight} className={classes.slider__prev}>
                <p className={classes.prev__button}></p>
            </button>
            <div style={displayStyle} className={classes.slider__display}>
                {array.map(item => 
                    <SliderItem key={item.id} image={item.source} text={item.text}/>
                )}
            </div>
        </div>
        
        
    )
}

export default SliderList;