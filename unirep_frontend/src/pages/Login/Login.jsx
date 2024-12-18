import LabelButton from "../../components/Buttons/LabelButton/LabelButton";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate(); 

    const handleLoginButton = () => {
        navigate("/"); 
    };

    return (
        <div className={styles.login_container}>
            <h1 className="title">Login</h1>

            <div className={styles.login_content}>

                <div className={styles.inputs}>
                    <Input id="email" label="Email" type="text" />
                    <Input id="password" label="Password" type="password" />
                </div>

                <LabelButton label="Entrar" onClick={handleLoginButton} />

                <div className={styles.register_section}>
                    <a className={`label link ${styles.link}`} href="/register">Cadastrar-se</a>
                </div>

            </div>
        </div>
    )
}

export default Login;