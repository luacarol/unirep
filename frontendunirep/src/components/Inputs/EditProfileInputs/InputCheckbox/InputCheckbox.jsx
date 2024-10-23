import { useState, useEffect } from 'react';
import styles from './InputCheckbox.module.css';

const InputCheckbox = ({ id, className, label, options, selectedValue, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(selectedValue);

    useEffect(() => {
        setSelectedOption(selectedValue);
    }, [selectedValue]);

    const handleChange = (value) => {
        setSelectedOption(value);
        if (onChange) {
            onChange(value); // Passa o valor selecionado para o parent
        }
    };

    return (
        <div id={id} className={`${className} ${styles.container}`}>
            <label className={`section ${styles.labelTitle}`}>{label}</label>
            {options.map((option, index) => (
                <div key={index} className={styles.option}>
                    <input
                        type='radio'
                        id={`${id}-${index}`}
                        name={id}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleChange(option)}
                    />
                    <label className={`section`} htmlFor={`${id}-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default InputCheckbox;
