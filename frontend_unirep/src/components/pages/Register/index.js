import { useState, useCallback } from 'react';
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
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        cpf: '',
        whatsapp: '',
        cep: ''
    });
    const [errors, setErrors] = useState({});
    const [showRegisterLogin, setShowRegisterLogin] = useState(false);
    const [registerAsIsLocked, setRegisterAsIsLocked] = useState(false);
    const [registerLabelText, setRegisterLabelText] = useState('Próximo');

    const handleLoginLabel = useCallback(() => {
        setSelectedLabel('loginSelected');
        navigate('/');
    }, [navigate]);

    const handleRegisterLabel = useCallback(() => {
        setSelectedLabel('registerSelected');
    }, []);

    const handleInputChange = useCallback((e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }, []);

    const handleRegisterAsSelection = useCallback((selection) => {
        if (!registerAsIsLocked) { 
            setErrors({});
            setVisible(false);
            setTimeout(() => {
                setRegisterAsSelectedInput(selection);
                setVisible(true);
            }, 500);
        }
    }, [registerAsIsLocked]);

    const validateForm = useCallback(() => {
        const { name, age, cpf, whatsapp, cep } = formData;
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

        if (!validator.isLength(cpf, { min: 11, max: 11 }) || !validator.isNumeric(cpf)) {
            errors.cpf = 'CPF deve ter 11 dígitos numéricos';
            isValid = false;
        }

        if (!validator.isMobilePhone(whatsapp, 'pt-BR')) {
            errors.whatsapp = 'Número de Whatsapp inválido';
            isValid = false;
        }

        if (registerAsSelectedInput === 'ownerSelected') {
            if (!validator.isLength(cep, { min: 8, max: 8 }) || !validator.isNumeric(cep)) {
                errors.cep = 'CEP deve ter 8 dígitos numéricos';
                isValid = false;
            }
        }

        setErrors(errors);
        return isValid;
    }, [formData, registerAsSelectedInput]);

    const handleSubmit = useCallback(() => {
        if (validateForm()) {
            setShowRegisterLogin(true);
            setRegisterAsIsLocked(true);
            setRegisterLabelText('Cadastrar-se');
        }
    }, [validateForm, navigate]);

    const renderFormFields = () => {
        const commonFields = (
            <>
                <Input
                    className={styles.item}
                    variant='labelInput'
                    label='Nome completo'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Luana Caroliny Pedroso de Oliveira'
                    errorMessage={errors.name}
                />
                <Input
                    className={styles.item}
                    variant='labelInput'
                    label='CPF'
                    name='cpf'
                    value={formData.cpf}
                    onChange={handleInputChange}
                    placeholder='42678705619'
                    errorMessage={errors.cpf}
                />
                <Input
                    className={styles.item}
                    variant='labelInput'
                    label='Whatsapp'
                    name='whatsapp'
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder='(12) 982173929'
                    errorMessage={errors.whatsapp}
                />
            </>
        );

        if (registerAsSelectedInput === 'memberSelected') {
            return (
                <>
                    {commonFields}
                    <Input
                        className={styles.item}
                        variant='labelInput'
                        label='Idade'
                        name='age'
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder='23'
                        errorMessage={errors.age}
                    />
                </>
            );
        }

        return (
            <>
                {commonFields}
                <Input
                    className={styles.item}
                    variant='labelInput'
                    label='CEP do Imóvel'
                    name='cep'
                    value={formData.cep}
                    onChange={handleInputChange}
                    placeholder='12228005'
                    errorMessage={errors.cep}
                />
            </>
        );
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
                    <div className={`${styles.registerAs} ${registerAsIsLocked === true ? styles.registerAsIsLockedDisabled : ''}`}>
                        <label className={`${styles.warnLabel} text-commom`}>Quero me cadastrar como:</label>

                        <div className={styles.choice}>
                            <div className={styles.choiceItem}>
                                <input
                                    className={registerAsSelectedInput === 'ownerSelected' ? styles.inputSelected : ''}
                                    type="radio"
                                    name="group1"
                                    value="option1"
                                    checked={registerAsSelectedInput === 'ownerSelected'}
                                    onChange={() => handleRegisterAsSelection('ownerSelected')}
                                    disabled={registerAsIsLocked}
                                />
                                <label className='minor-subtitle'>Dono(a) de imóvel</label>
                            </div>

                            <div className={styles.choiceItem}>
                                <input
                                    className={registerAsSelectedInput === 'memberSelected' ? styles.inputSelected : ''}
                                    type="radio"
                                    name="group1"
                                    value="option2"
                                    checked={registerAsSelectedInput === 'memberSelected'}
                                    onChange={() => handleRegisterAsSelection('memberSelected')}
                                    disabled={registerAsIsLocked}
                                />
                                <label className='minor-subtitle'>Membro(a) interessado em compartilhar despesas</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.line}></div>

                    <div className={`${styles.chosenForm} scrollbar ${!visible ? styles.hidden : ''}`}>

                        {showRegisterLogin === true ?
                            <>
                                <Input
                                    className={styles.item}
                                    variant='labelInput'
                                    label='E-mail'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder='luanacaroliny07@gmail.com'
                                    errorMessage={errors.email}
                                />
                                <Input
                                    className={styles.item}
                                    variant='labelInput'
                                    label='Senha'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder='*************'
                                    errorMessage={errors.password}
                                />
                            </>
                            : (
                                renderFormFields()
                            )}

                    </div>
                </div>

                <Button id={styles.registerButton} variant='labelButton' label={registerLabelText} onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Register;
