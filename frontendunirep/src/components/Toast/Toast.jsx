import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Duração de 3 segundos para desaparecer

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            {message}
        </div>
    );
};

export default Toast;
