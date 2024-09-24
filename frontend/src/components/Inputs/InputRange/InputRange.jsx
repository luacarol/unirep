import React, { useState } from 'react';
import styles from './InputRange.module.css'; // Importando o CSS Module

const InputRange = ({ text, min, max, step, initialValue, onChange, isMonetary = false }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <div className={styles.rangeContainer}>
            <label className={`label`}>{text}</label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className={styles.rangeInput}
            />
            <span className={`label ${styles.spanValue}`}>
                {value} {isMonetary && <label className={styles.monetary}>(R$)</label>}
            </span>
        </div>
    );
};

export default InputRange;
