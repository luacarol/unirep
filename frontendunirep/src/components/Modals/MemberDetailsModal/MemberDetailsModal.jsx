import styles from './MemberDetailsModal.module.css';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { faCaretDown, faCaretUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MemberDetailsModal = ({ selectedMember, onClose }) => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/users/${selectedMember}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setMember(data)

            } catch (error) {
                console.log("Error: ", error)
            }
        };

        fetchUser();
    }, [selectedMember]);

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

                <div className={styles.sections}>

                    <div className={styles.infoSection}>
                        <div className={styles.titleAndIcon} onClick={() => toggleSection('dadosPessoais')}>
                            <h3 className={`subtitle`} style={{ cursor: 'pointer' }}>
                                Dados Pessoais
                            </h3>
                            <FontAwesomeIcon icon={openSections.dadosPessoais ? faCaretUp : faCaretDown} />
                        </div>

                        {openSections.dadosPessoais && (
                            <div className={styles.content}>
                                <label className={`label`}>Nome Completo: <label className={`section`}>{member.full_name}</label></label>
                                <label className={`label`}>Idade: <label className={`section`}>{member.age} anos</label></label>
                                <label className={`label`}>Gênero: <label className={`section`}>{member.gender}</label></label>
                                <label className={`label`}>Curso Universitário: <label className={`section`}>{member.university_course}</label></label>
                            </div>
                        )}
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.titleAndIcon} onClick={() => toggleSection('preferenciasMoradia')}>
                            <h3 className={`subtitle`} style={{ cursor: 'pointer' }}>
                                Preferências de Moradia
                            </h3>
                            <FontAwesomeIcon icon={openSections.preferenciasMoradia ? faCaretUp : faCaretDown} />
                        </div>

                        {openSections.preferenciasMoradia && (
                            <div className={styles.content}>
                                <label className={`label`}>Tipo de moradia preferida: <label className={`section`}>{member.preferred_housing}</label></label>
                                <label className={`label`}>Fumante? <label className={`section`}>{member.smoker === true ? 'Sim': 'Não'}</label></label>
                                <label className={`label`}>Tipo de acomodação preferida: <label className={`section`}>{member.preferred_accommodation}</label></label>
                                <label className={`label`}>Aceita animais de estimação? <label className={`section`}>{member.pets_allowed === true ? 'Sim': 'Não'}</label></label>
                            </div>
                        )}
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.titleAndIcon} onClick={() => toggleSection('habitosDeVidaEConvivencia')}>
                            <h3 className={`subtitle`} style={{ cursor: 'pointer' }}>
                                Hábitos de Vida e Convivência
                            </h3>
                            <FontAwesomeIcon icon={openSections.habitosDeVidaEConvivencia ? faCaretUp : faCaretDown} />
                        </div>

                        {openSections.habitosDeVidaEConvivencia && (
                            <div className={styles.content}>
                                <label className={`label`}>Horário de estudo: <label className={`section`}>{member.study_schedules}</label></label>
                                <label className={`label`}>Nível de socialização: <label className={`section`}>{member.level_socialization}</label></label>
                                <label className={`label`}>Organização e limpeza: <label className={`section`}>{member.organization_and_cleaning}</label></label>
                                <label className={`label`}>Preferências de alimentação: <label className={`section`}>{member.feeding_preferences}</label></label>
                            </div>
                        )}
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.titleAndIcon} onClick={() => toggleSection('perfilDePersonalidade')}>
                            <h3 className={`subtitle`} style={{ cursor: 'pointer' }}>
                                Perfil de Personalidade
                            </h3>
                            <FontAwesomeIcon icon={openSections.perfilDePersonalidade ? faCaretUp : faCaretDown} />
                        </div>

                        {openSections.perfilDePersonalidade && (
                            <div className={styles.content}>
                                <label className={`label`}>Teste de personalidade ou traços predominantes: <label className={`section`}>{member.personality_test_or_predominant_traits}</label></label>
                                <label className={`label`}>Preferências por ambientes: <label className={`section`}>{member.preferences_environments}</label></label>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MemberDetailsModal;