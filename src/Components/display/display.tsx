import React from "react";
import s from "./display.module.css"

type DisplayType = {
    value: number,
}

const Display = (props :DisplayType) => {
    let red = "";
    if (props.value === 5) {
        red = s.red
    }
    return (
       <div className={s.disp + " " + red}>
           <div>{props.value}</div>
       </div>
    )
}

export default Display;