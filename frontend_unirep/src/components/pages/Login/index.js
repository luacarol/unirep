import styles from './style.module.css';
import Input from '../../Input/index';
import Button from '../../Button/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleToEnterButton = () => {
        navigate('/home')
    }

    return (
        <div className={styles.container}>

            <div className={styles.loginContainer}>
                
                <div className={styles.loginOrRegister}>

                    <h2 className={`${styles.loginLabel} bigger-subtitle`}>Login</h2>
                    <h2 className={`bigger-subtitle`}>Cadastrar</h2>

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