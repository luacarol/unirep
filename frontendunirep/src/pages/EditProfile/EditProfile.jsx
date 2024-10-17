import React, { useState } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.css';
import Layout from '../../components/Layout/Layout';
import ButtonLabelIcon from '../../components/Buttons/ButtonLabelIcon/ButtonLabelIcon';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';
import Toast from '../../components/Toast/Toast';
import InputText from '../../components/Inputs/InputText/InputText';

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

                <InputText id='full_name' label='Nome completo' value={formData.full_name} />

                <div className={styles.labelInput}>
                    <label htmlFor='age' className={`section`}>Idade</label>
                    <input id='age' value={formData.age}></input>
                </div>

                <div className={styles.labelInput}>
                    <label htmlFor='phone_number' className={`section`}>Número de Contato</label>
                    <input id='phone_number' value={formData.phone_number}></input>
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