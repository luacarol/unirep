import style from './style.modules.css'

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <label>Home</label>
                <label>Repúblicas</label>
                <label>Itens à pagar</label>
            </nav>

            <div className={style.login}>
                <label>Nome do usuário</label>
                <button>Sair</button>
            </div>
        </header>
    )
}

export default Header;