import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ id, className, variant, label, icon, onClick }) => {
    // Variant Types:
    // iconButton
    // navigationButton
    // labelButton
    
    return (
        <button id={id} className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
            {(variant === 'navigationButton' || variant === 'labelButton') && <label className='legend'>{label}</label>}
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        </button>
    );
}

export default Button;
