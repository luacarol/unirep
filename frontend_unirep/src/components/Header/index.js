import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <label className={styles.label}>Home</label>
                <label className={styles.label}>Repúblicas</label>
                <label className={styles.label}>Itens à pagar</label>
            </nav>

            <div className={styles.login}>
                <label className={styles.label}>Nome do usuário</label>
                <button>Sair</button>
            </div>
        </header>
    )
}

export default Header;