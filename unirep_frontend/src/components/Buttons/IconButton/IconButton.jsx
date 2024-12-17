import styles from "./IconButton.module.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon }) => {
    return (
        <button className={styles.icon_button}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default IconButton;