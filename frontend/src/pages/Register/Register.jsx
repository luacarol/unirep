import style from './Register.module.css';
import logoInicial from '../../assets/images/logo-inicial.png'
import Input from '../../components/Inputs/InputLabel/InputLabel';
import { useNavigate } from 'react-router-dom';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';

const Register = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <div className={style.container}>

            <div className={style.firstSection}>
                <img className={style.logoInicial} src={logoInicial} alt='Logo'></img>
            </div>

            <div className={style.secondSection}>

                <div className={style.titleAndSubtitle}>
                    <h1 className={`loginRegisterTitle`}>CADASTRO</h1>

                    <h2 className={`loginRegisterSubtitle`}>Entre para a maior comunidade de membros de repúblicas do Brasil.</h2>
                </div>

                <div className={style.inputs}>
                    <Input
                        id='username'
                        className={style.child}
                        label='Nome de Usuário'
                        type='text'
                        placeholder='Luiz Otávio'
                    />
                    <Input
                        id='email'
                        className={style.child}
                        label='Email'
                        type='text'
                        placeholder='exemplo@gmail.com'
                    />
                    <Input
                        id='password'
                        className={style.child}
                        label='Senha'
                        type='password'
                        placeholder='**************'
                    />
                </div>

                <div className={style.createAccountButtonSection}>
                    <ButtonLabel id='createAccountButton' className={style.createAccountButton} text='Criar conta' />
                </div>

                <div className={style.alreadyHaveAccountSection}>
                    <label className={style.alreadyHaveAccount}>Já tem uma conta?</label>
                    <label className={style.login} onClick={handleLogin}>Entrar</label>
                </div>

            </div>

        </div>
    )
}

export default Register;