import React from 'react';
import InputCheckBox from '../Inputs/InputCheckBox/InputCheckBox';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ className, options, labelTitle, selectedOptions, onChange }) => {
    const handleSelection = (option) => {
        if (selectedOptions.includes(option)) {
            // Remove the option if it's already selected
            onChange(selectedOptions.filter(item => item !== option));
        } else {
            // Add the option if it's not selected
            onChange([...selectedOptions, option]);
        }
    };

    const handleLabelClick = () => {
        if (options.length > 0) {
            handleSelection(options[0]); // Select the first checkbox
        }
    };

    return (
        <div className={className}>
            {labelTitle && (
                <h3 className={styles.labelTitle} onClick={handleLabelClick}>
                    {labelTitle}
                </h3>
            )}
            {options.map((option, index) => (
                <InputCheckBox
                    className={styles.inputCheckBox}
                    key={index}
                    label={option}
                    isChecked={selectedOptions.includes(option)} // Check if the option is selected
                    onCheck={() => handleSelection(option)} // Trigger parent onChange
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;
