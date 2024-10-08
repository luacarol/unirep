import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // 3 second duration to disappear

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
