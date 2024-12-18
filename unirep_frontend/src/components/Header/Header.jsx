import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate("/");
    };

    return (
        <header className={styles.header}>
            <h1 className="subtitle" onClick={handleTitleClick}>UniRep</h1>
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