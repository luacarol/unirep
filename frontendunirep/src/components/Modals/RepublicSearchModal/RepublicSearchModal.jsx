import React, { useState } from 'react';
import InputRange from '../../Inputs/InputRange/InputRange';
import style from './RepublicSearchModal.module.css';
import ButtonLabel from '../../Buttons/ButtonLabel/ButtonLabel';
import CheckboxGroup from '../../CheckboxGroup/CheckboxGroup';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const RepublicSearchModal = ({ onClose, onFilter }) => {
    const [housingType, setHousingType] = useState([]);
    const [communityType, setCommunityType] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [vacancies, setVacancies] = useState([0, 10]);

    const handleFilterClick = () => {
        // Passing filters to the parent component
        onFilter({
            housingType,
            communityType,
            priceRange,
            vacancies
        });
        onClose(); // Close the modal after applying filters
    };

    const handleOverlayClick = (e) => {
        if (e.target.className.includes('overlay')) {
            onClose();
        }
    };

    return (
        <div className={`overlay`} onClick={handleOverlayClick}>
            <div className={style.container}>
                <div className={`${style.flexRow} ${style.section}`}>
                    <h2 className={`title`}>Filtrar Repúblicas</h2>
                    <ButtonIcon className={style.xMarkButton} icon={faXmark} onlyIcon={true} onClick={onClose} />
                </div>

                <div className={style.section}>
                    <CheckboxGroup
                        className={style.checkBoxGroup}
                        labelTitle="Tipo do Imóvel"
                        options={['Casa', 'Apartamento']}
                        selectedOptions={housingType}
                        onChange={setHousingType} // Updates the status of property types
                    />
                </div>

                <div className={style.section}>
                    <CheckboxGroup
                        className={style.checkBoxGroup}
                        labelTitle="Tipo de Comunidade"
                        options={['Mista', 'Feminina', 'Masculina']}
                        selectedOptions={communityType}
                        onChange={setCommunityType} // Updates the state of community types
                    />
                </div>

                <div className={style.section}>
                    <InputRange
                        text="Faixa de preço"
                        min={0}
                        max={100}
                        step={1}
                        initialValue={priceRange[0]}
                        onChange={setPriceRange} // Update the price range
                        isMonetary={true} 
                    />
                </div>

                <div className={style.section}>
                    <InputRange
                        text="Número de vagas disponíveis"
                        min={0}
                        max={10}
                        step={1}
                        initialValue={vacancies[0]}
                        onChange={setVacancies} // Update the number of vacancies
                        isMonetary={false} 
                    />
                </div>

                <div className={`${style.section} ${style.filterButton}`}>
                    <ButtonLabel text="Filtrar" onClick={handleFilterClick} />
                </div>
            </div>
        </div>
    );
};

export default RepublicSearchModal;
