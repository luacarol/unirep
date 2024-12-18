import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login_container}>
            <h1 className="title">Login</h1>

            <div className={styles.login_content}>

                <div className={styles.inputs}>
                    <div className={styles["label-input_container"]}>
                        <label className={`section ${styles.label}`}>Email</label>
                        <input className={`section ${styles.input}`} type="text" />
                    </div>

                    <div className={styles["label-input_container"]}>
                        <label className={`section ${styles.label}`}>Password</label>
                        <input className={`section ${styles.input}`} type="password" />
                    </div>
                </div>

                <button className={styles["icon-label_button"]}><label className={`section ${styles.label}`}>Entrar</label></button>

                <div className={styles.register_section}>
                    <a className={`label link ${styles.link}`} href="/register">Cadastrar-se</a>
                </div>

            </div>
        </div>
    )
}

export default Login;