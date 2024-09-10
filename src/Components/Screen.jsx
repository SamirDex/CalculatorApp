import React from 'react'
import { useRef,useEffect } from 'react';
import styles from "./Screen.module.css"; 

const Screen = ({ result }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const fitText = (element) => {
            const parent = element.parentElement;
            let fontSize = parseInt(window.getComputedStyle(element).fontSize);

            while (element.scrollWidth > parent.clientWidth && fontSize > 2) {
                fontSize -= .25;
                element.style.fontSize = `${fontSize}rem`;
            }
        };

        fitText(textRef.current);
    }, [result]);
    
 
    return (
        <div className={styles.screen}>
            <span className={styles.text} ref={textRef}>{result}</span>
        </div>
    )
}

export default Screen