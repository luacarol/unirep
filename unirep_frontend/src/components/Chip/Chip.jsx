import styles from "./Chip.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chip = ({ icon, text }) => {
    return (
        <div className={styles.chip_container}>
            <FontAwesomeIcon className={styles['fontawesome-icon']} icon={icon} />
            <label className="label-light">{text}</label>
        </div>
    )
}

export default Chip;