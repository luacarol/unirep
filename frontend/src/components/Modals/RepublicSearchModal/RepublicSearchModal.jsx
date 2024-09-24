import React from 'react';
import InputRange from '../../Inputs/InputRange/InputRange';
import style from './RepublicSearchModal.module.css';
import ButtonLabel from '../../Buttons/ButtonLabel/ButtonLabel';
import CheckboxGroup from '../../CheckboxGroup/CheckboxGroup';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const RepublicSearchModal = ({ onClose }) => {

    const handleValueChange = (value) => {
        console.log('handleValueChange:', value);
    };

    const handleNumberFfAvailableVacancies = (value) => {
        console.log('handleNumberFfAvailableVacancies:', value);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose(); // Fecha o modal se o clique for no overlay
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
                        labelTitle="Localização"
                        options={['Cidade', 'Bairro', 'Proximidade da universidade']}
                    />
                </div>

                <div className={style.section}>
                    <div className={style.flexRow}>
                        <div className={style.flexColumn}>
                            <CheckboxGroup
                                className={style.checkBoxGroup}
                                labelTitle="Tipo do Imóvel"
                                options={['Casa', 'Apartamento']}
                            />
                        </div>
                        <div className={style.flexColumn}>
                            <CheckboxGroup
                                className={style.checkBoxGroup}
                                labelTitle="Tipo de Comunidade"
                                options={['Mista', 'Feminina', 'Masculina']}
                            />
                        </div>
                        <div className={style.section}>
                            <CheckboxGroup
                                className={style.checkBoxGroup}
                                labelTitle="Regras da Casa"
                                options={['Permissão de festas', 'Animais de estimação', 'Visitantes']}
                            />
                        </div>
                    </div>
                </div>

                <div className={style.section}>
                    <InputRange
                        text="Faixa de preço"
                        min={0}
                        max={100}
                        step={1}
                        initialValue={50}
                        onChange={handleValueChange}
                        isMonetary={true}  // Exibindo o símbolo "R$"
                    />
                </div>

                <div className={style.section}>
                    <InputRange
                        text="Número de vagas disponíveis"
                        min={0}
                        max={10}
                        step={1}
                        initialValue={5}
                        onChange={handleNumberFfAvailableVacancies}
                        isMonetary={false}  // Sem o símbolo "R$"
                    />
                </div>

                <div className={`${style.section} ${style.filterButton}`}>
                    <ButtonLabel text="Filtrar" />
                </div>
            </div>
        </div>
    );
};

export default RepublicSearchModal;
