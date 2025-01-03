import styles from "./IconButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon, size = "medium" }) => {
    // size: small, medium, large
    const sizeClass = styles[size] || styles.medium; // Define uma classe padrão caso `size` seja inválido

    return (
        <button className={`${styles.icon_button} ${sizeClass}`}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default IconButton;
