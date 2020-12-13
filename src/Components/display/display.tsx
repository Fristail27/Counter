import React from "react";
import s from "./display.module.css"

type DisplayType = {
    value: number,
    maxValue: number,
}

const Display = (props :DisplayType) => {
    let red = "";
    if (props.value === props.maxValue) {
        red = s.red
    }
    return (
       <div className={red}>
           <div>{props.value}</div>
       </div>
    )
}

export default Display;