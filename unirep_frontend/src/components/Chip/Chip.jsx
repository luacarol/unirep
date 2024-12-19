import styles from "./Chip.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chip = ({ icon, text, size }) => {
    return (
        <div className={`${styles.chip_container} ${styles[size]}`}>
            <FontAwesomeIcon className={styles['fontawesome-icon']} icon={icon} />
            <label className="label-light">{text}</label>
        </div>
    )
}

export default Chip;