import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
    return (
        <button className={styles.iconButton}>
            <FontAwesomeIcon icon={faRightToBracket} className={styles.icon} />
        </button>
    )
}

export default Button;