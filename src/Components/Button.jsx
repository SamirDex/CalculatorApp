import React from 'react'
import styles from "./Button.module.css"

const getStyleName = (btn) => {
    const className = {
        "=" : styles.equal, 
        "0" : styles.zero,
        "x" : styles.opt,
        "/" : styles.opt,
        "-" : styles.opt,
        "+" : styles.opt,
        "AC" : styles.other,
        "±" : styles.other,
        "%" : styles.other
    }
    return className[btn]; 
}


const Button = ({ value, updateCalc }) => { 
    const handleClickBtn = (value) => {
        updateCalc(value); 
    }

    return (
        <button onClick={() => handleClickBtn(value)}className={`${getStyleName(value)} ${styles.button}`}>{value}</button>
    )
}

export default Button