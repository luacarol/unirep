import { useState } from 'react';
import validator from 'validator';
import styles from './style.module.css';
import Input from '../../Input';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [selectedLabel, setSelectedLabel] = useState('registerSelected');
    const [registerAsSelectedInput, setRegisterAsSelectedInput] = useState('memberSelected');
    const [visible, setVisible] = useState(true);

    // States for input values and errors
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        cpf: '',
        whatsapp: '',
        cep: ''
    });
    const [errors, setErrors] = useState({});

    const handleLoginLabel = () => {
        setSelectedLabel('loginSelected');
        navigate('/');
    };

    const handleRegisterLabel = () => {
        setSelectedLabel('registerSelected');
    };

    const handleOwnerInput = () => {
        setErrors([])
        setVisible(false);
        setTimeout(() => {
            setRegisterAsSelectedInput('ownerSelected');
            setVisible(true);
        }, 500);
    };

    const handleMemberInput = () => {
        setErrors([])
        setVisible(false);
        setTimeout(() => {
            setRegisterAsSelectedInput('memberSelected');
            setVisible(true);
        }, 500);
    };

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (registerAsSelectedInput === 'memberSelected') {
            if (validator.isEmpty(formData.name)) {
                errors.name = 'Nome é obrigatório';
                isValid = false;
            }
            if (!validator.isInt(formData.age, { min: 1 })) {
                errors.age = 'Idade deve ser um número válido';
                isValid = false;
            }
            if (!validator.isLength(formData.cpf, { min: 11, max: 11 }) || !validator.isNumeric(formData.cpf)) {
                errors.cpf = 'CPF deve ter 11 dígitos numéricos';
                isValid = false;
            }
            if (!validator.isMobilePhone(formData.whatsapp, 'pt-BR')) {
                errors.whatsapp = 'Número de Whatsapp inválido';
                isValid = false;
            }
        } else {
            if (validator.isEmpty(formData.name)) {
                errors.name = 'Nome é obrigatório';
                isValid = false;
            }
            if (!validator.isLength(formData.cpf, { min: 11, max: 11 }) || !validator.isNumeric(formData.cpf)) {
                errors.cpf = 'CPF deve ter 11 dígitos numéricos';
                isValid = false;
            }
            if (!validator.isMobilePhone(formData.whatsapp, 'pt-BR')) {
                errors.whatsapp = 'Número de Whatsapp inválido';
                isValid = false;
            }
            if (!validator.isLength(formData.cep, { min: 8, max: 8 }) || !validator.isNumeric(formData.cep)) {
                errors.cep = 'CEP deve ter 8 dígitos numéricos';
                isValid = false;
            }
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Proceed to the next step or navigate
            navigate('/next-step');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <div className={styles.loginOrRegister}>
                    <h2
                        className={`${styles.loginLabel} ${selectedLabel === 'loginSelected' ? styles.selectedLabel : ''} bigger-subtitle`}
                        onClick={handleLoginLabel}
                    >
                        Login
                    </h2>
                    <h2
                        className={`${selectedLabel === 'registerSelected' ? styles.selectedLabel : ''} bigger-subtitle`}
                        onClick={handleRegisterLabel}
                    >
                        Cadastrar
                    </h2>
                </div>

                <div className={styles.form}>
                    <div className={styles.registerAs}>
                        <label className={`${styles.warnLabel} text-commom`}>Quero me cadastrar como:</label>

                        <div className={styles.choice}>
                            <div className={styles.choiceItem}>
                                <input
                                    className={registerAsSelectedInput === 'ownerSelected' ? styles.inputSelected : ''}
                                    type="radio"
                                    name="group1"
                                    value="option1"
                                    checked={registerAsSelectedInput === 'ownerSelected'}
                                    onChange={handleOwnerInput}
                                />
                                <label className={`minor-subtitle`}>Dono(a) de imóvel</label>
                            </div>

                            <div className={styles.choiceItem}>
                                <input
                                    className={registerAsSelectedInput === 'memberSelected' ? styles.inputSelected : ''}
                                    type="radio"
                                    name="group1"
                                    value="option2"
                                    checked={registerAsSelectedInput === 'memberSelected'}
                                    onChange={handleMemberInput}
                                />
                                <label className={`minor-subtitle`}>Membro(a) interessado em compartilhar despesas</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.line}></div>

                    <div className={`${styles.chosenForm} scrollbar ${!visible ? styles.hidden : ''}`}>
                        {registerAsSelectedInput === 'memberSelected' ? (
                            <>
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='Nome completo'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Luana Caroliny Pedroso de Oliveira'
                                    errorMessage={errors.name}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='Idade'
                                    name='age'
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder='23'
                                    errorMessage={errors.age}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='CPF'
                                    name='cpf'
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    placeholder='42678705619'
                                    errorMessage={errors.cpf}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='Whatsapp'
                                    name='whatsapp'
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder='(12) 982173929'
                                    errorMessage={errors.whatsapp}
                                />
                            </>
                        ) : (
                            <>
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='Nome completo'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Luana Caroliny Pedroso de Oliveira'
                                    errorMessage={errors.name}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='CPF'
                                    name='cpf'
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    placeholder='42678705619'
                                    errorMessage={errors.cpf}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='Whatsapp'
                                    name='whatsapp'
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder='(12) 982173929'
                                    errorMessage={errors.whatsapp}
                                />
                                <Input
                                    className={`${styles.item}`}
                                    variant='labelInput'
                                    label='CEP do Imóvel'
                                    name='cep'
                                    value={formData.cep}
                                    onChange={handleChange}
                                    placeholder='12228005'
                                    errorMessage={errors.cep}
                                />
                            </>
                        )}
                    </div>
                </div>

                <Button id={styles.registerButton} variant='labelButton' label='Próximo' onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Register;
