import Button from '../Button';
import styles from './style.module.css'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <label className={`${styles.label} minor-subtitle`}>Home</label>
                <label className={`${styles.label} minor-subtitle`}>Repúblicas</label>
                <label className={`${styles.label} minor-subtitle`}>Itens à pagar</label>
            </nav>

            <div className={styles.login}>
                <label className={`${styles.label} minor-subtitle`}>Nome do usuário</label>
                <Button variant='iconButton' icon={faRightToBracket} />
            </div>
        </header>
    )
}

export default Header;
