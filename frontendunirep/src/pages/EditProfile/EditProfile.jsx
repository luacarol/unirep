import React, { useState } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.css';
import Layout from '../../components/Layout/Layout';
import ButtonLabelIcon from '../../components/Buttons/ButtonLabelIcon/ButtonLabelIcon';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';
import Toast from '../../components/Toast/Toast';
import InputText from '../../components/Inputs/EditProfileInputs/InputText/InputText';
import InputCheckbox from '../../components/Inputs/EditProfileInputs/InputCheckbox/InputCheckbox';

const EditProfile = () => {
    // Retrieves user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user_data')) || {};
    console.log("userData ", userData)

    // Function to convert gender letter to full description
    const getGenderDescription = (gender) => {
        if (gender === 'M') return 'Masculino';
        if (gender === 'F') return 'Feminino';
        return 'Outros';
    };

    // State to manage the form data
    const [formData, setFormData] = useState({
        full_name: userData.full_name || '',
        age: userData.age || '',
        gender: getGenderDescription(userData.gender) || '',
        phone_number: userData.phone_number || '',
        profile_image: userData.profile_image || '',
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

    const handleSmokerChange = (field, value) => {
        let updatedValue = value;

        if (field === 'smoker') {
            updatedValue = value === 'Sim'; 
        }

        setFormData((prevData) => ({
            ...prevData,
            [field]: updatedValue,
        }));
    };

    const handlePetsAllowedChange = (field, value) => {
        let updatedValue = value;

        if (field === 'pets_allowed') {
            updatedValue = value === 'Sim'; 
        }

        setFormData((prevData) => ({
            ...prevData,
            [field]: updatedValue,
        }));
    };

    return (
        <Layout content={
            <div className={styles.container}>
                <h1 className={`title ${styles.title}`}>Editar Perfil</h1>

                <div className={styles.imageAndSaveButton}>
                    <div className={styles.imageAndChangeButton}>
                        <div className={styles.imgUser}>
                            <img src={formData.profile_image} alt="User Vector" />
                        </div>
                        <ButtonLabelIcon icon={faUpload} text="Trocar foto" />
                    </div>
                    <ButtonLabel text="Salvar" onClick={handleSave} />
                </div>

                <div className={styles.inputs}>
                    <InputText id='full_name' label='Nome completo' value={formData.full_name} />

                    <InputText id='age' label='Idade' value={formData.age} />

                    <InputText id='phone_number' label='Celular' value={formData.phone_number} />

                    <InputCheckbox
                        id="university_course"
                        label="Curso Universitário"
                        options={['Ciências Exatas', 'Ciências Biológicas', 'Ciências Humanas', 'Ciências Sociais Aplicadas', 'Artes', 'Tecnológicos']}
                        selectedValue={formData.university_course}
                    />

                    <InputCheckbox
                        id="preferred_housing"
                        label="Tipo de Moradia Preferida"
                        options={['Casa', 'Apartamento']}
                        selectedValue={formData.preferred_housing}
                    />

                    <InputCheckbox
                        id="preferred_accommodation"
                        label="Tipo de Acomodação Preferida"
                        options={['Quarto individual', 'Quarto compartilhado']}
                        selectedValue={formData.preferred_accommodation}
                    />

                    <InputCheckbox
                        id="smoker"
                        label="É Fumante?"
                        options={['Sim', 'Não']}
                        selectedValue={formData.smoker ? 'Sim' : 'Não'}
                        onChange={(value) => handleSmokerChange('smoker', value)}
                    />

                    <InputCheckbox
                        id="pets_allowed"
                        label="Aceita Animais de Estimação?"
                        options={['Sim', 'Não']}
                        selectedValue={formData.pets_allowed ? 'Sim' : 'Não'}
                        onChange={(value) => handlePetsAllowedChange('pets_allowed', value)}
                    />
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