import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import logoInicial from '../../assets/images/logo-inicial.png';
import Input from '../../components/Inputs/InputLabel/InputLabel';
import InputCheckBox from '../../components/Inputs/InputCheckBox/InputCheckBox';
import { useNavigate } from 'react-router-dom';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';
import Toast from '../../components/Toast/Toast';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password
      });

      // Save tokens to localStorage
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      // Make a request to get user details
      const userResponse = await axios.get('http://127.0.0.1:8000/api/users/users/me/', {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
        },
      });

      // Save user data to localStorage
      localStorage.setItem('user_data', JSON.stringify(userResponse.data));

      // Redirects to the republics page
      navigate('/republics');
    } catch (error) {
      showToast('Erro ao fazer login. Verifique suas credenciais.', 'error')
    }
  };

  const handleRegister = () => {
    navigate('/register');
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
            id='username'
            className={styles.child}
            label='Username'
            type='text'
            placeholder='admin'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id='password'
            className={styles.child}
            label='Senha'
            type='password'
            placeholder='**************'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={closeToast}
      />
    </div>
  );
};

export default Login;
