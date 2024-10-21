import { useState } from 'react';
import styles from './InputCheckbox.module.css';

const InputCheckbox = ({ id, className, label, options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]); // First option as default

    const handleChange = (value) => {
        setSelectedOption(value); // Update the selected option
    };

    return (
        <div id={id} className={`${className} ${styles.container}`}>
            <label className={`section ${styles.labelTitle}`}>{label}</label>
            {options.map((option, index) => (
                <div key={index} className={styles.option}>
                    <input
                        type='radio' // Use radio to allow only one selection
                        id={`${id}-${index}`}
                        name={id}
                        value={option}
                        checked={selectedOption === option} // Mark the selected option
                        onChange={() => handleChange(option)}
                    />
                    <label className={`section`} htmlFor={`${id}-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default InputCheckbox;
