import React, { useEffect } from 'react';
import Button from '../Button';
import styles from './style.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ id, className, variant, message, onClose }) => {
    // Variant Types:
    // success
    // error
    // warning

    // Defines the label text based on the variant
    let labelText;
    switch (variant) {
        case 'success':
            labelText = 'Sucesso';
            break;
        case 'error':
            labelText = 'Erro';
            break;
        case 'warning':
            labelText = 'Aviso';
            break;
        default:
            labelText = ''; // You can set a default value if necessary
    }

    // Set a timeout to automatically close the Toast after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        // Clean up the timer if the component is unmounted before the time is up
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div id={id} className={`${styles[variant]} ${styles[className]} ${styles.container}`}>
            <div className={styles.labelTitleButton}>
                <label className={`legend`}>{labelText}</label>
                <Button
                    id={styles.buttonToast}
                    variant='iconButton'
                    icon={faXmark}
                    onClick={onClose} // Close the Toast when the button is clicked
                />
            </div>

            <label className={`smaller-text`}>{message}</label>
        </div>
    )
}

export default Toast;
