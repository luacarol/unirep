import React from 'react';
import styles from './Loading.module.css';
import loadingGif from '../../assets/gifs/loading.gif';

const Loading = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <img className={`${styles.loadingGif}`} src={loadingGif} alt="Loading..." />
                <p className={`${styles.text} title`}>Carregando...</p>
            </div>
        </div>
    );
}

export default Loading;
