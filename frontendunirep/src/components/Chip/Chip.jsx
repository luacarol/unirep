import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Chip.module.css';

const Chip = ({ icon, text }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={`${styles.icon}`} icon={icon} />

            <label className={`${styles.label}`}>{text}</label>
        </div>
    )
}

export default Chip;