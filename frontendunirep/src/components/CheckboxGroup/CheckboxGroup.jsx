import React from 'react';
import InputCheckBox from '../Inputs/InputCheckBox/InputCheckBox';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ className, options, labelTitle, value, onChange }) => {
    // Function to select the checkbox
    const handleSelection = (option) => {
        onChange(option); // Communicates the selected option back to the parent
    };

    // Function to select the first checkbox when the label is clicked
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
                    isChecked={value === option} // Matches the selected value from props
                    onCheck={() => handleSelection(option)} // Trigger parent onChange
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;
