import React, { useRef } from 'react';
import style from './InputLabel.module.css';

const InputLabel = ({ id, className, label, type, placeholder, value, name, onChange }) => {
    const inputRef = useRef(null);

    const handleLabelClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focuses the input when the label is clicked
        }
    };

    return (
        <div className={`${className} ${style.container}`}>
            <label htmlFor={id} className={style.label} onClick={handleLabelClick}>
                {label}
            </label>

            <input
                id={id}
                ref={inputRef}
                className={style.input}
                type={type}
                placeholder={placeholder}
                value={value} // Ensuring value is passed
                name={name} // Ensure the correct field is targeted
                onChange={onChange}
            />
        </div>
    );
};

export default InputLabel;
