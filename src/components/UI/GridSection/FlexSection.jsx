import React from "react";
import classes from "./FlexSection.module.css"


const FlexSection = ({children, gap, rowDirection=true}) => {
       
    return (
        <section style={{gap: gap+'px'}} className={
            rowDirection 
            ? classes.row
            : classes.column
        }>
            {children}
        </section>
    )
}

export default FlexSection;