import styles from './MemberDetailsModal.module.css';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MemberDetailsModal = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose(); // Fecha o modal se o clique for no overlay
        }
    };

    const [openSections, setOpenSections] = useState({
        dadosPessoais: true,
        preferenciasMoradia: false,
        habitosDeVidaEConvivencia: false,
        perfilDePersonalidade: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className={`overlay`} onClick={handleOverlayClick}>
            <div className={styles.container}>

                <div className={`${styles.flexRow} ${styles.section}`}>
                    <h2 className={`title`}>Informações do Membro</h2>
                    <ButtonIcon id={styles.xMarkButton} icon={faXmark} onlyIcon={true} onClick={onClose} />
                </div>

                <div className={styles.infoSection}>
                    <h3 className={`subtitle`} onClick={() => toggleSection('dadosPessoais')} style={{ cursor: 'pointer' }}>
                        Dados Pessoais
                    </h3>

                    {openSections.dadosPessoais && (
                        <div className={styles.content}>
                            <label className={`label`}>Nome Completo: <label className={`section`}>Luana Caroliny Pedroso dos Anjos</label></label>
                            <label className={`label`}>Idade: <label className={`section`}>24 anos</label></label>
                            <label className={`label`}>Gênero: <label className={`section`}>Feminino</label></label>
                            <label className={`label`}>Curso Universitário: <label className={`section`}>Tecnólogo em Analise e Desenvolvimento de Sistemas</label></label>
                        </div>
                    )}
                </div>

                <div className={styles.infoSection}>
                    <h3 className={`subtitle`} onClick={() => toggleSection('preferenciasMoradia')} style={{ cursor: 'pointer' }}>
                        Preferências de Moradia
                    </h3>

                    {openSections.preferenciasMoradia && (
                        <div className={styles.content}>
                            <label className={`label`}>Tipo de moradia preferida: <label className={`section`}>Casa</label></label>
                            <label className={`label`}>Fumante?: <label className={`section`}>Não</label></label>
                            <label className={`label`}>Tipo de acomodação preferida: <label className={`section`}>Quarto individual</label></label>
                            <label className={`label`}>Aceita animais de estimação?: <label className={`section`}>Não</label></label>
                        </div>
                    )}
                </div>

                <div className={styles.infoSection}>
                    <h3 className={`subtitle`} onClick={() => toggleSection('habitosDeVidaEConvivencia')} style={{ cursor: 'pointer' }}>
                        Hábitos de Vida e Convivência
                    </h3>

                    {openSections.habitosDeVidaEConvivencia && (
                        <div className={styles.content}>
                            <label className={`label`}>Horário de estudo: <label className={`section`}>Manhã</label></label>
                            <label className={`label`}>Nível de socialização: <label className={`section`}>Gosta de interações sociais constantes</label></label>
                            <label className={`label`}>Organização e limpeza: <label className={`section`}>Muita importância</label></label>
                            <label className={`label`}>Preferências de alimentação: <label className={`section`}>Carnívoro</label></label>
                        </div>
                    )}
                </div>

                <div className={styles.infoSection}>
                    <h3 className={`subtitle`} onClick={() => toggleSection('perfilDePersonalidade')} style={{ cursor: 'pointer' }}>
                        Perfil de Personalidade
                    </h3>

                    {openSections.perfilDePersonalidade && (
                        <div className={styles.content}>
                            <label className={`label`}>Teste de personalidade ou traços predominantes: <label className={`section`}>Introvertido</label></label>
                            <label className={`label`}>Preferências por ambientes: <label className={`section`}>Calmos</label></label>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default MemberDetailsModal;