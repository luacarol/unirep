import React, { useState } from 'react';
import InputCheckBox from '../Inputs/InputCheckBox/InputCheckBox';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ className, options, labelTitle }) => {
    const [selectedOption, setSelectedOption] = useState(null); // Gerencia o estado de seleção

    // Função para selecionar apenas um checkbox
    const handleSelection = (option) => {
        setSelectedOption(option);
    };

    // Função para selecionar o primeiro checkbox
    const handleLabelClick = () => {
        if (options.length > 0) {
            handleSelection(options[0]); // Seleciona o primeiro checkbox
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
                    isChecked={selectedOption === option}
                    onCheck={() => handleSelection(option)}
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;
