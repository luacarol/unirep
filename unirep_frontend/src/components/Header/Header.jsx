import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className="subtitle">UniRep</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><a className="section" href="/login">Login</a></li>
                    <li><a className="section" href="/register">Cadastrar-se</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;