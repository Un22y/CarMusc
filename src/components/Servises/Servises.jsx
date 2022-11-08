import React from "react";
import { useState } from "react";
import Dots from "../Decoration/Dots/Dots";
import Button from "../UI/Button/Button";
import FlexSection from "../UI/GridSection/FlexSection";
import classes from "./Servises.module.css"
import ServisesItem from "./ServisesItem/ServisesItem";

const Servises = () => {

    const [article,setArticle] = useState([
        {id:1, image:'/reason1.svg',title:'Защитные пленки', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'},
        {id:2, image:'/reason2.svg',title:'Цветные пленки', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'},
        {id:3, image:'/reason3.png',title:'Дизайн', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'},
        {id:4, image:'/reason4.svg',title:'Оклейка салона', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'},
    ]);

    return (
        <FlexSection gap={40} rowDirection={false}>
            <h2 className={classes.servises__headtitle}>Наши услуги</h2>
            <Dots/>
            <FlexSection gap={60}>
                <Button padding={[20,40]} text={'Оклейка'}/>
                <Button padding={[20,40]} text={'Детейлинг'}/>
            </FlexSection>
            <FlexSection gap={40}>
                {article.map(item => 
                    <ServisesItem 
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                    />
                )}
            </FlexSection>
        </FlexSection>    
    )
}

export default Servises;