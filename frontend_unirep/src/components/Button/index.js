import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ id, variant, label, icon, onClick }) => {
    // Variant Types:
    // iconButton
    // navigationButton
    // labelButton

    const getLabelClass = () => {
        if (variant === 'navigationButton') return 'legend';
        if (variant === 'labelButton') return 'text-common';
        return '';
    };
    
    return (
        <button id={id} className={styles[variant]} onClick={onClick}>
            {(variant === 'navigationButton' || variant === 'labelButton') && 
                <label className={getLabelClass()}>{label}</label>}
            {variant !== 'labelButton' && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        </button>
    );
}

export default Button;
