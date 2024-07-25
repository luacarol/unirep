import styles from './style.module.css';
import Input from '../../Input/index';
import Button from '../../Button/index';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    const [selectedLabel, setSelectedLabel] = useState('loginSelected')

    const handleToEnterButton = () => {
        navigate('/home')
    }

    const handleLoginLabel = () => {
        setSelectedLabel('loginSelected')
    }

    const handleRegisterLabel = () => {
        setSelectedLabel('registerSelected')
    }

    return (
        <div className={styles.container}>

            <div className={styles.loginContainer}>

                <div className={styles.loginOrRegister}>

                    <h2
                        className={`${styles.loginLabel} ${selectedLabel === 'loginSelected' ? styles.selectedLabel : ''} bigger-subtitle`}
                        onClick={handleLoginLabel}>
                        Login
                    </h2>
                    <h2
                        className={`${selectedLabel === 'registerSelected' ? styles.selectedLabel : ''} bigger-subtitle`}
                        onClick={handleRegisterLabel}>
                        Cadastrar
                    </h2>

                </div>

                <label className={`${styles.warnLabel} text-commom`}>Preencha os dados corretamente</label>

                <div className={styles.form}>

                    <Input className={styles.input} variant='labelInput' label='Email' placeholder='exemplo.exemplo@gmail.com' />
                    <Input className={styles.input} variant='labelInput' label='Senha' placeholder='*************' />

                </div>

                <label className={`${styles.forgetPasswordLabel} link`}>Esqueceu a senha?</label>

                <Button id={styles.toEnterButton} variant='labelButton' label='Entrar' onClick={handleToEnterButton} />

            </div>

        </div>
    )
}

export default Login;