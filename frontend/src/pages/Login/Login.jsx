import React from 'react';
import styles from './Login.module.css'
import logoInicial from '../../assets/images/logo-inicial.png'
import Input from '../../components/Inputs/InputLabel/InputLabel';
import InputCheckBox from '../../components/Inputs/InputCheckBox/InputCheckBox';
import { useNavigate } from 'react-router-dom';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/republics');
  }

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className={styles.container}>

      <div className={styles.firstSection}>
        <img className={styles.logoInicial} src={logoInicial} alt='Logo'></img>
      </div>

      <div className={styles.secondSection}>

        <div className={styles.titleAndSubtitle}>
          <h1 className={`loginRegisterTitle`}>LOGIN</h1>

          <h2 className={`loginRegisterSubtitle`}>Entre para a maior comunidade de membros de repúblicas do Brasil.</h2>
        </div>

        <div className={styles.inputs}>
          <Input
            id='email'
            className={styles.child}
            label='Email'
            type='text'
            placeholder='exemplo@gmail.com'
          />
          <Input
            id='password'
            className={styles.child}
            label='Senha'
            type='password'
            placeholder='**************'
          />
        </div>

        <div className={styles.additionalInputs}>
          <InputCheckBox label='Relembre de mim' />
          <label className={styles.forgetPassword}>Esqueceu a senha?</label>
        </div>

        <div className={styles.loginButtonSection}>
          <ButtonLabel className={styles.loginButton} text='Entrar' onClick={handleLogin} />
        </div>

        <div className={styles.dontHaveAccountSection}>
          <label className={styles.dontHaveAccount}>Não tem uma conta?</label>
          <label className={styles.register} onClick={handleRegister}>Cadastrar-se</label>
        </div>

      </div>

    </div>
  );
};

export default Login;