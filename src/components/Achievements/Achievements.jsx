import React from "react";
import Dots from "../Decoration/Dots/Dots";
import FlexSection from "../UI/GridSection/FlexSection";
import classes from "./Achievements.module.css"


const Achievements = ({data}) => {
    return (
            <section className={classes.achievements__container}>
                <div className={classes.achievements__text}>
                    <h2 className={classes.achievements__title}>наши достижения от кубка россии до чемпионатов мира</h2>
                    <Dots/>
                    <p className={classes.achievements__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. 
                    </p>
                </div>
                <FlexSection>
                        {data.map(item => 
                                <div key={item.id} className={classes.achievements__item}>
                                    <h2 className={classes.achievements__place}><p>#</p>1</h2>
                                    <p className={classes.achievements__description}>{item.text}</p>
                                </div>
                            )
                        }
                </FlexSection>
            </section>
    )
}

export default Achievements;