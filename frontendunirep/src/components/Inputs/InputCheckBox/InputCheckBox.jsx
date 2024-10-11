import React, { useState } from 'react';
import style from './InputCheckBox.module.css';

const InputCheckBox = ({ id, className, label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(prev => !prev); // Alterna o estado do checkbox
    };

    return (
        <div className={`${className} ${style.container}`}>
            <div className={style.checkboxContainer}>
                <input
                    id={id}
                    className={style.input}
                    type='checkbox'
                    checked={isChecked} // Checkbox controlado pelo estado interno
                    onChange={handleCheck} // Atualiza o estado ao mudar
                />
                <label htmlFor={id} className={style.label}>
                    {label}
                </label>
            </div>
        </div>
    );
};

export default InputCheckBox;
