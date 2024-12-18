import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className="subtitle">UniRep</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><a className="section" href="/">Login</a></li>
                    <li><a className="section" href="/about">Cadastrar-se</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;