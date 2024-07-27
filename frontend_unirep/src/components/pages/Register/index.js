import { useState, useEffect } from 'react';
import styles from './style.module.css';
import Input from '../../Input';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [selectedLabel, setSelectedLabel] = useState('registerSelected');
    const [registerAsSelectedInput, setRegisterAsSelectedInput] = useState('memberSelected');
    const [visible, setVisible] = useState(true);

    const handleLoginLabel = () => {
        setSelectedLabel('loginSelected');
        navigate('/');
    };

    const handleRegisterLabel = () => {
        setSelectedLabel('registerSelected');
    };

    const handleOwnerInput = () => {
        setVisible(false);
        setTimeout(() => {
            setRegisterAsSelectedInput('ownerSelected');
            setVisible(true);
        }, 500);
    };

    const handleMemberInput = () => {
        setVisible(false);
        setTimeout(() => {
            setRegisterAsSelectedInput('memberSelected');
            setVisible(true);
        }, 500);
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
                                <Input className={`${styles.item}`} variant='labelInput' label='Nome completo' placeholder='Luana Caroliny Pedroso de Oliveira' />
                                <Input className={`${styles.item}`} variant='labelInput' label='Idade' placeholder='23 anos' />
                                <Input className={`${styles.item}`} variant='labelInput' label='Whatsapp' placeholder='(12) 982173929' />
                                <Input className={`${styles.item}`} variant='labelInput' label='CPF' placeholder='42678705619' />
                            </>
                        ) : (
                            <>
                                <Input className={`${styles.item}`} variant='labelInput' label='Nome completo' placeholder='Luana Caroliny Pedroso de Oliveira' />
                                <Input className={`${styles.item}`} variant='labelInput' label='Whatsapp' placeholder='(12) 982173929' />
                                <Input className={`${styles.item}`} variant='labelInput' label='CEP do Imóvel' placeholder='12228005' />
                                <Input className={`${styles.item}`} variant='labelInput' label='CPF' placeholder='42678705619' />
                            </>
                        )}
                    </div>
                </div>

                <Button id={styles.registerButton} variant='labelButton' label='Cadastrar-se' />
            </div>
        </div>
    );
};

export default Register;
