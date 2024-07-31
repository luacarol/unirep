import styles from './style.module.css';
import profileImgDefault from '../../../assets/images/profile.svg';
import Layout from '../../Layout';
import Button from '../../Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Input';
import { useRef, useState, useCallback } from 'react';
import validator from 'validator';
import Toast from '../../Toast';

const EditProfile = () => {
    const [profileImg, setProfileImg] = useState(profileImgDefault);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        whatsapp: '',
        course: '',
        hobbie: '',
        dislike: ''
    });
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [messageToast, setMessageToast] = useState('');

    const handleEditProfileImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validateForm = useCallback(() => {
        const { name, age, email, whatsapp, course, hobbie, dislike } = formData;
        let isValid = true;
        let errors = {};

        if (validator.isEmpty(name)) {
            errors.name = 'Nome é obrigatório';
            isValid = false;
        }

        if (!validator.isInt(age, { min: 1 })) {
            errors.age = 'Idade deve ser um número válido';
            isValid = false;
        }

        if (!validator.isEmail(email)) {
            errors.email = 'E-mail inválido';
            isValid = false;
        }

        if (!validator.isMobilePhone(whatsapp, 'pt-BR')) {
            errors.whatsapp = 'Número de Whatsapp inválido';
            isValid = false;
        }

        if (validator.isEmpty(course)) {
            errors.course = 'Curso é obrigatório';
            isValid = false;
        }

        if (validator.isEmpty(hobbie)) {
            errors.hobbie = 'Hobbie é obrigatório';
            isValid = false;
        }

        if (validator.isEmpty(dislike)) {
            errors.dislike = 'Campo "Eu não gosto de..." é obrigatório';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }, [formData]);

    const handleSubmit = () => {
        if (validateForm()) {
            // Lógica de submissão final
            console.log("Dados do formulário: ", formData);
            setMessageToast("Edição realizada com sucesso!");
            setShowToast(true);
        }
    };

    const handleCloseToast = () => {
        setShowToast(false);
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className='title'>Editar Perfil</h1>

                <div className={styles.userEditImg}>
                    <div className={styles.profileImg}>
                        <img src={profileImg} alt='Profile' />
                    </div>
                    <input
                        type='file'
                        accept='image/*'
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleEditProfileImg}
                    />
                    <Button
                        id={styles.editButton}
                        variant='variant'
                        icon={faPen}
                        onClick={() => fileInputRef.current.click()}
                    />
                </div>

                <div className={styles.form}>
                    <div className={styles.nameAge}>
                        <Input
                            variant='labelInput'
                            label='Nome'
                            name='name'
                            placeholder='Nome do usuário'
                            value={formData.name}
                            onChange={handleInputChange}
                            errorMessage={errors.name}
                        />
                        <Input
                            variant='labelInput'
                            label='Idade'
                            name='age'
                            placeholder='19 anos'
                            value={formData.age}
                            onChange={handleInputChange}
                            errorMessage={errors.age}
                        />
                    </div>

                    <div className={styles.emailWhats}>
                        <Input
                            variant='labelInput'
                            label='E-mail'
                            name='email'
                            placeholder='luanacaroliny07@gmail.com'
                            value={formData.email}
                            onChange={handleInputChange}
                            errorMessage={errors.email}
                        />
                        <Input
                            variant='labelInput'
                            label='Whatsapp'
                            name='whatsapp'
                            placeholder='12 982173929'
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            errorMessage={errors.whatsapp}
                        />
                    </div>

                    <div className={styles.courseHobbie}>
                        <Input
                            variant='labelInput'
                            label='Qual curso você está cursando?'
                            name='course'
                            placeholder='Analise e Desenvolvimento de Sistemas'
                            value={formData.course}
                            onChange={handleInputChange}
                            errorMessage={errors.course}
                        />
                        <Input
                            variant='labelInput'
                            label='Hobbie preferido?'
                            name='hobbie'
                            placeholder='Jogar bola'
                            value={formData.hobbie}
                            onChange={handleInputChange}
                            errorMessage={errors.hobbie}
                        />
                    </div>

                    <div className={styles.dislike}>
                        <Input
                            variant='labelInput'
                            label='Eu não gosto de...'
                            name='dislike'
                            placeholder='Barulho a noite, sentir cheiro de cigarro e desorganização.'
                            value={formData.dislike}
                            onChange={handleInputChange}
                            errorMessage={errors.dislike}
                        />
                    </div>
                </div>

                <Button
                    variant='labelButton'
                    label='Salvar'
                    onClick={handleSubmit}
                />
            </div>

            {showToast && (
                <Toast
                    variant='success'
                    message={messageToast}
                    onClose={handleCloseToast}
                />
            )}
        </Layout>
    );
}

export default EditProfile;
