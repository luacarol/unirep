import React, { useRef } from 'react';
import style from './InputLabel.module.css';

const InputLabel = ({ id, className, label, type, placeholder }) => {
    const inputRef = useRef(null);

    const handleLabelClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Foca o input quando o label é clicado
        }
    };

    return (
        <div className={`${className} ${style.container}`}>
            <label htmlFor={id} className={style.label} onClick={handleLabelClick}>
                {label}
            </label>

            <input
                id={id}
                ref={inputRef} // Referência para o input
                className={style.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputLabel;
