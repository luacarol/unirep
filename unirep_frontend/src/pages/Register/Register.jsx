import LabelButton from "../../components/Buttons/LabelButton/LabelButton";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";

const Register = () => {
    return (
        <div className={styles.register_container}>
            <h1 className="title">Register</h1>

            <div className={styles.register_content}>

                <div className={styles.inputs}>
                    <Input id="email" label="Email" type="text" />
                    <Input id="password" label="Password" type="password" />
                </div>

                <LabelButton label="Cadastrar-se" />

                <div className={styles.login_section}>
                    <a className={`label link ${styles.link}`} href="/login">Log-In</a>
                </div>

            </div>
        </div>
    )
}

export default Register;