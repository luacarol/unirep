import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ variant, label, icon }) => {
    // Variant Types:
    // iconButton
    // navigationButton
    
    return (
        <button className={styles[variant]}>
            {variant === 'navigationButton' && <label className='legend'>{label}</label>}
            <FontAwesomeIcon icon={icon} className={styles.icon} />
        </button>
    );
}

export default Button;
