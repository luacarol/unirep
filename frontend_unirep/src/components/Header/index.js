import Button from '../Button';
import styles from './style.module.css'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleRepublics = () => {
        navigate('/republics')
    }

    const handleItensToPay = () => {
        
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <label className={`${styles.label} minor-subtitle`} onClick={handleHome}>Home</label>
                <label className={`${styles.label} minor-subtitle`} onClick={handleRepublics}>Repúblicas</label>
                <label className={`${styles.label} minor-subtitle`} onClick={handleItensToPay}>Itens à pagar</label>
            </nav>

            <div className={styles.login}>
                <label className={`${styles.label} minor-subtitle`}>Nome do usuário</label>
                <Button variant='iconButton' icon={faRightToBracket} />
            </div>
        </header>
    )
}

export default Header;
