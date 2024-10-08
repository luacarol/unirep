import React, { useState } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.css';
import Layout from '../../components/Layout/Layout';
import userVector from '../../assets/images/user-vector.png';
import ButtonLabelIcon from '../../components/Buttons/ButtonLabelIcon/ButtonLabelIcon';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';
import InputLabel from '../../components/Inputs/InputLabel/InputLabel';
import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup';
import Toast from '../../components/Toast/Toast';

const EditProfile = () => {
    // Retrieves user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user_data')) || {};

    // State to manage the form data
    const [formData, setFormData] = useState({
        full_name: userData.full_name || '',
        age: userData.age || '',
        gender: userData.gender || '',
        university_course: userData.university_course || '',
        preferred_housing: userData.preferred_housing || '',
        preferred_accommodation: userData.preferred_accommodation || '',
        smoker: userData.smoker || false,
        pets_allowed: userData.pets_allowed || false,
        feeding_preferences: userData.feeding_preferences || '',
        study_schedules: userData.study_schedules || '',
        organization_and_cleaning: userData.organization_and_cleaning || '',
        level_socialization: userData.level_socialization || '',
        personality_test_or_predominant_traits: userData.personality_test_or_predominant_traits || '',
        preferences_environments: userData.preferences_environments || ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle checkbox change
    const handleCheckboxChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put('http://127.0.0.1:8000/api/users/users/update_me/', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });

            // console.log('Profile updated:', response.data);
            localStorage.setItem('user_data', JSON.stringify(response.data));
            showToast('Perfil atualizado com sucesso', 'success');

        } catch (err) {
            console.error('Error updating profile:', err.response);
        }
    };

    // Toast Settings Start
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
    };

    const closeToast = () => {
        setToast({ ...toast, show: false });
    };
    // End of Toast Settings

    return (
        <Layout content={
            <div className={styles.container}>
                <h1 className={`title ${styles.title}`}>Editar Perfil</h1>

                <div className={styles.imageAndSaveButton}>
                    <div className={styles.imageAndChangeButton}>
                        <div className={styles.imgUser}>
                            <img src={userVector} alt="User Vector" />
                        </div>
                        <ButtonLabelIcon icon={faUpload} text="Trocar foto" />
                    </div>
                    <ButtonLabel text="Salvar" onClick={handleSave} />
                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Dados Pessoais</h2>

                    <div className={styles.gridInputs}>
                        <InputLabel
                            label="Nome completo"
                            type="text"
                            value={formData.full_name}
                            name="full_name"
                            onChange={handleChange}
                        />
                        <InputLabel
                            label="Idade"
                            type="number"
                            value={formData.age}
                            name="age"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Gênero"
                            options={['Feminino', 'Masculino', 'Outro']}
                            value={formData.gender === 'M' ? 'Masculino' : formData.gender === 'F' ? 'Feminino' : 'Outro'}
                            name="gender"
                            onChange={(value) => {
                                // Mapeia o valor selecionado de volta para 'F', 'M', ou 'O'
                                const mappedValue = value === 'Masculino' ? 'M' : value === 'Feminino' ? 'F' : 'O';
                                handleCheckboxChange('gender', mappedValue);
                            }}
                        />

                        <CheckboxGroup
                            labelTitle="Curso Universitário"
                            options={['Ciências Exatas', 'Ciências Biológicas', 'Ciências Humanas', 'Ciências Sociais Aplicadas', 'Artes', 'Tecnológicos']}
                            value={formData.university_course}
                            name="university_course"
                            onChange={(value) => handleCheckboxChange('university_course', value)}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Preferências de Moradia</h2>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Tipo de moradia preferida"
                            options={['Casa', 'Apartamento']}
                            value={formData.preferred_housing}
                            name="preferred_housing"
                            onChange={(value) => handleCheckboxChange('preferred_housing', value)}
                        />

                        <CheckboxGroup
                            labelTitle="Tipo de acomodação preferida"
                            options={['Quarto individual', 'Quarto compartilhado']}
                            value={formData.preferred_accommodation}
                            name="preferred_accommodation"
                            onChange={(value) => handleCheckboxChange('preferred_accommodation', value)}
                        />
                    </div>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Fumante?"
                            options={['Sim', 'Não']}
                            value={formData.smoker ? 'Sim' : 'Não'}
                            name="smoker"
                            onChange={(value) => handleCheckboxChange('smoker', value === 'Sim')}
                        />

                        <CheckboxGroup
                            labelTitle="Aceita animais de estimação?"
                            options={['Sim', 'Não']}
                            value={formData.pets_allowed ? 'Sim' : 'Não'}
                            name="pets_allowed"
                            onChange={(value) => handleCheckboxChange('pets_allowed', value === 'Sim')}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Hábitos de Vida e Convivência</h2>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Horário de estudo"
                            options={['Manhã', 'Tarde', 'Noite']}
                            value={formData.study_schedules}
                            name="study_schedules"
                            onChange={(value) => handleCheckboxChange('study_schedules', value)}
                        />

                        <CheckboxGroup
                            labelTitle="Organização e limpeza"
                            options={['Muita importância', 'Mediana', 'Pouca']}
                            value={formData.organization_and_cleaning}
                            name="organization_and_cleaning"
                            onChange={(value) => handleCheckboxChange('organization_and_cleaning', value)}
                        />
                    </div>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Nível de socialização"
                            options={['Gosta de interações sociais constantes', 'Prefere mais privacidade']}
                            value={formData.level_socialization}
                            name="level_socialization"
                            onChange={(value) => handleCheckboxChange('level_socialization', value)}
                        />

                        <CheckboxGroup
                            labelTitle="Preferências de alimentação"
                            options={['Vegetariano', 'Vegano', 'Carnívoro']}
                            value={formData.feeding_preferences}
                            name="feeding_preferences"
                            onChange={(value) => handleCheckboxChange('feeding_preferences', value)}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Perfil de Personalidade</h2>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Teste de personalidade ou traços predominantes"
                            options={['Introvertido', 'Extrovertido']}
                            value={formData.personality_test_or_predominant_traits}
                            name="personality_test_or_predominant_traits"
                            onChange={(value) => handleCheckboxChange('personality_test_or_predominant_traits', value)}
                        />

                        <CheckboxGroup
                            labelTitle="Preferências por ambientes"
                            options={['Calmos', 'Agitados']}
                            value={formData.preferences_environments}
                            name="preferences_environments"
                            onChange={(value) => handleCheckboxChange('preferences_environments', value)}
                        />
                    </div>
                </div>

                <Toast
                    message={toast.message}
                    type={toast.type}
                    show={toast.show}
                    onClose={closeToast}
                />
            </div>
        } />
    );
};

export default EditProfile;