import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const navigate = useNavigate();
    const ifLoggedIn = true;

    const handleTitleClick = () => {
        navigate("/");
    };

    return (
        <header className={styles.header}>
            <h1 className="subtitle" onClick={handleTitleClick}>UniRep</h1>
            <nav className={styles.nav}>
                <ul>
                    {ifLoggedIn == false && <li><a className="section" href="/login">Login</a></li>} 
                    {ifLoggedIn == false && <li><a className="section" href="/register">Cadastrar-se</a></li>} 

                    {ifLoggedIn == true && <li><a className="section" href="/"><IconButton icon={faBars} size="large"/></a></li>}
                    
                    {ifLoggedIn == true && <li><a className="section" href="/">
                        <img src="" className={styles.profile_img} />
                    </a></li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;